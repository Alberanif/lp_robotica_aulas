---
trigger: manual
---

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscrições Abertas - Efeito Carimbo</title>
    <style>
        /* Estilos base da página */
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f8f5ee; /* Cor de fundo lembrando papel */
            background-image: radial-gradient(#e2dfd5 1px, transparent 1px); /* Textura sutil */
            background-size: 20px 20px;
            font-family: 'Impact', 'Arial Black', sans-serif;
            overflow: hidden;
            position: relative;
        }

        /* Container do carimbo para centralização */
        .carimbo-container {
            position: relative;
            z-index: 10;
        }

        /* Estilo visual do carimbo */
        .carimbo {
            color: #d32f2f; /* Vermelho carimbo */
            border: clamp(5px, 1vw, 10px) solid #d32f2f;
            padding: clamp(10px, 3vw, 20px) clamp(20px, 5vw, 40px);
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            text-transform: uppercase;
            text-align: center;
            line-height: 1.1;
            border-radius: 15px;
            
            /* Efeito de mesclagem para parecer tinta no papel */
            mix-blend-mode: multiply;
            
            /* Estado inicial antes da animação */
            opacity: 0;
            transform: scale(3) rotate(20deg);
            
            /* Sombra sutil para dar um leve relevo na tinta */
            text-shadow: 2px 2px 0px rgba(211, 47, 47, 0.2);
            box-shadow: inset 0 0 10px rgba(211, 47, 47, 0.1), 0 0 10px rgba(211, 47, 47, 0.1);
        }

        /* Classe que dispara a animação */
        .carimbo.animar {
            /* Duração, curva de aceleração (impacto forte) e forwards para manter o estado final */
            animation: baterCarimbo 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        /* Keyframes da animação do carimbo */
        @keyframes baterCarimbo {
            0% {
                opacity: 0;
                transform: scale(4) rotate(25deg);
                filter: blur(10px);
            }
            50% {
                opacity: 1;
                transform: scale(0.9) rotate(-4deg); /* Bate e encolhe um pouco (impacto) */
                filter: blur(0px);
            }
            75% {
                transform: scale(1.05) rotate(-6deg); /* Rebote para cima */
            }
            100% {
                opacity: 0.85; /* Leve transparência de tinta */
                transform: scale(1) rotate(-5deg); /* Posição final tortinha */
            }
        }

        /* Botão para repetir a animação (Apenas para teste) */
        .btn-repetir {
            position: fixed;
            bottom: 30px;
            padding: 12px 24px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 5px;
            font-family: sans-serif;
            font-weight: bold;
            cursor: pointer;
            z-index: 20;
            transition: background 0.2s;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .btn-repetir:hover {
            background-color: #555;
        }

        /* Partículas de impacto (tinta voando) */
        .particula {
            position: absolute;
            background-color: #d32f2f;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
            z-index: 5;
        }

        .animar-particula {
            animation: voarParticula 0.6s ease-out forwards;
        }

        @keyframes voarParticula {
            0% {
                opacity: 0.8;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(var(--tx), var(--ty)) scale(0);
            }
        }
    </style>
</head>
<body>

    <div class="carimbo-container" id="container">
        <div class="carimbo" id="meuCarimbo">
            Inscrições<br>Abertas
        </div>
    </div>

    <!-- Botão de teste -->
    <button class="btn-repetir" onclick="executarAnimacao()">Repetir Animação</button>

    <script>
        const carimbo = document.getElementById('meuCarimbo');
        const container = document.getElementById('container');

        // Função para criar as partículas de poeira/tinta
        function criarParticulas() {
            // Remove partículas antigas
            document.querySelectorAll('.particula').forEach(p => p.remove());

            // Cria 15 partículas ao redor do centro
            for (let i = 0; i < 15; i++) {
                const particula = document.createElement('div');
                particula.classList.add('particula');
                
                // Tamanho aleatório para a partícula
                const tamanho = Math.random() * 6 + 2; 
                particula.style.width = `${tamanho}px`;
                particula.style.height = `${tamanho}px`;

                // Posição inicial no centro
                particula.style.left = '50%';
                particula.style.top = '50%';

                // Calcula um destino aleatório em um raio
                const angulo = Math.random() * Math.PI * 2;
                const distancia = Math.random() * 150 + 50; // Quão longe vai voar
                
                const tx = Math.cos(angulo) * distancia + 'px';
                const ty = Math.sin(angulo) * distancia + 'px';
                
                // Passa as variáveis CSS para o keyframe
                particula.style.setProperty('--tx', tx);
                particula.style.setProperty('--ty', ty);

                container.appendChild(particula);

                // Espera o tempo exato do impacto da animação do carimbo (aprox 200ms)
                setTimeout(() => {
                    particula.classList.add('animar-particula');
                }, 200);
            }
        }

        // Função principal que reseta e dispara a animação
        function executarAnimacao() {
            // Remove a classe para resetar
            carimbo.classList.remove('animar');
            
            // "Hack" do DOM para forçar a re-renderização imediata
            void carimbo.offsetWidth; 
            
            // Adiciona a classe novamente para iniciar
            carimbo.classList.add('animar');
            
            // Dispara as partículas em sincronia
            criarParticulas();
        }

        // Executa a animação automaticamente assim que a página carrega
        window.addEventListener('load', () => {
            // Um pequeno delay (opcional) de 300ms só para não ser abrupto no carregamento real da web
            setTimeout(executarAnimacao, 300);
        });
    </script>
</body>
</html>