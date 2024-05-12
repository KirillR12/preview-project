import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ProjectCardType } from '../../model/types/ProjectCardType'
import { Text } from '@/shared/ui/Text'
import { ALink } from '@/shared/ui/ALink'
import { useTranslation } from 'react-i18next'

interface ProjectCardProps {
    className?: string
    end?: boolean
    card: ProjectCardType
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { className, end, card } = props

    const { img, name, gitLink } = card

    const { t } = useTranslation()

    if (!end) {
        return (
            <HStack
                justify="start"
                max
                className={classNames(styles.ProjectCard, {}, [className])}
            >
                <div className={styles.containerImg}>
                    <img src={img} className={styles.img} />
                    <VStack className={styles.contant} gap="24">
                        <Text title={t(name)} tag="h3" weight="medium" white />
                        <ALink theme="outline" href={gitLink} target="_blank">
                            <Text
                                text={t('Подробнее')}
                                SizeTextType="textSmall"
                                white
                            />
                        </ALink>
                    </VStack>
                </div>
            </HStack>
        )
    }

    return (
        <HStack
            justify="end"
            max
            className={classNames(styles.ProjectCard, {}, [className])}
        >
            <div className={styles.containerImg}>
                <img src={img} className={styles.img} />
                <VStack className={styles.contant} gap="24">
                    <Text title={t(name)} tag="h3" weight="medium" white />
                    <ALink theme="outline" href={gitLink} target="_blank">
                        <Text
                            text={t('Подробнее')}
                            SizeTextType="textSmall"
                            white
                        />
                    </ALink>
                </VStack>
            </div>
        </HStack>
    )
})
