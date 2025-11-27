import { HomeHeader } from "@/components/home-header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { CtaFinal } from "@/components/cta-final"
import { CursoRestritoBadge } from "@/components/curso-restrito-badge"
import { TrilhaAprendizado } from "@/components/trilha-aprendizado"
import { Clock, Award, TrendingUp, Briefcase, Brain, Users, BookOpen } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Autoridade } from "@/components/autoridade"

export default function AvaliacaoPsicologicaPage() {
  return (
    <div className="min-h-screen bg-background">
      <HomeHeader />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[
                { label: "Início", href: "/" },
                { label: "Pós-Graduação", href: "/pos-graduacao" },
                { label: "Avaliação Psicológica" },
              ]}
            />
          </div>
        </div>
        <Hero
          badge="PÓS-GRADUAÇÃO"
          modalidade="Ao Vivo"
          title="Pós-Graduação em Avaliação Psicológica"
          description="Prepare-se para atuar com excelência nos contextos mais desafiadores da Psicologia, dominando as análises com profundidade, precisão e ética."
          valueBadges={[
            { icon: <Clock className="h-5 w-5" />, text: "648h de Carga Horária" },
            { icon: <Users className="h-5 w-5" />, text: "Corpo Docente de Referência" },
            { icon: <Award className="h-5 w-5" />, text: "Certificação Internacional Rorschach (R-PAS)" },
          ]}
          primaryCTA={{ text: "Inscrever-se agora", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <div className="max-w-screen-xl mx-auto px-4 pb-8 md:pt-8">
          <CursoRestritoBadge requiredDegree="Psicologia" />
        </div>
        <Modalidades
          title="A mesma excelência, em formatos que se adaptam à sua carreira"
          subtitle="Escolha o formato que melhor se encaixa na sua rotina e objetivos profissionais."
          modalidades={[
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "Presencial",
              descricao: "Para quem aprende melhor com a prática e valoriza o networking presencial.",
              beneficios: [
                "Laboratórios com protocolos originais e simulações de entrevistas.",
                "Estações rotativas de prática supervisionada.",
                "Interação direta e construção de uma rede profissional sólida.",
                "Dinâmicas gamificadas para uma experiência imersiva.",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "On-line e Ao vivo",
              descricao: "Para quem busca ampliar seu repertório técnico com a conveniência do ambiente digital.",
              beneficios: [
                "Interação em tempo real com docentes e colegas via videoconferência.",
                "Laboratórios síncronos de casos complexos (TDAH/TEA, NRs).",
                "Demonstrações práticas do uso de IA e scoring automatizado.",
                "Acesso à biblioteca digital e gravação de módulos-chave.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "PÓS-GRADUAÇÃO",
              titulo: "EAD",
              descricao: "Para quem busca total autonomia para conciliar carreira e especialização.",
              beneficios: [
                "Estude no seu ritmo, de onde estiver.",
                "Acesse nosso conteúdo autoral exclusivo, criado por especialistas.",
                "Metodologia comprovada com certificação reconhecida pelo MEC.",
                "Suporte rápido e eficiente de professores e tutores.",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
          ]}
        />
        <Trilha
          title="Uma Matriz Curricular Robusta para uma Atuação de Destaque"
          subtitle="Desenvolva competências práticas e estratégicas em uma jornada de aprendizado projetada por especialistas de mercado."
          etapas={[
            {
              titulo: "Módulo 1: Fundamentos da Avaliação e Ética",
              descricao: "Base sólida em conceitos, técnicas e questões éticas da avaliação psicológica",
              beneficios: [
                "01. Introdução à Avaliação Psicológica e Questões Éticas no uso da IA",
                "02. Técnicas de Entrevistas e Elaboração de Documentos Psicológicos com uso de IA",
                "03. Avaliação em Psicopatologia e Saúde Mental",
                "04. Avaliação da Personalidade - Teste de Autorrelato, Expressivo e Tecnologia Digital",
                "05. Avaliação da Personalidade - Técnicas Aperceptivo-temáticas e Gráficas",
              ],
              badges: ["Fundamentos"],
            },
            {
              titulo: "Módulo 2: Domínio de Técnicas e Contextos Específicos",
              descricao: "Aprofundamento em técnicas avançadas e aplicação em contextos especializados",
              beneficios: [
                "06. Avaliação Psicológica de Crianças e Adolescentes",
                "07. Avaliação Psicológica Pré-Cirúrgica: Imersão Prática",
                "08. Avaliação Psicológica no Contexto Jurídico",
                "09. Avaliação Psicológica Organizacional e do Trabalho",
                "10. Avaliação Neuropsicológica",
                "11. Rorschach (R-PAS) - Sistema de Avaliação por Desempenho",
                "12. Laboratórios Práticos Integrados e Supervisão de Casos",
              ],
              badges: ["Práticas Avançadas"],
              destaque: true,
            },
          ]}
          botaoCta={{
            texto: "Baixar grade curricular completa",
            href: "#grade",
            observacao: "PDF com detalhamento de todas as disciplinas",
          }}
          backgroundColor="bg-muted/30"
        />
        <Empregabilidade
          title="O Investimento que Transforma sua Trajetória Profissional"
          subtitle="Nossos alunos relatam impacto direto na carreira em menos de um ano após a formação."
          estatisticas={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              valor: "87%",
              descricao: "promovidos ou recolocados",
              label: "TAXA DE COLOCAÇÃO*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              valor: "6-9 m",
              descricao: "para promoção",
              label: "TEMPO MÉDIO*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              valor: "+35%",
              descricao: "em média após formação",
              label: "AUMENTO SALARIAL*",
            },
          ]}
          layoutEstatisticas="carousel"
          servicosCarreira={[
            "Revisão de currículo e Linkedin",
            "Mentorias com especialistas de mercado",
            "Indicações para vagas parceiras",
          ]}
          depoimentos={[
            {
              texto:
                "O diferencial do IPOG são os professores. Aprender com quem é referência na área e autor de testes que usamos no dia a dia não tem preço. Foi a escolha que me deu segurança para assumir casos mais complexos e ser reconhecida no mercado.",
              autor: "Dra. Juliana Martins",
              cargo: "Psicóloga Clínica, ex-aluna IPOG",
            },
            {
              texto:
                "A especialização em Avaliação Psicológica do IPOG transformou minha prática profissional. Os laboratórios práticos e a supervisão de casos reais me prepararam para atuar com confiança em contextos jurídicos e clínicos.",
              autor: "Dr. Carlos Eduardo Santos",
              cargo: "Perito Judicial, ex-aluno IPOG",
            },
            {
              texto:
                "Consegui minha certificação internacional em Rorschach (R-PAS) durante o curso. Isso abriu portas para atuar em hospitais e clínicas de referência. O investimento retornou em menos de 6 meses.",
              autor: "Dra. Fernanda Lima",
              cargo: "Neuropsicóloga, ex-aluna IPOG",
            },
          ]}
          botaoCta={{
            texto: "Fale com um Consultor de Carreira",
            onClick: "openAssistantForConsultor",
          }}
          observacao="* Dados baseados em pesquisa interna."
          bgColor="bg-white"
        />
        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Diferenciais que Posicionam Você à Frente no Mercado</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Uma formação que vai além do básico, com recursos e oportunidades exclusivas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Corpo Docente Atuante</h3>
                <p className="text-muted-foreground">
                  Aprenda com peritos judiciais, consultores e autores de testes e livros na área, que trazem protocolos
                  reais anonimizados para discussão em sala.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Certificação Internacional no Rorschach (R-PAS)</h3>
                <p className="text-muted-foreground">
                  Receba orientação para obter a certificação Coding Proficiency sem custo adicional, um diferencial
                  competitivo de peso no seu currículo.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Laboratórios Presenciais e Síncronos</h3>
                <p className="text-muted-foreground">
                  Participe de sequências didáticas de laboratórios (WISC-IV, Avaliação Terapêutica) que não existem
                  integradas em outros programas, com práticas supervisionadas.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Parcerias com Editoras de Testes</h3>
                <p className="text-muted-foreground">
                  Tenha acesso a descontos e manuais, facilitando a construção do seu acervo profissional após o curso.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Autoridade
          title="Aprenda com Especialistas Reconhecidos em Avaliação Psicológica"
          subtitle="Nosso corpo docente é formado por autores de testes, peritos judiciais e profissionais com ampla experiência clínica e acadêmica."
          credenciais={[
            {
              icon: <Award className="h-5 w-5" />,
              texto: "Autores de Testes Psicológicos",
            },
            {
              icon: <Users className="h-5 w-5" />,
              texto: "Peritos Judiciais Atuantes",
            },
            {
              icon: <BookOpen className="h-5 w-5" />,
              texto: "Publicações Científicas",
            },
          ]}
          professores={[
            {
              nome: "Dra. Mariana Costa Silva",
              area: "Avaliação Psicológica",
              bio: "Doutora em Psicologia pela USP. Autora de testes psicológicos e perita judicial há 15 anos.",
              avatar: "MC",
            },
            {
              nome: "Dr. Ricardo Almeida",
              area: "Rorschach e Técnicas Projetivas",
              bio: "Especialista certificado em R-PAS. Supervisor clínico e docente há 12 anos.",
              avatar: "RA",
            },
            {
              nome: "Dra. Paula Fernandes",
              area: "Neuropsicologia",
              bio: "Neuropsicóloga com atuação em hospitais. Especialista em avaliação de TDAH e TEA.",
              avatar: "PF",
            },
          ]}
        />

        <TrilhaAprendizado
          etapas={[
            {
              titulo: "Pós-Graduação em Avaliação Psicológica - Fundamentos",
              descricao:
                "Construa base sólida em técnicas de avaliação, instrumentos psicométricos e laudos com certificação reconhecida pelo CFP.",
              tags: ["Instrumentos", "Laudos", "Ética"],
            },
            {
              titulo: "Especialização em Neuropsicologia",
              descricao:
                "Aprofunde em avaliação neuropsicológica, reabilitação cognitiva e intervenções baseadas em evidências.",
              tags: ["Neurociência", "Reabilitação", "Pesquisa"],
            },
            {
              titulo: "Posicionamento no Mercado — Psicólogo Especialista",
              descricao:
                "Atue como especialista em avaliação psicológica com foco em nichos de alta demanda e remuneração competitiva.",
              beneficios: [
                "Credibilidade com certificações CFP",
                "Portfólio de casos + publicações",
                "Rede de encaminhamentos e parcerias",
              ],
              tags: ["Consultoria", "Perícia", "Clínica"],
            },
          ]}
        />

        <section className="w-full py-12 md:py-16 bg-background">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas frequentes sobre a especialização</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tire suas dúvidas sobre o curso, instrumentos e atuação profissional.
              </p>
            </div>
            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">Qual é a duração do curso?</AccordionTrigger>
                  <AccordionContent>
                    A especialização tem duração de 18 meses, com carga horária reconhecida pelo MEC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Quais instrumentos vou aprender?</AccordionTrigger>
                  <AccordionContent>
                    Você aprenderá os principais instrumentos reconhecidos pelo CFP, incluindo testes de inteligência,
                    personalidade, neuropsicológicos e técnicas projetivas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Como funciona a supervisão?</AccordionTrigger>
                  <AccordionContent>
                    A supervisão é realizada com casos reais, com acompanhamento individualizado de professores
                    especialistas em avaliação psicológica.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Preciso ser psicólogo para fazer o curso?</AccordionTrigger>
                  <AccordionContent>
                    Sim. Este curso é restrito a profissionais graduados em Psicologia com registro ativo no CRP.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#contato">Conversar com um Consultor Acadêmico</a>
              </Button>
            </div>
          </div>
        </section>
        <div id="preco">
          <CtaFinal
            courseId="avaliacao-psicologica"
            monthlyFee="R$ 399,00"
            duration="18 meses"
            totalCost="R$ 7.282,00"
            title="Invista na sua carreira com a instituição que é referência nacional."
            description="Taxa de Matrícula: R$ 100,00 | Mensalidades: a partir de R$ 399,00*"
            additionalText="*Consulte as condições com nossa equipe. O IPOG oferece uma formação de excelência com valor acessível e resultados reais na carreira. Seu investimento garante: Corpo docente com autores e peritos renomados, Acesso a laboratórios práticos e supervisão clínica, Networking com profissionais de todo o Brasil, Chancela de uma marca com 98% de satisfação e mais de 300 mil alunos especializados."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
