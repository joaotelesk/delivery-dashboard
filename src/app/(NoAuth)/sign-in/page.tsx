import Link from 'next/link'
import { FormSignIn } from './form-sign-in'
import { Button } from '@/components/ui/button'

export default function SignIn() {
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link href="./sign-up">Novo estabelecimento</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceito!
          </p>
        </div>
        <FormSignIn />
      </div>
    </div>
  )
}
