import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './index.css';
import { memo } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

interface SwiperCardProps {
  img: string[]
}

export const SwiperCard = memo((props: SwiperCardProps) => {

  const {
  img
} = props


  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {img.map((el) => (
        <SwiperSlide
        key={el}
        >
          <img src={el}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
})
