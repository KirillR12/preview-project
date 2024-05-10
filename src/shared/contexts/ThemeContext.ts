import { createContext } from 'react'
import { ThemeType } from '../types/ThemeType'

export interface ThemeContextProps {
    theme?: ThemeType
    setTheme?: (theme: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
