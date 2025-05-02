import { z } from 'zod'

export const customerSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .nonempty('Nome é obrigatório'),
  email: z.string()
    .nonempty('Email é obrigatório')
    .email('Email inválido'),
  phone: z.string()
    .nonempty('Telefone é obrigatório')
    .regex(/^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/, 'Telefone inválido (xx) xxxxx-xxxx')
    .max(15, 'Telefone deve ter no máximo 15 caracteres')
})
