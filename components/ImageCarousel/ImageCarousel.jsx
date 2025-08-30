"use client";

import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Photo } from "../Photo/Photo";

import "./imagecarousel.css";

export const ImageCarousel = ({ images, size }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className={`swiper--${size}`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Photo name={image} size={size} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
