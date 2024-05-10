import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'
import { SteckCardType } from '../../model/types/SteckCardType'

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

    if (!collapsed) {
        return (
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={() => onCollapsedHalper(id)}
                className={classNames(styles.SteckCard, {}, [className])}
            >
                <HStack justify="start">
                    <Text title={name} tag="h3" weight="ligth" />
                </HStack>
            </Button>
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
                <Text title={name} tag="h3" weight="ligth" />
            </Button>
            <VStack gap="16" className={styles.description}>
                {description.map((text) => (
                    <HStack gap="24" key={text}>
                        <Text text="•" SizeTextType="textMedium" />
                        <Text
                            text={text}
                            weight="ligth"
                            SizeTextType="textMedium"
                        />
                    </HStack>
                ))}
            </VStack>
        </VStack>
    )
})
