'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '@/store/app-store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { formatMoney, normalizeCurrency } from '@/lib/currency'
import {
  ArrowLeft,
  Heart,
  Users,
  MapPin,
  Clock,
  Target,
  CheckCircle2,
  Circle,
  Loader2,
  Send,
  Eye,
  EyeOff,
} from 'lucide-react'

interface MilestoneData {
  id: string
  label: string
  target: number
  reached: boolean
  progressPercent: number
}

interface DonData {
  id: string
  amount: number
  currency: string
  displayName: string | null
  createdAt: string
  mecene: { id: string; name: string | null; city: string | null } | null
}

interface CauseDetailData {
  id: string
  slug: string
  title: string
  summary: string | null
  description: string
  type: string | null
  city: string | null
  country: string | null
  goalAmount: number | null
  currency: string
  status: string
  createdAt: string
  porteur: { id: string; name: string | null; email: string; phone: string | null; city: string | null; country: string | null }
  milestones: MilestoneData[]
  dons: DonData[]
  donationTotal: number
  donationCount: number
  progressPercent: number
}

interface CauseDetailPageProps {
  initialSlug: string
}

export function CauseDetailPage({ initialSlug }: CauseDetailPageProps) {
  const { navigate } = useAppStore()
  const slugToLoad = initialSlug
  const { toast } = useToast()
  const [cause, setCause] = useState<CauseDetailData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Donation form
  const [showDonForm, setShowDonForm] = useState(false)
  const [donAmount, setDonAmount] = useState('')
  const [donCurrency, setDonCurrency] = useState('CDF')
  const [donName, setDonName] = useState('')
  const [donAnonymous, setDonAnonymous] = useState(false)
  const [donSubmitting, setDonSubmitting] = useState(false)
  const [donMethod, setDonMethod] = useState('mobile_money')
  const [donProvider, setDonProvider] = useState('maxicash')

  useEffect(() => {
    if (!slugToLoad) return
    setLoading(true)
    fetch(`/api/causes/${slugToLoad}`)
      .then((res) => {
        if (!res.ok) throw new Error('Cause introuvable')
        return res.json()
      })
      .then((data) => setCause(data.cause))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [slugToLoad])

  useEffect(() => {
    if (cause?.currency) {
      setDonCurrency(normalizeCurrency(cause.currency))
    }
  }, [cause?.currency])

  async function submitDon() {
    if (!cause || !donAmount) return
    setDonSubmitting(true)
    try {
      const res = await fetch('/api/payments/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          causeId: cause.id,
          amount: parseFloat(donAmount),
          currency: donCurrency,
          displayName: donAnonymous ? 'Anonyme' : donName || 'Généreux donateur',
          method: donMethod,
          provider: donProvider,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        toast({ title: 'Paiement initialise', description: 'Votre contribution sera ajoutee apres la confirmation securisee du prestataire.' })
        if (data.payment?.checkoutUrl) window.location.assign(data.payment.checkoutUrl)
      } else {
        toast({ title: 'Erreur', description: data.error, variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Erreur', description: 'Erreur de connexion', variant: 'destructive' })
    } finally {
      setDonSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Skeleton className="mb-6 h-8 w-32" />
        <Skeleton className="mb-4 h-10 w-3/4" />
        <Skeleton className="mb-2 h-4 w-1/2" />
        <Skeleton className="mb-6 h-4 w-2/3" />
        <div className="grid gap-6 sm:grid-cols-3">
          <Skeleton className="h-40" />
          <Skeleton className="h-40 sm:col-span-2" />
        </div>
      </div>
    )
  }

  if (error || !cause) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-lg text-gray-500">{error || 'Cause introuvable'}</p>
        <Button variant="ghost" className="mt-4 text-amber-700" onClick={() => navigate('home')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l&apos;accueil
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <Button variant="ghost" className="mb-6 text-amber-700 hover:bg-amber-50" onClick={() => navigate('home')}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux projets
      </Button>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        {/* Header */}
        <div className="mb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">{cause.type || 'Solidaire'}</Badge>
            <Badge variant={cause.status === 'active' ? 'default' : 'secondary'}>
              {cause.status === 'active' ? 'Active' : cause.status === 'pending' ? 'En attente' : cause.status}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{cause.title}</h1>
          {cause.summary && <p className="mt-3 text-lg text-gray-600">{cause.summary}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {cause.porteur.name || 'Anonyme'}</span>
            {cause.porteur.city && (
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {cause.porteur.city}{cause.porteur.country ? `, ${cause.porteur.country}` : ''}</span>
            )}
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {new Date(cause.createdAt).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          <Card className="border-amber-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-amber-600">{formatMoney(cause.donationTotal, cause.currency)}</p>
              <p className="text-xs text-gray-500">collectés</p>
            </CardContent>
          </Card>
          <Card className="border-amber-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-gray-900">{cause.donationCount}</p>
              <p className="text-xs text-gray-500">Don(s)</p>
            </CardContent>
          </Card>
          <Card className="border-amber-100">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{cause.progressPercent}%</p>
              <p className="text-xs text-gray-500">de l&apos;objectif</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-amber-600 font-semibold">{formatMoney(cause.donationTotal, cause.currency)}</span>
            {cause.goalAmount && (
              <span className="text-gray-500">Objectif: {formatMoney(cause.goalAmount, cause.currency)}</span>
            )}
          </div>
          <Progress value={cause.progressPercent} className="h-3 bg-amber-100" />
        </div>

        {/* Donate button / form */}
        {cause.status === 'active' && (
          <div className="mb-8">
            {!showDonForm ? (
              <Button
                size="lg"
                className="honey-gradient text-white border-0 shadow-lg shadow-amber-500/25 text-base"
                onClick={() => setShowDonForm(true)}
              >
                <Heart className="mr-2 h-5 w-5" /> Soutenir ce projet
              </Button>
            ) : (
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader>
                  <CardTitle className="text-lg text-amber-900">Soutenir ce projet</CardTitle>
                  <CardDescription>Votre contribution est comptee uniquement apres confirmation du prestataire.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Montant *</Label>
                      <Input
                        type="number"
                        placeholder="5000"
                        value={donAmount}
                        onChange={(e) => setDonAmount(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Devise</Label>
                      <Select value={donCurrency} onValueChange={setDonCurrency} disabled>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value={donCurrency}>{donCurrency}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-3">
                      <Label>Nom affiché</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Votre nom (optionnel)"
                          value={donName}
                          onChange={(e) => setDonName(e.target.value)}
                          disabled={donAnonymous}
                          className={donAnonymous ? 'opacity-50' : ''}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="shrink-0"
                          onClick={() => setDonAnonymous(!donAnonymous)}
                          title={donAnonymous ? 'Afficher mon nom' : 'Donner anonymement'}
                        >
                          {donAnonymous ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {donAnonymous && <p className="text-xs text-gray-500">Votre don sera affiché comme &quot;Anonyme&quot;</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Methode</Label>
                      <Select value={donMethod} onValueChange={setDonMethod}>
                        <SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
                          <SelectItem value="mobile_money">Mobile Money</SelectItem><SelectItem value="card">Carte</SelectItem><SelectItem value="bank_transfer">Virement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Prestataire</Label>
                      <Select value={donProvider} onValueChange={setDonProvider}>
                        <SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
                          <SelectItem value="maxicash">MaxiCash (RDC)</SelectItem><SelectItem value="cinetpay">CinetPay</SelectItem><SelectItem value="flutterwave">Flutterwave</SelectItem><SelectItem value="pawapay">PawaPay</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Commission plateforme: 5%</span>
                    <span>·</span>
                    <span>Net porteur: {donAmount ? formatMoney(parseFloat(donAmount) * 0.95, donCurrency) : '—'}</span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={submitDon}
                      disabled={!donAmount || parseFloat(donAmount) <= 0 || donSubmitting}
                      className="honey-gradient text-white border-0 shadow-md"
                    >
                      {donSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                      Continuer vers le paiement
                    </Button>
                    <Button variant="ghost" onClick={() => setShowDonForm(false)}>Annuler</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{cause.description}</p>
              </CardContent>
            </Card>

            {/* Milestones */}
            {cause.milestones.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-amber-500" /> Jalons de progression
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cause.milestones.map((m, i) => (
                    <div key={m.id} className="flex items-start gap-3">
                      {m.reached ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />
                      )}
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${m.reached ? 'text-green-700' : 'text-gray-700'}`}>
                          {m.label}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatMoney(m.target, cause.currency)}
                          {m.reached && ' — Atteint !'}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Donations list */}
            {cause.dons.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-500" /> Derniers dons
                  </CardTitle>
                  <CardDescription>{cause.donationCount} don(s) au total</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cause.dons.slice(0, 10).map((don) => (
                    <div key={don.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xs font-bold">
                          {(don.displayName || 'A')[0].toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{don.displayName || 'Anonyme'}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(don.createdAt).toLocaleDateString('fr-FR')}
                            {don.mecene?.city && ` · ${don.mecene.city}`}
                          </p>
                        </div>
                      </div>
                      <span className="font-semibold text-amber-600">
                        {formatMoney(don.amount, don.currency || cause.currency)}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="text-base">Porteur du projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-lg font-bold">
                    {(cause.porteur.name || 'P')[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{cause.porteur.name || 'Anonyme'}</p>
                    <p className="text-sm text-gray-500">{cause.porteur.email}</p>
                  </div>
                </div>
                {cause.porteur.phone && (
                  <p className="text-sm text-gray-600">{cause.porteur.phone}</p>
                )}
                {cause.porteur.city && (
                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {cause.porteur.city}{cause.porteur.country ? `, ${cause.porteur.country}` : ''}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
