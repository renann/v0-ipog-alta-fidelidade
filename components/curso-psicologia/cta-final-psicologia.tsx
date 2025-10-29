"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Info } from "lucide-react"
import { useState } from "react"
import { openAssistantForPrice, openAssistantForConsultor } from "@/lib/assistant-events"

export function CtaFinalPsicologia() {
  const [isPriceVisible, setIsPriceVisible] = useState(false)

  const handleRevealPrice = () => {
    openAssistantForPrice()
  }

  return (
    <section id="preco" className="w-full py-12 md:py-16 bg-gray-100 scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Comece agora sua trajetória com o IPOG e faça parte de uma comunidade que acredita no poder do aprendizado
              transformador
            </h2>

            <p className="text-lg text-gray-600">
              Curso criado para quem busca protagonismo, com metodologia aplicada, professores de mercado e
              acompanhamento próximo em todas as etapas.
            </p>
          </div>

          <Card className="relative bg-white rounded-2xl p-8 md:p-10 shadow-sm space-y-6">
            {!isPriceVisible && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center z-10">
                <Button size="lg" onClick={handleRevealPrice} className="px-8 bg-black hover:bg-gray-800">
                  Clique para ver o valor deste curso
                </Button>
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg text-gray-600">Taxa de matrícula</p>
                <p className="text-5xl md:text-6xl font-bold">R$ 100,00</p>
                <p className="text-sm text-gray-600">Pagamento único para qualificação</p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-left">
                    A matrícula garante sua qualificação e análise de perfil. Após aprovação, nossa equipe comercial
                    entrará em contato para apresentar as condições de mensalidade e formas de pagamento.
                  </p>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <p className="text-sm font-medium text-gray-700">Informações sobre o curso:</p>
                <p className="text-base text-gray-600">Mensalidade: R$ 499,00</p>
                <p className="text-sm text-gray-600">Duração: 18 meses • Total do curso: R$ 12.582,00</p>
              </div>
            </div>

            <Button size="lg" className="w-full md:w-auto px-12 bg-black hover:bg-gray-800">
              Pagar matrícula agora
            </Button>

            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                <span className="text-sm font-medium">Cursos reconhecidos pelo MEC</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-5 h-5" />
                <span className="text-sm font-medium">Comunidade com +70 mil alunos</span>
              </div>
            </div>
          </Card>

          <div className="space-y-4 text-gray-600">
            <p className="text-base">Próximas turmas iniciam em Novembro</p>
            <p className="text-base font-medium">Garanta condições exclusivas até 30 de Outubro</p>

            <Button onClick={openAssistantForConsultor} variant="link" className="text-black underline">
              Fale com um consultor IPOG
            </Button>

            <p className="text-sm">Parcelamento facilitado disponível após qualificação</p>
          </div>
        </div>
      </div>
    </section>
  )
}
