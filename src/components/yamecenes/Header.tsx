'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Church, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { useAppStore } from '@/store/app-store'

const NAV_LINKS = [
  { key: 'home' as const, label: 'Accueil' },
  { key: 'cause-form' as const, label: 'Soumettre une cause' },
  { key: 'code-acces' as const, label: "Code d'accès" },
  { key: 'admin' as const, label: 'Administration' },
]

export function Header() {
  const { currentPage, navigate } = useAppStore()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500">
            <Church className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="honey-text">YaMécènes</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.key}
              variant={currentPage === link.key ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigate(link.key)}
              className={
                currentPage === link.key
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
              }
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Admin badge (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Causes vérifiées
          </div>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="flex items-center gap-2 text-lg font-bold">
              <Church className="h-5 w-5 text-amber-500" />
              <span className="honey-text">YaMécènes</span>
            </SheetTitle>
            <nav className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.key}
                  variant={currentPage === link.key ? 'default' : 'ghost'}
                  className={
                    currentPage === link.key
                      ? 'justify-start bg-amber-500 text-white hover:bg-amber-600'
                      : 'justify-start text-gray-600 hover:text-amber-700 hover:bg-amber-50'
                  }
                  onClick={() => {
                    navigate(link.key)
                    setOpen(false)
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
