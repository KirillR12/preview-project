import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'
import img from '../../../../shared/assets/img/kirill.png'
import { AboutMeBlock } from '@/features/aboutMeBlock'
import { HeaderBlock } from '@/features/headerBlock'

interface PreviewBlockProps {
    className?: string
}

export const PreviewBlock = memo((props: PreviewBlockProps) => {
    const { className } = props

    return (
        <div className={classNames(styles.PreviewBlock, '', [className])}>
            <img className={styles.img} src={img} />
            <HeaderBlock className={styles.HeaderBlock} />
            <div className={styles.paddingContent}>
                <AboutMeBlock className={styles.AboutMeBlock} />
            </div>
        </div>
    )
})
