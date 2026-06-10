# Performance Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Melhorar o Lighthouse Performance score de ~<60 para 90+ através de três fases incrementais: quick wins (Fase A), otimização de assets (Fase B) e infraestrutura (Fase C).

**Architecture:** Fase A corrige o bug `next/image`, substitui o YouTube iframe por facade, e adiciona preload + compressão no servidor. Fase B elimina dependência de Google Fonts externo e divide imports estáticos pesados. Fase C adiciona CDN, imagens responsivas, bundle analyzer e service worker.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS, Express (servidor), Railway/nixpacks

---

## File Structure

| Arquivo | Ação | Responsabilidade |
|---|---|---|
| `src/components/hero/HeroImageArea.tsx` | Modificar | Substituir next/image por img nativo + WebP |
| `src/components/hero/HeroVideoArea.tsx` | Modificar | YouTube facade (thumbnail + click-to-load) |
| `index.html` | Modificar | Preload hero, font-display=swap |
| `server.js` | Criar | Express com gzip para Railway |
| `nixpacks.toml` | Modificar | Apontar start para server.js |
| `package.json` | Modificar | Adicionar express, compression |
| `src/main.tsx` | Modificar | Importar fontsource em vez de Google Fonts |
| `src/index.css` | Modificar | Remover qualquer @import de Google Fonts |
| `vite.config.ts` | Modificar | Adicionar vite-plugin-compression (Fase B) |
| `src/pages/Institucional.tsx` | Modificar | Converter imports estáticos em lazy (Fase B) |
| `src/components/institucional/` | Criar | Subcomponentes com seus próprios imports |

---

## FASE A — Quick Wins

---

### Task 1: Converter hero-bg.png para WebP

A imagem hero (`public/images/hero-bg.png`) tem 1.6MB — o maior gargalo de LCP. Converter para WebP reduz para ~200–400KB.

**Files:**
- Modify: `public/images/` (adicionar `hero-bg.webp`)

- [ ] **Step 1: Instalar sharp via npx para converter a imagem**

```bash
npx sharp-cli --input public/images/hero-bg.png --output public/images/hero-bg.webp --format webp --quality 85
```

Se `sharp-cli` não estiver disponível:

```bash
npm install --save-dev sharp
node -e "require('sharp')('public/images/hero-bg.png').webp({quality:85}).toFile('public/images/hero-bg.webp', (e,i) => console.log(e||i))"
```

- [ ] **Step 2: Verificar tamanho do arquivo gerado**

```bash
ls -lh public/images/hero-bg.webp
```

Esperado: < 400KB (vs 1.6MB do PNG original)

- [ ] **Step 3: Commitar**

```bash
git add public/images/hero-bg.webp
git commit -m "perf: adicionar hero-bg.webp (versão otimizada do hero-bg.png)"
```

---

### Task 2: Corrigir HeroImageArea.tsx — next/image → img nativo

`HeroImageArea.tsx` importa `next/image` em um projeto Vite, causando erro de build. Substituir por `<picture>` nativo com fallback PNG.

**Files:**
- Modify: `src/components/hero/HeroImageArea.tsx`

- [ ] **Step 1: Reescrever o componente**

Substituir o conteúdo completo de `src/components/hero/HeroImageArea.tsx` por:

```tsx
import HeroForm from "./HeroForm";

export default function HeroImageArea() {
  return (
    <div className="relative w-full mt-8 md:mt-10 lg:mt-12">
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9] bg-[#faefd9] rounded-image flex items-center justify-center overflow-hidden border-4 border-brand-dark shadow-[10px_10px_0px_#f01600]">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/images/hero-bg.webp" type="image/webp" />
          <img
            src="/images/hero-bg.png"
            alt="Alunos da Robótica BSB"
            className="w-full h-full object-cover object-left md:object-top"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      <div className="relative w-full md:w-[450px] mx-auto z-10 px-4 md:px-0 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 -mb-32 md:-mb-44 lg:-mb-48">
        <HeroForm />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verificar que o build não quebra**

```bash
npm run build
```

Esperado: build sem erros

- [ ] **Step 3: Commitar**

```bash
git add src/components/hero/HeroImageArea.tsx
git commit -m "fix: substituir next/image por img nativo em HeroImageArea"
```

---

### Task 3: YouTube Facade em HeroVideoArea.tsx

O iframe do YouTube carrega ~500KB de JS no carregamento inicial. O facade exibe thumbnail estática e só carrega o iframe quando o usuário clica.

**Files:**
- Modify: `src/components/hero/HeroVideoArea.tsx`

- [ ] **Step 1: Reescrever o componente com facade**

Substituir o conteúdo completo de `src/components/hero/HeroVideoArea.tsx` por:

```tsx
import { useState } from "react";

const VIDEO_ID = "oC9XI4Ja5IE";

export default function HeroVideoArea() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-8 md:mt-10 lg:mt-12">
      <div className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[9/16] bg-black rounded-[2rem] overflow-hidden border-[6px] border-brand-dark shadow-[15px_15px_0px_#f01600] z-20">
        {loaded ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
            title="Robótica BSB - Condomínios"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="relative w-full h-full group cursor-pointer border-0 p-0 bg-transparent"
            aria-label="Assistir vídeo da Robótica BSB"
          >
            <img
              src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
              alt="Thumbnail do vídeo Robótica BSB Condomínios"
              className="w-full h-full object-cover"
              loading="lazy"
              width={320}
              height={568}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-200">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white ml-1" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[60%] bg-brand-yellow/20 -rotate-3 rounded-[3rem] -z-10 blur-xl md:blur-2xl" />
    </div>
  );
}
```

- [ ] **Step 2: Verificar o build**

```bash
npm run build
```

Esperado: build sem erros

- [ ] **Step 3: Commitar**

```bash
git add src/components/hero/HeroVideoArea.tsx
git commit -m "perf: substituir YouTube iframe por facade com thumbnail"
```

---

### Task 4: Preload da imagem hero + font-display=swap

Adicionar preload da imagem hero e `display=swap` nas fontes para melhorar LCP e evitar FOIT (flash of invisible text).

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Ler o index.html atual**

Abrir `index.html` e localizar as tags de fontes e `<head>`.

- [ ] **Step 2: Atualizar index.html**

Substituir o bloco do `<head>` (da linha das fontes em diante) para ficar assim:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Preload da imagem hero (LCP) -->
    <link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" fetchpriority="high" />

    <!-- Google Fonts — non-blocking com display=swap -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap">
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"></noscript>

    <title>Robótica BSB - Aulas de Robótica com LEGO para Crianças | Inscrições Abertas</title>
    <meta name="description" content="Aulas presenciais de robótica com LEGO para crianças de 4 a 12 anos. Desenvolvimento de raciocínio lógico, trabalho em equipe e criatividade. Inscrições abertas!" />
    <meta name="author" content="Robótica BSB" />
    <meta name="keywords" content="robótica, LEGO, crianças, educação, tecnologia, Brasília, aulas presenciais" />

    <meta property="og:title" content="Robótica BSB - Aulas de Robótica com LEGO para Crianças" />
    <meta property="og:description" content="Aulas presenciais de robótica com LEGO. Seu filho desenvolve raciocínio lógico, criatividade e trabalho em equipe. Vagas limitadas!" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

A mudança-chave é a adição de `&display=swap` na URL das fontes e o `<link rel="preload">` da imagem hero WebP.

- [ ] **Step 3: Verificar no browser que as fontes carregam**

```bash
npm run dev
```

Abrir `http://localhost:8080`, inspecionar Network tab, confirmar que a fonte aparece com `font-display: swap` nos estilos carregados.

- [ ] **Step 4: Commitar**

```bash
git add index.html
git commit -m "perf: preload hero WebP e font-display=swap nas Google Fonts"
```

---

### Task 5: Servidor Express com gzip para Railway

O nixpacks atual usa `npx vite preview` que não serve compressão. Substituir por um servidor Express mínimo com middleware `compression`.

**Files:**
- Create: `server.js`
- Modify: `nixpacks.toml`
- Modify: `package.json`

- [ ] **Step 1: Instalar dependências do servidor**

```bash
npm install express compression
```

- [ ] **Step 2: Criar server.js**

Criar `/server.js` na raiz do projeto:

```js
import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression({ level: 6 }));

app.use(
  express.static(path.join(__dirname, "dist"), {
    maxAge: "1y",
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

- [ ] **Step 3: Atualizar nixpacks.toml**

Substituir o conteúdo de `nixpacks.toml`:

```toml
[phases.install]
cmds = ["npm install --legacy-peer-deps"]

[phases.build]
cmds = ["npm run build"]

[start]
cmd = "node server.js"
```

- [ ] **Step 4: Testar localmente**

```bash
npm run build && node server.js
```

Abrir `http://localhost:3000`, inspecionar os headers da resposta e confirmar `Content-Encoding: gzip`.

- [ ] **Step 5: Commitar**

```bash
git add server.js nixpacks.toml package.json package-lock.json
git commit -m "perf: servidor Express com gzip para Railway (substituindo vite preview)"
```

---

## FASE B — Otimização de Assets

*Executar após medir Lighthouse da Fase A.*

---

### Task 6: Self-host Google Fonts via fontsource

Eliminar as 2 requisições externas para `fonts.googleapis.com` e `fonts.gstatic.com`.

**Files:**
- Modify: `src/main.tsx`
- Modify: `index.html`
- Modify: `package.json`

- [ ] **Step 1: Instalar fontsource**

```bash
npm install @fontsource/inter @fontsource/fredoka
```

- [ ] **Step 2: Verificar que os pesos necessários existem**

```bash
ls node_modules/@fontsource/inter/files/ | grep -E "inter-latin-(400|500|600)" | head -10
ls node_modules/@fontsource/fredoka/files/ | grep -E "fredoka-latin-(600|700)" | head -10
```

Esperado: arquivos `.woff2` listados para cada peso.

- [ ] **Step 3: Adicionar imports no main.tsx**

Abrir `src/main.tsx` e adicionar no topo (antes do import de App):

```tsx
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import App from "./App.tsx";
import "./index.css";
```

- [ ] **Step 4: Remover Google Fonts do index.html**

Em `index.html`, remover as 4 linhas de Google Fonts (preconnect, preload, link stylesheet, noscript), mantendo apenas:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Preload da imagem hero (LCP) -->
    <link rel="preload" as="image" href="/images/hero-bg.webp" type="image/webp" fetchpriority="high" />

    <title>Robótica BSB - Aulas de Robótica com LEGO para Crianças | Inscrições Abertas</title>
    <meta name="description" content="Aulas presenciais de robótica com LEGO para crianças de 4 a 12 anos. Desenvolvimento de raciocínio lógico, trabalho em equipe e criatividade. Inscrições abertas!" />
    <meta name="author" content="Robótica BSB" />
    <meta name="keywords" content="robótica, LEGO, crianças, educação, tecnologia, Brasília, aulas presenciais" />

    <meta property="og:title" content="Robótica BSB - Aulas de Robótica com LEGO para Crianças" />
    <meta property="og:description" content="Aulas presenciais de robótica com LEGO. Seu filho desenvolve raciocínio lógico, criatividade e trabalho em equipe. Vagas limitadas!" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Verificar que as fontes continuam aplicadas**

```bash
npm run dev
```

Abrir `http://localhost:8080`, inspecionar visualmente que Fredoka e Inter continuam sendo aplicadas nos títulos e textos.

- [ ] **Step 6: Verificar o build**

```bash
npm run build
```

Esperado: build sem erros, sem warnings de fontes

- [ ] **Step 7: Commitar**

```bash
git add src/main.tsx index.html package.json package-lock.json
git commit -m "perf: self-host fontes via fontsource (elimina requisições externas ao Google Fonts)"
```

---

### Task 7: vite-plugin-compression — arquivos pré-comprimidos no build

Gerar `.gz` para cada asset no build, reduzindo o trabalho do servidor em tempo real.

**Files:**
- Modify: `vite.config.ts`
- Modify: `package.json`

- [ ] **Step 1: Instalar o plugin**

```bash
npm install --save-dev vite-plugin-compression
```

- [ ] **Step 2: Atualizar vite.config.ts**

Substituir o conteúdo de `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && viteCompression({ algorithm: "gzip", threshold: 1024 }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          radix: ["@radix-ui/react-accordion", "@radix-ui/react-tooltip", "@radix-ui/react-toast"],
        },
      },
    },
  },
}));
```

- [ ] **Step 3: Atualizar server.js para servir arquivos .gz pré-comprimidos**

Substituir o conteúdo de `server.js`:

```js
import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "dist");

// Serve pre-compressed .gz files if available
app.use((req, res, next) => {
  const acceptEncoding = req.headers["accept-encoding"] || "";
  if (!acceptEncoding.includes("gzip")) return next();

  const gzPath = path.join(DIST, req.path + ".gz");
  if (fs.existsSync(gzPath)) {
    res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Vary", "Accept-Encoding");
    req.url = req.url + ".gz";
  }
  next();
});

// Fallback gzip for assets without pre-compressed versions
app.use(compression({ level: 6 }));

app.use(
  express.static(DIST, {
    maxAge: "1y",
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html") || filePath.endsWith(".html.gz")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

- [ ] **Step 4: Rodar o build e verificar arquivos .gz gerados**

```bash
npm run build && ls dist/assets/*.gz | head -5
```

Esperado: arquivos `.js.gz` e `.css.gz` na pasta `dist/assets/`

- [ ] **Step 5: Testar o servidor localmente**

```bash
node server.js
```

Abrir `http://localhost:3000`, inspecionar headers: `Content-Encoding: gzip` deve aparecer nos assets JS/CSS.

- [ ] **Step 6: Commitar**

```bash
git add vite.config.ts server.js package.json package-lock.json
git commit -m "perf: vite-plugin-compression gera assets .gz pré-comprimidos no build"
```

---

### Task 8: Imports dinâmicos em Institucional.tsx

As 7 imagens `.webp` importadas no topo do arquivo forçam todos os assets no bundle inicial. Extrair cada seção visual em subcomponentes com `React.lazy`.

**Files:**
- Create: `src/components/institucional/DiferenciaisSection.tsx`
- Modify: `src/pages/Institucional.tsx`

- [ ] **Step 1: Criar DiferenciaisSection.tsx**

Criar `src/components/institucional/DiferenciaisSection.tsx`:

```tsx
import metodologiaAulas from "@/assets/metodologia-aulas.webp";
import materiaisLegoEducation from "@/assets/materiais-lego-education.webp";
import acompanhamentoIndividualizado from "@/assets/acompanhamento-individualizado.webp";
import formacaoIntegral from "@/assets/formacao-integral.webp";
import parceriasFlexiveis from "@/assets/parcerias-flexiveis.webp";
import professoresApaixonados from "@/assets/professores-apaixonados.webp";

const IMAGENS_DIFERENCIAIS: Record<number, string> = {
  0: metodologiaAulas,
  1: materiaisLegoEducation,
  2: acompanhamentoIndividualizado,
  3: formacaoIntegral,
  4: parceriasFlexiveis,
  5: professoresApaixonados,
};

const NOMES_DIFERENCIAIS: Record<number, string> = {
  0: "Metodologia de ensino progressiva",
  1: "Materiais LEGO® Education",
  2: "Acompanhamento individualizado",
  3: "Formação integral",
  4: "Parcerias flexíveis para escolas e condomínios",
  5: "Professores apaixonados por educação",
};

interface Props {
  currentDifferential: number;
}

export default function DiferenciaisSection({ currentDifferential }: Props) {
  const src = IMAGENS_DIFERENCIAIS[currentDifferential];
  const alt = NOMES_DIFERENCIAIS[currentDifferential];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}
```

- [ ] **Step 2: Atualizar Institucional.tsx — remover imports das imagens do carrossel**

Em `src/pages/Institucional.tsx`, remover os 6 imports estáticos de imagens do topo do arquivo (linhas 6–13 aprox.):

```tsx
// Remover estas 6 linhas:
import metodologiaAulas from "@/assets/metodologia-aulas.webp";
import acompanhamentoIndividualizado from "@/assets/acompanhamento-individualizado.webp";
import formacaoIntegral from "@/assets/formacao-integral.webp";
import professoresApaixonados from "@/assets/professores-apaixonados.webp";
import parceriasFlexiveis from "@/assets/parcerias-flexiveis.webp";
import materiaisLegoEducation from "@/assets/materiais-lego-education.webp";
```

`lazy` e `Suspense` já estão importados na linha 2 do arquivo. Adicionar apenas o lazy import do novo componente após os outros `const ... = lazy(...)`:

```tsx
const DiferenciaisSection = lazy(() => import("@/components/institucional/DiferenciaisSection"));
```

- [ ] **Step 3: Substituir o bloco de ternários no JSX do carrossel**

Localizar em `Institucional.tsx` (por volta da linha 491) o bloco de ternários dentro do carrossel:

```tsx
{currentDifferential === 0 ? (
  <img src={metodologiaAulas} alt="Metodologia de ensino progressiva" className="w-full h-full object-contain" loading="lazy" decoding="async" />
) : currentDifferential === 1 ? (
  <img src={materiaisLegoEducation} alt="Materiais LEGO® Education" className="w-full h-full object-contain" loading="lazy" decoding="async" />
) : currentDifferential === 2 ? (
  <img src={acompanhamentoIndividualizado} alt="Acompanhamento individualizado" className="w-full h-full object-contain" loading="lazy" decoding="async" />
) : currentDifferential === 3 ? (
  <img src={formacaoIntegral} alt="Formação integral" className="w-full h-full object-contain" loading="lazy" decoding="async" />
) : currentDifferential === 4 ? (
  <img src={parceriasFlexiveis} alt="Parcerias flexíveis" className="w-full h-full object-contain" loading="lazy" decoding="async" />
) : (
  <img src={professoresApaixonados} alt="Professores apaixonados" className="w-full h-full object-contain" loading="lazy" decoding="async" />
)}
```

Substituir por:

```tsx
<Suspense fallback={<div className="w-full h-full bg-[#faefd9] animate-pulse rounded-xl" />}>
  <DiferenciaisSection currentDifferential={currentDifferential} />
</Suspense>
```

- [ ] **Step 4: Verificar build e funcionamento**

```bash
npm run build && node server.js
```

Abrir `http://localhost:3000`, navegar pelos diferenciais e confirmar que as imagens carregam corretamente.

- [ ] **Step 5: Commitar**

```bash
git add src/components/institucional/DiferenciaisSection.tsx src/pages/Institucional.tsx
git commit -m "perf: extrair imagens do carrossel para lazy-loaded subcomponente"
```

---

## FASE C — Infraestrutura e Cobertura Completa

*Executar após medir Lighthouse da Fase B.*

---

### Task 9: Bundle Analyzer (diagnóstico)

Identificar dependências que inflam o bundle antes das otimizações finais.

**Files:**
- Modify: `vite.config.ts` (temporariamente)
- Modify: `package.json`

- [ ] **Step 1: Instalar rollup-plugin-visualizer**

```bash
npm install --save-dev rollup-plugin-visualizer
```

- [ ] **Step 2: Adicionar temporariamente ao vite.config.ts**

Adicionar o import e o plugin:

```ts
import { visualizer } from "rollup-plugin-visualizer";

// Dentro do array plugins:
mode === "production" && visualizer({ open: true, filename: "stats.html", gzipSize: true }),
```

- [ ] **Step 3: Rodar o build e analisar**

```bash
npm run build
```

O browser abrirá automaticamente `stats.html` com o treemap. Identificar chunks > 50KB que possam ser otimizados.

- [ ] **Step 4: Remover o plugin do vite.config.ts após análise**

Remover o import e o uso do `visualizer` do `vite.config.ts`. Ele é um diagnóstico pontual, não deve ir para produção.

- [ ] **Step 5: Commitar remoção (se adicionado)**

```bash
git add vite.config.ts package.json package-lock.json
git commit -m "chore: remover rollup-plugin-visualizer (usado para análise pontual)"
```

---

### Task 10: Responsive Images com vite-imagetools

Gerar variantes de menor resolução para mobile nas imagens do carrossel.

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Modify: `src/components/institucional/DiferenciaisSection.tsx`

- [ ] **Step 1: Instalar vite-imagetools**

```bash
npm install --save-dev vite-imagetools
```

- [ ] **Step 2: Adicionar ao vite.config.ts**

```ts
import { imagetools } from "vite-imagetools";

// Dentro do array plugins:
imagetools(),
```

- [ ] **Step 3: Atualizar DiferenciaisSection.tsx para usar srcset**

Substituir os imports de imagens para gerar variantes:

```tsx
import metodologiaAulas400 from "@/assets/metodologia-aulas.webp?w=400&format=webp";
import metodologiaAulas800 from "@/assets/metodologia-aulas.webp?w=800&format=webp";
// ... repetir para cada imagem

interface ImageVariant {
  src400: string;
  src800: string;
  alt: string;
}

const IMAGENS_DIFERENCIAIS: Record<number, ImageVariant> = {
  0: { src400: metodologiaAulas400, src800: metodologiaAulas800, alt: "Metodologia de ensino progressiva" },
  // ... demais imagens
};

// No JSX:
<img
  srcSet={`${img.src400} 400w, ${img.src800} 800w`}
  sizes="(max-width: 640px) 400px, 800px"
  src={img.src800}
  alt={img.alt}
  className="w-full h-full object-contain"
  loading="lazy"
  decoding="async"
/>
```

- [ ] **Step 4: Verificar build**

```bash
npm run build
```

Esperado: build sem erros

- [ ] **Step 5: Commitar**

```bash
git add src/components/institucional/DiferenciaisSection.tsx vite.config.ts package.json package-lock.json
git commit -m "perf: responsive images com srcset via vite-imagetools"
```

---

### Task 11: Service Worker (cache offline)

Adicionar service worker para cache de assets na segunda visita.

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`

- [ ] **Step 1: Instalar vite-plugin-pwa**

```bash
npm install --save-dev vite-plugin-pwa
```

- [ ] **Step 2: Adicionar ao vite.config.ts**

```ts
import { VitePWA } from "vite-plugin-pwa";

// Dentro do array plugins:
mode === "production" && VitePWA({
  registerType: "autoUpdate",
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,webp,woff2}"],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/i\.ytimg\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "youtube-thumbnails",
          expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
      },
    ],
  },
  manifest: {
    name: "Robótica BSB",
    short_name: "Robótica BSB",
    theme_color: "#ffd900",
    background_color: "#ffffff",
    display: "browser",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  },
}),
```

- [ ] **Step 3: Verificar build**

```bash
npm run build && ls dist/sw.js
```

Esperado: arquivo `sw.js` gerado em `dist/`

- [ ] **Step 4: Testar no browser**

```bash
node server.js
```

Abrir `http://localhost:3000`, ir em DevTools > Application > Service Workers e confirmar que o SW está registrado.

- [ ] **Step 5: Commitar**

```bash
git add vite.config.ts package.json package-lock.json
git commit -m "perf: service worker PWA para cache offline de assets"
```

---

### Task 12: Cloudflare CDN (configuração de domínio)

Esta task é de infraestrutura — não requer mudanças de código. Registrar o domínio no Cloudflare e configurar regras de cache.

- [ ] **Step 1: Acessar o dashboard do Cloudflare**

Entrar em `dash.cloudflare.com` e adicionar o domínio do site.

- [ ] **Step 2: Atualizar nameservers no registrador de domínio**

Apontar os nameservers para os fornecidos pelo Cloudflare.

- [ ] **Step 3: Configurar Page Rules de cache**

No Cloudflare, criar duas Page Rules:
1. `*seudominio.com/assets/*` → Cache Level: Cache Everything, Edge TTL: 1 month
2. `*seudominio.com/images/*` → Cache Level: Cache Everything, Edge TTL: 1 month

- [ ] **Step 4: Verificar propagação**

```bash
curl -I https://seudominio.com/assets/ | grep -i "cf-cache-status"
```

Esperado: `CF-Cache-Status: HIT` após primeira requisição

---

## Checklist de medição

Após cada fase, rodar PageSpeed Insights antes de continuar:

```
https://pagespeed.web.dev/analysis?url=<URL_DO_SITE>
```

| Fase | Quando medir |
|---|---|
| Antes de tudo | Baseline — anotar LCP, CLS, FCP, score |
| Após Fase A (Tasks 1–5) | Verificar impacto do YouTube facade + hero WebP |
| Após Fase B (Tasks 6–8) | Verificar impacto das fontes locais + compressão |
| Após Fase C (Tasks 9–12) | Score final |
