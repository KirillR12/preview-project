import { memo } from 'react'
import { PreviewBlock } from '@/widgets/Preview'
import { ProjectBlock } from '@/features/projectBlock'
import { FiguresLayer } from '@/widgets/FiguresLayer'
import styles from './styles.module.css'
import { SteckBlock } from '@/features/steckBlock'
import { EducationBlock } from '@/features/educationBlock'
import { ContactBlock } from '@/features/contactBlock'
import { ParticlesBg } from '@/entities/particlesBg'
import classNames from 'classnames'
import { HStack, VStack } from '@/shared/ui/Stack'

interface MainPageProps {
    className?: string
}

export const MainPage = memo((props: MainPageProps) => {
    const { className } = props

    return (
        <VStack
            max
            align="center"
            className={classNames(styles.container, {}, [className])}
        >
            <PreviewBlock />
            <FiguresLayer />
            <ProjectBlock />
            <SteckBlock />
            <EducationBlock />
            <ContactBlock />
            <ParticlesBg />
        </VStack>
    )
})
