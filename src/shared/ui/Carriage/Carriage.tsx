import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { TitleTag } from '@/shared/types/TagType'

interface CarriageProps {
    className?: string
    tag: TitleTag
}

export const Carriage = memo((props: CarriageProps) => {
    const { tag, className } = props

    if (tag === 'h1') {
        return (
            <div
                className={classNames(styles.Carriage, {}, [
                    className,
                    styles.tagH1,
                ])}
            />
        )
    }

    if (tag === 'h2') {
        return (
            <div
                className={classNames(styles.Carriage, {}, [
                    className,
                    styles.tagH2,
                ])}
            />
        )
    }

    if (tag === 'h3') {
        return (
            <div
                className={classNames(styles.Carriage, {}, [
                    className,
                    styles.tagH3,
                ])}
            />
        )
    }

    return null
})
