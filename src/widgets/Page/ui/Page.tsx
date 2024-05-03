import classNames from 'classnames'
import styles from './styles.module.css'
import { ReactNode, memo } from 'react'

interface PageProps {
    className?: string
    children: ReactNode
}

export const Page = memo((props: PageProps) => {
    const { className, children } = props

    return (
        <main
            className={classNames(styles.Page, {}, [className])}
        >
            {children}
        </main>
    )
})
