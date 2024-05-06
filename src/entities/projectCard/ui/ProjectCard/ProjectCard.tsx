import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { ProjectCardType } from '../../model/types/ProjectCardSchema'

interface ProjectCardProps {
    className?: string
    end?: boolean
    card: ProjectCardType
}

export const ProjectCard = memo((props: ProjectCardProps) => {
    const { className, end, card } = props

    const { name, img, gitLink, description } = card

    if (!end) {
        return (
            <HStack
                justify="start"
                max
                className={classNames(styles.ProjectCard, {}, [className])}
            >
                <img src={img} className={styles.img} />
            </HStack>
        )
    }

    return (
        <HStack
            justify="end"
            max
            className={classNames(styles.ProjectCard, {}, [className])}
        >
            <img src={img} className={styles.img} />
        </HStack>
    )
})
