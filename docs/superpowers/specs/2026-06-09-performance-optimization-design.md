# Performance Optimization — Robótica BSB Landing Page

**Data:** 2026-06-09  
**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui  
**Hospedagem:** Railway (nixpacks)  
**Abordagem:** Incremental — Fase A (quick wins) → Fase B (assets) → Fase C (infraestrutura)

---

## Contexto

A landing page atual já possui algumas boas práticas: imagens em `.webp` com `loading="lazy"`, code splitting via `manualChunks` no Vite e compilador SWC. Porém foram identificados problemas críticos que impactam o LCP e o score geral do Lighthouse:

1. `HeroImageArea.tsx` importa `next/image` em um projeto Vite — bug que quebra o build
2. YouTube iframe carrega ~500KB de scripts imediatamente, bloqueando o LCP
3. Imagens da página Institucional são importadas estaticamente todas de uma vez
4. Sem preload explícito da imagem hero
5. `font-display=swap` ausente na URL do Google Fonts
6. Servidor Railway sem compressão Brotli/Gzip configurada

---

## Fase A — Quick Wins

### A1. Corrigir `HeroImageArea.tsx`

**Problema:** `import Image from "next/image"` em projeto Vite causa erro de build.  
**Solução:** Substituir por `<img>` nativo com atributos otimizados para LCP:
- `loading="eager"` (nunca lazy para o LCP)
- `fetchpriority="high"`
- `width` e `height` explícitos para evitar CLS
- `decoding="async"`

**Arquivo:** `src/components/hero/HeroImageArea.tsx`

### A2. YouTube Facade em `HeroVideoArea.tsx`

**Problema:** O iframe do YouTube injeta ~500KB de JS na carga inicial.  
**Solução:** Componente `YouTubeFacade`:
- Estado local `isLoaded: boolean`, iniciado como `false`
- Render inicial: `<img>` da thumbnail (`https://i.ytimg.com/vi/oC9XI4Ja5IE/maxresdefault.jpg`) + botão de play sobreposto
- Ao clicar: `setIsLoaded(true)` → renderiza o iframe real com `autoplay=1`
- A thumbnail usa `loading="lazy"` pois o vídeo está abaixo do fold

**Arquivo:** `src/components/hero/HeroVideoArea.tsx`

### A3. Preload da imagem hero em `index.html`

**Problema:** O browser só descobre a imagem hero depois de parsear e executar o JS.  
**Solução:** Adicionar no `<head>`:
```html
<link rel="preload" as="image" href="/images/hero-bg.png" fetchpriority="high" />
```
A imagem hero é referenciada como `/images/hero-bg.png` em `HeroImageArea.tsx`, sugerindo que está em `public/images/`. O primeiro passo da implementação é confirmar esse caminho — há arquivos como `hero-image-real.webp` nos assets Vite que podem ser o arquivo correto. O preload e o `<img>` devem apontar para o mesmo caminho definitivo.

**Arquivo:** `index.html`

### A4. `font-display=swap` no Google Fonts

**Problema:** Sem `display=swap`, o browser pode bloquear renderização de texto enquanto carrega a fonte.  
**Solução:** Adicionar `&display=swap` na URL:
```
https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap
```
Atualizar tanto o `<link rel="preload">` quanto o `<link rel="stylesheet">`.

**Arquivo:** `index.html`

### A5. Compressão Brotli no servidor

**Problema:** Railway/nixpacks serve assets sem compressão, aumentando transferência de JS/CSS em ~70%.  
**Solução:** Adicionar servidor Express com middleware `compression` no nixpacks, ou configurar o `nixpacks.toml` para usar `serve` com suporte a Brotli. O `vite-plugin-compression` (Fase B) gera os `.br` e `.gz` no build; o servidor serve o arquivo pré-comprimido diretamente.

**Arquivo:** `nixpacks.toml` + `server.js` (novo)

---

## Fase B — Otimização de Assets

### B1. Self-host Google Fonts

**Problema:** Duas requisições externas para `fonts.googleapis.com` e `fonts.gstatic.com` adicionam latência variável.  
**Solução:**
1. Baixar arquivos `.woff2` de Fredoka (600, 700) e Inter (400, 500, 600) para `public/fonts/`
2. Criar `src/styles/fonts.css` com declarações `@font-face` apontando para `/fonts/*.woff2` com `font-display: swap`
3. Importar `fonts.css` em `src/main.tsx` ou `src/index.css`
4. Remover todas as tags de Google Fonts do `index.html` (preconnect, preload, stylesheet)

**Ferramentas:** `google-webfonts-helper` para download dos subsets corretos.

### B2. Imports dinâmicos em `Institucional.tsx`

**Problema:** 7 imagens `.webp` importadas estaticamente no topo do arquivo entram no bundle inicial.  
**Solução:** Extrair cada seção (Metodologia, Diferenciais, etc.) em componentes filhos separados em `src/components/institucional/`. Cada componente importa apenas suas próprias imagens. Os componentes são carregados com `React.lazy` + `Suspense`, então as imagens só são referenciadas quando a seção entra no viewport.

**Arquivos:** `src/pages/Institucional.tsx` → refatorar em subcomponentes em `src/components/institucional/`

### B3. `vite-plugin-compression`

**Problema:** Sem arquivos pré-comprimidos, o servidor teria que comprimir em tempo real (lento) ou não comprimir.  
**Solução:** Instalar `vite-plugin-compression` e configurar no `vite.config.ts`:
- Gerar `.gz` (gzip) e `.br` (brotli) para todos os assets > 1KB
- O servidor Express verifica `Accept-Encoding` e serve o arquivo pré-comprimido

**Arquivo:** `vite.config.ts`

---

## Fase C — Infraestrutura e Cobertura Completa

### C1. Cloudflare CDN

**Problema:** Sem CDN, todos os usuários batem diretamente no servidor Railway (datacenter único).  
**Solução:**
- Apontar DNS do domínio para Cloudflare (plano Free)
- Configurar regras de cache: assets com hash (`*.js`, `*.css`, `*.webp`) com `Cache-Control: max-age=31536000, immutable`
- HTML com `Cache-Control: no-cache` (sempre busca versão fresca)
- Edge de São Paulo reduz latência para público-alvo (Brasília/Brasil)

### C2. Responsive Images com `srcset`

**Problema:** Imagens do carrossel de diferenciais são servidas em tamanho único para todos os dispositivos.  
**Solução:** Usar `vite-imagetools` para gerar variantes 400w e 800w no build. Tags `<img>` recebem:
```html
<img srcset="img-400.webp 400w, img-800.webp 800w" sizes="(max-width: 640px) 400px, 800px" />
```
Redução de ~60% na transferência de imagens em mobile.

**Arquivos:** `src/components/institucional/*.tsx`

### C3. Bundle Analyzer

**Objetivo:** Identificar dependências que inflam o bundle desnecessariamente.  
**Solução:** Adicionar `rollup-plugin-visualizer` como devDependency. Executar `vite build --mode development` e abrir `stats.html` gerado. Ação pontual de diagnóstico, não permanente no build de produção.

### C4. Service Worker (PWA)

**Problema:** Cada visita refaz download de todos os assets.  
**Solução:** `vite-plugin-pwa` com estratégia `StaleWhileRevalidate`:
- Assets estáticos (JS, CSS, fontes, imagens): servidos do cache na segunda visita
- HTML: `NetworkFirst` para garantir conteúdo atualizado
- Manifesto mínimo (sem instalação forçada, apenas cache)

**Arquivo:** `vite.config.ts`

---

## Critérios de Sucesso

| Métrica | Antes (estimado) | Meta Fase A | Meta Fase B+C |
|---|---|---|---|
| Lighthouse Performance | < 60 | 75–85 | 90+ |
| LCP | > 4s | < 2.5s | < 1.5s |
| CLS | > 0.1 | < 0.1 | < 0.05 |
| JS transferido (gzip) | ~400KB | ~400KB | ~150KB |
| Fontes (requests externos) | 2 | 2 | 0 |

---

## Ordem de Execução

```
Fase A (quick wins, ~3h)
  ├── A1: Corrigir HeroImageArea (next/image → img)
  ├── A2: YouTube Facade
  ├── A3: Preload hero image
  ├── A4: font-display=swap
  └── A5: Servidor com compressão

→ Medir Lighthouse antes de continuar

Fase B (assets, ~4h)
  ├── B1: Self-host fonts
  ├── B2: Imports dinâmicos Institucional
  └── B3: vite-plugin-compression

→ Medir Lighthouse antes de continuar

Fase C (infraestrutura, ~3h)
  ├── C1: Cloudflare
  ├── C2: Responsive images
  ├── C3: Bundle analyzer (diagnóstico)
  └── C4: Service worker
```

---

## Dependências Novas

| Pacote | Fase | Tipo |
|---|---|---|
| `vite-plugin-compression` | B | devDependency |
| `vite-imagetools` | C | devDependency |
| `rollup-plugin-visualizer` | C | devDependency |
| `vite-plugin-pwa` | C | devDependency |
| `compression` | A5 | dependency (server) |
| `express` | A5 | dependency (server) |
