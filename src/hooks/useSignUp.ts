import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { SignUpForm, signUpForm } from '@/schemas/signUp'

export const useSignUp = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(signUpForm),
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => router.push('./sign-in'),
        },
      })
    } catch (error) {
      toast.error('Error ao cadastrar restaurante')
    }
  }

  return { handleSignUp, errors, isSubmitting, register, handleSubmit }
}
