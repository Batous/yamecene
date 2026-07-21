import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'YaMecenes - Projects and solidarity, without borders',
  description: 'A technology platform for project discovery, governance, and connection.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><body className="antialiased bg-background text-foreground">{children}<Toaster /></body></html>
}
