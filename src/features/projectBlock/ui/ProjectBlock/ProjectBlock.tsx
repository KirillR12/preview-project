import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ProjectCard } from '@/entities/projectCard'
import styles from './styles.module.css'
import classNames from 'classnames'
import { Element } from 'react-scroll'
import { getProject } from '@/shared/api/api'
import { project } from '@/shared/constant/query'
import { useQuery } from 'react-query'

interface ProjectBlockProps {
    className?: string
}

export const ProjectBlock = memo((props: ProjectBlockProps) => {
    const { className } = props

    const { data, isError, isLoading } = useQuery(project, getProject)

    if (isError) {
        return <Text title="Произошла ошибка" />
    }

    if (isLoading) {
        return <Text title="Загрузка" />
    }

    if (data) {
        return (
            <Element
                name={'project'}
                className={classNames(styles.ProjectBlock, {}, [className])}
            >
                <VStack gap="48" align="center" max>
                    <HStack
                        className={styles.title}
                        justify="center"
                        gap="16"
                        max
                    >
                        <Text tag="h2" title="Проекты" weight="medium" />
                        <Text
                            className={styles.hashtag}
                            title="#"
                            tag="h2"
                            weight="medium"
                        />
                    </HStack>
                    {data.map((el, i) =>
                        i % 2 ? (
                            <ProjectCard card={el} end />
                        ) : (
                            <ProjectCard card={el} />
                        )
                    )}
                </VStack>
            </Element>
        )
    }
})
