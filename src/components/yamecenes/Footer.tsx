'use client'
import { Landmark, ShieldCheck } from 'lucide-react'
import { useAppStore } from '@/store/app-store'
import { words } from '@/lib/i18n'

export function Footer() {
  const { locale } = useAppStore(); const t = words(locale)
  return <footer className="mt-auto bg-slate-950 text-slate-300"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8"><div><div className="flex items-center gap-2 text-white"><Landmark className="h-5 w-5 text-amber-400" /><span className="text-lg font-bold">YaMecenes</span></div><p className="mt-3 text-sm leading-6">{locale === 'fr' ? 'Le mecenat qui unit: RDC et diaspora, pour tous les projets.' : 'Patronage that unites: DRC and diaspora, for every project.'}</p></div><div className="border-l-0 border-slate-700 md:border-l md:pl-8"><div className="flex gap-2 text-sm font-medium text-white"><ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />{t.trust}</div><p className="mt-4 text-sm">contact@yamecenes.org · Kinshasa, RDC</p></div></div><div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} YaMecenes</div></footer>
}
