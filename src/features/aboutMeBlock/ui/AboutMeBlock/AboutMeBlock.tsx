import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack'
import styles from './styles.module.css'
import classNames from 'classnames'
import { Typewriter } from '@/shared/function/Typewriter'
import { useTranslation } from 'react-i18next'

interface AboutMeBlockProps {
    className?: string
}

const AboutMeBlock = memo((props: AboutMeBlockProps) => {
    const { className } = props

    const { t } = useTranslation()

    const func = () => {
        const arr1 = Typewriter({
            title: t('Привет, я Кирилл!'),
            tag: 'h1',
            weight: 'bolt',
            styles: styles.text,
        })

        const arr2 = Typewriter({
            title: t('Фронтенд разработчик'),
            tag: 'h2',
            styles: styles.text,
        })

        const arr3 = Typewriter({
            title: t('с 2-х летним опытом'),
            tag: 'h2',
            styles: styles.text,
        })

        return [arr1, arr2, arr3]
    }

    return (
        <VStack
            className={classNames(styles.AboutMeBlock, {}, [className])}
            max
        >
            {func()}
        </VStack>
    )
})

export default AboutMeBlock
