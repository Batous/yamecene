'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Key, FileText, User, Loader2, AlertCircle, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAppStore } from '@/store/app-store'
import { useToast } from '@/hooks/use-toast'
import { SUPPORTED_CURRENCIES } from '@/lib/currency'

const STEPS = [
  { label: 'Code d\'accès', icon: Key },
  { label: 'Votre projet', icon: FileText },
  { label: 'Vos informations', icon: User },
]

const CAUSE_TYPES = [
  'Éducation', 'Santé', 'Eau & Assainissement', 'Entrepreneuriat',
  'Agriculture', 'Culture & Art', 'Famille', 'Communauté', 'Autre',
]

const MOBILE_OPERATORS = ['Airtel Money', 'Orange Money', 'M-Pesa', 'MTN Mobile Money']

export function CauseFormPage() {
  const { navigate } = useAppStore()
  const { toast } = useToast()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [codeValid, setCodeValid] = useState<boolean | null>(null)
  const [codeMessage, setCodeMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Form state
  const [accessCode, setAccessCode] = useState('')
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [causeType, setCauseType] = useState('')
  const [projectFamily, setProjectFamily] = useState('development')
  const [impactStatement, setImpactStatement] = useState('')
  const [autonomyPlan, setAutonomyPlan] = useState('')
  const [evidenceNotes, setEvidenceNotes] = useState('')
  const [evidenceUrls, setEvidenceUrls] = useState('')
  const [paymentMode, setPaymentMode] = useState('mixed')
  const [payoutModel, setPayoutModel] = useState('fund_manager')
  const [approvalThreshold, setApprovalThreshold] = useState('3')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('République démocratique du Congo')
  const [reference, setReference] = useState('')
  const [goalAmount, setGoalAmount] = useState('')
  const [currency, setCurrency] = useState('CDF')
  const [milestones, setMilestones] = useState([{ label: '', target: '' }])
  const [porteurName, setPorteurName] = useState('')
  const [porteurEmail, setPorteurEmail] = useState('')
  const [porteurPhone, setPorteurPhone] = useState('')
  const [porteurCity, setPorteurCity] = useState('')
  const [porteurCountry, setPorteurCountry] = useState('République démocratique du Congo')
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
        toast({ title: 'Code validé !', description: 'Vous pouvez passer à l\'étape suivante.' })
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
      // First, create or find the porteur user
      const porteurRes = await fetch('/api/causes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessCode: accessCode.trim(),
          title,
          summary,
          description,
          type: causeType,
          projectFamily,
          impactStatement: impactStatement.trim().length >= 20 ? impactStatement : undefined,
          autonomyPlan: autonomyPlan.trim().length >= 20 ? autonomyPlan : undefined,
          evidenceNotes: evidenceNotes.trim() || undefined,
          evidenceUrls: evidenceUrls.split('\n').map((url) => url.trim()).filter(Boolean),
          city,
          country,
          reference,
          goalAmount: goalAmount ? parseFloat(goalAmount) : undefined,
          currency,
          paymentMode,
          directPaymentDetails: paymentMode !== 'aggregator' && mobileOperator && mobileNumber
            ? { type: mobileOperator, value: mobileNumber }
            : undefined,
          payoutModel,
          approvalThreshold: payoutModel === 'multisig' ? parseInt(approvalThreshold, 10) : undefined,
          milestones: milestones.filter((m) => m.label && m.target).map((m) => ({
            label: m.label,
            target: parseFloat(m.target),
          })),
          porteurName,
          porteurEmail,
          porteurPhone,
          porteurCity,
          porteurCountry,
          porteurMobileOperator: mobileOperator || undefined,
          porteurMobileNumber: mobileNumber || undefined,
        }),
      })
      const data = await porteurRes.json()
      if (porteurRes.ok) {
        setSubmitted(true)
        toast({ title: 'Projet soumis !', description: 'Votre projet est en attente de validation.' })
      } else {
        toast({
          title: 'Erreur',
          description: data.error || 'Erreur lors de la soumission',
          variant: 'destructive',
        })
      }
    } catch {
      toast({ title: 'Erreur', description: 'Erreur de connexion', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  function canProceed(): boolean {
    if (step === 0) return codeValid === true
    if (step === 1) {
      const hasEmergencyEvidence = Boolean(evidenceNotes.trim()) || evidenceUrls.split('\n').some((url) => url.trim())
      const hasImpactAndAutonomy = impactStatement.trim().length >= 20 && autonomyPlan.trim().length >= 20
      return title.trim().length >= 5
        && summary.trim().length >= 10
        && description.trim().length >= 20
        && (projectFamily === 'emergency' ? hasEmergencyEvidence : hasImpactAndAutonomy)
    }
    if (step === 2) {
      const hasDirectDetails = Boolean(mobileOperator && mobileNumber.trim())
      return porteurName.trim().length >= 2
        && porteurEmail.includes('@')
        && (paymentMode === 'aggregator' || hasDirectDetails)
    }
    return false
  }

  function addMilestone() {
    setMilestones([...milestones, { label: '', target: '' }])
  }

  function removeMilestone(index: number) {
    setMilestones(milestones.filter((_, i) => i !== index))
  }

  function updateMilestone(index: number, field: 'label' | 'target', value: string) {
    const updated = [...milestones]
    updated[index] = { ...updated[index], [field]: value }
    setMilestones(updated)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="border-green-200 bg-green-50">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">Projet soumis avec succes !</h2>
              <p className="text-green-700">
                Votre projet a ete enregistre et est en attente de validation par notre equipe.
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
      <Button variant="ghost" className="mb-6 text-amber-700 hover:bg-amber-50" onClick={() => navigate('home')}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour
      </Button>

      <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">Presenter votre projet</h1>
      <p className="mb-8 text-gray-600">Remplissez les etapes ci-dessous pour soumettre votre projet a la communaute.</p>

      {/* Step indicator */}
      <div className="mb-8 flex items-center justify-between">
        {STEPS.map((s, i) => {
          const Icon = s.icon
          const isActive = i === step
          const isDone = i < step
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
          {/* ─── Step 0: Access Code ─── */}
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
                    className="bg-amber-600 text-white hover:bg-amber-700 shrink-0"
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

          {/* ─── Step 1: Cause Details ─── */}
          {step === 1 && (
            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <FileText className="h-5 w-5" /> Details de votre projet
                </CardTitle>
                <CardDescription>Decrivez votre situation et l'impact attendu avec le plus de details possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre du projet *</Label>
                  <Input id="title" placeholder="Ex: Aide scolaire pour les enfants de la paroisse de Matete" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Résumé *</Label>
                  <Textarea id="summary" placeholder="Un court résumé en 1-2 phrases..." value={summary} onChange={(e) => setSummary(e.target.value)} rows={2} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description complète *</Label>
                  <Textarea id="description" placeholder="Contexte, besoins, impact attendu..." value={description} onChange={(e) => setDescription(e.target.value)} rows={5} />
                </div>
                <div className="space-y-2">
                  <Label>Famille du projet *</Label>
                  <Select value={projectFamily} onValueChange={setProjectFamily}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Développement et autonomie</SelectItem>
                      <SelectItem value="emergency">Urgence et aide humanitaire</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="impactStatement">{projectFamily === 'emergency' ? 'Impact attendu (facultatif)' : 'Impact attendu *'}</Label>
                  <Textarea id="impactStatement" placeholder={projectFamily === 'emergency' ? 'Facultatif : quel changement concret ce projet produira-t-il ?' : 'Quel changement concret ce projet produira-t-il ?'} value={impactStatement} onChange={(e) => setImpactStatement(e.target.value)} rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="autonomyPlan">{projectFamily === 'emergency' ? 'Retour à la stabilité (facultatif)' : "Plan d'autonomie *"}</Label>
                  <Textarea id="autonomyPlan" placeholder={projectFamily === 'emergency' ? 'Facultatif : comment revenir à une situation stable ?' : 'Comment les effets du projet pourront-ils durer ?'} value={autonomyPlan} onChange={(e) => setAutonomyPlan(e.target.value)} rows={3} />
                </div>
                {projectFamily === 'emergency' && (
                  <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                    <div className="space-y-2">
                      <Label htmlFor="evidenceNotes">Note de vérification ou preuve *</Label>
                      <Textarea id="evidenceNotes" placeholder="Décrivez la vérification effectuée ou la preuve disponible." value={evidenceNotes} onChange={(e) => setEvidenceNotes(e.target.value)} rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="evidenceUrls">Liens de preuve, un par ligne</Label>
                      <Textarea id="evidenceUrls" placeholder="https://..." value={evidenceUrls} onChange={(e) => setEvidenceUrls(e.target.value)} rows={2} />
                    </div>
                    <p className="text-xs text-amber-800">Une urgence ne peut pas être soumise sans note de vérification ou lien de preuve.</p>
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Categorie</Label>
                    <Select value={causeType} onValueChange={setCauseType}>
                      <SelectTrigger><SelectValue placeholder="Sélectionnez..." /></SelectTrigger>
                      <SelectContent>
                        {CAUSE_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goalAmount">Objectif</Label>
                    <Input id="goalAmount" type="number" placeholder="Ex: 500000" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} />
                  </div>
                </div>
                  <div className="space-y-2">
                    <Label>Devise de la cause</Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger><SelectValue placeholder="Sélectionnez une devise" /></SelectTrigger>
                    <SelectContent>
                      {SUPPORTED_CURRENCIES.map((item) => (
                        <SelectItem key={item.code} value={item.code}>{item.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input id="city" placeholder="Ex: Kinshasa" value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Mode de deblocage des fonds</Label>
                    <Select value={payoutModel} onValueChange={setPayoutModel}>
                      <SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
                        <SelectItem value="fund_manager">Compte gestionnaire de fonds</SelectItem>
                        <SelectItem value="direct">Beneficiaire direct apres jalon</SelectItem>
                        <SelectItem value="multisig">Beneficiaire avec signataires multiples</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {payoutModel === 'multisig' && <div className="space-y-2 sm:col-span-2"><Label>Nombre de signatures requises (minimum 3)</Label><Input type="number" min="3" max="10" value={approvalThreshold} onChange={(e) => setApprovalThreshold(e.target.value)} /></div>}
                  <div className="space-y-2">
                    <Label htmlFor="country">Pays</Label>
                    <Input id="country" placeholder="République démocratique du Congo" value={country} onChange={(e) => setCountry(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reference">Référence (pasteur, paroisse ou structure qui vous connaît)</Label>
                  <Input id="reference" placeholder="Ex: Pasteur, paroisse, association ou responsable local" value={reference} onChange={(e) => setReference(e.target.value)} />
                </div>

                {/* Milestones */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Jalons de progression</Label>
                    <Button type="button" variant="outline" size="sm" onClick={addMilestone} className="text-xs border-amber-300 text-amber-700">
                      <Plus className="mr-1 h-3 w-3" /> Ajouter un jalon
                    </Button>
                  </div>
                  {milestones.map((m, i) => (
                    <div key={i} className="flex items-end gap-2">
                      <div className="flex-1 space-y-1">
                        <Label className="text-xs text-gray-500">Label</Label>
                        <Input placeholder="Ex: Première tranche" value={m.label} onChange={(e) => updateMilestone(i, 'label', e.target.value)} />
                      </div>
                      <div className="w-32 space-y-1">
                        <Label className="text-xs text-gray-500">Montant ({currency})</Label>
                        <Input type="number" placeholder="100000" value={m.target} onChange={(e) => updateMilestone(i, 'target', e.target.value)} />
                      </div>
                      {milestones.length > 1 && (
                        <Button type="button" variant="ghost" size="icon" className="shrink-0 text-red-400 hover:text-red-600 hover:bg-red-50" onClick={() => removeMilestone(i)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* ─── Step 2: Porteur Info ─── */}
          {step === 2 && (
            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <User className="h-5 w-5" /> Vos informations
                </CardTitle>
                <CardDescription>Ces informations seront affichees sur la page de votre projet.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Mode de contribution *</Label>
                  <Select value={paymentMode} onValueChange={setPaymentMode}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct">Paiement direct au bénéficiaire</SelectItem>
                      <SelectItem value="aggregator">Partenaire de paiement autorisé</SelectItem>
                      <SelectItem value="mixed">Mixte : direct ou partenaire autorisé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pname">Nom complet *</Label>
                    <Input id="pname" placeholder="Votre nom" value={porteurName} onChange={(e) => setPorteurName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pemail">Email *</Label>
                    <Input id="pemail" type="email" placeholder="votre@email.com" value={porteurEmail} onChange={(e) => setPorteurEmail(e.target.value)} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pphone">Téléphone</Label>
                    <Input id="pphone" placeholder="+243 81 234 5678" value={porteurPhone} onChange={(e) => setPorteurPhone(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pcity">Ville</Label>
                    <Input id="pcity" placeholder="Kinshasa" value={porteurCity} onChange={(e) => setPorteurCity(e.target.value)} />
                  </div>
                </div>

                {paymentMode !== 'aggregator' && <div className="rounded-lg border border-amber-100 bg-amber-50/50 p-4 space-y-3">
                  <p className="text-sm font-medium text-amber-800">Canal de paiement direct *</p>
                  <p className="text-xs text-gray-500">Renseignez le canal choisi par le bénéficiaire pour recevoir directement les contributions.</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Opérateur</Label>
                      <Select value={mobileOperator} onValueChange={setMobileOperator}>
                        <SelectTrigger><SelectValue placeholder="Sélectionnez..." /></SelectTrigger>
                        <SelectContent>
                          {MOBILE_OPERATORS.map((op) => (
                            <SelectItem key={op} value={op}>{op}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Numéro</Label>
                      <Input placeholder="77 123 45 67" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>
                  </div>
                </div>}
                <p className="text-xs leading-5 text-gray-600">YaMecenes facilite la découverte, la gouvernance et la mise en relation. Les paiements sont fournis par le bénéficiaire ou un partenaire autorisé; YaMecenes ne reçoit, ne détient et ne contrôle pas automatiquement les fonds.</p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="mt-6 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => step > 0 ? setStep(step - 1) : navigate('home')}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {step === 0 ? 'Accueil' : 'Précédent'}
        </Button>
        {step < STEPS.length - 1 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="bg-amber-600 text-white hover:bg-amber-700"
          >
            Suivant
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canProceed() || loading}
            className="honey-gradient text-white border-0 shadow-lg shadow-amber-500/25"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
            Soumettre le projet
          </Button>
        )}
      </div>
    </div>
  )
}
