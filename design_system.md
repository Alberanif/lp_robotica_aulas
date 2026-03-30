# Design System - Landing Page

Este documento detalha os principais elementos visuais e a identidade da landing page, servindo como guia para a replicação do estilo em outros projetos. A estética geral segue uma linha Criativa e Ousada, com fortes influências do estilo *Neo-Brutalista* e *Comic Book*.

## 1. Padrão de Cores

A paleta de cores principal é vibrante e contrastante:

| Token | Cor | Hexadecimal | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Azul** | ![#01a1e1](https://via.placeholder.com/15/01a1e1/000000?text=+) | `#01a1e1` | Ações, interatividade e sombras de destaque |
| **Amarelo** | ![#ffd900](https://via.placeholder.com/15/ffd900/000000?text=+) | `#ffd900` | Destaques, atenção visual e ícones de alerta |
| **Vermelho** | ![#f01600](https://via.placeholder.com/15/f01600/000000?text=+) | `#f01600` | Urgência, conversão e pinos de mapa |
| **Verde** | ![#45b227](https://via.placeholder.com/15/45b227/000000?text=+) | `#45b227` | Feedback positivo, sucesso e highlights de texto |
| **Background** | ![#faefd9](https://via.placeholder.com/15/faefd9/000000?text=+) | `#faefd9` | Fundo padrão das páginas e seções (tom creme/bege) |
| **Preto/Dark** | ![#111111](https://via.placeholder.com/15/111111/000000?text=+) | `#111111` (ou `#1a1a1a`) | Textos gerais, bordas espessas e sombras rígidas |

## 2. Padrão de Fontes

O uso tipográfico busca modernidade e legibilidade, mesmo nas fontes mais pesadas. A aplicação é dividida por hierarquia:

- **Títulos e Destaques Principais:** Define-se pelo uso da família **Plus Jakarta Sans**, **Neue Montreal** ou **Fredoka**. Sempre aplicadas com alto contraste de peso tipográfico (fontes como `font-black` ou `font-bold`), convertidas para letras maiúsculas (`uppercase`), e com o espaçamento ajustado de acordo com o espaço visual.
- **Textos de Corpo e Subtítulos:** Fazem o uso preferencial da família **Montserrat** (ou Plus Jakarta Sans), aplicados num tom escuro da marca (`#111111`). Para assegurar boa leitura, contam com peso de linha (`font-weight`) mediano e linhas mais espaçadas em parágrafos.

## 3. Critério para Colorir as Letras dos Títulos

Os grandes títulos da página (como Hero ou Seções de Destaque) possuem uma regra de estilo marcante. A frase inteira é separada por caractere/letra (`<span className="split-char">`) que obedecem a uma sequência de intercala de cores.

A regra de ciclo estilizada via CSS é uma divisão exata de 4 compassos para cada caractere:
1. O primeiro de 4 caracteres: **Azul** (`var(--color-brand-blue)`)
2. O segundo de 4 caracteres: **Amarelo** (`var(--color-brand-yellow)`)
3. O terceiro de 4 caracteres: **Vermelho** (`var(--color-brand-red)`)
4. O quarto de 4 caracteres: **Verde** (`var(--color-brand-green)`)

Adicionalmente e de forma obrigatória, as letras recebem **um forte e espesso contorno** simulando estilo impresso ("Comic Book") feito por *webkit-text-stroke*. A espessura original costuma ser `4px #111111` em telas de mesa (desktops) e fica reduzida em telas pequenas (`2px #111111`), para que as palavras não borrem. O ordenamento do preenchimento utiliza `paint-order: stroke fill;`.

## 4. Identidade da Página (Elementos Gerais)

O design da UI como um todo adota uma temática de divertimento que mescla design "bruto e estrutural" com acabamento limpo. Esses traços criam uma assinatura inesquecível:

### A. Sombras Sólidas e Painéis "Neo-Brutalistas"
- **Ausência Quase Total de Desfoque nas Sombras:** Sombras com estilo "drop-shadow" natural são raramente usadas, optando-se por **sombras duras (Hard Shadows)** deslocadas.
    - Ex: Caixas, imagens grandes ou painéis principais tem fortes blocos coloridos como sombras de deslocamento direcional como `shadow-[12px_12px_0px_#01a1e1]` usando preferencialmente o Azul Brand ou Preto sólido.
    - Ex: Em componentes ou botões menores, prefere-se o uso de `shadow-[4px_4px_0px_#111111]` ou `shadow-[6px_6px_0px_#111111]`.
- **Bordas Grossas Marcadas:** Praticamente toda estrutura em relevo exige bordas delimitadoras espessas `border-[3px]` ou `border-[4px] border-[#111111]`.
- **Raios Arredondados Altos (Border Radius):** Ainda que utilize estilos brutos com borda grossa, o estilo descarta cantos "secos de bloco", trocando-os por cantos bem arredondados (`rounded-2xl` e `rounded-[2rem]`).

### B. Elementos "Highlight" Direcionados no Texto
- **Estilo de Destaque Sublinhado Remodelado:** Trechos importantes no meio de simples parágrafos foram alterados; perdem marcações comuns de itálico/bold e recebem "Plaquinhas coloridas" ou blocos cômicos no texto.
- São feitos aplicando Padding generoso em volta da frase, adotando fundo em coloração sólida de contraste (normalmente o **Verde** com texto em **Branco**), adicionando a devida **sombra dura** e contorno que seguem pela tela.

### C. Elementos Colados, Estampados e Orgânicos (Efeitos Físicos)
- **Fitas Adesivas Simuladas:** Várias fotos e contêineres recebem uma falsa fita crepe colada de propósito para passar a visão de cartaz preso nas paredes, montada puramente com `bg-yellow-200/80` atravessada sobre a quina do componente original com ângulos aleatórios (`rotate-[-2deg]`).
- **Aviso Cômico de Erro e Distorção:** Elementos decorativos perdem o alinhamento central perfeito propositalmente (`rotate-[-1deg]`, `rotate-2`); pequenos marcadores ou carimbos (`animate-stamp`) em pop up visual tem movimentos vibrantes com leves rotações desarmonizados com o eixo restrito da grade visual, dando a alusão visual do mundo não-digital.
