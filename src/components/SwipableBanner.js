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
  const sliderimg1 = "images/children.jpg";
  const sliderimg2 = "images/male.jpg";
  const sliderimg3 = "images/female.jpg";
  const sliderimg4 = "images/accessories.jpg";
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
            title="Quality Children"
            desc="Shop quality products "
          />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg2}
            title="FOR MALE"
            desc="We are reliable"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg3}
            title="NO 1 FEMALE STORE"
            desc="All you need at a spot"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg4}
            title="ACCESSORY SHOP"
            desc="Finest in the Industry"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwipableBanner;
