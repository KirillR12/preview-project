import classNames from 'classnames'
import styles from './styles.module.css'
import { HTMLAttributeAnchorTarget, ReactNode, memo } from 'react'

type ALinkTheme = 'clear' | 'outline'

interface ALinkProps {
    className?: string
    href: string
    target?: HTMLAttributeAnchorTarget
    children: ReactNode
    theme?: ALinkTheme
}

export const ALink = memo((props: ALinkProps) => {
    const { className, href, target, theme = '', children } = props

    return (
        <a
            className={classNames(styles.a, {}, [className, styles[theme]])}
            href={href}
            target={target}
        >
            {children}
        </a>
    )
})
