import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download } from "lucide-react"

export function MatrizCurricularPsicologia() {
  const periodos = [
    {
      periodo: "1º e 2º Períodos",
      disciplinas: [
        "Introdução à Psicologia",
        "Neuroanatomia e Neurofisiologia",
        "Processos Psicológicos Básicos",
        "Filosofia e Epistemologia",
        "Metodologia Científica",
        "Psicologia do Desenvolvimento I",
      ],
    },
    {
      periodo: "3º e 4º Períodos",
      disciplinas: [
        "Psicologia do Desenvolvimento II",
        "Teorias e Sistemas em Psicologia",
        "Psicologia Social",
        "Psicopatologia I",
        "Avaliação Psicológica I",
        "Estatística Aplicada à Psicologia",
      ],
    },
    {
      periodo: "5º e 6º Períodos",
      disciplinas: [
        "Psicopatologia II",
        "Avaliação Psicológica II",
        "Psicologia Organizacional",
        "Psicologia Clínica",
        "Técnicas de Entrevista",
        "Ética Profissional",
      ],
    },
    {
      periodo: "7º e 8º Períodos",
      disciplinas: [
        "Psicoterapias",
        "Psicologia da Saúde",
        "Psicologia Escolar",
        "Orientação Profissional",
        "Estágio Supervisionado I",
        "TCC I",
      ],
    },
    {
      periodo: "9º e 10º Períodos",
      disciplinas: [
        "Estágio Supervisionado II",
        "Estágio Supervisionado III",
        "Psicologia Comunitária",
        "Tópicos Especiais em Psicologia",
        "TCC II",
        "Atividades Complementares",
      ],
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Matriz Curricular</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça a estrutura completa do curso de Psicologia EAD, com disciplinas organizadas por período para uma
            formação sólida e progressiva.
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {periodos.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.periodo}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.disciplinas.map((disciplina, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{disciplina}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Baixar Grade Curricular Completa
          </Button>
        </div>
      </div>
    </section>
  )
}
