"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { openAssistantForConsultor } from "@/lib/assistant-events"

export function FaqPsicologia() {
  const perguntas = [
    {
      pergunta: "Qual é a duração e carga horária do curso?",
      resposta: "A graduação tem duração média de 5 anos, com carga horária total reconhecida pelo MEC.",
    },
    {
      pergunta: "Há atividades presenciais obrigatórias?",
      resposta: "Sim, apenas em estágios e práticas supervisionadas, conforme exigência do Conselho de Psicologia.",
    },
    {
      pergunta: "Como são feitas as avaliações no EAD?",
      resposta: "As avaliações são híbridas: atividades online e provas presenciais nas unidades IPOG.",
    },
    {
      pergunta: "O diploma é igual ao da modalidade presencial?",
      resposta: "Sim. O diploma EAD tem o mesmo valor e reconhecimento do presencial.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Será que consigo aprender de verdade no EAD?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sim. E no IPOG, você não aprende só o conteúdo — você vive o aprendizado. Nosso modelo EAD combina encontros
            ao vivo, acompanhamento ativo e atividades que conectam teoria e prática desde o primeiro semestre.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <Accordion type="single" collapsible className="w-full">
            {perguntas?.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.pergunta}</AccordionTrigger>
                <AccordionContent>{item.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" onClick={openAssistantForConsultor}>
            Conversar com um Consultor Acadêmico
          </Button>
        </div>
      </div>
    </section>
  )
}
