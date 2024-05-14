import { useEffect, useState } from 'react'
import { Text } from '../ui/Text'
import { TitleTag } from '../types/TagType'
import { HStack } from '../ui/Stack'
import { Carriage } from '../ui/Carriage/Carriage'
import { WeightType } from '../types/WeightType'

interface TypewriterType {
    title: string
    tag: TitleTag
    weight?: WeightType
    styles?: string
}

export function Typewriter(props: TypewriterType) {
    const { title, tag, weight, styles } = props

    const [length, setLength] = useState<number>(0)

    useEffect(() => {
        setLength(0)

        const interval = setInterval(setLength, 100, (length) => {
            if (++length >= title.length) {
                clearInterval(interval)
            }

            return length
        })

        return () => {
            clearInterval(interval)
        }
    }, [title])

    return (
        <HStack align="center" max>
            <Text
                title={title.slice(0, length)}
                tag={tag}
                weight={weight}
                className={styles}
            />
            {title.length !== length ? <Carriage tag={tag} /> : null}
        </HStack>
    )
}
