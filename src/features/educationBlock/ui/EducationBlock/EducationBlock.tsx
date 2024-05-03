import classNames from 'classnames'
import styles from './styles.module.css'
import { memo } from 'react'
import { Text, TitleTag } from '@/shared/ui/Text'
import { SwiperCard } from '@/entities/swiperCard'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Element } from 'react-scroll'


 interface EducationBlockProps {
   className?: string
}

export const EducationBlock = memo((props: EducationBlockProps) => {
const {
className
} = props

const img = [
  'https://ir.ozone.ru/s3/multimedia-d/wc1000/6029228593.jpg',
  'https://i.ytimg.com/vi/S3ZGcFDp4RM/maxresdefault.jpg',
  'https://ir.ozone.ru/s3/multimedia-6/wc1000/6276173898.jpg',
  'https://4.downloader.disk.yandex.ru/preview/b8c0e46ef76fc49f58084d7e7badd60f34d9f58bfe538c5038dd355bf20789ef/inf/Wn2xFbBXnqAUQOeWYkMMlGQAdnxllyLifIQizCuYNLrV8KE5KTUVjeDetLunI3Jj-RUd59mYaFiyg0NPuMD1RQ%3D%3D?uid=197415950&filename=%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-05-03%20%D0%B2%2013.59.09.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=197415950&tknv=v2&size=2880x1558',
  'https://ir.ozone.ru/s3/multimedia-h/wc1000/6621627941.jpg',



]

    return (
<Element name={'education'}>
    <VStack gap='48' align='center' className={classNames(styles.EducationBlock, {}, [className])}>
      <HStack gap='16'>
<Text title='Обучение' tag={TitleTag.H3} />
<Text title='#' tag={TitleTag.H3} />
      </HStack>
<SwiperCard img={img} />
    </VStack>
</Element>
  )
 })