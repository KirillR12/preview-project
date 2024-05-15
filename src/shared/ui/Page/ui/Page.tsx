import { MutableRefObject, ReactNode, memo, useRef } from 'react'
import styles from './styles.module.css'
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll'
import classNames from 'classnames'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    return (
        <main
            ref={wrapperRef}
            className={classNames(styles.Page, {}, [className])}
        >
            {children}
            {onScrollEnd ? (
                <div className={styles.divTriggerRef} ref={triggerRef} />
            ) : null}
        </main>
    )
})
