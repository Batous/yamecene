import { create } from 'zustand'
import type { Locale } from '@/lib/i18n'

export type PageKey =
  | 'home'
  | 'cause-form'
  | 'cause-detail'
  | 'code-acces'
  | 'admin'

interface AppState {
  currentPage: PageKey
  causeSlug: string | null
  locale: Locale
  navigate: (page: PageKey, slug?: string) => void
  setPage: (page: PageKey) => void
  setCauseSlug: (slug: string) => void
  setLocale: (locale: Locale) => void
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'home',
  causeSlug: null,
  locale: 'fr',
  navigate: (page, slug) =>
    set({
      currentPage: page,
      ...(slug ? { causeSlug: slug } : {}),
    }),
  setPage: (page) => set({ currentPage: page }),
  setCauseSlug: (slug) => set({ causeSlug: slug }),
  setLocale: (locale) => set({ locale }),
}))
