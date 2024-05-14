import { MutableRefObject, memo, useCallback, useRef, useState } from 'react'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ProjectCard } from '@/entities/projectCard'
import styles from './styles.module.css'
import classNames from 'classnames'
import { Element } from 'react-scroll'
import { projectData } from '../../model/data/projectData'
import { useTranslation } from 'react-i18next'
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll'

interface ProjectBlockProps {
    className?: string
}

const ProjectBlock = memo((props: ProjectBlockProps) => {
    const { className } = props

    const { t } = useTranslation()

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    const [obviously, setObviously] = useState(false)

    const targetFunc = useCallback(() => {
        setObviously(true)
    }, [])

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: () => targetFunc(),
    })

    return (
        <Element
            name={'project'}
            className={classNames(styles.ProjectBlock, {}, [className])}
        >
            <VStack gap="48" align="center" max>
                <HStack className={styles.title} justify="center" gap="16" max>
                    <Text tag="h2" title={t('Проекты')} weight="medium" />
                    <Text
                        className={styles.hashtag}
                        title="#"
                        tag="h2"
                        weight="medium"
                    />
                </HStack>
                {projectData.map((el, i) =>
                    i % 2 ? (
                        <ProjectCard
                            card={el}
                            className={classNames(styles.ProjectCardEnd, {
                                [styles.fine]: obviously,
                            })}
                            end
                        />
                    ) : (
                        <ProjectCard
                            card={el}
                            className={classNames(styles.ProjectCard, {
                                [styles.fine]: obviously,
                            })}
                        />
                    )
                )}
            </VStack>
        </Element>
    )
})

export default ProjectBlock
