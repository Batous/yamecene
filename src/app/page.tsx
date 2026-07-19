'use client'

import { Header } from '@/components/yamecenes/Header'
import { Footer } from '@/components/yamecenes/Footer'
import { HomePage } from '@/components/yamecenes/HomePage'
import { CauseFormPage } from '@/components/yamecenes/CauseFormPage'
import { CauseDetailPage } from '@/components/yamecenes/CauseDetailPage'
import { CodeAccesPage } from '@/components/yamecenes/CodeAccesPage'
import { AdminDashboard } from '@/components/yamecenes/AdminDashboard'
import { useAppStore } from '@/store/app-store'

export default function Home() {
  const { currentPage, causeSlug } = useAppStore()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'cause-form' && <CauseFormPage />}
        {currentPage === 'cause-detail' && causeSlug && <CauseDetailPage initialSlug={causeSlug} />}
        {currentPage === 'code-acces' && <CodeAccesPage />}
        {currentPage === 'admin' && <AdminDashboard />}
      </main>
      <Footer />
    </div>
  )
}