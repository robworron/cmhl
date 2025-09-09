"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Photo from "@/components/Photo/Photo";

import "./swiper-overrides.css";

export default function ImageCarousel({ images, size }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      style={{ width: "100%" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Photo name={image} size={size} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
