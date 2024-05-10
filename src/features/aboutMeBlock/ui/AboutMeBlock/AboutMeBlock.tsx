import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import styles from './styles.module.css'
import classNames from 'classnames'

interface AboutMeBlockProps {
    className?: string
}

export const AboutMeBlock = memo((props: AboutMeBlockProps) => {
    const { className } = props

    return (
        <VStack
            className={classNames(styles.AboutMeBlock, {}, [className])}
            max
        >
            <Text
                title="Привет, я Кирилл!"
                tag="h1"
                weight="bolt"
                className={styles.text}
            />
            <Text
                title="Фронтенд разработчик"
                tag="h2"
                weight="ligth"
                className={styles.text}
            />
            <Text
                title="с 2-х летнем опытом."
                tag="h2"
                weight="ligth"
                className={styles.text}
            />
        </VStack>
    )
})
