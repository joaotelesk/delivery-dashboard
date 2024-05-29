'use client'
import { Separator } from '@radix-ui/react-separator'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator
          orientation="vertical"
          className="bg-muted-foreground/10 h-6 w-0.5"
        />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground flex flex-col items-center gap-1 font-medium"
          >
            <Home className="h-4 w-4" />
            Início
          </Link>
          <Link
            href="/orders"
            className="text-muted-foreground hover:text-foreground flex flex-col items-center gap-1 font-medium"
          >
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </Link>
        </nav>
      </div>
    </header>
  )
}
