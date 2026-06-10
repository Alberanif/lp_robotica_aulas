import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg px-6">
            <h2 className="text-4xl font-title font-bold text-brand-blue mb-4">
                Página Não Encontrada
            </h2>
            <p className="font-body text-gray-700 mb-8 max-w-md text-center">
                Ops! Parece que a página que você está procurando não existe ou foi removida.
            </p>
            <Link href="/">
                <Button variant="primary">Voltar para o Início</Button>
            </Link>
        </div>
    );
}
