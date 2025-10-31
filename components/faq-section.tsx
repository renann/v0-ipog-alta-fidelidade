"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  pergunta: string
  resposta: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  bgColor?: string
}

export function FAQSection({
  title = "Perguntas Frequentes",
  subtitle,
  items,
  bgColor = "bg-background",
}: FAQSectionProps) {
  return (
    <section className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{item.pergunta}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
