import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { ProjectCardSchema } from '../../model/types/ProjectCardSchema'

 interface ProjectCardProps {
   className?: string
   end?: boolean
   card: ProjectCardSchema
}

export const ProjectCard = memo((props: ProjectCardProps) => {

const {
className,
end,
card
} = props

const {
  img
} = card

if (!end) {
  return (
    <HStack justify='start' max className={classNames(styles.ProjectCard, {}, [className])}>
<img src={img} className={styles.img} />
    </HStack>
  )
}

return (
  <HStack justify='end' max className={classNames(styles.ProjectCard, {}, [className])}>
<img src={img} className={styles.img} />
  </HStack>
)

 })