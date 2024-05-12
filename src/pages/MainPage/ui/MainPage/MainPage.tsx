import { memo } from 'react'
import { PreviewBlock } from '@/widgets/Preview'
import { ProjectBlock } from '@/features/projectBlock'
import { SteckBlock } from '@/features/steckBlock'
import { EducationBlock } from '@/features/educationBlock'
import { ContactBlock } from '@/features/contactBlock'
import { ParticlesBg } from '@/entities/particlesBg'
import { VStack } from '@/shared/ui/Stack'

export const MainPage = memo(() => {
    return (
        <VStack max align="center">
            <PreviewBlock />
            <ProjectBlock />
            <SteckBlock />
            <EducationBlock />
            <ContactBlock />
            <ParticlesBg />
        </VStack>
    )
})
