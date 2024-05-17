import { memo } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import { TitleTag } from '@/shared/types/TagType'
import { WeightType } from '@/shared/types/WeightType'

type SizeTextType = 'textBig' | 'textMedium' | 'textSmall'
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4'
type TextAlign = 'start' | 'center' | 'end'
type TextTheme = 'white' | 'outline'

interface TextProps {
    className?: string
    title?: string
    text?: string
    weight?: WeightType
    SizeTextType?: SizeTextType
    tag?: TitleTag
    aling?: TextAlign
    theme?: TextTheme
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
        theme = '',
    } = props

    const HeaderTag = mapSizeToHeaderTag[tag]

    const additionTitleArr = [styles[weight], styles[aling], styles[theme]]
    const additionTextArr = [
        styles[weight],
        styles[SizeTextType],
        styles[aling],
        styles[theme],
    ]

    return (
        <div className={classNames(styles.divText, {}, [className])}>
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
