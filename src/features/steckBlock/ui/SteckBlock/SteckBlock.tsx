import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Text, TitleTag } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { SteckCard } from '@/entities/steckCard'
import { Element } from 'react-scroll'
import { Hr } from '@/shared/ui/Hr/Hr'

 interface SteckBlockProps {
   className?: string
}

export const SteckBlock = memo((props: SteckBlockProps) => {
const {
className
} = props

const data = {
  text: 'Конфигурация',
  description: [
    'React portal, Error Boundaries, кастомные хуки (useHover, useAction, useModal, useInfinitiScroll, useDebounce, useThrottle).',
    'Роли пользователей, приватные роуты.',
    'Конфигурация роутинга.',
    'Поддержка нескольких языков с помощью i18n.'
  ]
}

    return (
<Element name={'steck'}>
    <VStack gap='48' max className={classNames(styles.SteckBlock, {}, [className])}>
    <HStack className={styles.title}  justify='center' gap='16' max>
                <Text title='Навыки' tag={TitleTag.H2} weight='medium' />
                <Text className={styles.hashtag} title='#' tag={TitleTag.H2} weight='medium' />
            </HStack>
      <VStack gap='16' max>
      <Hr max/>
      <SteckCard steckCard={data} isOpen />
      <Hr max/>
      <SteckCard steckCard={data} isOpen />
      <Hr max/>
      <SteckCard steckCard={data} isOpen />
      <Hr max/>
      <SteckCard steckCard={data} isOpen />
      <Hr max/>
      <SteckCard steckCard={data} isOpen />
      <Hr max/>
      </VStack>
    </VStack>
</Element>
  )
 })