'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '@/store/app-store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { formatMoney } from '@/lib/currency'
import {
  ArrowRight,
  Heart,
  Users,
  TrendingUp,
  Church,
  Star,
  MapPin,
  Clock,
  Key,
  ShieldCheck,
} from 'lucide-react'

interface CauseData {
  id: string
  slug: string
  title: string
  summary: string | null
  type: string | null
  city: string | null
  country: string | null
  goalAmount: number | null
  currency: string
  status: string
  porteur: { id: string; name: string | null; city: string | null; country: string | null }
  milestones: { id: string; label: string; target: number; reached: boolean; reachedAt: string | null }[]
  donationTotal: number
  donationCount: number
  progressPercent: number
  createdAt: string
}

interface Stats {
  causes: { total: number; active: number; pending: number }
  donations: { totalConfirmed: number; totalAmount: number }
  users: { mecenes: number; porteurs: number }
}

export function HomePage() {
  const { navigate } = useAppStore()
  const [causes, setCauses] = useState<CauseData[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [causesRes, statsRes] = await Promise.all([
          fetch('/api/causes'),
          fetch('/api/admin/stats'),
        ])
        const causesData = await causesRes.json()
        const statsData = await statsRes.json()
        setCauses(causesData.causes ?? [])
        setStats(statsData)
      } catch (err) {
        console.error('Failed to fetch data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const activeCauses = causes.filter((c) => c.status === 'active')
  const meceneDuJour = activeCauses.length > 0
    ? (() => {
        const topDonor = activeCauses.reduce((best, c) => c.donationCount > (best?.donationCount ?? 0) ? c : best, activeCauses[0])
        return topDonor
      })()
    : null

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden honeycomb-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800">
              <Church className="h-4 w-4" />
              Solidarité chrétienne congolaise
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Chaque cause trouve une{' '}
              <span className="honey-text">famille de soutien</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              YaMécènes connecte les porteurs de causes avec des donateurs engagés.
              Votre générosité aide des familles, des églises locales, des écoles et des communautés en RDC et dans la diaspora congolaise.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="honey-gradient text-white border-0 px-8 text-base hover:opacity-90 shadow-lg shadow-amber-500/25"
                onClick={() => navigate('cause-form')}
              >
                <Heart className="mr-2 h-5 w-5" />
                Soutenir une cause
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 text-base"
                onClick={() => navigate('code-acces')}
              >
                <Key className="mr-2 h-5 w-5" />
                Obtenir un code d&apos;accès
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Stats Bar ─── */}
      {!loading && stats && (
        <section className="-mt-6 relative z-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Church, label: 'Causes actives', value: stats.causes.active, color: 'text-amber-600' },
                { icon: TrendingUp, label: 'Dons confirmés', value: stats.donations.totalConfirmed, color: 'text-green-600' },
                { icon: Heart, label: 'Montant total', value: `${Math.round(stats.donations.totalAmount).toLocaleString('fr-FR')} multi-devise`, color: 'text-rose-600' },
                { icon: Users, label: 'Mécènes', value: stats.users.mecenes, color: 'text-violet-600' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="border-0 shadow-md">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 ${stat.color}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                        <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Mécène du Jour ─── */}
      {meceneDuJour && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-bold text-gray-900">Cause à l&apos;honneur</h2>
            </div>
            <Card className="overflow-hidden border-amber-200 shadow-lg" data-slug={meceneDuJour.slug}>
              <div className="honey-gradient p-1">
                <div className="bg-white rounded-lg p-6 sm:p-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                          {meceneDuJour.type || 'Solidaire'}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Heart className="h-3 w-3" />
                          {meceneDuJour.donationCount} don(s)
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {meceneDuJour.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{meceneDuJour.summary}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {meceneDuJour.porteur.name || 'Anonyme'}
                        </span>
                        {meceneDuJour.city && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {meceneDuJour.city}{meceneDuJour.country ? `, ${meceneDuJour.country}` : ''}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(meceneDuJour.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 sm:min-w-[200px]">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Collecté</p>
                        <p className="text-2xl font-bold text-amber-600">
                          {formatMoney(meceneDuJour.donationTotal, meceneDuJour.currency)}
                        </p>
                        {meceneDuJour.goalAmount && (
                          <p className="text-xs text-gray-400">
                            sur {formatMoney(meceneDuJour.goalAmount, meceneDuJour.currency)}
                          </p>
                        )}
                      </div>
                      <Progress value={meceneDuJour.progressPercent} className="h-3 w-48 bg-amber-100" />
                      <Button
                        className="honey-gradient text-white border-0 shadow-md"
                        onClick={() => navigate('cause-detail', meceneDuJour.slug)}
                      >
                        Voir la cause
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* ─── Causes Actives ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Causes actives</h2>
          <Badge variant="outline" className="text-amber-700 border-amber-300">
            {activeCauses.length} cause(s)
          </Badge>
        </div>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex justify-between pt-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : activeCauses.length === 0 ? (
          <Card className="border-dashed border-amber-300 bg-amber-50/50">
            <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
              <Church className="h-12 w-12 text-amber-300" />
              <h3 className="text-lg font-semibold text-gray-700">Aucune cause active</h3>
              <p className="text-sm text-gray-500">
                Soyez le premier à soumettre une cause et à mobiliser votre communauté !
              </p>
              <Button
                className="mt-2 bg-amber-600 text-white hover:bg-amber-700"
                onClick={() => navigate('cause-form')}
              >
                <Heart className="mr-2 h-4 w-4" />
                Soumettre une cause
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeCauses.map((cause, i) => (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden card-hover border-amber-100"
                  onClick={() => navigate('cause-detail', cause.slug)}
                >
                  {/* Colored top bar based on type */}
                  <div className={`h-2 ${cause.type === 'Éducation' ? 'bg-blue-400' : cause.type === 'Santé' ? 'bg-rose-400' : cause.type === 'Eau & Assainissement' ? 'bg-cyan-400' : 'bg-amber-400'}`} />
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {cause.type || 'Solidaire'}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                        <Clock className="h-3 w-3" />
                        {new Date(cause.createdAt).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-lg leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
                      {cause.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    {cause.summary && (
                      <p className="text-sm text-gray-600 line-clamp-2">{cause.summary}</p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {cause.porteur.name || 'Anonyme'}
                      </span>
                      {cause.city && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {cause.city}
                        </span>
                      )}
                    </div>

                    {/* Progress */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-amber-600">
                          {formatMoney(cause.donationTotal, cause.currency)}
                        </span>
                        {cause.goalAmount && (
                          <span className="text-xs text-gray-400">
                            {cause.progressPercent}% de {formatMoney(cause.goalAmount, cause.currency)}
                          </span>
                        )}
                      </div>
                      <Progress value={cause.progressPercent} className="h-2 bg-amber-100" />
                      <p className="text-xs text-gray-400">
                        {cause.donationCount} don(s) · {cause.milestones.filter((m) => m.reached).length}/{cause.milestones.length} jalon(s)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ─── How It Works ─── */}
      <section className="border-t border-amber-100 bg-amber-50/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Comment ça marche ?</h2>
            <p className="mt-2 text-gray-600">Trois étapes simples pour changer des vies</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Obtenez un code',
                desc: "Achetez un code d'accès ou recevez-en un via notre réseau de confiance.",
                icon: Key,
              },
              {
                step: '02',
                title: 'Présentez votre cause',
                desc: 'Décrivez votre projet, fixez des jalons et soumettez pour validation.',
                icon: Church,
              },
              {
                step: '03',
                title: 'Recevez des dons',
                desc: 'Les donateurs soutiennent votre cause et suivent l’impact étape par étape.',
                icon: Heart,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="mb-1 text-xs font-bold text-amber-500 uppercase tracking-widest">
                  Étape {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Section ─── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <ShieldCheck className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Plateforme de confiance</h3>
              <p className="mt-1 text-sm text-gray-600">
                Chaque cause est vérifiée avec une référence communautaire ou ecclésiale. Les codes d&apos;accès garantissent la qualité et la transparence.
                Une commission de 5% seulement finance le fonctionnement de la plateforme.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
