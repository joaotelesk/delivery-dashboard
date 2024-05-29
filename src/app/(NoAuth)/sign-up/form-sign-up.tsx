'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useSignUp } from '@/hooks/useSignUp'

export function FormSignUp() {
  const { errors, handleSignUp, handleSubmit, isSubmitting, register } =
    useSignUp()

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
        <div className="space-y-2">
          <Label htmlFor="reastaurantName">Nome do estabelecimento</Label>
          <Input
            id="reastaurantName"
            type="text"
            {...register('reastaurantName')}
            className={`${errors.reastaurantName?.message && 'ring-1 ring-destructive'}`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="managerName">Seu nome</Label>
          <Input
            id="managerName"
            type="text"
            {...register('managerName')}
            className={`${errors.managerName?.message && 'ring-1 ring-destructive'}`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Seu telefone</Label>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`${errors.phone?.message && 'ring-1 ring-destructive'}`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`${errors.email?.message && 'ring-1 ring-destructive'}`}
          />
        </div>
        <div>
          {Object.values(errors).map((error, index) => (
            <p key={index} className="text-xs text-destructive">
              {error?.message}
            </p>
          ))}
        </div>
        <Button disabled={isSubmitting} type="submit" className="w-full">
          Finalizar cadastro
        </Button>
        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, voce concorda com nossos{' '}
          <a href="#" className="underline underline-offset-4">
            termos de servico
          </a>{' '}
          e{' '}
          <a href="#" className="underline underline-offset-4">
            politicas de privacidade
          </a>
          .
        </p>
      </form>
    </>
  )
}
