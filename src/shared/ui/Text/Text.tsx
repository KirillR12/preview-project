import { memo } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

export enum TitleTag {
    H1 = 'size_h1',
    H2 = 'size_h2',
    H3 = 'size_h3',
    H4 = 'size_h4',
}

type SizeTextType = 'textBig' | 'textMedium' | 'textSmall'
type WeightType = 'ligth' | 'medium' | 'bolt'
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4'


interface TextProps {
    className?: string
    title?: string
    text?: string
    weight?: WeightType
    SizeTextType?: SizeTextType
    tag?: TitleTag
    'data-testid'?: string
}

const mapSizeToHeaderTag: Record<TitleTag, HeaderTagType> = {
    [TitleTag.H4]: 'h4',
    [TitleTag.H3]: 'h3',
    [TitleTag.H2]: 'h2',
    [TitleTag.H1]: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        weight = 'ligth',
        SizeTextType = 'textSmall',
        tag = TitleTag.H1,
    } = props

    const HeaderTag = mapSizeToHeaderTag[tag]

    return (
        <div
        className={className}
        >
            {title && (
                <HeaderTag
                    className={classNames(styles.title, {}, [styles[weight]])}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={classNames(styles.text, {}, [styles[weight], styles[SizeTextType]])}
                >
                    {text}
                </p>
            )}
        </div>
    )
})
