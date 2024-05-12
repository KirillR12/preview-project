import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Element } from 'react-scroll'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { ALink } from '@/shared/ui/ALink'
import { contactsData } from '../../model/data/contactsData'
import { useTranslation } from 'react-i18next'

interface ContactBlockProps {
    className?: string
}

const ContactBlock = memo((props: ContactBlockProps) => {
    const { className } = props

    const { t } = useTranslation()

    const contant = (
        <HStack gap="16" justify="between" className={styles.container}>
            {contactsData.map((el) => (
                <ALink
                    key={el.link}
                    target="_blank"
                    href={el.link}
                    theme="clear"
                >
                    <Text title={el.name} tag="h3" aling="center" btn />
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
                <HStack justify="center" gap="16" max>
                    <Text title={t('Контакты')} tag="h2" weight="medium" />
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

export default ContactBlock
