import { GraduationCap, TrendingUp, RefreshCw, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProfessionalMoment() {
  const moments = [
    {
      title: "Sou estudante",
      subtitle: "Graduação",
      icon: GraduationCap,
      href: "/graduacao",
    },
    {
      title: "Quero me especializar",
      subtitle: "Pós-Graduação",
      icon: TrendingUp,
      href: null,
    },
    {
      title: "Preciso me atualizar",
      subtitle: "Extensão",
      icon: RefreshCw,
      href: null,
    },
    {
      title: "Sou empresa",
      subtitle: "Enterprise",
      icon: Building2,
      href: null,
    },
  ]

  return (
    <section className="w-full px-4 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Qual é o seu momento profissional?</h2>
            <p className="text-lg text-muted-foreground">Descubra a formação ideal para sua trajetória</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {moments.map((moment, index) => {
              const CardWrapper = moment.href ? Link : "div"
              const cardProps = moment.href ? { href: moment.href } : {}

              return (
                <CardWrapper key={index} {...cardProps}>
                  <Card
                    className={`h-full ${moment.href ? "cursor-pointer hover:bg-accent transition-colors" : "cursor-default"}`}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-8 gap-4 h-full">
                      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                        <moment.icon className="h-10 w-10 text-foreground" />
                      </div>
                      <div className="text-center space-y-1">
                        <h3 className="text-lg font-semibold">{moment.title}</h3>
                        <p className="text-sm text-muted-foreground">{moment.subtitle}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CardWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
