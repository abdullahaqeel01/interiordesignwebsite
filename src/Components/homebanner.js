import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./homebanner.css"; 
import {Autoplay} from "swiper/modules"

export default function HomeBanner() {
  return (
    <div style = {{height:'100vh'}}>
      <Swiper className="mySwiper"
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      >
        <SwiperSlide><img className="swiper-images" src="https://i.pinimg.com/originals/12/19/d7/1219d7b05e73024dd42e156219aa412d.jpg" alt="Image1" style = {{width:'100%'}} /></SwiperSlide>
        <SwiperSlide><img className="swiper-images" src="https://getwalls.io/wallpapers/344906/2023--06--stylish-living-room-with-fireplace-and-stained-glass-window-modern-interior-design-hd-wallpaper-1418343777-pc.jpg" alt="Image2" style = {{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img className="swiper-images" src="https://rare-gallery.com/uploads/posts/755201-Interior-Design-Living-room-Sofa-Table-Carpet.jpg" alt="Image3" style = {{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img className="swiper-images" src="https://wallpapercrafter.com/desktop/27993-fireplace-design-interior-design-style-room-house-castle-4k.jpg" alt="Image4" style = {{width:'100%'}}/></SwiperSlide>

      </Swiper>
    </div>
  );
}