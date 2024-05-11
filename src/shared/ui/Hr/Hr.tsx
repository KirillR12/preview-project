import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'

interface HrProps {
    className?: string
    width?: string
    height?: string
    max?: boolean
    hrVertically?: boolean
    maxInverted?: boolean
    white?: boolean
}

export const Hr = memo((props: HrProps) => {
    const { className, width, height, max, hrVertically, maxInverted, white } =
        props

    const mods = {
        [styles.max]: max,
        [styles.maxInverted]: maxInverted,
        [styles.white]: white,
    }

    if (hrVertically) {
        return (
            <hr
                style={{ height: `${height}` }}
                className={classNames(styles.hrVertically, mods, [className])}
            />
        )
    }

    return (
        <hr
            style={{ width: `${width}` }}
            className={classNames(styles.Hr, mods, [className])}
        />
    )
})
