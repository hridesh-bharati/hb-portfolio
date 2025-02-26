import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Card() {
    return (
        <>
                    <Swiper
                        effect={'flip'}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="img/pic1.jpg" className="card-img-top rounded-0 img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide>
                        <img src="img/pic1.jpg" className="card-img-top rounded-0 img-fluid" />
                        </SwiperSlide>
                    </Swiper>
        </>
    );
}
