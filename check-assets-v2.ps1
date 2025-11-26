# Verificação melhorada para assets: tenta caminhos alternativos (assets/images/...)
$root = Join-Path (Get-Location) "docs\union-portfolio"
$pattern = '(?<=["''])(assets/[^"'']+)(?=["''])'
$out = @()

Get-ChildItem -Path $root -Recurse -Filter *.html | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content -Raw -Path $file -ErrorAction SilentlyContinue
    if ([string]::IsNullOrEmpty($content)) { return }
    [regex]::Matches($content, $pattern) | ForEach-Object {
        $rel = $_.Groups[1].Value
        $tries = @()
        # caminho direto relativo ao arquivo
        $joined = Join-Path (Split-Path $file) $rel
        $tries += $joined
        $exists = (Test-Path -Path $joined)

        # se não existir, tentar mapear assets/projects -> assets/images/projects
        if (-not $exists) {
            if ($rel -like 'assets/projects/*') {
                $alt = $rel -replace '^assets/projects/', 'assets/images/projects/'
                $joinedAlt = Join-Path (Split-Path $file) $alt
                $tries += $joinedAlt
                if (Test-Path -Path $joinedAlt) { $exists = $true }
            }
            # tentar assets/tech-icons -> assets/images/tech-icons
            if ($rel -like 'assets/tech-icons/*') {
                $alt2 = $rel -replace '^assets/tech-icons/', 'assets/images/tech-icons/'
                $joinedAlt2 = Join-Path (Split-Path $file) $alt2
                $tries += $joinedAlt2
                if (Test-Path -Path $joinedAlt2) { $exists = $true }
            }
            # tentar assets/images/... diretamente se o rel começa com assets/
            if ($rel -like 'assets/*' -and -not $exists) {
                $alt3 = $rel -replace '^assets/', 'assets/images/'
                $joinedAlt3 = Join-Path (Split-Path $file) $alt3
                $tries += $joinedAlt3
                if (Test-Path -Path $joinedAlt3) { $exists = $true }
            }
        }

        $out += [PSCustomObject]@{
            source_file = $file.Replace($root + "\\", "")
            referenced = $rel
            tried_paths = ($tries -join ';')
            exists = $exists
        }
    }
}

$out | Sort-Object referenced | Export-Csv -Path "$root\asset-check-report-v2.csv" -NoTypeInformation -Encoding UTF8
$out | Where-Object { -not $_.exists } | Select-Object referenced, source_file, tried_paths | Format-Table -AutoSize
Write-Host "Relatório salvo em: $root\asset-check-report-v2.csv"