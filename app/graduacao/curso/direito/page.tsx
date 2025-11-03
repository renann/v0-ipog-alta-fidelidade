import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Modalidades } from "@/components/modalidades"
import { Empregabilidade } from "@/components/empregabilidade"
import { Trilha } from "@/components/trilha"
import { GraduationCap, Clock, Award, TrendingUp, Briefcase, Scale } from "lucide-react"
import { BreadcrumbWithItems } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Autoridade } from "@/components/autoridade"
import { CtaFinal } from "@/components/cta-final"

export default function DireitoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
            <BreadcrumbWithItems
              items={[{ label: "Início", href: "/" }, { label: "Graduação", href: "/graduacao" }, { label: "Direito" }]}
            />
          </div>
        </div>
        <Hero
          badge="GRADUAÇÃO"
          title="Graduação em Direito"
          description="Construa uma carreira de impacto com a graduação em Direito do IPOG. Uma formação de excelência, com foco na prática jurídica e corpo docente de mercado, que prepara você para a OAB, para advogar em alto nível ou para os mais concorridos concursos públicos."
          valueBadges={[
            { icon: <GraduationCap className="h-5 w-5" />, text: "Qualidade Reconhecida pelo MEC" },
            { icon: <Clock className="h-5 w-5" />, text: "Metodologia Flexível" },
            { icon: <Award className="h-5 w-5" />, text: "Docentes com Experiência de Mercado" },
          ]}
          primaryCTA={{ text: "Garanta sua vaga", href: "#preco" }}
          secondaryCTA={{ text: "Baixar grade curricular", onClick: "openAssistantForConsultor" }}
        />
        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Por que o Direito do IPOG é a escolha que conecta você ao sucesso?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Porque aqui você aprende com os melhores para se tornar um líder no mercado. Nossa metodologia une
                teoria e prática de forma efetiva, com uma estrutura de ponta em localização privilegiada e um corpo
                docente sem igual na região, preparando você para advogar ou prestar os mais concorridos concursos
                públicos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <Scale className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Preparação Completa para a OAB</h3>
                <p className="text-muted-foreground">
                  Desenvolva as competências essenciais para o Exame da Ordem desde o 1º período, com metodologias
                  ativas, atividades práticas e uma formação sólida que acelera sua aprovação.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Vivência Prática desde o Primeiro Dia</h3>
                <p className="text-muted-foreground">
                  Atue em casos reais em nosso Núcleo de Práticas Jurídicas (NPJ) e participe de audiências em salas e
                  tribunais do júri simulados. Aqui, a prática transforma seu aprendizado.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Corpo Docente Formado por Renomados Profissionais</h3>
                <p className="text-muted-foreground">
                  Aprenda com mestres, doutores, magistrados e os mais respeitados advogados da região, que trazem a
                  experiência real do mercado para a sala de aula.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modalidades
          title="Uma Formação Flexível, Pensada para a sua Rotina"
          subtitle="O curso de Direito do IPOG combina o melhor dos dois mundos: a interação do presencial com a conveniência do digital, garantindo um aprendizado completo e adaptado à sua vida."
          modalidades={[
            {
              badge: "GRADUAÇÃO",
              titulo: "Encontros Presenciais (Segunda a Quinta)",
              descricao: "Aproveite a interação direta com professores e colegas",
              beneficios: [
                "Aproveite a interação direta com professores e colegas em salas de aula modernas",
                "Construa um networking valioso",
                "Vivencie a prática em nossa infraestrutura de ponta",
              ],
              link: "#preco",
              buttonText: "Quero me inscrever",
            },
            {
              badge: "GRADUAÇÃO",
              titulo: "Aulas Digitais (Sexta-feira)",
              descricao: "Flexibilidade para assistir no seu horário",
              beneficios: [
                "Tenha a liberdade de assistir às aulas de sexta-feira em nossa moderna plataforma digital",
                "Ao vivo ou gravadas",
                "No horário que for mais produtivo para você",
              ],
              link: "#preco",
              buttonText: "Ver unidades presenciais",
            },
          ]}
        />

        <Empregabilidade
          title="Results that Prove"
          subtitle="Our graduates shine in the best law firms and public contests in the country, proving that IPOG's formation accelerates your career."
          statistics={[
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: "98%",
              description: "satisfaction rate",
              label: "SATISFACTION*",
            },
            {
              icon: <Clock className="h-8 w-8" />,
              value: "+300 thousand",
              description: "students in Brazil",
              label: "STUDENTS*",
            },
            {
              icon: <Briefcase className="h-8 w-8" />,
              value: "20 years",
              description: "of tradition",
              label: "EXPERIENCE*",
            },
          ]}
          layoutStatistics="carousel"
          testimonials={[
            {
              text: "The formation in Law at IPOG prepared me for the real challenges of the market. I passed the OAB on my first attempt and today I work in one of the largest law firms in the country.",
              author: "Fernanda Costa",
              position: "Corporate Lawyer",
            },
            {
              videoUrl: "/placeholder.svg?height=854&width=480",
              videoThumbnail: "/placeholder.svg?height=854&width=480",
              text: "The teachers at IPOG are references in the legal market. I learned from those who really act and this made all the difference in my public contest approval. Today I am a federal judge.",
              author: "Marcelo Santos",
              position: "Federal Judge",
            },
            {
              text: "The networking I built at IPOG was fundamental. I met my partners during my graduation and today we have our own law firm with over 50 corporate clients.",
              author: "Juliana Alves",
              position: "Partner of Law Firm",
            },
          ]}
          bgColor="bg-background"
        />

        <Trilha
          title="Curricular Matrix: Your Learning Journey, Semester by Semester"
          subtitle="Build a solid knowledge base with an updated curricular matrix, balancing theoretical foundations, technology mastery, and practical experience. See the pillars of your formation:"
          stages={[
            {
              title: "Fundamental Formation Axis (1st to 2nd Period)",
              description:
                "Build a solid base with disciplines like Constitutional Theory, Introduction to Law Studies, and Political Science, developing a critical and humanistic vision of the legal system.",
              benefits: ["Understanding of the main legal concepts", "Critical view of the Brazilian legal system"],
              badges: ["1st and 2nd semester"],
            },
            {
              title: "Professional Formation Axis (3rd to 6th Period)",
              description:
                "Deepen into the major areas of Law, such as Civil, Penal, Corporate, and Labor Law, learning to analyze doctrines and jurisprudences harmoniously and coherently to solve complex cases.",
              benefits: ["Mastery of the main areas of law", "Analysis of jurisprudence"],
              badges: ["3rd to 6th semester"],
            },
            {
              title: "Practical-Professional Formation Axis (7th to 10th Period)",
              description:
                "Master forensic techniques with disciplines of Forensic Practice, Mediation, Arbitration. Develop practical skills for the exercise of the profession in a globalized and technological scenario.",
              benefits: ["Experience in petitioning", "Simulations of hearings"],
              badges: ["7th to 10th semester"],
            },
            {
              title: "Supervised Internship and Final Course Project (from the 6th Period)",
              description:
                "Apply your knowledge in real situations through the Supervised Internship and consolidate your academic journey with the Final Course Project, ready to face the market challenges.",
              benefits: ["300h of supervised internship", "OAB preparation course included"],
              badges: ["6th to 10th semester"],
              highlight: true,
            },
          ]}
          callToAction={{
            text: "Download complete curriculum",
            href: "#grade",
            note: "PDF with detailed description of all disciplines",
          }}
          backgroundColor="bg-muted/30"
        />

        <Autoridade
          title="Course Faculty"
          subtitle="Learn from magistrates, lawyers, and reference teachers"
          credentials={[
            "Active magistrates and justices",
            "Lawyers from renowned firms",
            "Masters and Doctors in Law",
            "Experience in major cases and superior courts",
          ]}
          professors={[
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dr. Eduardo Carvalho Neto",
              area: "Constitutional Law",
              description:
                "Justice of the SP TJ, Doctor in Constitutional Law from USP, with more than 25 years of magistrature and author of reference works in the area.",
              specialties: ["Constitutional Law", "Constitutional Control", "Fundamental Rights"],
              biography:
                "Justice of the Tribunal of Justice of São Paulo since 2015, with more than 25 years of career in magistrature. Doctor in Constitutional Law from the University of São Paulo (USP) and Master from PUC-SP. Author of three books on constitutional control and fundamental rights, widely used in undergraduate and postgraduate courses. Invited professor in various master's programs and preparation courses for magistrature.",
              linkedin: "https://linkedin.com/in/eduardo-carvalho-neto",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dra. Mariana Rodrigues Lima",
              area: "Penal Law",
              description:
                "Federal Judge, Master in Penal Law, specialist in economic crimes and money laundering, with action in cases of national great repercussion.",
              specialties: ["Penal Law", "Economic Crimes", "Money Laundering"],
              biography:
                "Federal Judge since 2012, with action in specialized criminal courts in financial system crimes and money laundering. Master in Penal Law from UERJ, with research on economic criminality. Participated in cases of great national repercussion involving corruption and criminal organizations. Minister of training courses for magistrates and Public Prosecutors.",
              linkedin: "https://linkedin.com/in/mariana-rodrigues-lima",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dr. Ricardo Almeida Santos",
              area: "Civil and Labor Law",
              description:
                "Partner of corporate law firm, Doctor in Civil Law, specialist in complex contracts and high-value corporate litigation.",
              specialties: ["Civil Law", "Contracts", "Labor Law"],
              biography:
                "Partner of the Santos & Associados law firm, one of the largest corporate law firms in the country. Doctor in Civil Law from USP, with thesis on complex corporate contracts. Acts for 18 years in high-value corporate litigation and legal advice to major corporations. Arbitrator of the B3 Chamber of Arbitration and professor of Civil and Labor Law in postgraduate courses.",
              linkedin: "https://linkedin.com/in/ricardo-almeida-santos",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dr. Fernando Henrique Costa",
              area: "Labor Law",
              description:
                "Labor Court Judge, Master in Labor Law, specialist in labor relations and labor reform, with vast experience in collective disputes.",
              specialties: ["Labor Law", "Labor Relations", "Labor Reform"],
              biography:
                "Labor Court Judge since 2010, currently acting in the 2nd Regional Labor Court (SP). Master in Labor Law from PUC-SP, with research on labor reform and its impacts. Specialist in collective disputes and labor negotiations. Author of articles on labor law and professor in preparation courses for labor judges.",
              linkedin: "https://linkedin.com/in/fernando-henrique-costa",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dra. Patrícia Mendes Oliveira",
              area: "Tax Law",
              description:
                "Tax lawyer, Master in Tax Law, partner of specialized law firm, with action in tax planning and fiscal contentious.",
              specialties: ["Tax Law", "Tax Planning", "Fiscal Contentious"],
              biography:
                "Partner of the Oliveira Advogados Tributários law firm, specialized in tax consulting and fiscal contentious. Master in Tax Law from FGV-SP, with research on tax reform. Acts for 15 years advising major corporations in tax planning and defenses in administrative and judicial processes. Speaker at national tax law congresses.",
              linkedin: "https://linkedin.com/in/patricia-mendes-oliveira",
            },
            {
              photo: "/placeholder.svg?height=400&width=400",
              name: "Dr. Carlos Alberto Ferreira",
              area: "Corporate Law",
              description:
                "Corporate lawyer, Doctor in Commercial Law, specialist in mergers and acquisitions, judicial recovery, and corporate law.",
              specialties: ["Corporate Law", "M&A", "Judicial Recovery"],
              biography:
                "Partner-founder of the Ferreira & Associados law firm, with more than 20 years of experience in corporate law. Doctor in Commercial Law from USP, specialist in merger and acquisition operations (M&A) and judicial recovery processes. Advised more than 50 M&A operations and conducted judicial recoveries of medium and large companies. Professor of Corporate Law in MBA programs.",
              linkedin: "https://linkedin.com/in/carlos-alberto-ferreira",
            },
          ]}
        />

        <section className="w-full py-16 px-4">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions about the Law Course</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Clear your doubts about the course, modalities, and preparation for OAB.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-left">What is the course duration?</AccordionTrigger>
                  <AccordionContent>
                    The Law course lasts 5 years (10 semesters) with total hours recognized by MEC.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">Does the course prepare for the OAB Exam?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Our methodology includes specific preparation for the OAB Exam with simulations and specialized
                    follow-up throughout the course.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How do internships work?</AccordionTrigger>
                  <AccordionContent>
                    There are 300 hours of supervised internship in law firms, public bodies, and the institution's
                    model office, with experienced teachers' accompaniment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Does the EAD diploma have the same value?</AccordionTrigger>
                  <AccordionContent>
                    Yes. The EAD diploma has the same value and recognition as the on-site one, allowing registration in
                    OAB and professional practice.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Talk to an Academic Consultant</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 bg-muted/30">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose How to Start Your Journey at IPOG</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer different paths for you to start your Law graduation. See which one best suits your profile.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Digital Vestibular</h3>
                <p className="text-muted-foreground">
                  Ideal for those who completed high school. Take our online test quickly and safely to secure your
                  spot.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">ENEM Score</h3>
                <p className="text-muted-foreground">
                  Take advantage of your ENEM performance. Present your score and enroll at IPOG without the need for a
                  new selection process.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Diploma Holder or Transfer</h3>
                <p className="text-muted-foreground">
                  If you already have a diploma or wish to transfer your course, take advantage of a simplified
                  enrollment process and validate your already completed disciplines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CtaFinal
          title="Invest in your career with the institution that is a national reference."
          description="Enrollment Fee: R$ 100,00 | Monthly Fees: from R$ 599,00+"
          enrollmentFee="R$ 100,00"
          monthlyFee="R$ 599,00"
          duration="5 years"
          totalCost="R$ 35.940,00"
          nextClassDate="November"
          promotionDeadline="October 30th"
        />
      </main>
      <Footer />
    </div>
  )
}
