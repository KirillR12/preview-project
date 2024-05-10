import classNames from 'classnames'
import styles from './styles.module.css'
import { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Link } from 'react-scroll'
import { PreviewType } from '@/shared/types/PreviewType'
import { Icon } from '@/shared/ui/Icon'
import darkTheme from '@/shared/assets/svg/darkTheme.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import Menu from '@/shared/assets/svg/menu.svg'
import { useTheme } from '@/shared/hooks/useTheme'
import { Hr } from '@/shared/ui/Hr'

interface SidebarHeaderBlockProps {
    className?: string
    preview: PreviewType[]
    collapsed: boolean
    onCallapsed: () => void
}

export const SidebarHeaderBlock = memo((props: SidebarHeaderBlockProps) => {
    const { className, preview, collapsed, onCallapsed } = props

    const { toggleTheme } = useTheme()

    const toggleThemeHalper = useCallback(() => {
        toggleTheme()
        onCallapsed()
    }, [toggleTheme, onCallapsed])

    if (!collapsed) {
        return (
            <>
                <HStack
                    justify="center"
                    max
                    className={classNames(styles.SidebarHeaderBlock, {}, [
                        className,
                    ])}
                >
                    <VStack align="center" className={styles.linkBlock}>
                        <Hr max />
                        {preview.map((el) => (
                            <Link
                                key={el.href}
                                activeClass="active"
                                to={el.href}
                                spy={true}
                                smooth={true}
                                duration={700}
                                className={styles.link}
                            >
                                <Text
                                    title={el.text}
                                    tag="h2"
                                    weight="ligth"
                                    className={styles.text}
                                    aling="center"
                                />
                                <Hr max />
                            </Link>
                        ))}
                        <HStack>
                            <Button
                                onClick={toggleThemeHalper}
                                className={styles.text}
                            >
                                <Icon Svg={darkTheme} />
                            </Button>
                            <Button
                                onClick={toggleThemeHalper}
                                className={styles.text}
                            >
                                <Text
                                    title={'РУС'}
                                    tag="h2"
                                    weight="ligth"
                                    aling="center"
                                />
                            </Button>
                        </HStack>
                    </VStack>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onCallapsed}
                        className={styles.btn}
                    >
                        <Icon Svg={Menu} />
                    </Button>
                </HStack>
            </>
        )
    }
    return null
})
