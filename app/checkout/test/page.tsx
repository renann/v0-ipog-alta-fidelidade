import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MOCK_COURSES } from "@/lib/mock-courses"
import Link from "next/link"

export default function CheckoutTestPage() {
  const graduacao = Object.values(MOCK_COURSES).filter((c) => c.type === "Graduação")
  const pos = Object.values(MOCK_COURSES).filter((c) => c.type === "Pós-Graduação")
  const extensao = Object.values(MOCK_COURSES).filter((c) => c.type === "Extensão")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Teste de Checkout</h1>
          <p className="text-muted-foreground">
            Selecione um curso abaixo para testar o checkout com diferentes tipos de cursos
          </p>
        </div>

        <div className="space-y-8">
          {/* Graduação */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Graduação</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {graduacao.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{course.modality}</Badge>
                      <Badge variant="outline">{course.duration}</Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="text-muted-foreground">Valor:</span> R${" "}
                        {course.price.toFixed(2).replace(".", ",")}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Matrícula:</span> R${" "}
                        {course.enrollmentValue.toFixed(2).replace(".", ",")}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Mensalidade:</span> R${" "}
                        {course.monthlyPrice.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/checkout?course=${course.id}`}>Testar Checkout</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pós-Graduação */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Pós-Graduação</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pos.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{course.modality}</Badge>
                      <Badge variant="outline">{course.duration}</Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="text-muted-foreground">Valor:</span> R${" "}
                        {course.price.toFixed(2).replace(".", ",")}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Matrícula:</span> R${" "}
                        {course.enrollmentValue.toFixed(2).replace(".", ",")}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Mensalidade:</span> R${" "}
                        {course.monthlyPrice.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/checkout?course=${course.id}`}>Testar Checkout</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Extensão */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Extensão</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {extensao.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{course.modality}</Badge>
                      <Badge variant="outline">{course.duration}</Badge>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="text-muted-foreground">Valor:</span> R${" "}
                        {course.price.toFixed(2).replace(".", ",")}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Matrícula:</span> R${" "}
                        {course.enrollmentValue.toFixed(2).replace(".", ",")}
                      </p>
                      <p>
                        <span className="text-muted-foreground">Mensalidade:</span> R${" "}
                        {course.monthlyPrice.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/checkout?course=${course.id}`}>Testar Checkout</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
