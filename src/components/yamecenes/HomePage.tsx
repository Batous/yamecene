'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Heart, Landmark, MapPin, ShieldCheck, Users } from 'lucide-react'
import { useAppStore } from '@/store/app-store'
import { words } from '@/lib/i18n'
import { formatMoney } from '@/lib/currency'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'

interface Project { id: string; slug: string; title: string; summary: string | null; type: string | null; city: string | null; goalAmount: number | null; currency: string; donationTotal: number; donationCount: number; progressPercent: number; porteur: { name: string | null } }
interface Stats { causes: { active: number }; donations: { totalConfirmed: number }; users: { mecenes: number } }

const categoryTone: Record<string, string> = { 'Education': 'bg-sky-100 text-sky-800', 'Sante': 'bg-rose-100 text-rose-800', 'Famille': 'bg-amber-100 text-amber-900', 'Recherche & Innovation': 'bg-violet-100 text-violet-800', 'Art & Creation': 'bg-fuchsia-100 text-fuchsia-800', 'Entrepreneuriat': 'bg-orange-100 text-orange-900', 'Communaute & Foi': 'bg-emerald-100 text-emerald-800' }

function projectPresentation(project: Project, locale: 'fr' | 'en') {
  const title = project.title.toLowerCase()

  if (title.includes('clinique') || title.includes('medical')) {
    return locale === 'fr'
      ? {
          title: "Achat d’une ambulance communautaire",
          summary: "Une initiative structurée pour améliorer la mobilité médicale et l’accès aux soins.",
        }
      : {
          title: "Community ambulance purchase",
          summary: "A structured initiative to improve medical mobility and access to care.",
        }
  }

  if (title.includes('veuve') || title.includes('widow')) {
    return locale === 'fr'
      ? {
          title: "Poulailler communautaire pour les veuves",
          summary: "Une initiative d’autonomie économique, de revenus durables et de production locale.",
        }
      : {
          title: "Community poultry project for widows",
          summary: "An economic-autonomy initiative creating sustainable income and local production.",
        }
  }

  return { title: project.title, summary: project.summary }
}

export function HomePage() {
  const { navigate, locale } = useAppStore(); const t = words(locale)
  const [projects, setProjects] = useState<Project[]>([]); const [stats, setStats] = useState<Stats | null>(null); const [loading, setLoading] = useState(true)
  useEffect(() => { Promise.all([fetch('/api/causes').then((r) => r.json()), fetch('/api/stats').then((r) => r.json())]).then(([projectData, statData]) => { setProjects(projectData.causes ?? []); setStats(statData) }).finally(() => setLoading(false)) }, [])
  const active = projects.filter((project) => project.progressPercent >= 0)
  return <div>
    <section className="border-b border-emerald-100 bg-[#f4f8f5]"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8 lg:py-20">
      <div><p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800"><Landmark className="h-4 w-4" />{locale === 'fr' ? 'Une plateforme ouverte aux projets et aux communautés' : 'A platform open to projects and communities'}</p><h1 className="max-w-3xl text-4xl font-bold tracking-normal text-slate-950 sm:text-6xl">{t.headline}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" className="bg-emerald-800 hover:bg-emerald-900" onClick={() => navigate('cause-form')}><Heart className="mr-2 h-5 w-5" />{t.submit}</Button><Button size="lg" variant="outline" className="border-slate-300" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>{t.support}<ArrowRight className="ml-2 h-5 w-5" /></Button></div></div>
      <aside className="border-l-4 border-amber-400 bg-white p-6 shadow-sm"><ShieldCheck className="h-7 w-7 text-emerald-700" /><h2 className="mt-4 text-xl font-bold text-slate-900">{t.secure}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{locale === 'fr' ? 'Mobile Money, cartes et autres moyens de paiement sont reliés à des partenaires spécialisés. Les paiements sont confirmes par le prestataire avant d etre comptes.' : 'Mobile money, cards and other payment methods connect through specialist partners. A contribution is counted only after the provider confirms it.'}</p><div className="mt-6 grid grid-cols-3 border-t border-slate-100 pt-5 text-center"><div><b className="block text-xl text-slate-950">{stats?.causes.active ?? '—'}</b><span className="text-xs text-slate-500">{t.projects}</span></div><div><b className="block text-xl text-slate-950">{stats?.donations.totalConfirmed ?? '—'}</b><span className="text-xs text-slate-500">{locale === 'fr' ? 'dons' : 'gifts'}</span></div><div><b className="block text-xl text-slate-950">{stats?.users.mecenes ?? '—'}</b><span className="text-xs text-slate-500">{t.contributors}</span></div></div></aside>
    </div></section>
    <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">YaMecenes</p><h2 className="mt-2 text-3xl font-bold text-slate-950">{t.projects}</h2></div><span className="text-sm text-slate-500">{active.length} {locale === 'fr' ? 'projets publies' : 'published projects'}</span></div>
      {loading ? <div className="grid gap-5 md:grid-cols-3">{[1,2,3].map((n) => <Skeleton key={n} className="h-80" />)}</div> : <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{active.map((project) => <article key={project.id} className="flex min-h-[310px] flex-col border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg"><div className="flex items-start justify-between gap-3"><Badge className={categoryTone[project.type ?? ''] ?? 'bg-slate-100 text-slate-700'}>{project.type || t.category}</Badge><span className="text-xs text-slate-500">{project.donationCount} {locale === 'fr' ? 'mecenes' : 'patrons'}</span></div><h3 className="mt-5 text-xl font-bold leading-7 text-slate-950">{projectPresentation(project, locale).title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{projectPresentation(project, locale).summary}</p><div className="mt-auto pt-5"><div className="flex justify-between text-sm"><span className="font-semibold text-emerald-800">{formatMoney(project.donationTotal, project.currency)}</span><span className="text-slate-500">{project.goalAmount ? formatMoney(project.goalAmount, project.currency) : ''}</span></div><Progress value={project.progressPercent} className="mt-2 h-2" /><div className="mt-3 flex items-center justify-between text-xs text-slate-500"><span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{project.porteur.name || (locale === 'fr' ? 'Porteur verifie' : 'Verified bearer')}</span>{project.city && <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{project.city}</span>}</div><Button variant="ghost" className="mt-3 w-full justify-between text-emerald-800 hover:bg-emerald-50" onClick={() => navigate('cause-detail', project.slug)}>{t.view}<ArrowRight className="h-4 w-4" /></Button></div></article>)}</div>}
    </section>
    <section className="border-y border-slate-200 bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><p className="max-w-4xl text-base leading-7 text-slate-700">{t.trust}</p></div></section>
  </div>
}
