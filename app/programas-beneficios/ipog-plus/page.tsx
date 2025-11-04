import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Clock, Users, Award, TrendingUp, ArrowRight, Quote } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function IpogPlusPage() {
  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Header Section */}
        <section className="w-full border-b bg-background py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Programas e Benefícios", href: "/programas-beneficios" },
                { label: "IPOG+" },
              ]}
            />
            <div className="mt-6 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Sua evolução profissional não para. Acelere com o IPOG+.
              </h1>
              <p className="text-lg text-muted-foreground max-w-[700px]">
                Um programa exclusivo para quem já faz parte da nossa história. Transforme seu conhecimento em
                autoridade e sua fidelidade em vantagens reais para ampliar sua especialização e se manter à frente no
                mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="w-full bg-background py-6 border-b">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="ipog-plus" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="aluno-diamante" asChild>
                  <Link href="/programas-beneficios/aluno-diamante">Aluno Diamante</Link>
                </TabsTrigger>
                <TabsTrigger value="ipog-plus" asChild>
                  <Link href="/programas-beneficios/ipog-plus">IPOG+</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Initial Testimonial */}
        <section className="w-full bg-muted/30 py-12">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg italic text-muted-foreground">
                      "Cada nova especialização no IPOG foi um degrau na minha carreira. Com o IPOG+, sinto que a
                      instituição não só reconhece minha trajetória, mas investe junto comigo no meu crescimento
                      contínuo."
                    </p>
                    <div>
                      <p className="font-semibold">Márcio Dias</p>
                      <p className="text-sm text-muted-foreground">Aluno IPOG+</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Benefits Section */}
        <section className="w-full bg-background py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                A escolha que continua conectando você ao sucesso.
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sabemos que profissionais de destaque nunca param de evoluir. O IPOG+ é nosso compromisso com a sua
                jornada de lifelong learning. Um programa estratégico que transforma seu histórico acadêmico em
                benefícios progressivos, permitindo que você amplie seu portfólio de especializações com roteiros
                personalizados e a máxima eficiência, aproveitando formações anteriores para acelerar sua jornada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Reconhecimento contínuo</CardTitle>
                  <CardDescription>
                    Cada nova formação no IPOG é reconhecida e recompensada com benefícios progressivos que valorizam
                    sua dedicação ao aprendizado.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Descontos progressivos</CardTitle>
                  <CardDescription>
                    Quanto mais você estuda, maiores são os descontos. Seu histórico acadêmico se transforma em
                    vantagens financeiras reais.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full bg-muted/30 py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Benefícios pensados para impulsionar sua trajetória
                </h2>
                <p className="text-lg text-muted-foreground">
                  Um programa pensado para quem acredita no poder transformador da educação continuada.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-lg font-semibold">Reconhecimento que cresce com você</p>
                        <p className="text-muted-foreground">
                          Sua dedicação se transforma em vantagens reais. A cada nova formação, seus benefícios e
                          descontos aumentam progressivamente.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-lg font-semibold">Vantagens cumulativas por tempo de fidelidade</p>
                        <p className="text-muted-foreground">
                          Quanto mais tempo você estuda conosco, maiores são as recompensas
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-lg font-semibold">Acesso antecipado a novas formações</p>
                        <p className="text-muted-foreground">
                          Esteja sempre um passo à frente. Tenha prioridade em matrículas e acesso a lançamentos,
                          módulos ao vivo e eventos exclusivos antes do mercado.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-lg font-semibold">Networking de elite</p>
                        <p className="text-muted-foreground">
                          Conecte-se a uma rede exclusiva de profissionais de alto nível que, como você, escolheram o
                          IPOG para construir uma carreira de sucesso.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Continuous Learning Section */}
        <section className="w-full bg-background py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Pronto para o próximo nível?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Se você já é aluno ou ex-aluno IPOG, fale com um de nossos consultores e descubra todos os benefícios
                que o IPOG+ reserva para sua carreira.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Acesso antecipado</CardTitle>
                  <CardDescription className="text-base">
                    Prioridade em matrículas e eventos exclusivos. Seja sempre o primeiro a aproveitar as novidades do
                    IPOG.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Rede exclusiva de alunos IPOG+</CardTitle>
                  <CardDescription className="text-base">
                    Networking profissional com outros alunos comprometidos com o aprendizado contínuo e crescimento de
                    carreira.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full bg-muted/30 py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Dados sobre o programa</h2>
              <p className="text-lg text-muted-foreground">
                Alunos que continuaram sua jornada de aprendizado com o IPOG+
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-8 text-center space-y-4">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">Taxa de retorno</p>
                  <p className="text-5xl md:text-6xl font-bold text-primary">82%</p>
                  <p className="text-lg text-muted-foreground">dos alunos retornam ao IPOG para nova formação</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 text-center space-y-4">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground font-semibold">
                    Até 75% de desconto
                  </p>
                  <p className="text-5xl md:text-6xl font-bold text-primary">75%</p>
                  <p className="text-lg text-muted-foreground">
                    Seu investimento em educação contínua com um retorno ainda maior, a partir da sua quarta
                    pós-graduação.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">Dados baseados em pesquisa interna.</p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full bg-background py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-8 space-y-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4 flex-1">
                    <p className="text-lg italic text-muted-foreground">
                      "O IPOG+ é a prova de que a instituição é uma verdadeira parceira de carreira. Os benefícios me
                      incentivaram a buscar a terceira especialização, o que foi decisivo para assumir uma nova
                      liderança."
                    </p>
                    <div>
                      <p className="font-semibold">Márcio Dias</p>
                      <p className="text-sm text-muted-foreground">3 especializações concluídas</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button size="lg" className="text-lg px-8">
                    Falar com um consultor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
