// Types for class/cohort management system

export type ClassStatus = "confirmed" | "unconfirmed"
export type Modality = "EAD" | "Presencial" | "Ao Vivo" | "Híbrido"

export interface ClassData {
  id: string
  courseId: string
  startDate: Date
  status: ClassStatus
  modality: Modality
  unit: string
  availableSeats: number
  totalSeats: number
}

export interface AlternativeClass {
  class: ClassData
  courseName: string
}

// Date formatting functions
export function formatConfirmedDate(date: Date): string {
  const day = date.getDate()
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}

export function formatUnconfirmedDate(date: Date): string {
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${month}/${year}`
}

// Sort classes: confirmed first, then by nearest date
export function sortClasses(classes: ClassData[]): ClassData[] {
  return [...classes].sort((a, b) => {
    // Confirmed classes come first
    if (a.status === "confirmed" && b.status !== "confirmed") return -1
    if (a.status !== "confirmed" && b.status === "confirmed") return 1

    // Then sort by date (nearest first)
    return a.startDate.getTime() - b.startDate.getTime()
  })
}

// Find alternative classes in other modalities
export function findAlternativeClasses(
  courseId: string,
  currentModality: Modality,
  allClasses: ClassData[],
): ClassData[] {
  return allClasses.filter(
    (cls) => cls.courseId === courseId && cls.modality !== currentModality && cls.availableSeats > 0,
  )
}

// Mock data for development
export const mockClasses: ClassData[] = [
  // MBA Gestão
  {
    id: "mba-gestao-1",
    courseId: "mba-gestao",
    startDate: new Date("2025-01-15"),
    status: "confirmed",
    modality: "EAD",
    unit: "Brasília",
    availableSeats: 15,
    totalSeats: 40,
  },
  {
    id: "mba-gestao-2",
    courseId: "mba-gestao",
    startDate: new Date("2025-02-20"),
    status: "confirmed",
    modality: "EAD",
    unit: "Brasília",
    availableSeats: 25,
    totalSeats: 40,
  },
  {
    id: "mba-gestao-3",
    courseId: "mba-gestao",
    startDate: new Date("2025-04-01"),
    status: "unconfirmed",
    modality: "EAD",
    unit: "Brasília",
    availableSeats: 30,
    totalSeats: 40,
  },

  // Avaliação Psicológica
  {
    id: "avaliacao-psicologica-1",
    courseId: "avaliacao-psicologica",
    startDate: new Date("2025-02-10"),
    status: "confirmed",
    modality: "Híbrido",
    unit: "São Paulo",
    availableSeats: 18,
    totalSeats: 35,
  },
  {
    id: "avaliacao-psicologica-2",
    courseId: "avaliacao-psicologica",
    startDate: new Date("2025-03-15"),
    status: "confirmed",
    modality: "Híbrido",
    unit: "São Paulo",
    availableSeats: 22,
    totalSeats: 35,
  },
  {
    id: "avaliacao-psicologica-3",
    courseId: "avaliacao-psicologica",
    startDate: new Date("2025-05-01"),
    status: "unconfirmed",
    modality: "Híbrido",
    unit: "São Paulo",
    availableSeats: 30,
    totalSeats: 35,
  },

  // Engenharia Estrutural
  {
    id: "engenharia-estrutural-1",
    courseId: "engenharia-estrutural",
    startDate: new Date("2025-01-20"),
    status: "confirmed",
    modality: "Presencial",
    unit: "Goiânia",
    availableSeats: 12,
    totalSeats: 30,
  },
  {
    id: "engenharia-estrutural-2",
    courseId: "engenharia-estrutural",
    startDate: new Date("2025-03-10"),
    status: "confirmed",
    modality: "Presencial",
    unit: "Goiânia",
    availableSeats: 20,
    totalSeats: 30,
  },

  // Intervenção ABA
  {
    id: "intervencao-aba-1",
    courseId: "intervencao-aba",
    startDate: new Date("2025-02-05"),
    status: "confirmed",
    modality: "Híbrido",
    unit: "Brasília",
    availableSeats: 15,
    totalSeats: 25,
  },
  {
    id: "intervencao-aba-2",
    courseId: "intervencao-aba",
    startDate: new Date("2025-04-10"),
    status: "unconfirmed",
    modality: "Híbrido",
    unit: "Brasília",
    availableSeats: 20,
    totalSeats: 25,
  },

  // Compliance
  {
    id: "compliance-1",
    courseId: "compliance",
    startDate: new Date("2025-01-25"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 40,
    totalSeats: 60,
  },
  {
    id: "compliance-2",
    courseId: "compliance",
    startDate: new Date("2025-03-20"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 50,
    totalSeats: 60,
  },

  // Gestão de Pessoas
  {
    id: "gestao-pessoas-1",
    courseId: "gestao-pessoas",
    startDate: new Date("2025-02-15"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 35,
    totalSeats: 50,
  },
  {
    id: "gestao-pessoas-2",
    courseId: "gestao-pessoas",
    startDate: new Date("2025-04-05"),
    status: "unconfirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 45,
    totalSeats: 50,
  },

  // Gestão de Projetos Ágeis
  {
    id: "gestao-projetos-ageis-1",
    courseId: "gestao-projetos-ageis",
    startDate: new Date("2025-01-30"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 28,
    totalSeats: 40,
  },
  {
    id: "gestao-projetos-ageis-2",
    courseId: "gestao-projetos-ageis",
    startDate: new Date("2025-03-25"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 35,
    totalSeats: 40,
  },

  // Inteligência Artificial Aplicada
  {
    id: "ia-aplicada-1",
    courseId: "inteligencia-artificial-aplicada",
    startDate: new Date("2025-02-01"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 45,
    totalSeats: 60,
  },
  {
    id: "ia-aplicada-2",
    courseId: "inteligencia-artificial-aplicada",
    startDate: new Date("2025-04-15"),
    status: "unconfirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 55,
    totalSeats: 60,
  },

  // Marketing Digital
  {
    id: "marketing-digital-1",
    courseId: "marketing-digital",
    startDate: new Date("2025-01-18"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 32,
    totalSeats: 45,
  },
  {
    id: "marketing-digital-2",
    courseId: "marketing-digital",
    startDate: new Date("2025-03-08"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 40,
    totalSeats: 45,
  },

  // Administração
  {
    id: "administracao-1",
    courseId: "administracao",
    startDate: new Date("2025-02-03"),
    status: "confirmed",
    modality: "EAD",
    unit: "São Paulo",
    availableSeats: 50,
    totalSeats: 80,
  },
  {
    id: "administracao-2",
    courseId: "administracao",
    startDate: new Date("2025-08-01"),
    status: "unconfirmed",
    modality: "EAD",
    unit: "São Paulo",
    availableSeats: 70,
    totalSeats: 80,
  },

  // Arquitetura
  {
    id: "arquitetura-1",
    courseId: "arquitetura",
    startDate: new Date("2025-02-10"),
    status: "confirmed",
    modality: "Presencial",
    unit: "São Paulo",
    availableSeats: 25,
    totalSeats: 40,
  },
  {
    id: "arquitetura-2",
    courseId: "arquitetura",
    startDate: new Date("2025-08-05"),
    status: "unconfirmed",
    modality: "Presencial",
    unit: "São Paulo",
    availableSeats: 35,
    totalSeats: 40,
  },

  // Direito
  {
    id: "direito-1",
    courseId: "direito",
    startDate: new Date("2025-02-17"),
    status: "confirmed",
    modality: "Presencial",
    unit: "Brasília",
    availableSeats: 40,
    totalSeats: 60,
  },
  {
    id: "direito-2",
    courseId: "direito",
    startDate: new Date("2025-08-10"),
    status: "unconfirmed",
    modality: "Presencial",
    unit: "Brasília",
    availableSeats: 55,
    totalSeats: 60,
  },

  // Psicologia EAD
  {
    id: "psicologia-ead-1",
    courseId: "psicologia-ead",
    startDate: new Date("2025-02-24"),
    status: "confirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 80,
    totalSeats: 120,
  },
  {
    id: "psicologia-ead-2",
    courseId: "psicologia-ead",
    startDate: new Date("2025-08-15"),
    status: "unconfirmed",
    modality: "EAD",
    unit: "Online",
    availableSeats: 100,
    totalSeats: 120,
  },
]
