import { type NextRequest, NextResponse } from "next/server"

// Mock alumni database for development
// In production, this would query a real database
const ALUMNI_DATABASE: Record<
  string,
  {
    name: string
    discount: number
    graduationYear: number
    course: string
  }
> = {
  "12345678901": {
    name: "João Silva",
    discount: 15,
    graduationYear: 2020,
    course: "MBA em Gestão Estratégica",
  },
  "98765432100": {
    name: "Maria Santos",
    discount: 15,
    graduationYear: 2019,
    course: "Especialização em Direito",
  },
  "11122233344": {
    name: "Pedro Oliveira",
    discount: 20,
    graduationYear: 2018,
    course: "MBA em Finanças",
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { cpf } = body

    if (!cpf) {
      return NextResponse.json({ error: "CPF é obrigatório" }, { status: 400 })
    }

    // Clean CPF (remove formatting)
    const cleanCPF = cpf.replace(/\D/g, "")

    // Simulate database query delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if CPF exists in alumni database
    const alumniData = ALUMNI_DATABASE[cleanCPF]

    if (alumniData) {
      return NextResponse.json({
        isAlumni: true,
        name: alumniData.name,
        discount: alumniData.discount,
        graduationYear: alumniData.graduationYear,
        course: alumniData.course,
      })
    }

    // Not an alumni
    return NextResponse.json({
      isAlumni: false,
    })
  } catch (error) {
    console.error("[API] Error validating alumni:", error)
    return NextResponse.json({ error: "Erro ao validar ex-aluno" }, { status: 500 })
  }
}
