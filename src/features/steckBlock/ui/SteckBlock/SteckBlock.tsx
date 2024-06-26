import classNames from 'classnames'
import styles from './styles.module.css'
import { memo, useCallback, useState } from 'react'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { SteckCard } from '@/entities/steckCard'
import { Element } from 'react-scroll'
import { Hr } from '@/shared/ui/Hr/Hr'
import { steckData } from '../../model/data/steckData'
import { useTranslation } from 'react-i18next'

interface SteckBlockProps {
    className?: string
}

const SteckBlock = memo((props: SteckBlockProps) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState<number>()

    const onCollapsed = useCallback((id: number) => {
        setCollapsed(id)
    }, [])

    const { t } = useTranslation()

    return (
        <Element
            name={'steck'}
            className={classNames(styles.SteckBlock, {}, [className])}
        >
            <VStack gap="48" max align="center">
                <HStack className={styles.title} justify="center" gap="16" max>
                    <Text
                        title={t('Навыки')}
                        tag="h2"
                        weight="medium"
                        theme="outline"
                    />
                    <Text
                        className={styles.hashtag}
                        title="#"
                        tag="h2"
                        weight="medium"
                    />
                </HStack>
                <VStack gap="16" className={styles.container} max>
                    <Hr max />
                    {steckData.map((el, i) => (
                        <VStack key={el.name} max>
                            <SteckCard
                                collapsed={collapsed === i}
                                onCollapsed={onCollapsed}
                                steckCard={el}
                                id={i}
                                isOpen
                            />
                            <Hr max />
                        </VStack>
                    ))}
                </VStack>
            </VStack>
        </Element>
    )
})

export default SteckBlock
