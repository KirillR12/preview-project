import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { SwiperCard } from '@/entities/swiperCard'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Element } from 'react-scroll'
import { educationData } from '../../model/data/educationData'
import { useTranslation } from 'react-i18next'

interface EducationBlockProps {
    className?: string
}

const EducationBlock = memo((props: EducationBlockProps) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <Element
            name={'education'}
            className={classNames(styles.EducationBlock, {}, [className])}
        >
            <VStack gap="48" align="center" max>
                <HStack justify="center" gap="16" max>
                    <Text title={t('Обучение')} tag="h2" weight="medium" />
                    <Text
                        className={styles.hashtag}
                        title="#"
                        tag="h2"
                        weight="medium"
                    />
                </HStack>
                <SwiperCard card={educationData} className={styles.container} />
            </VStack>
        </Element>
    )
})

export default EducationBlock
