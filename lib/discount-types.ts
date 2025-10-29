export type DiscountType = "cash" | "pix" | "agreement" | "alumni" | null

export interface Discount {
  type: DiscountType
  percentage: number
  label: string
  description: string
}

export interface AgreementCode {
  code: string
  name: string
  discount: number
  isValid: boolean
}

export interface AlumniDiscount {
  cpf: string
  name: string
  discount: number
  isValid: boolean
}

// Discount configurations
export const DISCOUNT_CONFIG = {
  cash: {
    percentage: 5, // 5% discount for cash payment
    label: "Desconto à vista",
    description: "Pagamento exclusivamente à vista",
  },
  pix: {
    percentage: 10, // 10% discount for PIX payment
    label: "Desconto no Pix",
    description: "Pagamento exclusivamente via PIX",
  },
  alumni: {
    percentage: 15,
    label: "Desconto Ex-Aluno",
    description: "Desconto exclusivo para ex-alunos IPOG",
  },
} as const

// Mock agreement codes (in production, this would be validated via API)
export const VALID_AGREEMENT_CODES: Record<string, { name: string; discount: number }> = {
  CONV2025: { name: "Convênio Empresarial 2025", discount: 15 },
  PARCEIRO10: { name: "Parceiro Institucional", discount: 10 },
  ALUMNI20: { name: "Ex-aluno IPOG", discount: 20 },
}

export function validateAgreementCode(code: string): AgreementCode | null {
  const upperCode = code.toUpperCase().trim()
  const agreement = VALID_AGREEMENT_CODES[upperCode]

  if (agreement) {
    return {
      code: upperCode,
      name: agreement.name,
      discount: agreement.discount,
      isValid: true,
    }
  }

  return null
}

export function validateCPF(cpf: string): boolean {
  // Remove non-numeric characters
  const cleanCPF = cpf.replace(/\D/g, "")

  // Check if has 11 digits
  if (cleanCPF.length !== 11) return false

  // Check if all digits are the same
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false

  // Validate first digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += Number.parseInt(cleanCPF.charAt(i)) * (10 - i)
  }
  let digit = 11 - (sum % 11)
  if (digit >= 10) digit = 0
  if (digit !== Number.parseInt(cleanCPF.charAt(9))) return false

  // Validate second digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += Number.parseInt(cleanCPF.charAt(i)) * (11 - i)
  }
  digit = 11 - (sum % 11)
  if (digit >= 10) digit = 0
  if (digit !== Number.parseInt(cleanCPF.charAt(10))) return false

  return true
}

export function maskCPF(value: string): string {
  const cleanValue = value.replace(/\D/g, "")
  return cleanValue
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14)
}

export async function validateAlumni(cpf: string): Promise<AlumniDiscount | null> {
  try {
    // In production, this would call the actual API endpoint
    const response = await fetch("/api/alumni/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cpf: cpf.replace(/\D/g, "") }),
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (data.isAlumni) {
      return {
        cpf: cpf,
        name: data.name,
        discount: data.discount || DISCOUNT_CONFIG.alumni.percentage,
        isValid: true,
      }
    }

    return null
  } catch (error) {
    console.error("[v0] Error validating alumni:", error)
    return null
  }
}

export async function mockValidateAlumni(cpf: string): Promise<AlumniDiscount | null> {
  console.log("[v0] mockValidateAlumni called with CPF:", cpf)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const mockAlumniDatabase: Record<string, { name: string; discount: number }> = {
    "12345678909": { name: "João Silva", discount: 15 },
    "98765432100": { name: "Maria Santos", discount: 15 },
    "11122233344": { name: "Pedro Oliveira", discount: 20 },
  }

  const cleanCPF = cpf.replace(/\D/g, "")
  console.log("[v0] Clean CPF:", cleanCPF)

  const alumniData = mockAlumniDatabase[cleanCPF]
  console.log("[v0] Alumni data found:", alumniData)

  if (alumniData) {
    const result = {
      cpf: cpf,
      name: alumniData.name,
      discount: alumniData.discount,
      isValid: true,
    }
    console.log("[v0] Returning alumni discount:", result)
    return result
  }

  console.log("[v0] CPF not found in alumni database")
  return null
}

export function calculateDiscount(
  originalPrice: number,
  discountType: DiscountType,
  customDiscount?: number,
): { discountedPrice: number; discountAmount: number; discountPercentage: number } {
  let discountPercentage = 0

  if (discountType === "cash") {
    discountPercentage = DISCOUNT_CONFIG.cash.percentage
  } else if (discountType === "pix") {
    discountPercentage = DISCOUNT_CONFIG.pix.percentage
  } else if (discountType === "alumni") {
    discountPercentage = customDiscount || DISCOUNT_CONFIG.alumni.percentage
  } else if (discountType === "agreement" && customDiscount) {
    discountPercentage = customDiscount
  }

  const discountAmount = (originalPrice * discountPercentage) / 100
  const discountedPrice = originalPrice - discountAmount

  return {
    discountedPrice,
    discountAmount,
    discountPercentage,
  }
}
