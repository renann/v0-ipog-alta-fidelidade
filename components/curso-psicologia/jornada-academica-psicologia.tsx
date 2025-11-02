"use client"

import { Button } from "@/components/ui/button"
import { openAssistantForMatriz } from "@/lib/assistant-events"

export function JornadaAcademicaPsicologia() {
  const etapas = [
    {
      numero: "1",
      title: "Fundamentos da Psicologia",
      description: "Descubra as raízes teóricas e éticas da profissão.",
    },
    {
      numero: "2",
      title: "Psicologia do Desenvolvimento",
      description: "Compreenda como crescemos e nos transformamos ao longo da vida.",
    },
    {
      numero: "3",
      title: "Psicologia Social e Organizacional",
      description: "Explore o impacto das relações humanas nas instituições.",
    },
    {
      numero: "4",
      title: "Psicologia Clínica",
      description: "Aprenda técnicas de escuta e intervenção, mesmo no formato digital.",
    },
    {
      numero: "5",
      title: "Psicologia Contemporânea",
      description: "Mergulhe em novas abordagens e temas atuais como ansiedade, redes sociais e propósito.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Do primeiro insight à prática profissional</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A graduação em Psicologia EAD do IPOG foi desenhada para o estudante que quer aprender com autonomia, mas
            sem abrir mão da troca humana. Cada módulo representa uma etapa de autodescoberta e domínio das bases
            científicas da mente e do comportamento.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {etapas?.map((etapa, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg flex-shrink-0">
                {etapa.numero}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold mb-2">{etapa.title}</h3>
                <p className="text-muted-foreground">{etapa.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" onClick={openAssistantForMatriz}>
            Ver matriz curricular completa
          </Button>
        </div>
      </div>
    </section>
  )
}
