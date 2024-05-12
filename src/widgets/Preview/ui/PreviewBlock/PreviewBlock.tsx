import classNames from 'classnames'
import { memo, useCallback, useState } from 'react'
import styles from './styles.module.css'
import { AboutMeBlock } from '@/features/aboutMeBlock'
import { HeaderBlock } from '@/features/headerBlock'
import { headerBlockData, img } from '../../model/data/data'
import { useMediaQuery } from 'react-responsive'
import { SidebarHeaderBlock } from '@/features/sidebarHeaderBlock'
import { HStack } from '@/shared/ui/Stack'

interface PreviewBlockProps {
    className?: string
}

export const PreviewBlock = memo((props: PreviewBlockProps) => {
    const { className } = props

    const isModuleSize = useMediaQuery({ query: '(min-width: 1020px)' })

    const [collapsed, setCollapsed] = useState(true)

    const collapsedBtnFunc = useCallback(() => {
        setCollapsed((prev) => !prev)
    }, [])

    return (
        <div className={classNames(styles.PreviewBlock, {}, [className])}>
            <img className={styles.img} src={img} />
            {isModuleSize ? (
                <HStack className={styles.HeaderBlock} max justify="center">
                    <HeaderBlock preview={headerBlockData} />
                </HStack>
            ) : (
                <SidebarHeaderBlock
                    preview={headerBlockData}
                    className={styles.SidebarHeaderBlock}
                    collapsed={collapsed}
                    onCallapsed={collapsedBtnFunc}
                />
            )}
            <HStack max className={styles.AboutMeBlock} justify="center">
                <AboutMeBlock />
            </HStack>
        </div>
    )
})
