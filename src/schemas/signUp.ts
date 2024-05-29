import { z } from 'zod'

export const signUpForm = z.object({
  email: z.string().min(1, 'E-mail invalido!'),
  reastaurantName: z.string().min(1, 'Nome do estabelecimento invalido!'),
  managerName: z.string().min(1, 'Nome do responsavel invalido!'),
  phone: z.string().min(1, 'Telefone invalido!'),
})

export type SignUpForm = z.infer<typeof signUpForm>
