import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '16' | '24' | '32' | '40' | '48'

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    16: styles.gap16,
    24: styles.gap24,
    32: styles.gap32,
    40: styles.gap40,
    48: styles.gap48,
}

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export interface FlexProps extends DivProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
    'data-testid'?: string
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
        'data-testid': dataTestId = 'Text',
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ]

    const mods = {
        [styles.max]: max,
    }

    return (
        <div
            data-testid={`${dataTestId}`}
            className={classNames(styles.Flex, mods, classes)}
        >
            {children}
        </div>
    )
}
