import classNames from 'classnames'
import styles from './styles.module.css'
import { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Link } from 'react-scroll'
import { PreviewType } from '@/shared/types/PreviewType'
import { Icon } from '@/shared/ui/Icon'
import theme from '@/shared/assets/svg/theme.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import Menu from '@/shared/assets/svg/menu.svg'
import { useTheme } from '@/shared/hooks/useTheme'
import { Hr } from '@/shared/ui/Hr'
import Logo from '@/shared/assets/svg/logo.svg'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from '@/features/langSwitcher'

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

    const { t } = useTranslation()

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
                    <VStack
                        align="center"
                        gap="32"
                        className={styles.linkBlock}
                    >
                        <VStack max>
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
                                        title={t(el.text)}
                                        tag="h2"
                                        weight="ligth"
                                        className={styles.text}
                                        aling="center"
                                    />
                                    <Hr max white />
                                </Link>
                            ))}
                        </VStack>
                        <HStack>
                            <Button onClick={toggleThemeHalper}>
                                <Icon Svg={theme} className={styles.icon} />
                            </Button>
                            <LangSwitcher />
                        </HStack>
                    </VStack>
                    <HStack className={styles.block} justify="end">
                        <Button theme={ButtonTheme.CLEAR} onClick={onCallapsed}>
                            <Icon Svg={Menu} className={styles.icon} />
                        </Button>
                    </HStack>
                </HStack>
            </>
        )
    }
    return (
        <HStack className={styles.block} justify="between">
            <HStack>
                <Icon Svg={Logo} className={styles.icon} />
                <Text title="edotov" tag="h3" weight="ligth" white />
            </HStack>
            <Button theme={ButtonTheme.CLEAR} onClick={onCallapsed}>
                <Icon Svg={Menu} className={styles.icon} />
            </Button>
        </HStack>
    )
})
