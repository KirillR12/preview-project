import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Element } from 'react-scroll'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text, TitleTag } from '@/shared/ui/Text'

 interface ContactBlockProps {
   className?: string
}

export const ContactBlock = memo((props: ContactBlockProps) => {

const {
className
} = props

    return (
<Element name={'contacts'} className={classNames(styles.ContactBlock, {}, [className])}>
  <VStack gap='48'>
<HStack gap='16' justify='center' max>
<Text title='Контакты' tag={TitleTag.H3} />
<Text title='#' tag={TitleTag.H3} />
      </HStack>
      <HStack gap='16' justify='between' max>
<Text title='Телеграмм' tag={TitleTag.H3} />
<Text title='WhatApp' tag={TitleTag.H3} />
<Text title='Gmail' tag={TitleTag.H3} />
<Text title='LinkenIn' tag={TitleTag.H3} />
<Text title='GitHub' tag={TitleTag.H3} />
      </HStack>
  </VStack>
</Element>
  )
 })