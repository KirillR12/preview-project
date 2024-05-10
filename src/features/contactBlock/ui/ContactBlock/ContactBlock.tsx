import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Element } from 'react-scroll'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { ALink } from '@/shared/ui/ALink'
import { contactsData } from '../../model/data/contactsData'

interface ContactBlockProps {
    className?: string
}

export const ContactBlock = memo((props: ContactBlockProps) => {
    const { className } = props

    const contant = (
        <HStack gap="16" justify="between" className={styles.container}>
            {contactsData.map((el) => (
                <ALink key={el.link} target="_blank" href={el.link}>
                    <Text title={el.name} tag="h3" aling="center" />
                </ALink>
            ))}
        </HStack>
    )

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
                {contant}
            </VStack>
        </Element>
    )
})
