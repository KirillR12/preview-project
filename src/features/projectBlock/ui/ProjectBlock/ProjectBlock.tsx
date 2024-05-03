import { memo } from 'react';
import { Text, TitleTag } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ProjectCard } from '@/entities/projectCard';
import styles from './styles.module.css'
import classNames from 'classnames';
import { Element } from 'react-scroll';
import TodoList from '@/shared/assets/img/todoList.png'
import DogFood from '@/shared/assets/img/dogFood.png'
import Cugo from '@/shared/assets/img/cugo.png'
import Machines from '@/shared/assets/img/machines.png'
import Preview from '@/shared/assets/img/preview.png'
import Article from '@/shared/assets/img/article.png'

interface ProjectBlockProps {
    className?: string
}

export const ProjectBlock = memo((props: ProjectBlockProps) => {
    const {
        className
    } = props

    const dataCard = [
        {
            img: TodoList
        },
        {
            img: DogFood
        },
        {
            img: Cugo
        },
        {
            img: Machines
        },
        {
            img: Preview
        },
        {
            img: Article
        },
    ]


    return (
<Element name={'project'}>
            <VStack gap='48' className={classNames(styles.ProjectBlock, {}, [className])}>
            <HStack className={styles.title}  justify='center' gap='16' max>
                <Text title='Проекты' tag={TitleTag.H2} weight='medium' />
                <Text className={styles.hashtag} title='#' tag={TitleTag.H2} weight='medium' />
            </HStack>
            {dataCard.map((el, i) => i % 2 ? <ProjectCard card={el} end /> : <ProjectCard card={el}/>)}
            </VStack>
</Element>

    );
});
