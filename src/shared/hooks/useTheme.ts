import { useCallback, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { ThemeType } from '../types/ThemeType'
import { ThemeKey } from '@/shared/constant/localStorage'

export interface useThemeResulf {
    theme: ThemeType
    toggleTheme: () => void
}

export function useTheme(): useThemeResulf {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = useCallback(() => {
        let themeHelper: ThemeType
        switch (theme) {
            case 'theme_dark':
                themeHelper = 'theme_light'
                break
            case 'theme_light':
                themeHelper = 'theme_dark'
                break
            default:
                themeHelper = 'theme_dark'
                break
        }
        localStorage.setItem(ThemeKey, themeHelper)
        setTheme?.(themeHelper)
    }, [theme, setTheme])

    return {
        theme: theme || 'theme_dark',
        toggleTheme,
    }
}
