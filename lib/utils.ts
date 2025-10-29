import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as Brazilian currency (R$)
 * @param value - The numeric value to format
 * @returns Formatted string with thousand separators (.) and decimal separator (,)
 * @example formatCurrency(24500) => "24.500,00"
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
