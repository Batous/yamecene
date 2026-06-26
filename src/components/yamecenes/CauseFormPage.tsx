'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Key, FileText, User, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/store/app-store'
import { useToast } from '@/hooks/use-toast'

const STEPS = [
  { label: 'Code d\'accès', icon: Key },
  { label: 'Votre cause', icon: FileText },
  { label: 'Vos informations', icon: User },
]

const CAUSE_TYPES = [
  'Éducation', 'Santé', 'Eau & Assainissement', 'Entrepreneuriat',
  'Agriculture', 'Culture & Art', 'Famille', 'Communauté', 'Autre',
]

const MOBILE_OPERATORS = ['Orange Money', 'Wave', 'Free Money', 'MTN Mobile Money']

export function CauseFormPage() {
  const { navigate } = useAppStore()
  const { toast } = useToast()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [codeValid, setCodeValid] = useState<boolean | null>(null)
  const [codeMessage, setCodeMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [resultSlug, setResultSlug] = useState('')

  // Form state
  const [accessCode, setAccessCode] = useState('')
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [causeType, setCauseType] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('Sénégal')
  const [reference, setReference] = useState('')
  const [goalAmount, setGoalAmount] = useState('')
  const [milestones, setMilestones] = useState([{ label: '', target: '' }])
  const [porteurName, setPorteurName] = useState('')
  const [porteurEmail, setPorteurEmail] = useState('')
  const [porteurPhone, setPorteurPhone] = useState('')
  const [porteurCity, setPorteurCity] = useState('')
  const [porteurCountry, setPorteurCountry] = useState('Sénégal')
  const [mobileOperator, setMobileOperator] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  async function validateCode() {
    if (!accessCode.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/validate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: accessCode.trim() }),
      })
      const data = await res.json()
      setCodeValid(data.valid)
      setCodeMessage(data.message || data.error || '')
      if (data.valid) {
        toast({ title: 'Code validé !', description: data.message })
      } else {
        toast({ title: 'Code invalide', description: data.error, variant: 'destructive' })
      }
    } catch {
      setCodeValid(false)
      setCodeMessage('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      const body = {
        accessCode: accessCode.trim(),
        title, summary, description, type: causeType,
        city, country, reference,
        goalAmount: goalAmount ? parseFloat(goalAmount) : undefined,
 milestones: milestones.filter((m) => m.label && m.target).map((m) => ({
          label: m.label, target: parseFloat(m.target),
        })),
        porteurName, porteurEmail, porteurPhone,
        porteurCity, porteurCountry,
        porteurMobileOperator: mobileOperator || undefined,
        porteurMobileNumber: mobileNumber || undefined,
      }
      const res = await fetch('/api/causes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (res.ok) {
        setSubmitted(true)
        setResultSlug(data.slug)
        toast({ title: 'Cause soumise !', description: 'Votre cause est en attente de validation.' })
      } else {
        toast({ title: 'Erreur', description: data.error || 'Erreur lors de la soumission', variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Erreur', description: 'Erreur de connexion', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  function canProceed(): boolean {
 if (step === 0) return codeValid === true
    if (step === 1) return title.trim().length >= 5 && summary.trim().length >= 10 && description.trim().length >= 20
    if (step === 2) return porteurName.trim().length >= 2 && porteurEmail.includes('@')
    return false
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="border-green-200 bg-green-50">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">Cause soumise avec succès !</h2>
              <p className="text-green-700">
                Votre cause a été enregistrée et est en attente de validation par notre équipe.
                Vous recevrez une notification dès qu\'elle sera publiée.
              </p>
              <Button className="mt-4 bg-amber-600 text-white hover:bg-amber-700" onClick={() => navigate('home')}>
                Retour à l\'accueil
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      {/* Back button */}
      <Button variant="ghost" className="mb-6 text-amber-700 hover:bg-amber-50" onClick={() => navigate('home')}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour
      </Button>

      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">Présenter votre cause</h1>
      <p className="mb-8 text-gray-600">Remplissez les étapes ci-dessous pour soumettre votre cause à la ruche.</p>

      {/* Step indicator */}
      <div className="mb-8 flex items-center justify-between">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          const isActive = i === step
n          const isDone = i < step
          return (
            <div key={i} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    isDone ? 'bg-green-500 text-white' : isActive ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                </div>
                <span className={`mt-1 text-xs ${isActive ? 'font-medium text-amber-700' : 'text-gray-500'}`}>
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-2 h-0.5 flex-1 ${i < step ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </div>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 0 && (
            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <Key className="h-5 w-5" /> Code d&rsquo;accès
                </CardTitle>
                <CardDescription>
                  Entrez le code d&rsquo;accès que vous avez reçu ou acheté. Ce code garantit la qualité des causes sur YaMécènes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    placeholder="Entrez votre code d\'accès"
                    value={accessCode}
                    onChange={(e) => { setAccessCode(e.target.value); setCodeValid(null) }}
                    className="border-amber-200 focus:border-amber-400"
                    onKeyDown={(e) => e.key === 'Enter' && validateCode()}
                  />
                  <Button
                    onClick={validateCode}
                    disabled={loading || !accessCode.trim()}
                    className="bg-amber-600 text-white hover:bg-amber-700"
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Vérifier'}
                  </Button>
                </div>
                {codeValid !== null && (
                  <div className={`flex items-center gap-2 rounded-lg p-3 text-sm ${
                    codeValid ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {codeValid ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    {codeMessage}
                  </div>
                )}
                <p className="text-xs text-gray-500">
                  Pas de code ?{' '}
                  <button onClick={() => navigate('code-acces')} className="text-amber-600 underline hover:text-amber-700">
                    Obtenez-en un ici
                  </button>
                </p>
              </CardContent>
            </Card>
          )}

          {step === 1 && (
            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <FileText className="h-5 w-5" /> Détails de votre cause
                </CardTitle>
                <CardDescription>Décrivez votre cause avec le plus de détails possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de la cause *</Label>
                  <Input id="title" placeholder="Ex: École coranique de Médina — Toiture urgente" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Résumé *</Label>
                  <Textarea id="summary" placeholder="Un court résumé en 1-2 phrases...