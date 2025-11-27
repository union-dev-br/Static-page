# 📸 Guia de Imagens Faltantes - Recriação Necessária

## 🌐 Site Institucional (site-institucional.html)

### Pasta a criar:
```
assets/projects/flutterweb/
```

### Imagens necessárias:

#### 1. **screen_home.jpg**
- **Caminho:** `assets/projects/flutterweb/screen_home.jpg`
- **Descrição:** Screenshot da página inicial do site institucional Flutter Web
- **Dimensões recomendadas:** 1920x1080px ou 1366x768px
- **Conteúdo:** Capturar a home do site mostrando o hero, navegação e conteúdo principal

#### 2. **screen-blog.jpg**
- **Caminho:** `assets/projects/flutterweb/screen-blog.jpg`
- **Descrição:** Screenshot da página de blog
- **Dimensões recomendadas:** 1920x1080px ou 1366x768px
- **Conteúdo:** Lista de posts do blog com thumbnails e títulos

#### 3. **screen-services.jpg**
- **Caminho:** `assets/projects/flutterweb/screen-services.jpg`
- **Descrição:** Screenshot da página de serviços
- **Dimensões recomendadas:** 1920x1080px ou 1366x768px
- **Conteúdo:** Grid de serviços oferecidos com ícones e descrições

#### 4. **screen-contact.jpg**
- **Caminho:** `assets/projects/flutterweb/screen-contact.jpg`
- **Descrição:** Screenshot da página de contato
- **Dimensões recomendadas:** 1920x1080px ou 1366x768px
- **Conteúdo:** Formulário de contato e informações de contato

#### 5. **screen-accessibility.jpg**
- **Caminho:** `assets/projects/flutterweb/screen-accessibility.jpg`
- **Descrição:** Screenshot mostrando recursos de acessibilidade (V-Libras, contraste, fonte)
- **Dimensões recomendadas:** 1920x1080px ou 1366x768px
- **Conteúdo:** Interface com controles de acessibilidade visíveis

---

## 💰 Economize+ (economize.html)

### Pasta existente:
```
assets/projects/economize/
```

### Imagens necessárias:

#### 1. **screen-transactions.jpg**
- **Caminho:** `assets/projects/economize/screen-transactions.jpg`
- **Descrição:** Screenshot da tela de transações do app Economize+
- **Dimensões recomendadas:** 1080x1920px (vertical/portrait)
- **Conteúdo:** Lista de transações com filtros, categorias e valores
- **Nota:** Por enquanto usando `receitaslancadas1.jpg` como fallback

---

## 🎨 Como Capturar/Criar as Screenshots

### Para Site Institucional (Desktop):
1. Abra o site no navegador (se estiver publicado)
2. Ajuste a resolução para 1920x1080 ou 1366x768
3. Use a ferramenta de captura do Windows (Win + Shift + S)
4. Capture cada página específica
5. Salve com os nomes exatos listados acima

### Para Economize+ (Mobile):
1. Abra o app no emulador ou dispositivo físico
2. Navegue até a tela de transações
3. Use a captura de tela do dispositivo
4. Transfira a imagem para o computador
5. Salve como `screen-transactions.jpg`

---

## ✅ Status Atual

### Site Institucional:
- ✅ Logo principal (logo-unionh_512x512.jpeg)
- ✅ Logo footer (logo-unionf_512x512.jpeg)
- ✅ Preview principal (site-institucional-preview.jpg) - CORRIGIDO
- ✅ Vídeo demo (site-institucional-demo.mp4) - CORRIGIDO
- ✅ Tech icons (flutter, dart, firebase, pwa)
- ❌ screen_home.jpg - **FALTANDO**
- ❌ screen-blog.jpg - **FALTANDO**
- ❌ screen-services.jpg - **FALTANDO**
- ❌ screen-contact.jpg - **FALTANDO**
- ❌ screen-accessibility.jpg - **FALTANDO**

### Economize+:
- ✅ Logo principal (logo-unionh_512x512.jpeg)
- ✅ Logo footer (logo-unionf_512x512.jpeg)
- ✅ Preview principal (app-preview.jpg) - CORRIGIDO
- ✅ Video thumbnail (video-thumbnail.jpg)
- ✅ Tech icons (flutter, dart, firebase, sqlite)
- ✅ screen-dashboard.jpg
- ✅ screen-budgets.jpg
- ✅ screen-goals.jpg
- ✅ screen-gamification.jpg
- ✅ receitaslancadas1.jpg (usando temporariamente para transactions)
- ⚠️ screen-transactions.jpg - **FALTANDO** (tem fallback)

---

## 📝 Comandos para Criar Pasta

```powershell
# Criar pasta flutterweb
New-Item -ItemType Directory -Path "c:\projtos pessoais\Static-page\assets\projects\flutterweb" -Force
```

---

## 🔧 Correções Já Aplicadas

✅ **economize.html:**
- `app-preview-1.jpg` → `app-preview.jpg`
- `screen-transactions.jpg` → `receitaslancadas1.jpg` (temporário)

✅ **site-institucional.html:**
- `flutterweb/site-institucional-preview.jpg` → `site-institucional-preview.jpg`
- `flutterweb/site-demo.mp4` → `site-institucional-demo.mp4`
- `flutterweb/video-thumbnail.jpg` → `site-institucional-preview.jpg`

---

## 📌 Prioridade

### Alta Prioridade:
1. Criar pasta `flutterweb`
2. Adicionar screenshots do site institucional (5 imagens)

### Média Prioridade:
1. Adicionar screenshot de transações do Economize+ (já tem fallback funcionando)

---

## 🎯 Resultado Final

Após adicionar todas as imagens, ambas as páginas terão carrosséis completos e visuais profissionais mostrando todas as funcionalidades dos projetos.
