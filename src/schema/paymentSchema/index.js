import { z } from 'zod'

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(19, 'Número do cartão inválido')
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Número do cartão inválido'),

  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Data de expiração inválida'),

  cvv: z
    .string()
    .min(3, 'CVV inválido')
    .max(4, 'CVV inválido')
    .regex(/^\d+$/, 'CVV deve conter apenas números'),

  cardholderName: z
    .string()
    .min(3, 'Nome do titular é obrigatório')
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, 'Nome do titular inválido')
})
