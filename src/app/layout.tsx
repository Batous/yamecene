import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'YaMecenes - Congolese solidarity, open to all',
  description: 'A platform connecting Congolese projects with patrons in the DRC and diaspora.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" suppressHydrationWarning><body className="antialiased bg-background text-foreground">{children}<Toaster /></body></html>
}
