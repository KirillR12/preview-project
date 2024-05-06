import { memo } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4'
type SizeTextType = 'textBig' | 'textMedium' | 'textSmall'
type WeightType = 'ligth' | 'medium' | 'bolt'
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4'
type TextAlign = 'start' | 'center' | 'end'

interface TextProps {
    className?: string
    title?: string
    text?: string
    weight?: WeightType
    SizeTextType?: SizeTextType
    tag?: TitleTag
    aling?: TextAlign
    'data-testid'?: string
}

const mapSizeToHeaderTag: Record<TitleTag, HeaderTagType> = {
    h4: 'h4',
    h3: 'h3',
    h2: 'h2',
    h1: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        weight = 'ligth',
        SizeTextType = 'textSmall',
        aling = 'start',
        tag = 'h1',
    } = props

    const HeaderTag = mapSizeToHeaderTag[tag]

    const additionTitleArr = [styles[weight], styles[aling]]
    const additionTextArr = [
        styles[weight],
        styles[SizeTextType],
        styles[aling],
    ]

    return (
        <div className={className}>
            {title && (
                <HeaderTag
                    className={classNames(styles.title, {}, additionTitleArr)}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={classNames(styles.text, {}, additionTextArr)}>
                    {text}
                </p>
            )}
        </div>
    )
})
