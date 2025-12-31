import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    horario: "",
    telefone: "",
    comentario: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.idade || !formData.horario || !formData.telefone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Salvar dados no banco de dados
      const { error } = await supabase
        .from('interest_forms')
        .insert([
          {
            nome: formData.nome,
            idade: formData.idade,
            horario: formData.horario,
            telefone: formData.telefone,
            comentario: formData.comentario || null
          }
        ]);

      if (error) throw error;

      // Redirecionar para WhatsApp após salvar
      const whatsappUrl = 'https://wa.me/5561991864835?text=Olá%21%20Eu%20quero%20saber%20mais%20sobre%20as%20aulas%20presenciais%20de%20robótica%21';
      window.open(whatsappUrl, '_blank');
      
      toast.success("Dados enviados com sucesso! Redirecionando para WhatsApp...");
      
      // Limpar formulário
      setFormData({
        nome: "",
        idade: "",
        horario: "",
        telefone: "",
        comentario: ""
      });
    } catch (error) {
      console.error('Erro ao salvar formulário:', error);
      toast.error("Erro ao enviar dados. Por favor, tente novamente.");
    }
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/5561991864835?text=Olá%21%20Eu%20quero%20saber%20mais%20sobre%20as%20aulas%20presenciais%20de%20robótica%21', '_blank');
  };

  return (
    <section id="formulario" className="py-12 md:py-20 bg-muted/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-fredoka text-3xl md:text-4xl font-bold mb-4">
              <span className="text-lego-yellow text-stroke">Se</span>{' '}
              <span className="text-lego-red text-stroke">você</span>{' '}
              <span className="text-lego-blue text-stroke">chegou</span>{' '}
              <span className="text-lego-green text-stroke">até</span>{' '}
              <span className="text-lego-blue text-stroke">aqui,</span>{' '}
              <span className="text-lego-red text-stroke">só</span>{' '}
              <span className="text-lego-yellow text-stroke">faltam</span>{' '}
              <span className="text-lego-green text-stroke">20</span>{' '}
              <span className="text-lego-blue text-stroke">segundos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário rápido:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome do responsável *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="idade">Idade da criança *</Label>
              <Input
                id="idade"
                type="number"
                min="4"
                max="12"
                value={formData.idade}
                onChange={(e) => setFormData({...formData, idade: e.target.value})}
                placeholder="Entre 4 e 12 anos"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="horario">Melhor horário *</Label>
              <Select 
                value={formData.horario} 
                onValueChange={(value) => setFormData({...formData, horario: value})}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o horário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manha">Manhã</SelectItem>
                  <SelectItem value="tarde">Tarde</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
              <Input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                placeholder="(61) 99999-9999"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comentario">Comentário (opcional)</Label>
              <Textarea
                id="comentario"
                value={formData.comentario}
                onChange={(e) => setFormData({...formData, comentario: e.target.value})}
                placeholder="Alguma dúvida ou observação?"
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-lg shadow-lg">
              Reservar minha vaga
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Após o envio, nossa equipe entra em contato para confirmar turma e primeiro dia de aula.
            </p>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Ou prefere falar direto?</p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleWhatsAppDirect}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
