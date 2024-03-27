import { Swiper, SwiperSlide } from 'swiper/react';

import cn from './Corusel.module.scss';


import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from "swiper/modules";




import { Card } from '../Card/Card';
import { data } from '../../Const';
import '../slider.scss';
import {  useState } from 'react';
import type {Swiper as SwiperClass} from 'swiper/types';

export const Corusel = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={cn.block3}>
      <Swiper
        initialSlide={active}
        onSwiper={(swiper:SwiperClass) => {
          setActive(swiper.activeIndex);
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper:SwiperClass)=>{ setActive(swiper.activeIndex);}}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}

        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"

      >

        {data.map((card, index) => {

            return <SwiperSlide>
              <Card
                text={card.text}
                srcYoutube={card.srcYoutube}
                srcVc={card.srcVc}
                imgVc={card.imgVc}
                isActive={index === active}
              />
            </SwiperSlide>;
          }
        )}

      </Swiper>
    </div>
  );

};


