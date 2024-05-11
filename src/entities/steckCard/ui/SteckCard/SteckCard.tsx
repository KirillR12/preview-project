import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'
import { SteckCardType } from '../../model/types/SteckCardType'
import { useTranslation } from 'react-i18next'

interface SteckCardProps {
    className?: string
    steckCard: SteckCardType
    isOpen: boolean
    collapsed: boolean
    id: number
    onCollapsed: (id: number) => void
}

export const SteckCard = memo((props: SteckCardProps) => {
    const { className, steckCard, collapsed, onCollapsed, id } = props

    const { name, description } = steckCard

    const onCollapsedHalper = (id: number) => {
        onCollapsed(id)
    }

    const { t } = useTranslation()

    if (!collapsed) {
        return (
            <VStack className={classNames(styles.SteckCard, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={() => onCollapsedHalper(id)}
                >
                    <Text title={t(name)} tag="h3" weight="ligth" btn />
                </Button>
            </VStack>
        )
    }

    return (
        <VStack
            gap="16"
            align="start"
            className={classNames(styles.SteckCard, {}, [className])}
        >
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={() => onCollapsedHalper(-1)}
            >
                <Text title={t(name)} tag="h3" weight="ligth" btn />
            </Button>
            <VStack gap="16" className={styles.description}>
                {description.map((text) => (
                    <HStack gap="24" key={text}>
                        <Text text="•" SizeTextType="textMedium" />
                        <Text
                            text={t(text)}
                            weight="ligth"
                            SizeTextType="textMedium"
                        />
                    </HStack>
                ))}
            </VStack>
        </VStack>
    )
})
