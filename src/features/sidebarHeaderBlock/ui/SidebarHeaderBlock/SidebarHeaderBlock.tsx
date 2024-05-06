import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Link } from 'react-scroll'
import { PreviewType } from '@/shared/types/PreviewType'
import { Icon } from '@/shared/ui/Icon'
import darkTheme from '@/shared/assets/svg/darkTheme.svg'

interface SidebarHeaderBlockProps {
    className?: string
    preview: PreviewType[]
    collapsed: boolean
}

export const SidebarHeaderBlock = memo((props: SidebarHeaderBlockProps) => {
    const { className, preview, collapsed } = props

    if (!collapsed) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(styles.SidebarHeaderBlock, {}, [
                    className,
                ])}
            >
                <HStack align="center" gap="40" className={styles.linkBlock}>
                    {preview.map((el) => (
                        <Link
                            key={el.href}
                            to={el.href}
                            spy={true}
                            smooth={true}
                            duration={700}
                            className={styles.link}
                        >
                            <Text
                                title={el.text}
                                tag="h4"
                                className={styles.text}
                                weight="ligth"
                            />
                        </Link>
                    ))}
                    <Icon Svg={darkTheme} />
                </HStack>
            </HStack>
        )
    }
    return null
})
