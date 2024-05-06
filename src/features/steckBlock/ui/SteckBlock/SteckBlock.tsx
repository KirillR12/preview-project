import classNames from 'classnames'
import styles from './styles.module.css'
import { memo, useCallback, useState } from 'react'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { SteckCard } from '@/entities/steckCard'
import { Element } from 'react-scroll'
import { Hr } from '@/shared/ui/Hr/Hr'
import { getSteck } from '@/shared/api/api'
import { steck } from '@/shared/constant/query'
import { useQuery } from 'react-query'

interface SteckBlockProps {
    className?: string
}

export const SteckBlock = memo((props: SteckBlockProps) => {
    const { className } = props

    const { data, isError, isLoading } = useQuery(steck, getSteck)

    const [collapsed, setCollapsed] = useState<number>()

    const onCollapsed = useCallback((id: number) => {
        setCollapsed(id)
    }, [])

    if (isError) {
        return <Text title="Произошла ошибка" />
    }

    if (isLoading) {
        return <Text title="Загрузка" />
    }

    if (data) {
        return (
            <Element
                name={'steck'}
                className={classNames(styles.SteckBlock, {}, [className])}
            >
                <VStack gap="48" max align="center">
                    <HStack
                        className={styles.title}
                        justify="center"
                        gap="16"
                        max
                    >
                        <Text title="Навыки" tag="h2" weight="medium" />
                        <Text
                            className={styles.hashtag}
                            title="#"
                            tag="h2"
                            weight="medium"
                        />
                    </HStack>
                    <VStack gap="16" max className={styles.container}>
                        <Hr max />
                        {data.map((el, i) => (
                            <>
                                <SteckCard
                                    collapsed={collapsed === i}
                                    onCollapsed={onCollapsed}
                                    steckCard={el}
                                    id={i}
                                    isOpen
                                />
                                <Hr max />
                            </>
                        ))}
                    </VStack>
                </VStack>
            </Element>
        )
    }
})
