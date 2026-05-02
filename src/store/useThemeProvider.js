import { useEffect } from 'react';
import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useThemeProvider = create(
  persist((set) => ({
    theme: "light",
    setTheme: (theme) => set({theme}),
    toggleTheme: () => {
      set((state) => ({
        theme: state.theme === "light" ? "dark" : "light"
      }))
    }
  }),
  {
    name: "theme-storage",
    partialize: (state) => ({
      theme: state.theme
    })
  }
)
);

export default function ThemeProvider({children}){
  const theme = useThemeProvider(state => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light","dark");
    document.documentElement.classList.add(theme)
  },[theme])

  return children
}