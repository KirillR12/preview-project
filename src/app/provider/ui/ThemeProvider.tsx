import { ThemeKey } from '@/shared/constant/localStorage'
import { ThemeContext } from '@/shared/contexts/ThemeContext'
import { ThemeType } from '@/shared/types/ThemeType'
import { ReactNode, memo, useMemo, useState } from 'react'

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = memo((props: ThemeProviderProps) => {
    const { children } = props

    const themeLS = localStorage.getItem(ThemeKey as ThemeType)
    const themeDefault = themeLS ? themeLS : 'theme_dark'

    const [theme, setTheme] = useState(themeDefault as ThemeType)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme]
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
})
