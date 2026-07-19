'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { useAppStore } from '@/store/app-store'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { formatMoney } from '@/lib/currency'
import {
  ArrowLeft,
  Activity,
  DollarSign,
  Percent,
  Users,
  Clock,
  Key,
  BookOpen,
  Award,
  UserCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  PlayCircle,
  Lock,
  Plus,
  RefreshCw,
  BarChart3,
  Eye,
  Copy,
  Sparkles,
  Shield,
} from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────────

interface AdminStats {
  causes: {
    total: number
    active: number
    pending: number
    closed: number
    rejected: number
  }
  donations: {
    totalConfirmed: number
    totalAll: number
    totalAmount: number
    totalCommission: number
    totalNetPorteur: number
    averageAmount: number
  }
  users: {
    total: number
    porteurs: number
    mecenes: number
  }
  accessCodes: {
    available: number
    used: number
  }
  poems: {
    total: number
    published: number
    validated: number
    pending: number
  }
  ceintures: {
    awarded: number
  }
  topCauses: Array<{
    id: string
    title: string
    donationTotal: number
    donationCount: number
    currency?: string
    progressPercent: number
  }>
  recentDons: Array<{
    id: string
    amount: number
    currency?: string
    confirmed: boolean
    createdAt: string
    mecene: { name: string } | null
    cause: { id: string; title: string } | null
  }>
}

interface CauseAdmin {
  id: string
  slug: string
  title: string
  summary: string
  type: string
  status: 'pending' | 'active' | 'closed' | 'rejected'
  city: string
  country: string
  goalAmount: number
  currency?: string
  porteur: {
    id: string
    name: string
    email: string
    phone: string
  }
  milestones: Array<{ id: string; label: string; target: number; reached: boolean; reachedAt: string | null }>
  accessCodeRel: {
    code: string
    type: string
    status: string
  }
  donationTotal: number
  donationCount: number
  progressPercent: number
  createdAt: string
}

interface AccessCode {
  id: string
  code: string
  type: 'direct' | 'lot'
  status: 'available' | 'used' | 'suspended'
  causeId?: string | null
  causeTitle?: string | null
  createdAt: string
}

interface AccessCodeStats {
  total: number
  available: number
  used: number
  suspended: number
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function formatAmount(amount: number, currency?: string): string {
  return currency ? formatMoney(amount, currency) : `${amount.toLocaleString('fr-FR')} multi-devise`
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return format(date, 'dd/MM/yyyy HH:mm')
}

function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr)
  return format(date, 'dd/MM/yyyy')
}

function statusBadge(status: string) {
  switch (status) {
    case 'pending':
      return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">En attente</Badge>
    case 'active':
      return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">Active</Badge>
    case 'closed':
      return <Badge className="bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100">Fermée</Badge>
    case 'rejected':
      return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">Rejetée</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

function codeStatusBadge(status: string) {
  switch (status) {
    case 'available':
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-100">Disponible</Badge>
    case 'used':
      return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">Utilisé</Badge>
    case 'suspended':
      return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">Suspendu</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

// ── Animation variants ─────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

// ── Component ──────────────────────────────────────────────────────────────────

export function AdminDashboard() {
  const { navigate } = useAppStore()
  const { toast } = useToast()

  // ── State ────────────────────────────────────────────────────────────────────

  const [statsLoading, setStatsLoading] = useState(true)
  const [stats, setStats] = useState<AdminStats | null>(null)

  const [causesLoading, setCausesLoading] = useState(true)
  const [causes, setCauses] = useState<CauseAdmin[]>([])
  const [updatingCauseId, setUpdatingCauseId] = useState<string | null>(null)

  const [codesLoading, setCodesLoading] = useState(true)
  const [codes, setCodes] = useState<AccessCode[]>([])
  const [codeStats, setCodeStats] = useState<AccessCodeStats | null>(null)

  const [generateCount, setGenerateCount] = useState<string>('10')
  const [generateType, setGenerateType] = useState<'direct' | 'lot'>('direct')
  const [generating, setGenerating] = useState(false)

  // ── Fetch helpers ────────────────────────────────────────────────────────────

  const fetchStats = useCallback(async () => {
    try {
      setStatsLoading(true)
      const res = await fetch('/api/admin/stats')
      if (!res.ok) throw new Error('Erreur de chargement des statistiques')
      const data = await res.json()
      setStats(data)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue'
      toast({ title: 'Erreur', description: message, variant: 'destructive' })
    } finally {
      setStatsLoading(false)
    }
  }, [toast])

  const fetchCauses = useCallback(async () => {
    try {
      setCausesLoading(true)
      const res = await fetch('/api/admin/causes')
      if (!res.ok) throw new Error('Erreur de chargement des causes')
      const data = await res.json()
      setCauses(data.causes ?? [])
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue'
      toast({ title: 'Erreur', description: message, variant: 'destructive' })
    } finally {
      setCausesLoading(false)
    }
  }, [toast])

  const fetchCodes = useCallback(async () => {
    try {
      setCodesLoading(true)
      const res = await fetch('/api/access-codes')
      if (!res.ok) throw new Error('Erreur de chargement des codes')
      const data = await res.json()
      setCodes(data.codes ?? [])
      setCodeStats(data.stats ?? null)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue'
      toast({ title: 'Erreur', description: message, variant: 'destructive' })
    } finally {
      setCodesLoading(false)
    }
  }, [toast])

  // ── Actions ──────────────────────────────────────────────────────────────────

  const updateCauseStatus = async (causeId: string, status: 'pending' | 'active' | 'closed' | 'rejected') => {
    try {
      setUpdatingCauseId(causeId)
      const res = await fetch('/api/admin/causes', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ causeId, status }),
      })
      if (!res.ok) throw new Error('Erreur lors de la mise à jour du statut')
      const data = await res.json()
      const updated = data.cause
      setCauses((prev) =>
        prev.map((c) => (c.id === causeId ? { ...c, ...updated } : c))
      )
      toast({
        title: 'Statut mis à jour',
        description: `La cause a été marquée comme "${status === 'active' ? 'active' : status === 'closed' ? 'fermée' : status === 'rejected' ? 'rejetée' : 'en attente'}".`,
      })
      // Refresh stats too
      fetchStats()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue'
      toast({ title: 'Erreur', description: message, variant: 'destructive' })
    } finally {
      setUpdatingCauseId(null)
    }
  }

  const generateCodes = async () => {
    const count = parseInt(generateCount, 10)
    if (isNaN(count) || count < 1 || count > 100) {
      toast({ title: 'Valeur invalide', description: 'Le nombre doit être entre 1 et 100.', variant: 'destructive' })
      return
    }
    try {
      setGenerating(true)
      const res = await fetch('/api/access-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count, type: generateType }),
      })
      if (!res.ok) throw new Error("Erreur lors de la génération des codes d'accès")
      const data = await res.json()
      toast({
        title: 'Codes générés',
        description: `${data.count} code(s) ${generateType} ont été créés avec succès.`,
      })
      fetchCodes()
      fetchStats()
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erreur inconnue'
      toast({ title: 'Erreur', description: message, variant: 'destructive' })
    } finally {
      setGenerating(false)
    }
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({ title: 'Copié', description: `Le code "${code}" a été copié dans le presse-papier.` })
  }

  // ── Effects ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    fetchStats()
    fetchCauses()
    fetchCodes()
  }, [fetchStats, fetchCauses, fetchCodes])

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button + title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Button
          variant="ghost"
          onClick={() => navigate('home')}
          className="mb-4 hover:bg-amber-50 hover:text-amber-700 -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à l&apos;accueil
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-amber-500 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Administration</h1>
            <p className="text-sm text-gray-500">
              Tableau de bord de gestion YaMécènes
            </p>
          </div>
        </div>
      </motion.div>

      <Separator className="mb-8 bg-amber-100" />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 border border-amber-100 bg-amber-50/50 p-1">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium transition-all"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Vue d&apos;ensemble
          </TabsTrigger>
          <TabsTrigger
            value="causes"
            className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium transition-all"
          >
            <Activity className="mr-2 h-4 w-4" />
            Gestion des causes
          </TabsTrigger>
          <TabsTrigger
            value="codes"
            className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm font-medium transition-all"
          >
            <Key className="mr-2 h-4 w-4" />
            Codes d&apos;accès
          </TabsTrigger>
        </TabsList>

        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* TAB 1 — Vue d'ensemble                                               */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        <TabsContent value="overview">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ── 4 Main stat cards ───────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {statsLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="border-amber-100">
                    <CardHeader className="pb-2">
                      <Skeleton className="h-4 w-24" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-8 w-32" />
                    </CardContent>
                  </Card>
                ))
              ) : (
                <>
                  {/* Total Causes (active) */}
                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100 hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Causes actives
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <Activity className="h-4 w-4 text-amber-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {stats?.causes.active ?? 0}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          sur {stats?.causes.total ?? 0} au total
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Dons confirmés */}
                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100 hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Dons confirmés
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <DollarSign className="h-4 w-4 text-green-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {formatAmount(stats?.donations.totalAmount ?? 0)}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {stats?.donations.totalConfirmed ?? 0} dons confirmés
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Commission */}
                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100 hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Commission
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Percent className="h-4 w-4 text-purple-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {formatAmount(stats?.donations.totalCommission ?? 0)}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Net porteur : {formatAmount(stats?.donations.totalNetPorteur ?? 0)}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Mécènes */}
                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100 hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Mécènes
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {stats?.users.mecenes ?? 0}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {stats?.users.total ?? 0} utilisateurs au total
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}
            </div>

            {/* ── 6 Smaller stat cards ─────────────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {statsLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="border-amber-100">
                    <CardContent className="pt-4 pb-4">
                      <Skeleton className="h-4 w-16 mb-2" />
                      <Skeleton className="h-6 w-12" />
                    </CardContent>
                  </Card>
                ))
              ) : (
                <>
                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Clock className="h-3.5 w-3.5 text-yellow-500" />
                          <p className="text-xs text-gray-500">En attente</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{stats?.causes.pending ?? 0}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Key className="h-3.5 w-3.5 text-blue-500" />
                          <p className="text-xs text-gray-500">Codes dispo.</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{stats?.accessCodes.available ?? 0}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <BookOpen className="h-3.5 w-3.5 text-emerald-500" />
                          <p className="text-xs text-gray-500">Poèmes publiés</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{stats?.poems.published ?? 0}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Award className="h-3.5 w-3.5 text-orange-500" />
                          <p className="text-xs text-gray-500">Ceintures</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{stats?.ceintures.awarded ?? 0}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <UserCheck className="h-3.5 w-3.5 text-indigo-500" />
                          <p className="text-xs text-gray-500">Porteurs</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{stats?.users.porteurs ?? 0}</p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <TrendingUp className="h-3.5 w-3.5 text-rose-500" />
                          <p className="text-xs text-gray-500">Montant moyen</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{formatAmount(stats?.donations.averageAmount ?? 0)}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}
            </div>

            {/* ── Recent donations table ───────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="border-amber-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Dons récents
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 mt-1">
                        Les 5 derniers dons enregistrés
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchStats}
                      className="border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                    >
                      <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
                      Rafraîchir
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {statsLoading ? (
                    <div className="space-y-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full" />
                      ))}
                    </div>
                  ) : !stats?.recentDons || stats.recentDons.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-8">
                      Aucun don récent
                    </p>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow className="border-amber-100">
                          <TableHead className="text-gray-600 font-medium">Mécène</TableHead>
                          <TableHead className="text-gray-600 font-medium">Cause</TableHead>
                          <TableHead className="text-gray-600 font-medium">Montant</TableHead>
                          <TableHead className="text-gray-600 font-medium">Statut</TableHead>
                          <TableHead className="text-gray-600 font-medium">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {stats.recentDons.slice(0, 5).map((don) => (
                          <TableRow key={don.id} className="border-amber-50">
                            <TableCell className="font-medium text-gray-900">
                              {don.mecene?.name ?? 'Anonyme'}
                            </TableCell>
                            <TableCell className="text-gray-600 max-w-[200px] truncate">
                              {don.cause?.title ?? '—'}
                            </TableCell>
                            <TableCell className="font-semibold text-gray-900">
                              {formatAmount(don.amount, don.currency)}
                            </TableCell>
                            <TableCell>
                              {don.confirmed ? (
                                <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">
                                  <CheckCircle2 className="mr-1 h-3 w-3" />
                                  Confirmé
                                </Badge>
                              ) : (
                                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">
                                  <Clock className="mr-1 h-3 w-3" />
                                  En attente
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-gray-500 text-sm">
                              {formatDate(don.createdAt)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* TAB 2 — Gestion des causes                                            */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        <TabsContent value="causes">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-amber-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Toutes les causes
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 mt-1">
                        {causes.length} cause(s) au total
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchCauses}
                      className="border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                    >
                      <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
                      Rafraîchir
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {causesLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-10 w-full" />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-14 w-full" />
                      ))}
                    </div>
                  ) : causes.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-8">
                      Aucune cause trouvée
                    </p>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-amber-100">
                            <TableHead className="text-gray-600 font-medium min-w-[200px]">Titre</TableHead>
                            <TableHead className="text-gray-600 font-medium">Porteur</TableHead>
                            <TableHead className="text-gray-600 font-medium">Statut</TableHead>
                            <TableHead className="text-gray-600 font-medium text-right">Collecté</TableHead>
                            <TableHead className="text-gray-600 font-medium text-right">Objectif</TableHead>
                            <TableHead className="text-gray-600 font-medium min-w-[140px]">Progression</TableHead>
                            <TableHead className="text-gray-600 font-medium">Date</TableHead>
                            <TableHead className="text-gray-600 font-medium text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {causes.map((cause) => (
                            <TableRow key={cause.id} className="border-amber-50 hover:bg-amber-50/30">
                              <TableCell className="font-medium text-gray-900 max-w-[250px]">
                                <div className="truncate">{cause.title}</div>
                                {cause.city && (
                                  <div className="text-xs text-gray-400 mt-0.5">
                                    {cause.city}{cause.country ? `, ${cause.country}` : ''}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="text-gray-600">
                                <div>{cause.porteur?.name ?? '—'}</div>
                                <div className="text-xs text-gray-400">{cause.porteur?.email ?? ''}</div>
                              </TableCell>
                              <TableCell>{statusBadge(cause.status)}</TableCell>
                              <TableCell className="text-right font-semibold text-gray-900">
                                {formatAmount(cause.donationTotal, cause.currency)}
                              </TableCell>
                              <TableCell className="text-right text-gray-600">
                                {cause.goalAmount ? formatAmount(cause.goalAmount, cause.currency) : '—'}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress
                                    value={cause.progressPercent}
                                    className="h-2 flex-1 bg-amber-100 [&>[data-slot=progress-indicator]]:bg-amber-500"
                                  />
                                  <span className="text-xs text-gray-500 font-medium min-w-[36px] text-right">
                                    {Math.round(cause.progressPercent)}%
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="text-gray-500 text-sm">
                                {formatDateShort(cause.createdAt)}
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 hover:bg-amber-50 hover:text-amber-700"
                                    onClick={() => navigate('cause-detail', cause.slug)}
                                    title="Voir la cause"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>

                                  {cause.status === 'pending' && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-3 text-xs border-green-200 hover:bg-green-50 hover:text-green-700 hover:border-green-300"
                                      disabled={updatingCauseId === cause.id}
                                      onClick={() => updateCauseStatus(cause.id, 'active')}
                                    >
                                      {updatingCauseId === cause.id ? (
                                        <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
                                      ) : (
                                        <PlayCircle className="mr-1 h-3 w-3" />
                                      )}
                                      Activer
                                    </Button>
                                  )}

                                  {cause.status === 'pending' && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-3 text-xs border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
                                      disabled={updatingCauseId === cause.id}
                                      onClick={() => updateCauseStatus(cause.id, 'rejected')}
                                    >
                                      {updatingCauseId === cause.id ? (
                                        <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
                                      ) : (
                                        <XCircle className="mr-1 h-3 w-3" />
                                      )}
                                      Rejeter
                                    </Button>
                                  )}

                                  {cause.status === 'active' && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="h-8 px-3 text-xs border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300"
                                      disabled={updatingCauseId === cause.id}
                                      onClick={() => updateCauseStatus(cause.id, 'closed')}
                                    >
                                      {updatingCauseId === cause.id ? (
                                        <RefreshCw className="mr-1 h-3 w-3 animate-spin" />
                                      ) : (
                                        <Lock className="mr-1 h-3 w-3" />
                                      )}
                                      Fermer
                                    </Button>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* TAB 3 — Codes d'accès                                                 */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        <TabsContent value="codes">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ── Code stats row ───────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {codesLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i} className="border-amber-100">
                    <CardHeader className="pb-2">
                      <Skeleton className="h-4 w-20" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-8 w-16" />
                    </CardContent>
                  </Card>
                ))
              ) : (
                <>
                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Total codes
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <Key className="h-4 w-4 text-amber-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {codeStats?.total ?? 0}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Disponibles
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {codeStats?.available ?? 0}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Card className="border-amber-100">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardDescription className="text-sm font-medium text-gray-500">
                          Utilisés
                        </CardDescription>
                        <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-green-600" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gray-900">
                          {codeStats?.used ?? 0}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
              )}
            </div>

            {/* ── Generate codes section ───────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="border-amber-100 mb-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Générer des codes d&apos;accès
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    Créez de nouveaux codes pour les porteurs de projets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                    <div className="flex-1 w-full sm:w-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nombre (1–100)
                      </label>
                      <Input
                        type="number"
                        min={1}
                        max={100}
                        value={generateCount}
                        onChange={(e) => setGenerateCount(e.target.value)}
                        placeholder="10"
                        className="max-w-[140px] border-amber-200 focus-visible:ring-amber-500/30 focus-visible:border-amber-400"
                      />
                    </div>
                    <div className="w-full sm:w-auto">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Type
                      </label>
                      <Select
                        value={generateType}
                        onValueChange={(val) => setGenerateType(val as 'direct' | 'lot')}
                      >
                        <SelectTrigger className="w-[160px] border-amber-200">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="direct">Direct</SelectItem>
                          <SelectItem value="lot">Par lot</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      onClick={generateCodes}
                      disabled={generating}
                      className="bg-amber-500 hover:bg-amber-600 text-white shadow-sm"
                    >
                      {generating ? (
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Plus className="mr-2 h-4 w-4" />
                      )}
                      Générer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Access codes table ───────────────────────────────────────────── */}
            <motion.div variants={itemVariants}>
              <Card className="border-amber-100">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Liste des codes
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 mt-1">
                        {codes.length} code(s) affiché(s)
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchCodes}
                      className="border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                    >
                      <RefreshCw className="mr-1.5 h-3.5 w-3.5" />
                      Rafraîchir
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {codesLoading ? (
                    <div className="space-y-3">
                      <Skeleton className="h-10 w-full" />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-12 w-full" />
                      ))}
                    </div>
                  ) : codes.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-8">
                      Aucun code d&apos;accès trouvé
                    </p>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="border-amber-100">
                            <TableHead className="text-gray-600 font-medium">Code</TableHead>
                            <TableHead className="text-gray-600 font-medium">Type</TableHead>
                            <TableHead className="text-gray-600 font-medium">Statut</TableHead>
                            <TableHead className="text-gray-600 font-medium">Cause</TableHead>
                            <TableHead className="text-gray-600 font-medium">Date</TableHead>
                            <TableHead className="text-gray-600 font-medium text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {codes.map((code) => (
                            <TableRow key={code.id} className="border-amber-50 hover:bg-amber-50/30">
                              <TableCell className="font-mono font-semibold text-gray-900">
                                {code.code}
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={
                                    code.type === 'direct'
                                      ? 'border-amber-200 text-amber-700'
                                      : 'border-purple-200 text-purple-700'
                                  }
                                >
                                  {code.type === 'direct' ? 'Direct' : 'Par lot'}
                                </Badge>
                              </TableCell>
                              <TableCell>{codeStatusBadge(code.status)}</TableCell>
                              <TableCell className="text-gray-600 max-w-[200px] truncate">
                                {code.causeTitle ?? '—'}
                              </TableCell>
                              <TableCell className="text-gray-500 text-sm">
                                {formatDate(code.createdAt)}
                              </TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 hover:bg-amber-50 hover:text-amber-700"
                                  onClick={() => copyCode(code.code)}
                                  title="Copier le code"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
