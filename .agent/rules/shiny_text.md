---
trigger: manual
---

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botão com Efeito Shine</title>
    <!-- Importação da fonte Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">
    <style>
        /* Estilo para centrar o exemplo no ecrã */
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #111; /* Fundo escuro para destacar o brilho */
        }

        /* Código original do Uiverse.io por neerajbaniwal */
        .btn-shine {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 12px 48px;
            color: #fff;
            background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
            background-position: 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shine 3s infinite linear;
            animation-fill-mode: forwards;
            -webkit-text-size-adjust: none;
            font-weight: 600;
            font-size: 16px;
            text-decoration: none;
            white-space: nowrap;
            font-family: "Poppins", sans-serif;
        }

        /* Definições de Animação para compatibilidade */
        @-moz-keyframes shine {
            0% { background-position: 0; }
            60% { background-position: 180px; }
            100% { background-position: 180px; }
        }

        @-webkit-keyframes shine {
            0% { background-position: 0; }
            60% { background-position: 180px; }
            100% { background-position: 180px; }
        }

        @-o-keyframes shine {
            0% { background-position: 0; }
            60% { background-position: 180px; }
            100% { background-position: 180px; }
        }

        @keyframes shine {
            0% { background-position: 0; }
            60% { background-position: 180px; }
            100% { background-position: 180px; }
        }
    </style>
</head>
<body>

    <a href="#" class="btn-shine">Shiny text</a>

</body>
</html>