'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSignIn } from '@/hooks/useSignIn'

export function FormSignIn() {
  const { errors, handleSignIn, handleSubmit, isSubmitting, register } =
    useSignIn()
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`${errors.email?.message && 'ring-1 ring-destructive'}`}
          />
          {errors.email?.message && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <Button disabled={isSubmitting} type="submit" className="w-full">
          Acesar painel
        </Button>
      </form>
    </>
  )
}
