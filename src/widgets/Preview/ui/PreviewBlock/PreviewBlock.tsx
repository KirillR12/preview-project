import classNames from 'classnames'
import { memo, useCallback, useState } from 'react'
import styles from './styles.module.css'
import img from '../../../../shared/assets/img/kirill.png'
import { AboutMeBlock } from '@/features/aboutMeBlock'
import { HeaderBlock } from '@/features/headerBlock'
import { headerBlockData } from '../../model/data/data'
import { useMediaQuery } from 'react-responsive'
import { SidebarHeaderBlock } from '@/features/sidebarHeaderBlock'
import { Button } from '@/shared/ui/Button'

interface PreviewBlockProps {
    className?: string
}

export const PreviewBlock = memo((props: PreviewBlockProps) => {
    const { className } = props

    const isModule = useMediaQuery({ query: '(min-width: 900px)' })

    const [collapsed, setCollapsed] = useState(true)

    const collapsedBtnFunc = useCallback(() => {
        setCollapsed((prev) => !prev)
    }, [])

    return (
        <div className={classNames(styles.PreviewBlock, '', [className])}>
            <img className={styles.img} src={img} />
            {isModule ? (
                <HeaderBlock
                    className={styles.HeaderBlock}
                    preview={headerBlockData}
                />
            ) : (
                <SidebarHeaderBlock
                    preview={headerBlockData}
                    className={styles.SidebarHeaderBlock}
                    collapsed={collapsed}
                />
            )}
            {!isModule ? (
                <Button onClick={collapsedBtnFunc} className={styles.btn}>
                    BTN
                </Button>
            ) : null}
            <div className={styles.paddingContent}>
                <AboutMeBlock className={styles.AboutMeBlock} />
            </div>
        </div>
    )
})
