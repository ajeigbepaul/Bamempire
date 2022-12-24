import React from "react";
import "./SwipableBanner.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper";
import { CategoryData } from "../utils/CategoryData";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation, EffectFade]);
function SwipableBanner() {
 
  return (
    <div className="swipablebanner">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectFade]}
        // loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {CategoryData.map(slidercat=><SwiperSlide className="swiperslide" key={slidercat.id}>
          <Slider
            image={slidercat.img}
            title={slidercat.title}
            desc={slidercat.desc}
            category={slidercat.cat}
          />
        </SwiperSlide>)}
        
      </Swiper>
    </div>
  );
}

export default SwipableBanner;
