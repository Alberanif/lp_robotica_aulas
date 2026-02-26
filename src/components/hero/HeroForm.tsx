"use client";

import { useState } from "react";

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function HeroForm() {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !celular) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, celular }),
      });

      if (response.ok) {
        setStatus("success");
        setNome("");
        setCelular("");

        // Retorna ao estado inicial após 3 segundos
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div id="formulario-contato" className="bg-white rounded-card shadow-2xl p-5 md:p-6 flex flex-col gap-4">
      <style>{`
        .hero-botao-mvm {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 16px 20px;
            width: 100%;
            background-color: #45b227;
            border: 3px solid #111111;
            border-radius: 16px;
            box-shadow: 5px 5px 0px #111111;
            color: #FFFFFF;
            text-decoration: none;
            font-size: 16px;
            font-weight: 800;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            z-index: 1;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-family: var(--font-montserrat, 'Montserrat', sans-serif);
        }

        .hero-botao-mvm:disabled {
            background-color: #a8d59d;
            cursor: not-allowed;
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px #111111;
        }

        .hero-botao-mvm .button-content {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-shadow: 0px 1px 2px rgba(0,0,0,0.3);
        }

        .hero-botao-mvm:not(:disabled):hover {
            transform: translate(-2px, -2px);
            box-shadow: 7px 7px 0px #111111;
            filter: brightness(1.05);
        }

        .hero-botao-mvm:not(:disabled):active {
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0px #111111;
        }
      `}</style>

      <div>
        <p className="font-display font-bold text-brand-dark text-xl md:text-2xl leading-tight text-center">
          Traga seu filho para uma aula experimental e veja ele se apaixonar pelo aprender novas habilidades
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="nome"
            className="font-body text-sm font-medium text-gray-700"
          >
            Nome do Responsável
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: João Pedro"
            required
            disabled={isSubmitting}
            className="border border-gray-200 rounded-lg px-4 py-3 font-body text-brand-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all disabled:bg-gray-50"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="celular"
            className="font-body text-sm font-medium text-gray-700"
          >
            Telefone/Whatsapp
          </label>
          <input
            id="celular"
            type="tel"
            value={celular}
            onChange={(e) => setCelular(maskPhone(e.target.value))}
            placeholder="(61) 99999-9999"
            required
            disabled={isSubmitting}
            className="border border-gray-200 rounded-lg px-4 py-3 font-body text-brand-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all disabled:bg-gray-50"
          />
        </div>

        <div className="mt-3 w-full">
          <button
            type="submit"
            className="hero-botao-mvm"
            disabled={isSubmitting}
          >
            <span className="button-content">
              {isSubmitting ? "Enviando..." : status === "success" ? "Enviado com sucesso!" : "Transformar o Futuro do Meu Filho"}
            </span>
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-500 font-body text-sm font-bold text-center mt-1">
            Houve um erro ao enviar. Tente novamente!
          </p>
        )}
      </form>
    </div>
  );
}
