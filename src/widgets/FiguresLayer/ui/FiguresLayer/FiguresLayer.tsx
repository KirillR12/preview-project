import styles from './styles.module.css'
import { ReactNode, memo } from 'react'
import { Icon } from '@/shared/ui/Icon'
import OrangeCircle from '@/shared/assets/svg/orangeCircle.svg'
import PinkTriangle from '@/shared/assets/svg/pinkTriangle.svg'
import PurpleTriangle from '@/shared/assets/svg/purpleTriangle.svg'
import YellowCircle from '@/shared/assets/svg/yellowCircle.svg'
import YellowSquare from '@/shared/assets/svg/yellowSquare.svg'
import classNames from 'classnames'

interface FiguresLayerProps {
    className?: string
    children: ReactNode
}

export const FiguresLayer = memo((props: FiguresLayerProps) => {

const {
    className,
    children
} = props

    return (
    <div className={classNames(styles.FiguresLayer, {}, [className])}>
<Icon Svg={OrangeCircle} className={styles.OrangeCircle}/>
<Icon Svg={PinkTriangle} className={styles.PinkTriangle}/>
<Icon Svg={PurpleTriangle} className={styles.PurpleTriangle}/>
<Icon Svg={YellowCircle} className={styles.YellowCircle}/>
<Icon Svg={YellowSquare} className={styles.YellowSquare}/>
{children}
    </div>
  )
 })