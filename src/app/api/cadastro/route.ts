import { NextResponse } from 'next/server';

// Esta rota de API roda apenas no lado do servidor (Server-Side), 
// ocultando a URL real do Webhook do navegador do usuário.
const WEBHOOK_URL = 'https://n8nwebhook.artificialmenteia.com/webhook/cadastro';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validar os dados recebidos (Nome e Celular)
        if (!body.nome || !body.celular) {
            return NextResponse.json(
                { message: 'Nome e Celular são obrigatórios' },
                { status: 400 }
            );
        }

        // Faz o envio para o webhook real do n8n de forma oculta
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Passa os dados recebidos pelo formulário para o Webhook
            body: JSON.stringify({
                nome: body.nome,
                celular: body.celular,
                origem: 'Landing Page Robótica BSB',
                dataRegistro: new Date().toISOString()
            }),
        });

        if (!response.ok) {
            throw new Error(`Erro no webhook: ${response.statusText}`);
        }

        return NextResponse.json({ success: true, message: 'Cadastro enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar para webhook:', error);
        return NextResponse.json(
            { success: false, message: 'Erro interno ao processar cadastro' },
            { status: 500 }
        );
    }
}
