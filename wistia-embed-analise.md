# Análise da integração Wistia neste projeto

## Objetivo deste documento

Este documento descreve como o vídeo do Wistia foi incorporado ao projeto, quais ajustes e otimizações existem hoje e quais detalhes técnicos podem ajudar na investigação do problema de `flicker` em dispositivos Android em outro projeto.

O foco aqui é documentar o que efetivamente existe no código atual, com interpretações técnicas quando necessário.

## Resumo executivo

O projeto usa o embed moderno do Wistia baseado no elemento customizado `<wistia-player>`, carregado dinamicamente no cliente via `useEffect()` em React. A implementação evita SSR, previne inserção duplicada dos scripts e reserva espaço visual antes da definição do custom element usando um placeholder com `swatch` do Wistia.

Os principais pontos de otimização já aplicados são:

- carregamento client-side apenas;
- carregamento assíncrono dos scripts do player;
- deduplicação dos scripts via `document.querySelector(...)`;
- uso de placeholder visual antes do `wistia-player` ser definido;
- reserva de proporção do player antes do carregamento completo, evitando salto de layout;
- encapsulamento visual do player com `overflow-hidden` e moldura estável.

Ao mesmo tempo, há alguns pontos que podem contribuir para flicker em Android:

- troca visual entre o estado `:not(:defined)` e o player real;
- uso de `filter: blur(5px)` no placeholder;
- script do vídeo carregado como `type="module"`;
- criação tardia do player após o primeiro paint da página;
- ausência de controle explícito de eventos de prontidão do player;
- ausência de preconnect/preload para hosts do Wistia.

## Stack e contexto de runtime

O projeto é uma SPA em React 18 com Vite e React Router.

Arquivos relevantes:

- [`src/main.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/main.tsx:1)
- [`src/App.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/App.tsx:1)
- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:1)

Características importantes para a integração:

- não há SSR;
- o componente é montado somente no browser;
- `StrictMode` não está sendo usado em `main.tsx`, então o `useEffect()` não sofre dupla execução artificial do React em desenvolvimento;
- a página principal `/` renderiza diretamente o componente `Institucional`.

Isso reduz interferências comuns de hidratação e torna a integração inteiramente dependente do ciclo de montagem do componente no cliente.

## Onde a integração do Wistia está

Toda a integração encontrada no projeto está concentrada em:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:37)

Não há outros pontos de integração com Wistia no código.

## Como o embed foi implementado

### 1. Declaração do custom element no JSX

Como `wistia-player` é um custom element e o projeto usa TypeScript com JSX, foi necessário declarar esse elemento para o compilador:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:4)

Trecho implementado:

```tsx
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': any;
    }
  }
}
```

Função disso:

- impedir erro de tipagem no JSX;
- permitir o uso direto do custom element no React;
- aceitar atributos como `media-id` e `aspect`.

Observação técnica:

- foi usado `any`, então não existe tipagem forte para a API do elemento.

### 2. Carregamento dinâmico dos scripts do Wistia

O carregamento dos scripts acontece dentro de um `useEffect(() => {}, [])`:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:38)

Dois scripts são injetados em `document.head`:

1. script base do player:

```ts
https://fast.wistia.com/player.js
```

2. script específico da mídia:

```ts
https://fast.wistia.com/embed/skluh6nhxv.js
```

Detalhes da implementação:

- o script base é carregado com `async = true`;
- o script da mídia é carregado com `type = "module"` e `async = true`;
- ambos só são adicionados se ainda não existirem no DOM;
- a verificação é feita por seletor exato no atributo `src`.

Trechos relevantes:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:40)
- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:47)

### 3. Renderização do player na árvore React

No hero da página, o player é renderizado assim:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:214)

```tsx
<wistia-player media-id="skluh6nhxv" aspect="0.5625"></wistia-player>
```

Parâmetros usados:

- `media-id="skluh6nhxv"`: identifica o vídeo no Wistia;
- `aspect="0.5625"`: define a proporção do player.

Interpretação do `aspect`:

- `0.5625` equivale a `9 / 16`;
- o vídeo é tratado como vertical, estilo shorts/reels;
- isso combina com o placeholder que usa `padding-top: 177.78%`, que é aproximadamente `16 / 9 * 100`.

## Estrutura visual do embed

O player está dentro de uma caixa decorada:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:215)

Estrutura:

- wrapper `relative max-w-sm mx-auto mb-8`;
- moldura com `border`, `rounded-2xl`, `shadow`, `overflow-hidden`, `bg-[#fffef5]`, `relative`;
- efeito visual de fita decorativa acima do player em telas `md+`.

O ponto técnico mais importante aqui é `overflow-hidden`, porque ele limita qualquer repaint ou variação visual do player à área da moldura.

## Placeholder e otimização de carregamento visual

Antes do custom element ser definido pelo browser, o projeto aplica um CSS inline específico:

- [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:219)

Regra atual:

```css
wistia-player[media-id='skluh6nhxv']:not(:defined) {
  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/skluh6nhxv/swatch');
  display: block;
  filter: blur(5px);
  padding-top: 177.78%;
}
```

### O que essa regra faz

#### `:not(:defined)`

Aplica o estilo apenas antes de o navegador reconhecer e inicializar o custom element.

Na prática:

- enquanto `player.js` e o script da mídia não finalizaram a definição do componente, o elemento recebe o placeholder;
- quando o custom element passa a existir, essa regra deixa de valer.

Essa transição é central para entender qualquer flicker.

#### `background: ... swatch`

Usa a imagem `swatch` fornecida pelo próprio Wistia:

```txt
https://fast.wistia.com/embed/medias/skluh6nhxv/swatch
```

Função:

- exibir um frame/poster antes do player final;
- evitar bloco vazio durante o carregamento;
- manter continuidade visual.

#### `display: block`

Garante que o custom element ocupe área de bloco mesmo antes de ser definido.

#### `padding-top: 177.78%`

Reserva altura proporcional para o vídeo.

Efeito prático:

- evita layout shift;
- mantém a caixa com formato vertical desde o primeiro render;
- impede que a página “salte” quando o player real carrega.

#### `filter: blur(5px)`

Aplica blur ao poster.

Motivo provável:

- suavizar a imagem de placeholder;
- esconder imperfeições do poster de baixa resolução;
- dar aparência menos abrupta até o player final aparecer.

Risco técnico:

- `filter: blur(...)` força trabalho adicional de composição/pintura;
- em Android, especialmente em WebView/Chrome com GPU menos estável, filtros e transições entre estados costumam aumentar chance de flicker;
- esse ponto é um dos principais suspeitos quando há “piscar” na troca entre placeholder e player.

## Fluxo de carregamento completo

O comportamento do player neste projeto pode ser descrito assim:

1. React renderiza a página.
2. O elemento `<wistia-player>` entra no DOM ainda indefinido.
3. O CSS `:not(:defined)` mostra o placeholder com `swatch`, blur e proporção reservada.
4. Após o primeiro paint, o `useEffect()` executa.
5. O projeto injeta `https://fast.wistia.com/player.js`.
6. O projeto injeta `https://fast.wistia.com/embed/skluh6nhxv.js` como módulo.
7. Quando os scripts terminam de carregar e registrar o custom element, o browser “upgrada” o `<wistia-player>`.
8. A regra `:not(:defined)` deixa de se aplicar.
9. O player real assume a renderização.

O ponto mais sensível visualmente é a transição entre os passos 7 e 9.

## Otimizações identificadas no projeto

### 1. Carregamento só no cliente

O uso de `useEffect()` evita qualquer tentativa de executar o player no SSR.

Benefícios:

- elimina problemas de `window`/`document` inexistentes;
- reduz risco de mismatch de hidratação;
- simplifica a integração em SPA.

### 2. Deduplicação de scripts

Antes de injetar cada script, o código verifica se o `src` já existe.

Benefícios:

- evita múltiplas inserções do mesmo script;
- reduz chance de comportamento duplicado em navegações/re-renderizações;
- ajuda a manter o carregamento idempotente.

Limite:

- a deduplicação só considera igualdade exata do `src`;
- não há validação de estado do script, erro de carga ou “já inicializado”.

### 3. `async` nos scripts

Ambos os scripts são carregados de forma assíncrona.

Benefícios:

- não bloqueiam parsing/render principal da página;
- melhoram tempo de interatividade do restante do hero.

Trade-off:

- o player fica dependente de uma inicialização posterior ao primeiro paint;
- isso melhora performance geral, mas abre janela para transições visuais perceptíveis.

### 4. Placeholder com poster remoto do próprio Wistia

O uso do `swatch` do Wistia evita tela vazia e mantém coerência com o conteúdo do vídeo.

Benefícios:

- bom perceived performance;
- reduz CLS;
- dá contexto visual imediato ao usuário.

### 5. Reserva explícita de proporção

A combinação de `aspect="0.5625"` com `padding-top: 177.78%` mostra uma intenção clara de manter o player estável antes e depois da inicialização.

Benefícios:

- menos salto visual;
- layout previsível;
- melhor comportamento responsivo para vídeo vertical.

### 6. `overflow-hidden` no container

O container externo esconde bordas ou frames intermediários do embed.

Benefícios:

- reduz artefatos fora da caixa;
- estabiliza o resultado visual na moldura.

## Ajustes específicos feitos na integração

Os ajustes concretos encontrados são estes:

- uso do `wistia-player` em vez de `iframe`;
- declaração manual do custom element no JSX do TypeScript;
- injeção separada de `player.js` e do script da mídia;
- uso do script da mídia como ES module;
- placeholder inline condicionado a `:not(:defined)`;
- blur sobre o `swatch`;
- proporção vertical explícita;
- container com borda, arredondamento e `overflow-hidden`.

Não foram encontrados:

- listeners de eventos do player;
- API de controle do Wistia no React;
- lazy load por `IntersectionObserver`;
- preload/preconnect no `index.html`;
- fallback para navegadores com suporte ruim a custom elements/module scripts;
- tratamento de erro se os scripts do Wistia falharem.

## Pontos técnicos que podem explicar flicker em Android

Esta seção é inferência técnica baseada na implementação atual.

### 1. Transição entre `:not(:defined)` e o player real

O placeholder desaparece exatamente quando o custom element é definido. Se o player real ainda não estiver com frame estável no mesmo instante, o usuário pode perceber:

- um flash;
- uma troca brusca de fundo;
- uma re-renderização curta da área do vídeo.

Isso é particularmente comum quando o placeholder e o player final não compartilham exatamente o mesmo pipeline de pintura.

### 2. Uso de `filter: blur(5px)`

Blur em tempo de render é um suspeito forte.

Motivos:

- filtros costumam ativar camada de composição;
- a remoção abrupta do filtro no momento do upgrade do custom element pode gerar repaint visível;
- alguns dispositivos Android/WebView apresentam instabilidade visual com blur + elementos substituídos dinamicamente.

### 3. Script da mídia como `type="module"`

O script específico do vídeo é carregado como módulo:

```ts
script2.type = "module";
```

Isso não é necessariamente incorreto, mas importa porque:

- module scripts têm semântica de carregamento diferente;
- a execução pode ocorrer em momento distinto do script clássico;
- em ambientes Android mais antigos ou WebViews específicas, module loading pode se comportar de forma menos previsível que um embed clássico.

### 4. Inicialização após primeiro paint

O player só começa a ser carregado depois que o React monta o componente e o `useEffect()` roda.

Impacto:

- o usuário enxerga primeiro o placeholder;
- depois enxerga a troca para o player;
- se essa troca não for suave, o flicker aparece.

### 5. Falta de controle fino do momento de exibição

O código não espera eventos como “player pronto”, “thumbnail pronta” ou “frame estável” para trocar estados visuais.

Então:

- a troca é inteiramente delegada ao mecanismo interno do custom element;
- o projeto não tem camada própria de sincronização visual.

### 6. Sem preconnect/preload

Não há otimizações de rede explícitas para:

- `fast.wistia.com`
- eventuais domínios de assets do player

Consequência:

- DNS/TLS/negociação ocorrem na hora;
- qualquer atraso amplia a janela em que o placeholder fica visível;
- isso não causa flicker por si só, mas aumenta a chance de a transição ficar perceptível.

## O que este projeto faz bem

- implementação simples e isolada;
- baixo acoplamento com React;
- boa proteção contra script duplicado;
- placeholder evita tela vazia;
- reserva de layout reduz CLS;
- escolha coerente para vídeo vertical.

## O que este projeto não faz

- não controla lifecycle detalhado do player;
- não trata erros de rede/carregamento do Wistia;
- não mede performance do embed;
- não aplica otimizações explícitas voltadas a Android/WebView;
- não remove o blur progressivamente;
- não usa um estado React para esconder/mostrar o player no momento exato de prontidão.

## Hipóteses práticas para comparar com o outro projeto

Ao investigar o projeto que apresenta flicker no Android, vale comparar estes pontos:

1. Se o outro projeto usa `iframe` ou `wistia-player`.
2. Se o outro projeto também troca de um placeholder para o player real.
3. Se há `filter`, `transform`, `opacity` animada ou `backdrop-filter` na área do vídeo.
4. Se os scripts do Wistia são carregados como `module` ou script tradicional.
5. Se existe SSR/hidratação no outro projeto.
6. Se o player é montado acima da dobra e imediatamente visível.
7. Se há re-renderizações React logo após a montagem do player.
8. Se o container do vídeo está dentro de seções com animação, parallax, `overflow`, `transform` ou background animado.

## Recomendações técnicas para a investigação do bug

Estas recomendações não foram implementadas neste projeto. Elas servem como guia de comparação ou experimentação no outro projeto.

### Testes de isolamento

1. Remover temporariamente `filter: blur(5px)` do placeholder.
2. Trocar o placeholder `:not(:defined)` por uma imagem estática fora do custom element.
3. Testar sem `type="module"` no script da mídia, caso a documentação/versão do embed usada no outro projeto permita.
4. Testar o embed fora de containers com `transform`, `animation` ou backgrounds animados.
5. Testar com poster fixo e só revelar o player após evento de prontidão.

### Testes de rede e paint

1. Adicionar `preconnect` para `https://fast.wistia.com`.
2. Medir a transição em Android real com Chrome DevTools remote debugging.
3. Verificar se o flicker coincide com:
   - definição do custom element;
   - troca do placeholder;
   - início de autoplay;
   - primeiro frame do vídeo;
   - resize do container.

### Estratégia de robustez

Uma abordagem mais robusta em projetos sensíveis a flicker é:

1. manter um poster externo estável;
2. montar o player em camada separada;
3. revelar o player apenas quando estiver pronto;
4. evitar blur/filtros na fase de transição.

## Referências de código

- Declaração do custom element:
  [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:4)
- Injeção do `player.js`:
  [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:40)
- Injeção do script da mídia:
  [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:47)
- Marcação do player:
  [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:220)
- Placeholder com `:not(:defined)`:
  [`src/pages/Institucional.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/pages/Institucional.tsx:219)
- Bootstrap da app sem `StrictMode`:
  [`src/main.tsx`](/home/alberani/Documentos/LP_ROBOTICA_AULAS_INSTITUCIONAL/src/main.tsx:1)

## Conclusão

Neste projeto, o Wistia foi integrado por meio do web component `wistia-player`, com carregamento dinâmico dos scripts e um placeholder baseado em `swatch` para reduzir layout shift e melhorar percepção de carregamento.

A implementação já contém boas decisões de performance visual, mas também tem um ponto de transição sensível: o momento em que o `wistia-player` deixa o estado `:not(:defined)` e assume a renderização real. Em Android, especialmente com `blur` e inicialização assíncrona do custom element, esse trecho é o principal candidato para explicar flicker.
