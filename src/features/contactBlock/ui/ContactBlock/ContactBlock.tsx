import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Element } from 'react-scroll'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { ALink } from '@/shared/ui/ALink'

interface ContactBlockProps {
    className?: string
}

export const ContactBlock = memo((props: ContactBlockProps) => {
    const { className } = props

    return (
        <Element
            name={'contacts'}
            className={classNames(styles.ContactBlock, {}, [className])}
        >
            <VStack gap="48" align="center">
                <HStack className={styles.title} justify="center" gap="16" max>
                    <Text title="Контакты" tag="h2" weight="medium" />
                    <Text
                        className={styles.hashtag}
                        title="#"
                        tag="h2"
                        weight="medium"
                    />
                </HStack>
                <HStack gap="16" justify="between" className={styles.container}>
                    <ALink target="_blank" href="https://t.me/llfedotov">
                        <Text title="Телеграмм" tag="h3" />
                    </ALink>
                    <ALink target="_blank" href="https://t.me/llfedotov">
                        <Text title="WhatApp" tag="h3" />
                    </ALink>
                    <ALink target="_blank" href="https://t.me/llfedotov">
                        <Text title="Gmail" tag="h3" />
                    </ALink>
                    <ALink target="_blank" href="https://t.me/llfedotov">
                        <Text title="LinkenIn" tag="h3" />
                    </ALink>
                    <ALink target="_blank" href="https://t.me/llfedotov">
                        <Text title="GitHub" tag="h3" />
                    </ALink>
                </HStack>
            </VStack>
        </Element>
    )
})
