import { z } from 'zod'

export const signInForm = z.object({
  email: z.string().min(1, 'E-mail invalido!'),
})

export type SignInForm = z.infer<typeof signInForm>
