import classNames from 'classnames'
import styles from './styles.module.css'
import { memo, useCallback, useState } from 'react'
import { Text, TitleTag } from '@/shared/ui/Text'
import { SteckCardSchema } from '../../model/types/SteckCardSchema'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { HStack, VStack } from '@/shared/ui/Stack'

 interface SteckCardProps {
   className?: string
   steckCard: SteckCardSchema
   isOpen: boolean
}

export const SteckCard = memo((props: SteckCardProps) => {

const {
className,
steckCard,
} = props

const {
text,
description
} = steckCard

const [isAction, setAction] = useState(false)

const toggleOpen = useCallback(() => {
    setAction(true)
}, [])

const toggleClose = useCallback(() => {
    setAction(false)
}, [])
 
if (!isAction) {
    return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleOpen} className={classNames(styles.SteckCard, {}, [className])}>
        <HStack justify='start'>
    <Text title={text} tag={TitleTag.H3} weight='ligth'/>
        </HStack>
    </Button>
    )
}

return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleClose} className={classNames(styles.SteckCard, {}, [className])}>
        <VStack gap='24' align='start'>
    <Text title={text} tag={TitleTag.H3} weight='ligth'/>
    <VStack gap='16' className={styles.description}>
    {description.map((text) => (
        <HStack gap='24' key={text}>
            <Text text='•' />
            <Text text={text} weight='ligth' SizeTextType='textSmall' />
        </HStack>
    ))}
    </VStack>
        </VStack>
    </Button>
    )
 })