"use client";
import { LandmarkCardProps } from "@/utils/Types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import OtherInfo from "./OtherInfo";
import Image from "next/image";

const HeroSection = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-4 ">
      {" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {landmarks.map((landmark) => {
          return (
            <SwiperSlide key={landmark.image} className="group">
            <div className="relative">
              <div className="md:h-80 h-60 w-full">
              <Image
                className="rounded-lg brightness-75 group-hover:brightness-50 transition-all duration-500  "
                src={landmark.image}
                alt={landmark.name || "Landmark Image"}
                fill
                objectFit="cover" 
                priority
              />
              </div>
              <div className="absolute bottom-0 m-2">
                <div>
                  <OtherInfo landmark={landmark} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSection;
