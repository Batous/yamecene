'use client'

import { Hexagon, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-amber-200/60 bg-amber-50/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                <Hexagon className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="honey-text">YaMécènes</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              La Ruche des Mécènes — Chaque cause trouve sa ruche, chaque donateur laisse une trace.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="cursor-pointer hover:text-amber-600 transition-colors">Accueil</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-amber-600 transition-colors">Causes actives</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-amber-600 transition-colors">Soumettre une cause</span>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider">Informations</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="cursor-pointer hover:text-amber-600 transition-colors">Comment ça marche</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-amber-600 transition-colors">Code d&apos;accès</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-amber-600 transition-colors">Ceintures de mécénat</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>contact@yamecenes.sn</li>
              <li>Dakar, Sénégal</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-amber-200/60 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {currentYear} YaMécènes. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span>Fait avec</span>
            <Heart className="h-3 w-3 fill-red-400 text-red-400" />
            <span>à Dakar</span>
          </div>
        </div>
      </div>
    </footer>
  )
}