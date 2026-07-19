'use client'

import { useState } from 'react'
import { Menu, X, Landmark, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { useAppStore } from '@/store/app-store'
import { words } from '@/lib/i18n'

export function Header() {
  const { currentPage, navigate, locale, setLocale } = useAppStore()
  const [open, setOpen] = useState(false)
  const t = words(locale)
  const links = [{ key: 'home' as const, label: t.home }, { key: 'cause-form' as const, label: t.submit }, { key: 'code-acces' as const, label: t.access }, { key: 'admin' as const, label: t.admin }]
  const nav = (mobile = false) => links.map((link) => <Button key={link.key} variant="ghost" size="sm" onClick={() => { navigate(link.key); setOpen(false) }} className={`${mobile ? 'justify-start' : ''} ${currentPage === link.key ? 'text-emerald-800 bg-emerald-50' : 'text-slate-600 hover:text-emerald-800 hover:bg-emerald-50'}`}>{link.label}</Button>)
  return <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <button onClick={() => navigate('home')} className="flex items-center gap-2 text-left"><span className="grid h-9 w-9 place-items-center bg-emerald-800 text-white"><Landmark className="h-5 w-5" /></span><span className="text-xl font-bold text-slate-950">Ya<span className="text-emerald-700">Mecenes</span></span></button>
      <nav className="hidden items-center gap-1 md:flex">{nav()}</nav>
      <div className="hidden items-center gap-3 md:flex"><span className="flex items-center gap-1 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-emerald-700" />{t.verified}</span><Button variant="outline" size="sm" onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}>{t.language}</Button></div>
      <Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild className="md:hidden"><Button size="icon" variant="ghost" aria-label="Menu">{open ? <X /> : <Menu />}</Button></SheetTrigger><SheetContent side="right" className="w-72"><SheetTitle className="text-lg text-emerald-800">YaMecenes</SheetTitle><nav className="mt-6 flex flex-col gap-1">{nav(true)}<Button variant="outline" className="mt-3" onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}>{t.language}</Button></nav></SheetContent></Sheet>
    </div>
  </header>
}
