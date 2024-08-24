import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ThemeStore } from '@/types'

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDarkMode: true,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
    }
  )
)
