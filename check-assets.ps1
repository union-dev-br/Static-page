# Salve como check-assets.ps1 e rode em PowerShell a partir da raiz do repo.
$root = Join-Path (Get-Location) "docs\union-portfolio"
$pattern = '(?<=["''])(assets/[^"'']+)(?=["''])'   # regex para extrair paths que começam com assets/
$out = @()

Get-ChildItem -Path $root -Recurse -Filter *.html | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content -Raw -Path $file
    [regex]::Matches($content, $pattern) | ForEach-Object {
        $rel = $_.Groups[1].Value
        # Resolve relative path from the HTML file
        $joined = Join-Path (Split-Path $file) $rel
        $resolved = Resolve-Path -Path $joined -ErrorAction SilentlyContinue
        $exists = -not [string]::IsNullOrEmpty($resolved)
        $resolvedPath = if ($exists) { $resolved } else { $joined }
        $out += [PSCustomObject]@{
            source_file = $file.Replace($root + "\\", "")
            referenced = $rel
            resolved_path = $resolvedPath
            exists = $exists
        }
    }
}

# Save to CSV and show summary
$out | Sort-Object -Property referenced | Export-Csv -Path "$root\asset-check-report.csv" -NoTypeInformation -Encoding UTF8
$out | Where-Object { -not $_.exists } | Select-Object referenced, source_file, resolved_path | Format-Table -AutoSize
Write-Host "Relatório salvo em: $root\asset-check-report.csv"