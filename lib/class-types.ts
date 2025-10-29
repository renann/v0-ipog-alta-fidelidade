// Types for class/cohort management system

export type ClassStatus = "confirmed" | "unconfirmed"
export type Modality = "EAD" | "Presencial" | "Ao Vivo"

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
  {
    id: "1",
    courseId: "mba-gestao",
    startDate: new Date("2025-01-15"),
    status: "confirmed",
    modality: "EAD",
    unit: "Brasília",
    availableSeats: 15,
    totalSeats: 40,
  },
  {
    id: "2",
    courseId: "mba-gestao",
    startDate: new Date("2025-02-20"),
    status: "confirmed",
    modality: "EAD",
    unit: "Brasília",
    availableSeats: 25,
    totalSeats: 40,
  },
  {
    id: "3",
    courseId: "mba-gestao",
    startDate: new Date("2025-04-01"),
    status: "unconfirmed",
    modality: "EAD",
    unit: "Brasília",
    availableSeats: 30,
    totalSeats: 40,
  },
  {
    id: "4",
    courseId: "mba-gestao",
    startDate: new Date("2025-01-20"),
    status: "confirmed",
    modality: "Presencial",
    unit: "São Paulo",
    availableSeats: 10,
    totalSeats: 30,
  },
  {
    id: "5",
    courseId: "mba-gestao",
    startDate: new Date("2025-02-10"),
    status: "confirmed",
    modality: "Ao Vivo",
    unit: "Online",
    availableSeats: 20,
    totalSeats: 50,
  },
]
