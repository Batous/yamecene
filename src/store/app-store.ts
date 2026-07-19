import { create } from 'zustand'

export type PageKey =
  | 'home'
  | 'cause-form'
  | 'cause-detail'
  | 'code-acces'
  | 'admin'

interface AppState {
  currentPage: PageKey
  causeSlug: string | null
  navigate: (page: PageKey, slug?: string) => void
  setPage: (page: PageKey) => void
  setCauseSlug: (slug: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'home',
  causeSlug: null,
  navigate: (page, slug) =>
    set({
      currentPage: page,
      ...(slug ? { causeSlug: slug } : {}),
    }),
  setPage: (page) => set({ currentPage: page }),
  setCauseSlug: (slug) => set({ causeSlug: slug }),
}))