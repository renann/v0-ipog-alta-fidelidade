import { HomeHeader } from "@/components/home-header"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, Star, Users, Award, TrendingUp, Gift } from "lucide-react"

export default function AlunoDiamantePage() {
  return (
    <>
      <HomeHeader />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb + Header Section */}
        <section className="w-full border-b bg-background py-8">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <BreadcrumbWithItems
              items={[{ label: "Início", href: "/" }, { label: "Programas e Benefícios" }, { label: "Aluno Diamante" }]}
            />
            <div className="mt-6 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Conecte sua rede ao sucesso e ganhe reconhecimento de líder
              </h1>
              <p className="text-lg text-muted-foreground max-w-[700px]">
                O Aluno Diamante é o ecossistema de reconhecimento para os profissionais que, como você, fazem do
                aprendizado contínuo sua maior estratégia. Transforme sua influência em uma jornada de conquistas e
                acelere sua trajetória de sucesso dentro do IPOG.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="w-full bg-background py-6 border-b">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Tabs defaultValue="aluno-diamante" className="w-full">
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
        <section className="w-full py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg leading-relaxed">
                      "Ao indicar 3 colegas para o IPOG, não só ganhei um desconto em minha especialização, mas elevei o
                      nível da minha própria rede. Estar cercada por profissionais que compartilham da mesma visão de
                      excelência do IPOG é o que realmente impulsiona o sucesso de todos."
                    </p>
                    <div>
                      <p className="font-semibold">Maria Silva</p>
                      <p className="text-sm text-muted-foreground">Aluna Diamante desde 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua influência constrói uma jornada de conquistas</h2>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                Compartilhe a excelência do IPOG e seja reconhecido por conectar futuros líderes à melhor escolha para
                suas carreiras.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Descontos que aceleram sua jornada</CardTitle>
                  <CardDescription>
                    Sua jornada de aprendizado contínuo ganha um aliado poderoso. Quanto mais você indica, maiores os
                    descontos para sua próxima formação.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Reconhecimento que destaca sua liderança</CardTitle>
                  <CardDescription>
                    Receba certificados e badges digitais que validam sua influência e o posicionam como um membro de
                    destaque na comunidade de líderes do IPOG.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Networking que gera novas oportunidades</CardTitle>
                  <CardDescription>
                    Fortaleça sua rede profissional ao trazer pessoas de alto potencial para o ecossistema IPOG, criando
                    conexões que abrem portas para o futuro.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* System Explanation */}
        <section className="w-full py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Uma jornada de reconhecimento em 4 passos
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">1. Indique os futuros líderes</h3>
                    <p className="text-muted-foreground">
                      Seja a ponte que conecta sua rede ao sucesso. Compartilhe a experiência IPOG e convide
                      profissionais de destaque para construírem um legado ao seu lado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">2. Acompanhe o início de novas conquistas</h3>
                    <p className="text-muted-foreground">
                      Seja notificado quando sua indicação der o primeiro passo rumo a uma carreira de sucesso e comece
                      a acumular seus reconhecimentos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">3. Acumule suas conquistas</h3>
                    <p className="text-muted-foreground">
                      Cada matrícula confirmada se transforma em pontos que desbloqueiam descontos e vantagens
                      exclusivas para sua carreira.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">4. Impulsione sua carreira</h3>
                    <p className="text-muted-foreground">
                      Invista seus pontos em novas especializações, cursos de extensão e acelere ainda mais sua
                      trajetória de sucesso com o IPOG.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefit Levels */}
        <section className="w-full py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sua jornada no IPOG define seu nível de reconhecimento
              </h2>
              <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
                Quanto maior seu impacto na comunidade, mais exclusivas são as vantagens para acelerar sua próxima
                formação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <Badge className="w-fit mb-2">Nível Inicial</Badge>
                  <CardTitle className="text-2xl">1 Indicação</CardTitle>
                  <CardDescription>Comece a acumular benefícios com sua primeira indicação</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>10% de desconto em cursos EAD</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Certificado digital de reconhecimento</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Acesso a eventos exclusivos online</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1">Indicar para EAD</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Indicar Presencial
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary">Nível Avançado</Badge>
                  <CardTitle className="text-2xl">5 Indicações</CardTitle>
                  <CardDescription>Maximize seus benefícios com múltiplas indicações bem-sucedidas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>25% de desconto em cursos EAD</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>15% de desconto em cursos presenciais</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Badge exclusivo Aluno Diamante</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Prioridade em eventos presenciais</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1">Indicar para EAD</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Indicar Presencial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="w-full py-16 bg-muted/30">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Uma comunidade de sucesso, em números</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12.500+</div>
                  <CardTitle>Alunos Diamante</CardTitle>
                  <CardDescription>Participantes ativos no programa</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">35.000+</div>
                  <CardTitle>Indicações realizadas</CardTitle>
                  <CardDescription>Novos alunos chegaram via indicação</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">R$ 2,5M</div>
                  <CardTitle>Em benefícios distribuídos</CardTitle>
                  <CardDescription>Valor total em descontos concedidos</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Final Testimonial + CTA */}
        <section className="w-full py-16">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <p className="text-lg leading-relaxed">
                      "Com o Aluno Diamante, entendi que o verdadeiro networking é sobre construir pontes para o sucesso
                      coletivo. Compartilhar a experiência IPOG se tornou uma forma de fortalecer minha rede e liderar
                      pelo exemplo. As recompensas são o reconhecimento natural desse impacto."
                    </p>
                    <div>
                      <p className="font-semibold">João Santos</p>
                      <p className="text-sm text-muted-foreground">Aluno Diamante Nível Avançado</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t">
                  <h3 className="text-2xl font-bold mb-4">Conecte-se ao sucesso. Comece a indicar agora.</h3>
                  <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
                    Acesse sua área do aluno, gere seu link exclusivo e comece a transformar sua rede profissional.
                  </p>
                  <Button size="lg">Acessar área do aluno</Button>
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
