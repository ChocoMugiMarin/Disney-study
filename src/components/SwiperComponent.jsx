import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import { useEffect } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SwiperComponent.module.css";

const imagess = [
  { src: "../../../1343_thum_name.jpg" },
  { src: "../../../1343_thum_name.jpg" },
  { src: "../../../1343_thum_name.jpg" },
];

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="../../../mainR_01.jpg" className={styles.imgg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../mainR_01(1).jpg" className={styles.imgg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../mainR_03.jpg" className={styles.imgg} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
