import React from "react";
import "./SwipableBanner.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//   import styles from "../../styles/Home.module.css";
//   import Slider from "./Slider";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation, EffectFade]);
function SwipableBanner() {
  const sliderimg1 = "images/femaleshoe_11.jpg";
  const sliderimg2 = "images/femaleshoe_5.jpg";
  const sliderimg3 = "images/femaleshoe_7.jpg";
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
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg1}
            title="African's Best"
            desc="Male shoes made in Nigeria with quality materials"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg2}
            title="40% Discount"
            desc="Finest in the Industry"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg3}
            title="Quality"
            desc="Finest in the Industry"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwipableBanner;
