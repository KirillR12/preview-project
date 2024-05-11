import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import styles from './styles.module.css'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

interface AboutMeBlockProps {
    className?: string
}

const AboutMeBlock = memo((props: AboutMeBlockProps) => {
    const { className } = props

    const { t } = useTranslation()

    return (
        <VStack
            className={classNames(styles.AboutMeBlock, {}, [className])}
            max
        >
            <Text
                title={t('Привет, я Кирилл!')}
                tag="h1"
                weight="bolt"
                className={styles.text}
            />
            <Text
                title={t('Фронтенд разработчик')}
                tag="h2"
                weight="ligth"
                className={styles.text}
            />
            <Text
                title={t('с 2-х летнем опытом.')}
                tag="h2"
                weight="ligth"
                className={styles.text}
            />
        </VStack>
    )
})

export default AboutMeBlock
