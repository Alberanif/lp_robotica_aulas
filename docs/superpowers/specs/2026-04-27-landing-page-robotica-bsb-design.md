# Design Spec — Landing Page Robótica BSB

**Data:** 2026-04-27  
**Projeto:** Landing page pública para anúncios Meta Ads  
**Empresa:** Robótica BSB — escola de robótica para crianças e adolescentes em Brasília DF

---

## 1. Objetivo

Criar uma landing page de alta conversão para veiculação em anúncios do Meta Ads (Facebook/Instagram). A página deve carregar rapidamente em mobile (principal canal dos anúncios), replicar fielmente o design Neo-Brutalista + Comic Book definido no prototype do Claude design, e capturar leads via formulário integrado a um webhook n8n.

---

## 2. Stack e Arquitetura

**Abordagem:** HTML + CSS + JS Vanilla — arquivo único autocontido.

**Justificativa:** Zero dependências de framework/CDN para JS. Carregamento instantâneo em WebView do Meta Ads. Sem build step. Deploy trivial (qualquer hosting estático).

```
LP_AULAS_UNIDADE_REFATORADO/
├── index.html                        ← página completa (HTML + <style> + <script>)
└── images/
    ├── Logo - Robótica BSB.svg       → TopNav + Footer
    ├── Emanuel.png                   → Card do Prof. Emanuel (Evolution)
    ├── sala.jpg                      → Foto da unidade (Location)
    ├── elementos-videos.jpg          → Thumbnail do iframe de vídeo (Hero)
    ├── Foguete.svg                   → Decorativo (Hero)
    ├── Robo.svg                      → Decorativo (Hero)
    └── WhatsApp Image *.jpeg (4x)    → Galeria de aulas
```

**Fontes externas (único CDN permitido):** Google Fonts — Fredoka 500/600/700, Plus Jakarta Sans 500/600/700/800/900, JetBrains Mono 500/700. Carregadas via `<link rel="preconnect">` + `<link>` no `<head>`.

---

## 3. Design System

### 3.1 Paleta de Cores

| Variável CSS     | Hex       | Uso principal                                  |
|------------------|-----------|------------------------------------------------|
| `--blue`         | `#01a1e1` | CTAs secundários, sombras de destaque, footer  |
| `--yellow`       | `#ffd900` | Fitas adesivas (tape), stamps, destaques       |
| `--red`          | `#f01600` | Urgência, "Inscrições Abertas", sombra do vídeo|
| `--green`        | `#45b227` | Botão CTA principal, Pills, sucesso            |
| `--bg`           | `#faefd9` | Fundo padrão (creme/bege)                      |
| `--ink`          | `#111111` | Textos, bordas espessas, sombras sólidas       |

### 3.2 Tipografia

- **Títulos de seção (ComicTitle):** Fredoka 700, uppercase, palavras coloridas em ciclo azul→amarelo→vermelho→verde, `webkit-text-stroke: 2px #111111`, `paint-order: stroke fill`
- **Corpo e labels:** Plus Jakarta Sans 600–800
- **Mono/técnico:** JetBrains Mono 700

### 3.3 Regras visuais (Neo-Brutalismo + Comic Book)

- **Sombras duras:** `box-shadow: 8px 8px 0 <cor>` — sem blur. Nunca `blur`.
- **Bordas espessas:** `border: 3px solid #111111` em todos os cards e botões.
- **Border radius alto:** `border-radius: 18px–26px` — cantos arredondados mesmo em estilo bruto.
- **Tape:** `div` amarelo `rgba(255,217,0,0.85)`, `border: 2px solid #111`, rotacionado ±3°, `position: absolute` no topo dos cards.
- **Rotações leves:** stamps e elementos decorativos com `rotate(-2deg)` a `rotate(3deg)`.
- **BigCTA press:** botão principal com `box-shadow` de 8px que vai a 0px no `:active`, com `transform: translate(8px,8px)` — efeito "pressionar".

---

## 4. Seções da Página

### 4.1 TopNav
- Sticky (`position: sticky; top: 0; z-index: 20`)
- Fundo branco, `border-bottom: 2px solid #111`
- Logo SVG à esquerda + texto "FORMANDO A PRÓXIMA GERAÇÃO" com palavras coloridas (azul/amarelo/vermelho/verde)
- Sem links de navegação

### 4.2 Hero
- Fundo: `--bg` creme com `Foguete.svg` e `Robo.svg` posicionados decorativamente
- Título "ROBÓTICA BSB" — ComicTitle, `font-size: 38px` mobile / `72px` desktop, modo `byChar`
- Stamp "Inscrições Abertas" — rotacionado -3°, borda + sombra vermelha
- Pitch — texto com `<span class="pill">experiência de aprendizado</span>` em verde
- **Vídeo:** `<div>` com thumbnail `elementos-videos.jpg` como fundo, sobreposição escura e ícone play. Ao clicar, troca para `<iframe>` (src vazio por ora, preenchido após entrega). Sombra `9px 9px 0 var(--red)`.
- **Formulário:** HardCard com Tape, campos Nome do Responsável + Telefone/WhatsApp, BigCTA verde "TRANSFORMAR O FUTURO DO MEU FILHO", submissão via `fetch` POST JSON

### 4.3 Schedule — "ENCONTROS QUE CABEM NA ROTINA"
- ComicTitle
- **FlippingCalendar:** `div` que exibe dia+dia-da-semana ciclando automaticamente a cada 1.8s via `setInterval`, com animação CSS `rotateX(-90deg)` no flip
- Pitch com Pill "Você escolhe o melhor horário"
- **3 cards** (azul, vermelho, verde) com título + corpo branco
  - Mobile: carrossel com prev/next/dots
  - Desktop (`min-width: 900px`): grid de 3 colunas
- BigCTA verde "AGENDE UMA AULA EXPERIMENTAL"

### 4.4 Evolution — "EVOLUÇÃO PENSADA NO FUTURO DA NOVA GERAÇÃO"
- ComicTitle
- Badge vermelho "4 níveis de aprendizado"
- **Staircase:** `div` com posicionamento absoluto — 4 blocos coloridos crescendo da esquerda para a direita, clicáveis. Sol amarelo decorativo no canto superior direito. Dotted background.
- **Card de detalhe:** atualiza ao clicar em cada degrau — ícone emoji + label do nível + faixa etária + tagline + skill tags. Sombra na cor do nível selecionado.
- **Card Prof. Emanuel:** foto `Emanuel.png` em círculo com borda + sombra preta, nome + título "Fundador da Robótica BSB"
- BigCTA verde "📱 Entre em contato"

### 4.5 Gallery — "CONHEÇA UM POUCO DAS NOSSAS AULAS"
- ComicTitle
- 4 fotos reais (WhatsApp Image *.jpeg) com `loading="lazy"`
  - Mobile: carrossel (1 foto por vez) com prev/next/dots
  - Desktop: grid 2×2
- Todas as fotos em HardCard com `aspect-ratio: 4/5`, `object-fit: cover`

### 4.6 Location — "ESTAMOS MAIS PERTO DE VOCÊ DO QUE IMAGINA"
- ComicTitle
- Pitch com Pill "localização estratégica"
- **Card da unidade:** foto `sala.jpg`, label "UNIDADE ASA NORTE", 3 bolinhas decorativas (vermelho/amarelo/verde). Tape no topo. Sombra azul.
- **Card do mapa:** fundo azul claro pontilhado, card de endereço fixado (CLN 302 Bloco B, Sala 113, Asa Norte, Brasília DF) com botão "COMO CHEGAR" linkando para Google Maps. Pin vermelho decorativo. Sombra vermelha.
  - Desktop: grid de 2 colunas (foto | mapa)
- **Card de aviso:** ícone "!" amarelo + texto sobre o restaurante Greens e entrada por trás do prédio

### 4.7 Footer
- Fundo `--blue`, `border-top: 3px solid #111`
- Card branco com logo SVG (sombra preta)
- "SIGA E FALE CONOSCO" + botões Instagram (rosa) e WhatsApp (verde) com ícone em caixa branca
- "📍 ONDE ESTAMOS" + endereço
- Desktop: grid de 3 colunas (logo | social | endereço)
- Copyright © 2026 Robótica BSB

---

## 5. Formulário — Integração Webhook

**Endpoint:** `POST https://n8nwebhook.artificialmenteia.com/webhook/cadastro`

**Payload JSON:**
```json
{
  "nome": "João Pedro",
  "telefone": "(61) 99999-9999"
}
```

**Comportamento:**
- Loading state no botão durante o fetch (texto "Enviando…", desabilitado)
- Sucesso: esconde o form, exibe mensagem "🎉 Recebemos! Vamos te chamar no WhatsApp em instantes."
- Erro de rede/servidor: exibe mensagem de erro inline em vermelho, mantém o form visível para reenvio

---

## 6. Responsividade

Media query única: `@media (min-width: 900px)`

| Elemento | Mobile | Desktop |
|----------|--------|---------|
| Hero layout | coluna única (título → vídeo → form) | grid 2 colunas (vídeo | form), título centralizado acima |
| Schedule cards | carrossel 1 card | grid 3 colunas |
| Gallery | carrossel 1 foto | grid 2×2 |
| Location | coluna única | grid 2 colunas |
| Footer | coluna única | grid 3 colunas |
| ComicTitle Hero | 38px | 72px |
| Padding seções | 36px 22px | 80px 56px |

---

## 7. Performance

- `hero-bg.png` (1.6 MB) **não utilizada** — substituída pelos SVGs decorativos leves
- `loading="lazy"` em todas as imagens da galeria
- `width` e `height` explícitos em `Emanuel.png` para evitar CLS
- Sem JavaScript de terceiros (zero CDN JS)
- CSS e JS totalmente inline no HTML — zero requests adicionais além das fontes e imagens
- Total estimado sem imagens: < 60 KB

---

## 8. Fora do escopo

- SEO avançado (meta tags Open Graph, Schema.org) — não necessário para landing de tráfego pago
- Analytics (pixel Meta, GTM) — a ser configurado após entrega
- Mapa real (Google Maps API) — placeholder visual por ora
- Vídeo real no iframe — src a ser preenchido após entrega da página
