'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppStore } from '@/store/app-store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import {
  ArrowLeft,
  Key,
  ShieldCheck,
  Loader2,
  Copy,
  CheckCircle2,
  Hexagon,
  Users,
  Heart,
  Info,
} from 'lucide-react'

const PRICING_OPTIONS = [
  { count: 1, price: '1 000 FCFA', label: 'Code individuel' },
  { count: 3, price: '2 500 FCFA', label: 'Pack 3 codes (économisez 500 FCFA)' },
  { count: 5, price: '4 000 FCFA', label: 'Pack 5 codes (économisez 1 000 FCFA)' },
]

export function CodeAccesPage() {
  const { navigate } = useAppStore()
  const { toast } = useToast()
  const [selectedPack, setSelectedPack] = useState(0)
  const [requesting, setRequesting] = useState(false)
  const [codes, setCodes] = useState<string[]>([])
  const [copied, setCopied] = useState(false)

  async function requestCodes() {
    setRequesting(true)
    try {
      const res = await fetch('/api/access-codes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: PRICING_OPTIONS[selectedPack].count, type: 'direct' }),
      })
      const data = await res.json()
      if (res.ok) {
        setCodes(data.codes.map((c: { code: string }) => c.code))
        toast({ title: 'Codes générés !', description: `${data.count} code(s) disponible(s).` })
      } else {
        toast({ title: 'Erreur', description: data.error, variant: 'destructive' })
      }
    } catch {
      toast({ title: 'Erreur', description: 'Erreur de connexion', variant: 'destructive' })
    } finally {
      setRequesting(false)
    }
  }

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast({ title: 'Copié !', description: 'Le code a été copié dans le presse-papiers.' })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({ title: 'Erreur', description: 'Impossible de copier', variant: 'destructive' })
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <Button variant="ghost" className="mb-6 text-amber-700 hover:bg-amber-50" onClick={() => navigate('home')}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Retour
      </Button>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
            <Key className="h-7 w-7 text-amber-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Code d&apos;accès</h1>
          <p className="mt-2 text-gray-600">
            Obtenez un code d&apos;accès pour soumettre votre cause sur YaMécènes.
            Chaque code permet de présenter une seule cause vérifiée.
          </p>
        </div>

        {/* How it works */}
        <Card className="mb-8 border-amber-100 bg-amber-50/30">
          <CardContent className="p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900">
              <Info className="h-4 w-4 text-amber-600" /> Comment ça marche ?
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">1</span>
                Choisissez un pack de codes d&apos;accès ci-dessous.
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">2</span>
                Les codes sont générés instantanément et affichés à l&apos;écran.
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">3</span>
                Utilisez votre code lors de la soumission de votre cause.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Pricing */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Choisissez votre pack</h3>
          {PRICING_OPTIONS.map((opt, i) => (
            <Card
              key={i}
              className={`cursor-pointer transition-all ${
                selectedPack === i
                  ? 'border-amber-400 ring-2 ring-amber-400/30 bg-amber-50/50'
                  : 'border-gray-200 hover:border-amber-200'
              }`}
              onClick={() => setSelectedPack(i)}
            >
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    selectedPack === i ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Key className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{opt.label}</p>
                    <p className="text-sm text-gray-500">{opt.count} code(s)</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-amber-600">{opt.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Generate button */}
        <div className="mt-6 text-center">
          <Button
            size="lg"
            onClick={requestCodes}
            disabled={requesting}
            className="honey-gradient text-white border-0 shadow-lg shadow-amber-500/25 px-8"
          >
            {requesting ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Key className="mr-2 h-5 w-5" />
            )}
            {requesting ? 'Génération...' : `Générer ${PRICING_OPTIONS[selectedPack].count} code(s)`}
          </Button>
        </div>

        {/* Generated codes */}
        {codes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle2 className="h-5 w-5" />
                  Vos codes d&apos;accès
                </CardTitle>
                <CardDescription className="text-green-700">
                  Copiez ces codes et gardez-les précieusement. Chaque code est à usage unique.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {codes.map((code) => (
                  <div key={code} className="flex items-center justify-between rounded-lg bg-white p-3 border border-green-200">
                    <code className="font-mono text-sm text-gray-800">{code}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyCode(code)}
                      className="text-green-700 hover:text-green-800 hover:bg-green-100"
                    >
                      {copied ? <CheckCircle2 className="mr-1 h-3.5 w-3.5" /> : <Copy className="mr-1 h-3.5 w-3.5" />}
                      Copier
                    </Button>
                  </div>
                ))}
                <div className="pt-4 text-center">
                  <Button
                    className="bg-amber-600 text-white hover:bg-amber-700"
                    onClick={() => navigate('cause-form')}
                  >
                    Utiliser un code pour soumettre une cause
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Network section */}
        <div className="mt-12">
          <Separator className="mb-8" />
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Réseau de confiance</h3>
            <p className="mb-6 text-sm text-gray-600">
              Vous êtes une structure, association ou entreprise ? Contactez-nous pour obtenir des codes en lot pour votre communauté.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <Users className="h-8 w-8 text-amber-500" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Partenaires</p>
                  <p className="text-xs text-gray-500">Codes en lot pour vos membres</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <ShieldCheck className="h-8 w-8 text-amber-500" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Validation</p>
                  <p className="text-xs text-gray-500">Causes vérifiées par nos équipes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <Heart className="h-8 w-8 text-amber-500" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Impact</p>
                  <p className="text-xs text-gray-500">Suivi et transparence totale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}