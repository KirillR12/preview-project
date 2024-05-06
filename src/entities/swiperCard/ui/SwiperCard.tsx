import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './index.css'
import { memo } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { EducationCardType } from '../model/types/EducationCardType'
import { ALink } from '@/shared/ui/ALink'
import classNames from 'classnames'

interface SwiperCardProps {
    card: EducationCardType[]
    className: string
}

export const SwiperCard = memo((props: SwiperCardProps) => {
    const { card, className } = props

    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={15}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className={classNames('mySwiper', {}, [className])}
        >
            {card.map((el) => (
                <SwiperSlide key={el.link}>
                    <ALink href={el.link} target="_blank" theme="clear">
                        <img src={el.img} />
                    </ALink>
                </SwiperSlide>
            ))}
        </Swiper>
    )
})
