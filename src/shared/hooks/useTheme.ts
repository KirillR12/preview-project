import { useCallback, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { ThemeType } from '../types/ThemeType'

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
        setTheme?.(themeHelper)
    }, [theme, setTheme])

    return {
        theme: theme || 'theme_dark',
        toggleTheme,
    }
}
