# Landing Page Robótica BSB — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar um único arquivo `index.html` autocontido (HTML + CSS + JS vanilla) que replica fielmente o design Neo-Brutalista + Comic Book do prototype React, otimizado para Meta Ads com carregamento instantâneo.

**Architecture:** Arquivo único `index.html` com `<style>` inline e `<script>` inline ao final do `<body>`. Assets (imagens, SVGs) referenciados relativamente a partir de `images/`. Zero dependências JS externas; apenas Google Fonts via `<link>`.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, media queries), JS vanilla ES2020 (async/await, fetch), Google Fonts CDN.

---

## Mapa de arquivos

| Arquivo | Responsabilidade |
|---------|-----------------|
| `index.html` | Página completa — HTML, `<style>` global, `<script>` global |
| `images/logo.svg` | Logo (renomeado de `Logo - Robótica BSB.svg`) |
| `images/Emanuel.png` | Foto do Prof. Emanuel |
| `images/sala.jpg` | Foto da unidade Asa Norte |
| `images/elementos-videos.jpg` | Thumbnail do vídeo Hero |
| `images/Foguete.svg` | Decorativo Hero |
| `images/Robo.svg` | Decorativo Hero |
| `images/gallery-1.jpg` | Galeria — renomeado de `WhatsApp Image...at 14.47.18.jpeg` |
| `images/gallery-2.jpg` | Galeria — renomeado de `WhatsApp Image...(1).jpeg` |
| `images/gallery-3.jpg` | Galeria — renomeado de `WhatsApp Image...(2).jpeg` |
| `images/gallery-4.jpg` | Galeria — renomeado de `WhatsApp Image...(3).jpeg` |

---

## Task 1: Assets + Scaffold base

**Files:**
- Create: `index.html`
- Rename: arquivos em `images/`

- [ ] **Step 1: Renomear imagens com espaços/parênteses**

```bash
cd "/home/alberani/Documentos/LP_AULAS_UNIDADE_REFATORADO/images"
cp "Logo - Robótica BSB.svg" logo.svg
cp "WhatsApp Image 2026-03-13 at 14.47.18.jpeg" gallery-1.jpg
cp "WhatsApp Image 2026-03-13 at 14.47.18 (1).jpeg" gallery-2.jpg
cp "WhatsApp Image 2026-03-13 at 14.47.18 (2).jpeg" gallery-3.jpg
cp "WhatsApp Image 2026-03-13 at 14.47.18 (3).jpeg" gallery-4.jpg
```

- [ ] **Step 2: Criar o scaffold do index.html**

Criar `/home/alberani/Documentos/LP_AULAS_UNIDADE_REFATORADO/index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Robótica BSB — Inscrições Abertas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>

    /* ── VARIABLES ──────────────────────────────────── */
    :root {
      --blue:   #01a1e1;
      --yellow: #ffd900;
      --red:    #f01600;
      --green:  #45b227;
      --bg:     #faefd9;
      --ink:    #111111;
      --cream2: #f4e6c7;
    }

    /* ── RESET ──────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    ::-webkit-scrollbar { width: 0; height: 0; }
    html, body {
      background: var(--bg);
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      color: var(--ink);
    }
    img, svg { display: block; max-width: 100%; }
    button { font-family: inherit; cursor: pointer; }
    a { text-decoration: none; }

  </style>
</head>
<body>

  <!-- sections go here -->

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // init calls go here
    });
  </script>
</body>
</html>
```

- [ ] **Step 3: Verificar scaffold**

```bash
cd "/home/alberani/Documentos/LP_AULAS_UNIDADE_REFATORADO"
python3 -m http.server 8080
```

Abrir `http://localhost:8080`. Esperado: página em branco com fundo creme `#faefd9`, sem erros no console.

- [ ] **Step 4: Commit**

```bash
cd "/home/alberani/Documentos/LP_AULAS_UNIDADE_REFATORADO"
git init
git add index.html images/logo.svg images/gallery-1.jpg images/gallery-2.jpg images/gallery-3.jpg images/gallery-4.jpg
git commit -m "feat: scaffold HTML + rename assets"
```

---

## Task 2: CSS Components (design system)

**Files:**
- Modify: `index.html` — bloco `<style>`, adicionar após o reset

- [ ] **Step 1: Adicionar CSS de componentes no `<style>` após o reset**

```css
    /* ── COMIC TITLE ────────────────────────────────── */
    .comic-title {
      font-family: 'Fredoka', system-ui, sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      -webkit-text-stroke: var(--ct-stroke, 2px) var(--ink);
      paint-order: stroke fill;
      text-align: center;
      line-height: var(--ct-lh, 1.05);
      letter-spacing: 0.005em;
      font-size: var(--ct-size, 28px);
    }
    .comic-title span { display: inline-block; }

    /* ── HARD CARD ──────────────────────────────────── */
    .hard-card {
      background: var(--card-bg, #fff);
      border: 3px solid var(--ink);
      border-radius: var(--card-radius, 22px);
      padding: var(--card-pad, 16px);
      box-shadow: 8px 8px 0 var(--shadow-color, var(--ink));
      position: relative;
    }

    /* ── TAPE ───────────────────────────────────────── */
    .tape {
      position: absolute;
      height: 22px;
      background: rgba(255, 217, 0, 0.85);
      border: 2px solid var(--ink);
      box-shadow: 2px 2px 0 var(--ink);
    }

    /* ── PILL ───────────────────────────────────────── */
    .pill {
      display: inline-block;
      background: var(--pill-bg, var(--green));
      color: var(--pill-color, #fff);
      padding: 3px 12px;
      border: 2.5px solid var(--ink);
      border-radius: 10px;
      box-shadow: 3px 3px 0 var(--ink);
      font-weight: 800;
      font-size: 14px;
      transform: rotate(var(--pill-tilt, -1.5deg));
      margin: 0 2px;
      white-space: nowrap;
    }

    /* ── BIG CTA ────────────────────────────────────── */
    .big-cta {
      display: block;
      width: 100%;
      background: var(--cta-bg, var(--green));
      border: 3.5px solid var(--ink);
      border-radius: 18px;
      padding: 16px 18px 14px;
      box-shadow: 8px 8px 0 var(--cta-shadow, var(--ink));
      text-align: center;
      color: #fff;
      font-family: 'Fredoka', system-ui, sans-serif;
      font-weight: 700;
      font-size: 17px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      line-height: 1.1;
      -webkit-text-stroke: 1.4px var(--ink);
      paint-order: stroke fill;
      transition: transform 90ms ease, box-shadow 90ms ease;
    }
    .big-cta:active {
      transform: translate(8px, 8px);
      box-shadow: 0 0 0 var(--cta-shadow, var(--ink));
    }
    .big-cta-sub {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 11px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      -webkit-text-stroke: 0;
      opacity: 0.95;
      margin-top: 4px;
    }

    /* ── FORM FIELDS ────────────────────────────────── */
    .field-group { display: flex; flex-direction: column; gap: 6px; }
    .field-label {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--ink);
    }
    .field-input {
      width: 100%;
      padding: 12px 14px;
      border: 2.5px solid var(--ink);
      border-radius: 12px;
      background: #fff;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: var(--ink);
      outline: none;
      box-shadow: 3px 3px 0 var(--ink);
    }

    /* ── CAROUSEL ───────────────────────────────────── */
    .carousel-wrap { overflow: hidden; }
    .carousel-track {
      display: flex;
      transition: transform 320ms cubic-bezier(.2, .8, .2, 1);
    }
    .carousel-item { flex: 0 0 100%; padding: 8px 4px; }
    .carousel-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      margin: 18px 0 22px;
    }
    .carousel-dots { display: flex; gap: 8px; }
    .carousel-dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      padding: 0;
      border: 2px solid var(--ink);
      background: #fff;
      cursor: pointer;
    }
    .carousel-dot.active { background: var(--dot-active-color, var(--blue)); }
    .nav-btn {
      width: 44px; height: 44px;
      border-radius: 50%;
      background: #fff;
      border: 2.5px solid var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
      font-size: 18px;
      font-weight: 700;
      color: var(--ink);
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ── NAV BTN (alias) ────────────────────────────── */
    .stamp {
      display: inline-block;
      border: 3px solid var(--stamp-color, var(--red));
      border-radius: 14px;
      padding: 8px 18px;
      box-shadow: 4px 4px 0 var(--stamp-color, var(--red));
      font-family: 'Fredoka', sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: var(--stamp-color, var(--red));
      text-transform: uppercase;
      letter-spacing: 0.04em;
      text-align: center;
      line-height: 1.1;
      background: #fff;
    }
```

- [ ] **Step 2: Verificar no browser**

Recarregar `http://localhost:8080`. Esperado: fundo creme, sem erros. As classes CSS existem mas ainda não há HTML visível.

---

## Task 3: JS Utilities — renderComicTitle + LEVELS

**Files:**
- Modify: `index.html` — bloco `<script>`, adicionar antes do `DOMContentLoaded`

- [ ] **Step 1: Adicionar constantes e funções utilitárias no `<script>`**

Inserir antes da linha `document.addEventListener(...)`:

```javascript
    /* ── BRAND COLORS ───────────────────────────────── */
    const COLORS = ['#01a1e1', '#ffd900', '#f01600', '#45b227'];

    /* ── LEVEL DATA ─────────────────────────────────── */
    const LEVELS = [
      {
        key: 'starter', label: 'STARTER', age: '6 a 8 anos',
        color: '#01a1e1',
        tagline: 'Primeiros passos no universo da robótica',
        skills: ['Lógica básica', 'Montagem guiada', 'Coordenação motora'],
        icon: '🚀',
      },
      {
        key: 'builder', label: 'BUILDER', age: '8 a 10 anos',
        color: '#f01600',
        tagline: 'Construção de máquinas e mecanismos',
        skills: ['Engrenagens', 'Sensores básicos', 'Pensamento lógico'],
        icon: '🔧',
      },
      {
        key: 'programmer', label: 'PROGRAMMER', age: '10 a 13 anos',
        color: '#45b227',
        tagline: 'Programa robôs e dá vida às ideias',
        skills: ['Programação por blocos', 'Algoritmos', 'Resolução de problemas'],
        icon: '💻',
      },
      {
        key: 'designer', label: 'DESIGNER', age: '13 a 16 anos',
        color: '#ffd900',
        tagline: 'Cria projetos próprios do zero',
        skills: ['Design de produto', 'IoT', 'Pensamento criativo'],
        icon: '🎨',
      },
    ];

    /* ── renderComicTitle ───────────────────────────── */
    // Transforma cada .comic-title[data-comic] injetando <span> coloridos por palavra ou char
    function renderComicTitle(el) {
      const mode = el.dataset.comic || 'byWord';
      const text = el.dataset.text || el.textContent.trim();
      el.textContent = '';

      if (mode === 'byChar') {
        let ci = 0;
        text.split('').forEach(ch => {
          if (ch === ' ') { el.appendChild(document.createTextNode(' ')); return; }
          const s = document.createElement('span');
          s.textContent = ch;
          s.style.color = COLORS[ci % 4];
          ci++;
          el.appendChild(s);
        });
      } else {
        let wi = 0;
        text.split(/(\s+)/).forEach(token => {
          if (/^\s+$/.test(token)) { el.appendChild(document.createTextNode(' ')); return; }
          const s = document.createElement('span');
          s.textContent = token;
          s.style.color = COLORS[wi % 4];
          wi++;
          el.appendChild(s);
        });
      }
    }

    /* ── initCarousel ───────────────────────────────── */
    // Inicializa carrossel em qualquer container que siga a estrutura .carousel-wrap > .carousel-track > .carousel-item
    function initCarousel(container) {
      if (!container) return;
      const track  = container.querySelector('.carousel-track');
      const items  = container.querySelectorAll('.carousel-item');
      const dots   = container.querySelectorAll('.carousel-dot');
      const prev   = container.querySelector('.carousel-prev');
      const next   = container.querySelector('.carousel-next');
      const total  = items.length;
      let current  = 0;

      function goTo(i) {
        current = ((i % total) + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
      }

      prev?.addEventListener('click', () => goTo(current - 1));
      next?.addEventListener('click', () => goTo(current + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

      let startX = 0;
      track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        if (dx > 40) goTo(current - 1);
        else if (dx < -40) goTo(current + 1);
      });

      goTo(0);
    }
```

- [ ] **Step 2: Chamar renderComicTitle para todos os elementos no DOMContentLoaded**

Dentro do `document.addEventListener('DOMContentLoaded', () => { ... })`, adicionar:

```javascript
      document.querySelectorAll('[data-comic]').forEach(renderComicTitle);
```

- [ ] **Step 3: Verificar — sem erros no console**

Recarregar `http://localhost:8080`. Console deve estar limpo. Sem visual ainda.

---

## Task 4: TopNav

**Files:**
- Modify: `index.html` — HTML do `<body>` + CSS do `<style>`

- [ ] **Step 1: Adicionar CSS do TopNav no `<style>`**

```css
    /* ── TOPNAV ─────────────────────────────────────── */
    #topnav {
      position: sticky;
      top: 0;
      z-index: 20;
      background: #fff;
      border-bottom: 2px solid var(--ink);
      padding: 10px 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .topnav-logo { width: 28px; height: 28px; object-fit: contain; }
    #topnav .comic-title {
      --ct-size: 13px;
      --ct-stroke: 1.2px;
      font-family: 'Fredoka', sans-serif;
      letter-spacing: 0.04em;
      text-align: left;
      line-height: 1;
    }
```

- [ ] **Step 2: Adicionar HTML do TopNav no `<body>` (primeiro elemento)**

```html
  <nav id="topnav">
    <img src="images/logo.svg" alt="Robótica BSB" class="topnav-logo">
    <h2 class="comic-title topnav-title" data-comic="byWord" data-text="FORMANDO A PRÓXIMA GERAÇÃO"></h2>
  </nav>
```

- [ ] **Step 3: Verificar**

Recarregar. Esperado: barra branca no topo com logo e texto "FORMANDO A PRÓXIMA GERAÇÃO" em azul/amarelo/vermelho/verde com stroke preto. Sticky ao rolar.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add TopNav + CSS components + JS utilities"
```

---

## Task 5: Hero — HTML + CSS

**Files:**
- Modify: `index.html` — adicionar seção Hero no body + CSS

- [ ] **Step 1: Adicionar CSS do Hero**

```css
    /* ── HERO ───────────────────────────────────────── */
    #hero {
      padding: 32px 22px 44px;
      background: var(--bg);
      position: relative;
      overflow: hidden;
    }
    .hero-deco {
      position: absolute;
      pointer-events: none;
      opacity: 0.18;
    }
    .hero-deco-rocket {
      right: -20px; top: 40px;
      width: 140px;
      transform: rotate(12deg);
    }
    .hero-deco-robot {
      left: -30px; bottom: 60px;
      width: 160px;
      transform: rotate(-8deg);
    }
    .hero-headline { text-align: center; margin-bottom: 22px; }
    .hero-headline .comic-title { --ct-size: 38px; --ct-stroke: 2.4px; --ct-lh: 1; }
    .hero-stamp-row { display: flex; justify-content: center; margin-bottom: 24px; }
    .hero-stamp { transform: rotate(-3deg); }
    .hero-pitch {
      text-align: center;
      font-size: 14.5px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--ink);
      margin: 0 0 32px;
      text-wrap: pretty;
    }

    /* Video frame */
    .hero-video-col { position: relative; margin-bottom: 28px; }
    .video-frame {
      position: relative;
      background: #1a1a1a;
      border: 3.5px solid var(--ink);
      border-radius: 22px;
      overflow: hidden;
      aspect-ratio: 9 / 16;
      max-width: 360px;
      margin: 0 auto;
      box-shadow: 9px 9px 0 var(--red);
      cursor: pointer;
    }
    .video-thumb {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .video-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.45);
    }
    .video-play-btn {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .video-play-circle {
      width: 78px; height: 78px;
      border-radius: 50%;
      background: var(--green);
      border: 3.5px solid var(--ink);
      box-shadow: 5px 5px 0 var(--ink);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .play-triangle {
      width: 0; height: 0;
      border-left: 24px solid #fff;
      border-top: 14px solid transparent;
      border-bottom: 14px solid transparent;
      margin-left: 6px;
    }
    .video-caption {
      position: absolute;
      bottom: 10px; left: 10px; right: 10px;
      background: #fff;
      border: 2.5px solid var(--ink);
      border-radius: 12px;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
    }
    .video-iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: none;
      display: none;
    }

    /* Hero form */
    .hero-form-col .hard-card { --shadow-color: var(--blue); --card-radius: 22px; --card-pad: 18px; }
    .form-title {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.15;
      color: var(--ink);
      text-align: center;
      margin-bottom: 14px;
    }
    #hero-form { display: flex; flex-direction: column; gap: 12px; }
    .form-fields { display: flex; flex-direction: column; gap: 12px; }
    .form-privacy {
      font-size: 11px;
      font-weight: 600;
      color: var(--ink);
      opacity: 0.7;
      text-align: center;
      margin-top: 2px;
    }
    #form-success {
      display: none;
      text-align: center;
      padding: 12px 0;
    }
    .success-emoji { font-size: 36px; }
    .success-msg {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: var(--green);
      margin-top: 6px;
    }
    #form-error {
      display: none;
      font-size: 13px;
      font-weight: 700;
      color: var(--red);
      text-align: center;
      margin-top: 8px;
      padding: 8px 12px;
      border: 2px solid var(--red);
      border-radius: 10px;
      background: #fff;
    }
```

- [ ] **Step 2: Adicionar HTML do Hero no body (após `</nav>`)**

```html
  <section id="hero">
    <!-- Decorativos SVG -->
    <img src="images/Foguete.svg" alt="" class="hero-deco hero-deco-rocket" aria-hidden="true">
    <img src="images/Robo.svg"    alt="" class="hero-deco hero-deco-robot"  aria-hidden="true">

    <!-- Título -->
    <div class="hero-headline">
      <h2 class="comic-title" data-comic="byChar" data-text="ROBÓTICA BSB"></h2>
    </div>

    <!-- Stamp Inscrições -->
    <div class="hero-stamp-row">
      <div class="stamp hero-stamp">Inscrições<br>Abertas</div>
    </div>

    <!-- Pitch -->
    <p class="hero-pitch">
      Mais do que uma aula de robótica, uma verdadeira
      <span class="pill">experiência de aprendizado</span>
      para que seu filho domine a tecnologia enquanto se diverte.
    </p>

    <!-- Vídeo -->
    <div class="hero-video-col">
      <div class="video-frame" id="video-frame">
        <img src="images/elementos-videos.jpg" alt="" class="video-thumb">
        <div class="video-overlay"></div>
        <div class="video-play-btn" id="video-play-btn">
          <div class="video-play-circle">
            <div class="play-triangle"></div>
          </div>
        </div>
        <div class="video-caption">▶ Veja como são as aulas em 30 segundos</div>
        <iframe class="video-iframe" id="video-iframe" src="" allowfullscreen></iframe>
      </div>
    </div>

    <!-- Formulário -->
    <div class="hero-form-col">
      <div class="hard-card">
        <div class="tape" style="width:92px; top:-12px; left:50%; transform:translateX(-50%) rotate(-4deg);"></div>
        <h3 class="form-title">
          Traga seu filho para uma
          <span class="pill" style="--pill-bg:var(--yellow); --pill-color:var(--ink); --pill-tilt:-2deg;">aula experimental</span>
          e veja ele se apaixonar por aprender.
        </h3>
        <form id="hero-form" novalidate>
          <div class="form-fields">
            <div class="field-group">
              <label class="field-label" for="field-nome">Nome do Responsável</label>
              <input class="field-input" type="text" id="field-nome" name="nome" placeholder="Ex: João Pedro" required>
            </div>
            <div class="field-group">
              <label class="field-label" for="field-tel">Telefone / WhatsApp</label>
              <input class="field-input" type="tel" id="field-tel" name="telefone" placeholder="(61) 99999-9999" required>
            </div>
          </div>
          <div style="margin-top:4px;">
            <button type="submit" class="big-cta" id="form-btn" style="--cta-bg:var(--green);">
              TRANSFORMAR O FUTURO DO MEU FILHO
              <div class="big-cta-sub">grátis · sem compromisso</div>
            </button>
          </div>
          <p class="form-privacy">🔒 Seus dados estão seguros. Não enviamos spam.</p>
        </form>
        <div id="form-success">
          <div class="success-emoji">🎉</div>
          <div class="success-msg">Recebemos! Vamos te chamar no WhatsApp em instantes.</div>
        </div>
        <div id="form-error">Erro ao enviar. Verifique sua conexão e tente novamente.</div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Verificar visualmente**

Recarregar. Esperado: título "ROBÓTICA BSB" colorido + stroke preto. Stamp "Inscrições Abertas" rotacionado em vermelho. Thumbnail do vídeo com botão play verde. Formulário com sombra azul e tape amarela.

---

## Task 6: Hero JS — Form submission + Video click

**Files:**
- Modify: `index.html` — bloco `<script>`, dentro do DOMContentLoaded

- [ ] **Step 1: Adicionar `initHeroForm()` no script**

Adicionar a função antes do `DOMContentLoaded`:

```javascript
    function initHeroForm() {
      const form    = document.getElementById('hero-form');
      const btn     = document.getElementById('form-btn');
      const success = document.getElementById('form-success');
      const errEl   = document.getElementById('form-error');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome     = form.elements.nome.value.trim();
        const telefone = form.elements.telefone.value.trim();
        if (!nome || !telefone) return;

        btn.textContent = 'Enviando…';
        btn.disabled    = true;
        errEl.style.display = 'none';

        try {
          const res = await fetch('https://n8nwebhook.artificialmenteia.com/webhook/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, telefone }),
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          form.style.display    = 'none';
          success.style.display = 'block';
        } catch {
          errEl.style.display = 'block';
          btn.innerHTML = 'TRANSFORMAR O FUTURO DO MEU FILHO<div class="big-cta-sub">grátis · sem compromisso</div>';
          btn.disabled  = false;
        }
      });
    }

    function initVideoClick() {
      const frame  = document.getElementById('video-frame');
      const playEl = document.getElementById('video-play-btn');
      const iframe = document.getElementById('video-iframe');

      // Ao clicar: esconde thumbnail/overlay/play e mostra iframe
      // O src do iframe será preenchido após entrega da página
      frame.addEventListener('click', () => {
        if (iframe.style.display === 'block') return;
        frame.querySelector('.video-thumb').style.display    = 'none';
        frame.querySelector('.video-overlay').style.display  = 'none';
        playEl.style.display    = 'none';
        frame.querySelector('.video-caption').style.display  = 'none';
        iframe.style.display    = 'block';
        // iframe.src = 'URL_DO_VIDEO_AQUI'; // preencher após entrega
      });
    }
```

- [ ] **Step 2: Chamar as funções no DOMContentLoaded**

```javascript
      initHeroForm();
      initVideoClick();
```

- [ ] **Step 3: Verificar form submission**

Com o servidor rodando, preencher o formulário com nome e telefone e submeter. Esperado: botão muda para "Enviando…", desabilita, e ao completar: formulário some e aparece "🎉 Recebemos! Vamos te chamar no WhatsApp em instantes." (se o webhook responder com 2xx) ou mensagem de erro em vermelho (se falhar).

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: Hero section — HTML, CSS, form webhook, video click"
```

---

## Task 7: Schedule — HTML + CSS

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar CSS do Schedule**

```css
    /* ── SCHEDULE ───────────────────────────────────── */
    #schedule {
      padding: 36px 22px 48px;
      text-align: center;
      background: var(--bg);
    }
    #schedule .comic-title { --ct-size: 28px; margin-bottom: 0; }

    /* Flipping Calendar */
    .flip-cal {
      display: flex;
      justify-content: center;
      margin: 24px 0 20px;
    }
    .flip-cal-box {
      position: relative;
      background: #fff;
      border: 2.5px solid var(--ink);
      border-radius: 12px;
      width: 64px; height: 72px;
      box-shadow: 4px 4px 0 var(--ink);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .flip-cal-header {
      background: var(--red);
      height: 16px;
      border-bottom: 2.5px solid var(--ink);
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-shrink: 0;
    }
    .flip-cal-ring {
      width: 4px; height: 9px;
      background: var(--ink);
      transform: translateY(-3px);
    }
    .flip-cal-page {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform-origin: top;
      transition: transform 280ms ease-in;
      backface-visibility: hidden;
    }
    .flip-cal-day {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 22px;
      color: var(--ink); line-height: 1;
    }
    .flip-cal-dow {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800; font-size: 9px;
      color: var(--ink); opacity: 0.7;
      letter-spacing: 0.08em; margin-top: 2px;
    }

    /* Schedule pitch */
    .schedule-pitch {
      margin: 0 0 26px;
      font-size: 14.5px;
      font-weight: 600;
      line-height: 1.5;
      color: var(--ink);
    }

    /* Schedule cards */
    .sch-card-title {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 26px;
      line-height: 1.05; color: #fff;
      text-transform: uppercase;
      -webkit-text-stroke: 1.6px var(--ink);
      paint-order: stroke fill;
      white-space: pre-line;
      margin-bottom: 12px;
    }
    .sch-card-body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700; font-size: 14px;
      line-height: 1.5; color: #fff;
      -webkit-text-stroke: 0.6px var(--ink);
      paint-order: stroke fill;
    }
    /* Desktop grid: hidden by default, shown via media query */
    .schedule-desktop { display: none; }
    .schedule-desktop-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-top: 8px;
    }
```

- [ ] **Step 2: Adicionar HTML do Schedule no body (após `</section>` do Hero)**

```html
  <section id="schedule">
    <h2 class="comic-title" data-comic="byWord" data-text="ENCONTROS QUE CABEM NA ROTINA"></h2>

    <!-- Calendário animado -->
    <div class="flip-cal">
      <div class="flip-cal-box">
        <div class="flip-cal-header">
          <div class="flip-cal-ring"></div>
          <div class="flip-cal-ring"></div>
        </div>
        <div class="flip-cal-page" id="cal-page">
          <div class="flip-cal-day" id="cal-day">12</div>
          <div class="flip-cal-dow" id="cal-dow">SEG</div>
        </div>
      </div>
    </div>

    <!-- Pitch -->
    <p class="schedule-pitch">
      Dia de semana, ou final de semana. Manhã ou Tarde.<br>
      <span class="pill" style="--pill-tilt:-1deg;">Você escolhe o melhor horário</span> que se encaixa na rotina.
    </p>

    <!-- Mobile: carousel (1 card por vez) -->
    <div class="schedule-mobile" id="schedule-carousel">
      <div class="carousel-wrap">
        <div class="carousel-track">
          <div class="carousel-item">
            <div class="hard-card" style="--card-bg:#01a1e1; --shadow-color:var(--ink); --card-radius:26px; --card-pad:28px;">
              <div class="sch-card-title">1 ENCONTRO&#10;SEMANAL</div>
              <div class="sch-card-body">Toda semana o seu filho(a) terá a oportunidade de aprender uma nova habilidade e exercitar toda a imaginação e criatividade dele!</div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="hard-card" style="--card-bg:var(--red); --shadow-color:var(--ink); --card-radius:26px; --card-pad:28px;">
              <div class="sch-card-title">90 MINUTOS&#10;DE AULA</div>
              <div class="sch-card-body">Cada encontro tem 1h30, tempo ideal para construir, programar e ainda sobrar espaço para imaginar projetos novos.</div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="hard-card" style="--card-bg:var(--green); --shadow-color:var(--ink); --card-radius:26px; --card-pad:28px;">
              <div class="sch-card-title">TURMAS POR&#10;IDADE</div>
              <div class="sch-card-body">Crianças e adolescentes agrupados por faixa etária para garantir o nível certo de desafio em cada aula.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="nav-btn carousel-prev">‹</button>
        <div class="carousel-dots">
          <button class="carousel-dot active"></button>
          <button class="carousel-dot"></button>
          <button class="carousel-dot"></button>
        </div>
        <button class="nav-btn carousel-next">›</button>
      </div>
    </div>

    <!-- Desktop: grid (3 colunas) — visível apenas em ≥900px -->
    <div class="schedule-desktop">
      <div class="schedule-desktop-grid">
        <div class="hard-card" style="--card-bg:#01a1e1; --shadow-color:var(--ink); --card-radius:26px; --card-pad:28px;">
          <div class="sch-card-title">1 ENCONTRO&#10;SEMANAL</div>
          <div class="sch-card-body">Toda semana o seu filho(a) terá a oportunidade de aprender uma nova habilidade e exercitar toda a imaginação e criatividade dele!</div>
        </div>
        <div class="hard-card" style="--card-bg:var(--red); --shadow-color:var(--ink); --card-radius:26px; --card-pad:28px;">
          <div class="sch-card-title">90 MINUTOS&#10;DE AULA</div>
          <div class="sch-card-body">Cada encontro tem 1h30, tempo ideal para construir, programar e ainda sobrar espaço para imaginar projetos novos.</div>
        </div>
        <div class="hard-card" style="--card-bg:var(--green); --shadow-color:var(--ink); --card-radius:26px; --card-pad:28px;">
          <div class="sch-card-title">TURMAS POR&#10;IDADE</div>
          <div class="sch-card-body">Crianças e adolescentes agrupados por faixa etária para garantir o nível certo de desafio em cada aula.</div>
        </div>
      </div>
    </div>

    <div style="margin-top:22px;">
      <button class="big-cta" style="--cta-bg:var(--green);">AGENDE UMA AULA EXPERIMENTAL</button>
    </div>
  </section>
```

- [ ] **Step 3: Verificar visualmente**

Recarregar. Esperado: seção Schedule com título colorido, calendário animando, 3 cards em carrossel (mobile).

---

## Task 8: Schedule JS — Calendar + Carousel

**Files:**
- Modify: `index.html` — bloco `<script>`

- [ ] **Step 1: Adicionar `initFlippingCalendar()` no script**

```javascript
    function initFlippingCalendar() {
      const dates = [
        { day: 12, dow: 'SEG' }, { day: 15, dow: 'QUI' },
        { day: 18, dow: 'SÁB' }, { day: 20, dow: 'SEG' },
        { day: 23, dow: 'QUI' }, { day: 26, dow: 'DOM' },
      ];
      let idx = 0;
      const page = document.getElementById('cal-page');
      const dayEl = document.getElementById('cal-day');
      const dowEl = document.getElementById('cal-dow');

      setInterval(() => {
        page.style.transform = 'rotateX(-90deg)';
        setTimeout(() => {
          idx = (idx + 1) % dates.length;
          dayEl.textContent = dates[idx].day;
          dowEl.textContent = dates[idx].dow;
          page.style.transform = 'rotateX(0deg)';
        }, 280);
      }, 1800);
    }
```

- [ ] **Step 2: Chamar no DOMContentLoaded**

```javascript
      initFlippingCalendar();
      initCarousel(document.getElementById('schedule-carousel'));
```

- [ ] **Step 3: Verificar**

Recarregar. Esperado: calendário alterna datas a cada 1.8s com flip. Botões ‹ e › trocam os cards. Dots ficam preenchidos conforme o card ativo.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: Schedule section — calendar animation + carousel"
```

---

## Task 9: Evolution — HTML + CSS

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar CSS do Evolution**

```css
    /* ── EVOLUTION ──────────────────────────────────── */
    #evolution {
      padding: 36px 22px 48px;
      text-align: center;
      background: var(--bg);
    }
    #evolution .comic-title { --ct-size: 24px; margin-bottom: 0; }
    .evo-sub {
      margin: 26px 0 18px;
      font-weight: 700;
      font-size: 16px;
      color: var(--ink);
    }
    .evo-badge {
      display: inline-block;
      background: var(--red); color: #fff;
      border: 3px solid var(--ink);
      border-radius: 14px;
      padding: 8px 16px;
      box-shadow: 5px 5px 0 var(--ink);
      font-weight: 800; font-size: 14px;
      letter-spacing: 0.02em;
      -webkit-text-stroke: 0.6px var(--ink);
      paint-order: stroke fill;
      margin-bottom: 8px;
    }
    .evo-hint {
      font-style: italic;
      font-size: 13px;
      color: var(--ink);
      opacity: 0.7;
      margin: 0 0 30px;
    }

    /* Staircase */
    .staircase {
      position: relative;
      width: 100%;
      height: 250px;
      background: #fff;
      border: 3px solid var(--ink);
      border-radius: 22px;
      box-shadow: 8px 8px 0 var(--ink);
      overflow: hidden;
      background-image: radial-gradient(rgba(17,17,17,0.1) 1px, transparent 1px);
      background-size: 14px 14px;
    }
    .staircase-sun {
      position: absolute;
      top: 14px; right: 18px;
      width: 44px; height: 44px;
      border-radius: 50%;
      background: var(--yellow);
      border: 2.5px solid var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
    }
    .staircase-lbl {
      position: absolute;
      top: 12px; left: 14px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700; font-size: 10px;
      color: var(--ink); opacity: 0.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .staircase-ground {
      position: absolute;
      left: 0; right: 0; bottom: 22px;
      height: 0;
      border-top: 2.5px dashed rgba(17,17,17,0.2);
    }
    .step {
      position: absolute;
      left: calc(var(--step-left) + 6px);
      width: calc(25% - 12px);
      bottom: 22px;
      height: var(--step-height);
      cursor: pointer;
    }
    .step-block {
      position: absolute;
      left: 0; right: 0; bottom: 0;
      height: 100%;
      background: var(--step-color);
      border: 3px solid var(--ink);
      border-radius: 6px 6px 0 0;
      box-shadow: inset -3px 0 0 0 rgba(0,0,0,0.15);
      transition: transform 120ms ease;
    }
    .step.active .step-block { transform: translateY(-4px); }
    .step-number {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 6px;
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 18px;
      color: #fff;
      -webkit-text-stroke: 1.2px var(--ink);
      paint-order: stroke fill;
    }
    .step-sign {
      position: absolute;
      left: 50%;
      top: -34px;
      transform: translateX(-50%) rotate(-2deg);
      transition: transform 120ms ease;
    }
    .step.active .step-sign { transform: translateX(-50%) rotate(0deg); }
    .step-sign-label {
      display: block;
      background: #fff;
      border: 2.5px solid var(--ink);
      border-radius: 10px;
      padding: 4px 8px;
      box-shadow: 3px 3px 0 var(--ink);
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 11px;
      color: var(--step-color);
      -webkit-text-stroke: 0.8px var(--ink);
      paint-order: stroke fill;
      white-space: nowrap;
      text-transform: uppercase;
    }
    .step.active .step-sign-label { box-shadow: 4px 4px 0 var(--step-color); }
    .step-peg {
      width: 2px; height: 6px;
      background: var(--ink);
      margin: 0 auto;
    }

    /* Detail card */
    #evo-detail {
      margin-top: 32px;
      text-align: left;
      --card-radius: 20px;
      --card-pad: 18px;
    }
    .evo-detail-header { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
    .evo-icon {
      width: 52px; height: 52px;
      border-radius: 14px;
      border: 2.5px solid var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      flex-shrink: 0;
    }
    .evo-label {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 22px;
      -webkit-text-stroke: 1.2px var(--ink);
      paint-order: stroke fill;
      line-height: 1;
      text-transform: uppercase;
    }
    .evo-age {
      font-weight: 700; font-size: 12px;
      color: var(--ink); opacity: 0.7;
      margin-top: 2px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .evo-tagline { font-weight: 600; font-size: 14px; line-height: 1.45; color: var(--ink); margin-bottom: 12px; }
    .evo-skills { display: flex; flex-wrap: wrap; gap: 6px; }
    .skill-tag {
      background: var(--bg);
      border: 2px solid var(--ink);
      border-radius: 8px;
      padding: 4px 10px;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--ink);
    }

    /* Founder card */
    .founder-card { margin-top: 40px; }
    .founder-avatar {
      width: 70px; height: 70px;
      border-radius: 50%;
      border: 3px solid var(--ink);
      margin: 0 auto 10px;
      overflow: hidden;
    }
    .founder-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .founder-name {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 20px;
      color: var(--ink);
    }
    .founder-role {
      font-weight: 800; font-size: 11px;
      letter-spacing: 0.1em;
      color: var(--ink); opacity: 0.7;
      text-transform: uppercase;
      margin-top: 2px;
    }
```

- [ ] **Step 2: Adicionar HTML do Evolution no body**

```html
  <section id="evolution">
    <h2 class="comic-title" data-comic="byWord" data-text="EVOLUÇÃO PENSADA NO FUTURO DA NOVA GERAÇÃO"></h2>

    <p class="evo-sub">A nossa metodologia de ensino é composta por</p>
    <div><div class="evo-badge">4 níveis de aprendizado</div></div>
    <p class="evo-hint">(Toque em um degrau para ver os detalhes)</p>

    <!-- Staircase -->
    <div class="staircase">
      <div class="staircase-sun"></div>
      <div class="staircase-lbl">NÍVEL ↑</div>
      <div class="staircase-ground"></div>

      <div class="step" data-key="starter" style="--step-color:#01a1e1; --step-left:0%; --step-height:68px;">
        <div class="step-block"></div>
        <div class="step-number">1</div>
        <div class="step-sign"><span class="step-sign-label">STARTER</span><div class="step-peg"></div></div>
      </div>
      <div class="step" data-key="builder" style="--step-color:#f01600; --step-left:25%; --step-height:106px;">
        <div class="step-block"></div>
        <div class="step-number">2</div>
        <div class="step-sign"><span class="step-sign-label">BUILDER</span><div class="step-peg"></div></div>
      </div>
      <div class="step" data-key="programmer" style="--step-color:#45b227; --step-left:50%; --step-height:144px;">
        <div class="step-block"></div>
        <div class="step-number">3</div>
        <div class="step-sign"><span class="step-sign-label">PROGRAMMER</span><div class="step-peg"></div></div>
      </div>
      <div class="step" data-key="designer" style="--step-color:#ffd900; --step-left:75%; --step-height:182px;">
        <div class="step-block"></div>
        <div class="step-number">4</div>
        <div class="step-sign"><span class="step-sign-label">DESIGNER</span><div class="step-peg"></div></div>
      </div>
    </div>

    <!-- Detail card (preenchido por JS) -->
    <div class="hard-card" id="evo-detail"></div>

    <!-- Founder -->
    <div class="hard-card founder-card" style="text-align:center;">
      <div class="founder-avatar">
        <img src="images/Emanuel.png" alt="Prof. Emanuel" width="70" height="70" loading="lazy">
      </div>
      <div class="founder-name">Prof. Emanuel</div>
      <div class="founder-role">Fundador da Robótica BSB</div>
      <div style="margin-top:20px;">
        <a href="https://wa.me/5561999999999" target="_blank" rel="noopener" class="big-cta" style="--cta-bg:var(--green);">📱 Entre em contato</a>
      </div>
    </div>
  </section>
```

> **Nota:** Substituir `5561999999999` pelo número real do WhatsApp da escola antes do deploy.

- [ ] **Step 3: Verificar visualmente**

Recarregar. Esperado: staircase com 4 degraus coloridos, card de detalhe vazio (será preenchido por JS).

---

## Task 10: Evolution JS

**Files:**
- Modify: `index.html` — bloco `<script>`

- [ ] **Step 1: Adicionar `initEvolution()` no script**

```javascript
    function initEvolution() {
      const steps  = document.querySelectorAll('.step');
      const detail = document.getElementById('evo-detail');

      function selectLevel(key) {
        const lv = LEVELS.find(l => l.key === key);
        if (!lv) return;

        steps.forEach(s => s.classList.toggle('active', s.dataset.key === key));
        detail.style.setProperty('--shadow-color', lv.color);

        detail.innerHTML = `
          <div class="tape" style="width:70px; top:-12px; left:50%; transform:translateX(-50%) rotate(3deg);"></div>
          <div class="evo-detail-header">
            <div class="evo-icon" style="background:${lv.color};">${lv.icon}</div>
            <div>
              <div class="evo-label" style="color:${lv.color};">${lv.label}</div>
              <div class="evo-age">${lv.age}</div>
            </div>
          </div>
          <p class="evo-tagline">${lv.tagline}.</p>
          <div class="evo-skills">
            ${lv.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
          </div>
        `;
      }

      steps.forEach(step => step.addEventListener('click', () => selectLevel(step.dataset.key)));
      selectLevel('builder');
    }
```

- [ ] **Step 2: Chamar no DOMContentLoaded**

```javascript
      initEvolution();
```

- [ ] **Step 3: Verificar interação**

Recarregar. Clicar em cada degrau. Esperado: degrau selecionado levanta (-4px), label do sign fica reto; card de detalhe atualiza com ícone, nome do nível, faixa etária, tagline e skill tags; sombra do card muda para a cor do nível.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: Evolution section — staircase + level detail card"
```

---

## Task 11: Gallery — HTML + CSS

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar CSS da Gallery**

```css
    /* ── GALLERY ────────────────────────────────────── */
    #gallery {
      padding: 36px 22px 48px;
      text-align: center;
      background: var(--bg);
    }
    #gallery .comic-title { --ct-size: 28px; margin-bottom: 30px; }
    .gallery-img {
      width: 100%;
      aspect-ratio: 4 / 5;
      object-fit: cover;
      display: block;
    }
    .gallery-card { --card-pad: 0; --card-radius: 20px; overflow: hidden; }
    /* Desktop grid: hidden by default */
    .gallery-desktop { display: none; }
    .gallery-desktop-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 28px;
    }
```

- [ ] **Step 2: Adicionar HTML da Gallery no body**

```html
  <section id="gallery">
    <h2 class="comic-title" data-comic="byWord" data-text="CONHEÇA UM POUCO DAS NOSSAS AULAS"></h2>

    <!-- Mobile: carousel -->
    <div id="gallery-carousel">
      <div class="carousel-wrap">
        <div class="carousel-track">
          <div class="carousel-item">
            <div class="hard-card gallery-card">
              <img src="images/gallery-1.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
            </div>
          </div>
          <div class="carousel-item">
            <div class="hard-card gallery-card">
              <img src="images/gallery-2.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
            </div>
          </div>
          <div class="carousel-item">
            <div class="hard-card gallery-card">
              <img src="images/gallery-3.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
            </div>
          </div>
          <div class="carousel-item">
            <div class="hard-card gallery-card">
              <img src="images/gallery-4.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="nav-btn carousel-prev">‹</button>
        <div class="carousel-dots">
          <button class="carousel-dot active"></button>
          <button class="carousel-dot"></button>
          <button class="carousel-dot"></button>
          <button class="carousel-dot"></button>
        </div>
        <button class="nav-btn carousel-next">›</button>
      </div>
    </div>

    <!-- Desktop: grid 2×2 -->
    <div class="gallery-desktop">
      <div class="gallery-desktop-grid">
        <div class="hard-card gallery-card">
          <img src="images/gallery-1.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
        </div>
        <div class="hard-card gallery-card">
          <img src="images/gallery-2.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
        </div>
        <div class="hard-card gallery-card">
          <img src="images/gallery-3.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
        </div>
        <div class="hard-card gallery-card">
          <img src="images/gallery-4.jpg" alt="Aula de robótica" class="gallery-img" loading="lazy" width="360" height="450">
        </div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Inicializar carrossel da galeria no DOMContentLoaded**

```javascript
      initCarousel(document.getElementById('gallery-carousel'));
```

- [ ] **Step 4: Verificar**

Recarregar. Esperado: galeria com 4 fotos em carrossel, navegável por botões e swipe.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: Gallery section — photo carousel"
```

---

## Task 12: Location + Footer — HTML + CSS

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Adicionar CSS de Location e Footer**

```css
    /* ── LOCATION ───────────────────────────────────── */
    #location {
      padding: 36px 22px 48px;
      text-align: center;
      background: var(--bg);
    }
    #location .comic-title { --ct-size: 24px; margin-bottom: 0; }
    .location-pitch {
      margin: 24px 0;
      font-weight: 600; font-size: 14.5px;
      line-height: 1.5; color: var(--ink);
    }
    .unit-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
    }
    .unit-name {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 17px;
      color: var(--ink);
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }
    .unit-dots { display: flex; gap: 6px; }
    .unit-dot {
      width: 11px; height: 11px;
      border-radius: 50%;
      border: 1.5px solid var(--ink);
    }
    .unit-photo {
      width: 100%;
      aspect-ratio: 5 / 4;
      object-fit: cover;
      border: 2.5px solid var(--ink);
      border-radius: 12px;
      margin-bottom: 12px;
      display: block;
    }
    /* Map card */
    .map-area {
      position: relative;
      aspect-ratio: 4 / 4.2;
      background: #eaf3fb;
      background-image: radial-gradient(rgba(1,161,225,0.2) 1.2px, transparent 1.2px);
      background-size: 12px 12px;
      border-bottom: 3px solid var(--ink);
      border-radius: 17px 17px 0 0;
      overflow: hidden;
    }
    .map-addr-card {
      position: absolute;
      top: 14px; left: 14px; right: 14px;
      background: #fff;
      border: 2.5px solid var(--ink);
      border-radius: 12px;
      padding: 12px 14px;
      box-shadow: 4px 4px 0 var(--ink);
      text-align: left;
      z-index: 2;
    }
    .map-addr-title {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 16px;
      color: var(--ink);
      text-transform: uppercase;
      letter-spacing: 0.02em;
      margin-bottom: 4px;
    }
    .map-addr-text {
      font-weight: 600; font-size: 12.5px;
      color: var(--ink); line-height: 1.4;
      margin-bottom: 10px;
    }
    .map-addr-btn {
      background: var(--blue); color: #fff;
      border: 2.5px solid var(--ink);
      border-radius: 10px;
      padding: 8px 14px;
      font-weight: 800; font-size: 12px;
      text-transform: uppercase; letter-spacing: 0.04em;
      box-shadow: 3px 3px 0 var(--ink);
      -webkit-text-stroke: 0.6px var(--ink);
      paint-order: stroke fill;
      display: inline-block;
    }
    .map-placeholder-lbl {
      position: absolute;
      bottom: 10px; left: 14px;
      background: var(--yellow);
      border: 2px solid var(--ink);
      border-radius: 8px;
      padding: 4px 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px; font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--ink);
      box-shadow: 2px 2px 0 var(--ink);
    }
    .map-pin {
      position: absolute;
      bottom: 60px; right: 60px;
      width: 28px; height: 28px;
      border-radius: 50%;
      background: var(--red);
      border: 3px solid var(--ink);
      box-shadow: 3px 3px 0 var(--ink);
      display: flex; align-items: center; justify-content: center;
    }
    .map-pin-dot { width: 8px; height: 8px; border-radius: 50%; background: #fff; }
    /* Notice */
    .location-notice { margin-top: 32px; }
    .notice-icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      border-radius: 50%;
      background: var(--yellow);
      border: 2.5px solid var(--ink);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 22px;
      color: var(--ink);
    }
    .notice-text {
      font-size: 13.5px; line-height: 1.5;
      font-weight: 600; color: var(--ink);
    }

    /* ── FOOTER ─────────────────────────────────────── */
    #footer {
      background: var(--blue);
      border-top: 3px solid var(--ink);
      padding: 44px 22px 36px;
      text-align: center;
      color: #fff;
    }
    .footer-logo-card {
      display: inline-block;
      background: #fff;
      border: 3px solid var(--ink);
      border-radius: 18px;
      padding: 12px;
      box-shadow: 6px 6px 0 var(--ink);
      margin-bottom: 14px;
    }
    .footer-social-title {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 18px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      -webkit-text-stroke: 1.2px var(--ink);
      paint-order: stroke fill;
      margin-bottom: 18px;
    }
    .footer-social-btns { display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .social-btn {
      display: flex; align-items: center; justify-content: center;
      gap: 10px;
      color: #fff;
      border: 2.5px solid var(--ink);
      border-radius: 999px;
      padding: 12px 22px;
      font-weight: 800; font-size: 14px;
      box-shadow: 4px 4px 0 var(--ink);
      -webkit-text-stroke: 0.6px var(--ink);
      paint-order: stroke fill;
      width: 100%; max-width: 240px;
    }
    .social-icon {
      width: 22px; height: 22px;
      border-radius: 50%;
      background: #fff;
      border: 2px solid var(--ink);
      display: inline-flex;
      align-items: center; justify-content: center;
      font-size: 12px; color: var(--ink);
    }
    .footer-address-title {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700; font-size: 16px;
      text-transform: uppercase; letter-spacing: 0.02em;
      margin-bottom: 6px;
      -webkit-text-stroke: 1px var(--ink);
      paint-order: stroke fill;
    }
    .footer-address-text { font-weight: 600; font-size: 13.5px; line-height: 1.5; }
    .footer-divider { border-top: 1px solid rgba(255,255,255,0.4); margin: 24px 0 18px; }
    .footer-copy {
      margin-top: 20px;
      font-size: 11px; font-weight: 700;
      opacity: 0.85; letter-spacing: 0.04em;
    }
```

- [ ] **Step 2: Adicionar HTML de Location no body**

```html
  <section id="location">
    <h2 class="comic-title" data-comic="byWord" data-text="ESTAMOS MAIS PERTO DE VOCÊ DO QUE IMAGINA"></h2>

    <p class="location-pitch">
      Acabamos de inaugurar a nossa nova unidade no centro de Brasília, pensando no seu conforto e na facilidade.
    </p>
    <p class="location-pitch" style="margin-top:0;">
      E estamos em uma <span class="pill" style="--pill-tilt:-1.5deg;">localização estratégica</span> para garantir a máxima proximidade da sua casa ou do seu trabalho.
    </p>

    <!-- Unit card -->
    <div class="hard-card" style="--shadow-color:var(--blue); --card-radius:20px; --card-pad:14px; position:relative;">
      <div class="tape" style="width:68px; top:-12px; left:50%; transform:translateX(-50%) rotate(4deg);"></div>
      <img src="images/sala.jpg" alt="Unidade Asa Norte" class="unit-photo" loading="lazy" width="400" height="320">
      <div class="unit-label">
        <div class="unit-name">UNIDADE ASA NORTE</div>
        <div class="unit-dots">
          <div class="unit-dot" style="background:var(--red);"></div>
          <div class="unit-dot" style="background:var(--yellow);"></div>
          <div class="unit-dot" style="background:var(--green);"></div>
        </div>
      </div>
    </div>

    <!-- Map card -->
    <div class="hard-card" style="--shadow-color:var(--red); --card-radius:20px; --card-pad:0; overflow:hidden; margin-top:24px;">
      <div class="map-area">
        <div class="map-addr-card">
          <div class="map-addr-title">ROBÓTICA BSB</div>
          <div class="map-addr-text">
            CLN 302 Bloco B, Sala 113<br>
            Asa Norte, Brasília DF
          </div>
          <a href="https://maps.google.com/?q=CLN+302+Bloco+B+Sala+113+Asa+Norte+Brasília+DF"
             target="_blank" rel="noopener" class="map-addr-btn">COMO CHEGAR</a>
        </div>
        <div class="map-placeholder-lbl">📍 MAPA — CLN 302 ASA NORTE</div>
        <div class="map-pin"><div class="map-pin-dot"></div></div>
      </div>
    </div>

    <!-- Notice -->
    <div class="hard-card location-notice" style="display:flex; gap:12px; align-items:flex-start; text-align:left;">
      <div class="notice-icon">!</div>
      <div class="notice-text">
        Nossa sala fica no mesmo prédio do <strong>restaurante Greens</strong>. A entrada é por uma porta de vidro que fica na parte de trás do prédio.
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Adicionar HTML do Footer no body**

```html
  <footer id="footer">
    <div class="footer-logo-card">
      <img src="images/logo.svg" alt="Robótica BSB" width="70" height="70">
    </div>

    <div class="footer-social-title">SIGA E FALE CONOSCO</div>
    <div class="footer-social-btns">
      <a href="https://instagram.com/roboticabsb" target="_blank" rel="noopener"
         class="social-btn" style="background:#e1306c;">
        <span class="social-icon">📷</span> Instagram
      </a>
      <a href="https://wa.me/5561999999999" target="_blank" rel="noopener"
         class="social-btn" style="background:var(--green);">
        <span class="social-icon">✆</span> WhatsApp
      </a>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-address-title">📍 ONDE ESTAMOS</div>
    <div class="footer-address-text">
      CLN 302 Bloco B, Sala 113<br>
      Asa Norte, Brasília DF
    </div>

    <div class="footer-copy">© 2026 Robótica BSB. Todos os direitos reservados.</div>
  </footer>
```

> **Nota:** Substituir `5561999999999` e `roboticabsb` pelos valores reais antes do deploy.

- [ ] **Step 4: Verificar**

Recarregar. Esperado: seção Location com foto da sala, card de endereço, botão "COMO CHEGAR". Footer azul com logo, botões de rede social e endereço.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: Location + Footer sections"
```

---

## Task 13: Desktop Responsive CSS

**Files:**
- Modify: `index.html` — `<style>`, adicionar ao final

- [ ] **Step 1: Adicionar media query de desktop**

```css
    /* ── DESKTOP (≥900px) ───────────────────────────── */
    @media (min-width: 900px) {
      /* Topnav */
      #topnav { padding: 18px 56px; }
      #topnav .comic-title { --ct-size: 16px; }

      /* Hero */
      #hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 56px 56px;
        align-items: center;
        padding: 72px 56px 96px;
        max-width: 1180px;
        margin: 0 auto;
      }
      .hero-headline {
        grid-column: 1 / -1;
        text-align: center;
        margin-bottom: 8px;
      }
      .hero-headline .comic-title { --ct-size: 72px; --ct-stroke: 4px; }
      .hero-pitch {
        grid-column: 1 / -1;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        font-size: 19px;
        line-height: 1.5;
      }
      .hero-stamp-row { grid-column: 1 / -1; margin-bottom: 16px; }
      .hero-video-col { position: static; margin-bottom: 0; display: flex; justify-content: center; }
      .video-frame { aspect-ratio: 9 / 16; max-width: 320px; width: 100%; margin: 0; }
      .hero-form-col { position: static; align-self: center; }
      .hero-deco-rocket { width: 200px; right: 0; top: 60px; }
      .hero-deco-robot  { width: 220px; left: 0; bottom: 80px; }

      /* Schedule */
      #schedule { padding: 80px 56px; }
      .schedule-mobile { display: none; }
      .schedule-desktop { display: block; }

      /* Evolution */
      #evolution { padding: 80px 56px; }
      #evolution .comic-title { --ct-size: 28px; }

      /* Gallery */
      #gallery { padding: 80px 56px; }
      #gallery-carousel { display: none; }
      .gallery-desktop { display: block; }

      /* Location */
      #location { padding: 80px 56px; }
      #location .comic-title { --ct-size: 28px; }
      .location-grid {
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        gap: 40px;
        align-items: start;
        text-align: left;
      }
      .location-notice { max-width: 720px; margin-left: auto; margin-right: auto; }

      /* Footer */
      #footer { padding: 56px 56px 44px; }
      .footer-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
        align-items: center;
        max-width: 980px;
        margin: 0 auto;
        text-align: left;
      }
      .footer-grid .foot-center { text-align: center; }
      .footer-grid .foot-right  { text-align: right; }
      .footer-divider { display: none; }
      .footer-social-btns { align-items: flex-start; }
    }
```

- [ ] **Step 2: Envolver elementos de Location e Footer em containers grid**

No HTML do `#location`, envolver os dois cards (unit + map) com `<div class="location-grid">`:

```html
      <div class="location-grid">
        <!-- Unit card (.hard-card com sala.jpg) -->
        <!-- Map card (.hard-card com .map-area) -->
      </div>
```

No HTML do `#footer`, envolver o conteúdo em `<div class="footer-grid">` com três `<div>` filhos:

```html
    <div class="footer-grid">
      <div class="foot-left">
        <!-- logo card -->
      </div>
      <div class="foot-center">
        <!-- social title + btns -->
      </div>
      <div class="foot-right">
        <!-- address title + text -->
      </div>
    </div>
```

- [ ] **Step 3: Verificar desktop**

Redimensionar o browser para largura ≥ 900px. Esperado:
- Hero em grid 2 colunas (vídeo | form), título centralizado acima, font 72px
- Schedule em grid 3 colunas (sem carrossel)
- Gallery em grid 2×2
- Location em grid 2 colunas
- Footer em grid 3 colunas

- [ ] **Step 4: Verificar mobile**

Redimensionar para < 900px. Esperado: layout em coluna única, carrosséis ativos.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: desktop responsive layout — all sections"
```

---

## Task 14: Final Polish + Verificação completa

**Files:**
- Modify: `index.html` — ajustes pontuais

- [ ] **Step 1: Substituir placeholders reais**

Editar `index.html` e substituir:
- `href="https://wa.me/5561999999999"` → número real em dois lugares (Evolution CTA + Footer)
- `href="https://instagram.com/roboticabsb"` → URL real do Instagram

- [ ] **Step 2: Cheklist visual mobile (375px)**

Abrir DevTools → mobile 375px e verificar:
- [ ] TopNav sticky ao rolar
- [ ] Hero: título colorido, stamp, thumbnail do vídeo com play, formulário com tape
- [ ] Schedule: calendário animando, carrossel funcionando com swipe
- [ ] Evolution: staircase clicável, detalhe atualizando
- [ ] Gallery: 4 fotos no carrossel com swipe
- [ ] Location: foto da sala + card de endereço
- [ ] Footer: logo + botões sociais + endereço

- [ ] **Step 3: Checklist visual desktop (1280px)**

Redimensionar para 1280px e verificar:
- [ ] Hero em 2 colunas com título 72px
- [ ] Schedule em grid 3 cards
- [ ] Gallery em grid 2×2
- [ ] Location em 2 colunas
- [ ] Footer em 3 colunas

- [ ] **Step 4: Testar formulário**

Preencher nome + telefone → Submit. Verificar no painel do n8n que o webhook recebeu `{ "nome": "...", "telefone": "..." }`.

- [ ] **Step 5: Commit final**

```bash
git add index.html
git commit -m "feat: final polish — replace placeholders, verify all sections"
```

---

## Self-Review do Plano

**Spec coverage:**
- [x] Arquivo único HTML + CSS + JS vanilla
- [x] Google Fonts, zero CDN JS
- [x] TopNav sticky
- [x] Hero: título byChar, stamp, pitch+pill, vídeo com thumbnail, form + webhook
- [x] Schedule: FlippingCalendar, 3 cards carrossel/grid, BigCTA
- [x] Evolution: staircase 4 níveis, detail card, Prof. Emanuel (Emanuel.png)
- [x] Gallery: 4 fotos reais, carrossel mobile / grid desktop
- [x] Location: sala.jpg, endereço, "COMO CHEGAR" (Google Maps), aviso Greens
- [x] Footer: logo, Instagram, WhatsApp, endereço, copyright
- [x] Responsive: media query única 900px
- [x] hero-bg.png não usada (1.6MB → substituída por SVGs)
- [x] loading="lazy" nas imagens da galeria
- [x] Form: loading state, sucesso, erro inline

**Type consistency:**
- `initCarousel(container)` aceita Element — chamado com `document.getElementById(...)` ✓
- `renderComicTitle(el)` lê `el.dataset.comic` e `el.dataset.text` — todos os `.comic-title` têm esses atributos ✓
- `selectLevel(key)` usa `LEVELS.find(l => l.key === key)` — keys: starter/builder/programmer/designer ✓
- `step.dataset.key` mapeia para as mesmas keys ✓

**Placeholders resolvidos:**
- WhatsApp número: anotado para substituição no Task 14 ✓
- Instagram URL: anotado para substituição no Task 14 ✓
- iframe src de vídeo: explicitamente deixado vazio com comentário no código ✓
