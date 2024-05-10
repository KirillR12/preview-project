import { ThemeContext } from '@/shared/contexts/ThemeContext'
import { ThemeType } from '@/shared/types/ThemeType'
import { ReactNode, memo, useMemo, useState } from 'react'

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = memo((props: ThemeProviderProps) => {
    const { children } = props

    const [theme, setTheme] = useState<ThemeType>('theme_dark')

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
