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
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation, EffectFade]);
function SwipableBanner() {
  const sliderimg1 = "images/children.jpg";
  const sliderimg2 = "images/male.jpg";
  const sliderimg3 = "images/female.jpg";
  const sliderimg4 = "images/accessories.jpg";
  const sliderimg5 = "images/beauty.jpg";
  const sliderimg6 = "images/kitchen.jpg";
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
            title="CHILDREN"
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
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg6}
            title="KITCHEN UTENSIL"
            desc="Quality kitchen utensil"
          />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <Slider
            image={sliderimg5}
            title="BEAUTY SHOP"
            desc="Your skin our concern"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwipableBanner;
