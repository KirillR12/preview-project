import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { SwiperCard } from '@/entities/swiperCard'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Element } from 'react-scroll'
import { useQuery } from 'react-query'
import { getEducation } from '@/shared/api/api'
import { education } from '@/shared/constant/query'

interface EducationBlockProps {
    className?: string
}

export const EducationBlock = memo((props: EducationBlockProps) => {
    const { className } = props

    const { data, isError, isLoading } = useQuery(education, getEducation)

    if (isError) {
        return <Text title="Произошла ошибка" />
    }

    if (isLoading) {
        return <Text title="Загрузка" />
    }

    if (data) {
        return (
            <Element
                name={'education'}
                className={classNames(styles.EducationBlock, {}, [className])}
            >
                <VStack gap="48" align="center">
                    <HStack justify="center" gap="16" max>
                        <Text title="Обучение" tag="h2" weight="medium" />
                        <Text
                            className={styles.hashtag}
                            title="#"
                            tag="h2"
                            weight="medium"
                        />
                    </HStack>
                    <SwiperCard card={data} className={styles.container} />
                </VStack>
            </Element>
        )
    }
})
