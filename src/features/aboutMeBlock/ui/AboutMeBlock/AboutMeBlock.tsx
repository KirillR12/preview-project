import { memo } from 'react'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface AboutMeBlockProps {
    className?: string
}

export const AboutMeBlock = memo((props: AboutMeBlockProps) => {
    const { className } = props

    return (
        <VStack className={className}>
            <Text title="Привет, я Кирилл!" tag="h1" weight="bolt" />
            <Text title="Фронтенд разработчик" tag="h2" weight="ligth" />
            <Text title="с 2-х летнем опытом." tag="h2" weight="ligth" />
        </VStack>
    )
})
