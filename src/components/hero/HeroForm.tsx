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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Dados do formulário:", { nome, celular });
  }

  return (
    <div id="formulario-contato" className="bg-white rounded-card shadow-2xl p-6 md:p-8 flex flex-col gap-4">
      <div>
        <p className="font-display font-bold text-brand-dark text-xl md:text-2xl leading-tight">
          Garanta a vaga do seu filho!
        </p>
        <p className="font-body text-gray-500 text-sm mt-1">
          Preencha abaixo e entraremos em contato pelo WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="nome"
            className="font-body text-sm font-medium text-gray-700"
          >
            Nome da criança
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: João Pedro"
            required
            className="border border-gray-200 rounded-lg px-4 py-3 font-body text-brand-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="celular"
            className="font-body text-sm font-medium text-gray-700"
          >
            Celular / WhatsApp
          </label>
          <input
            id="celular"
            type="tel"
            value={celular}
            onChange={(e) => setCelular(maskPhone(e.target.value))}
            placeholder="(61) 99999-9999"
            required
            className="border border-gray-200 rounded-lg px-4 py-3 font-body text-brand-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          className="bg-brand-red hover:bg-red-700 text-white font-display font-bold uppercase py-4 rounded-lg tracking-wide text-base transition-colors mt-1 cursor-pointer"
        >
          Quero Garantir a Vaga!
        </button>
      </form>

      <p className="font-body text-xs text-gray-400 text-center">
        Vagas limitadas. Sem compromisso.
      </p>
    </div>
  );
}
