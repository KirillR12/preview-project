import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import styles from './styles.module.css'
import classNames from 'classnames'
import { Link } from 'react-scroll'
import { Icon } from '@/shared/ui/Icon'
import theme from '@/shared/assets/svg/theme.svg'
import { PreviewType } from '@/shared/types/PreviewType'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { useTheme } from '@/shared/hooks/useTheme'
import Logo from '@/shared/assets/svg/logo.svg'
import { LangSwitcher } from '@/features/langSwitcher'
import { useTranslation } from 'react-i18next'

interface HeaderBlockProps {
    className?: string
    preview: PreviewType[]
}

export const HeaderBlock = memo((props: HeaderBlockProps) => {
    const { className, preview } = props

    const { toggleTheme } = useTheme()

    const { t } = useTranslation()

    return (
        <HStack
            justify="between"
            max
            className={classNames(styles.HeaderBlock, {}, [className])}
        >
            <HStack>
                <Icon Svg={Logo} />
                <Text
                    title="edotov"
                    tag="h4"
                    className={styles.text}
                    weight="ligth"
                />
            </HStack>
            <HStack align="center" gap="40" className={styles.linkBlock}>
                {preview.map((el) => (
                    <Link
                        key={el.href}
                        activeClass="active"
                        to={el.href}
                        spy={true}
                        smooth={true}
                        duration={700}
                    >
                        <Text
                            title={t(el.text)}
                            tag="h4"
                            className={styles.text}
                            weight="ligth"
                            btn
                        />
                    </Link>
                ))}
                <HStack gap="16" align="center">
                    <LangSwitcher />
                    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
                        <Icon Svg={theme} />
                    </Button>
                </HStack>
            </HStack>
        </HStack>
    )
})
