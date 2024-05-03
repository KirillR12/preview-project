import { memo } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props

    return (
        <Svg
            className={classNames(
                inverted ? styles.inverted : styles.Icon,
                {},
                [className]
            )}
            {...otherProps}
        />
    )
})
