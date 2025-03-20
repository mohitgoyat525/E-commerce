"use client";
import React, { useRef } from "react";
import CustomHeading from "../common/CustomHeading";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/Helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { NextArrowIcon, PrevArrowIcon } from "@/utils/Icons";

const HappyCustomer = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto pt-[80px] max-md:pt-[50px] max-xl:px-4">
        <div className="flex items-end justify-between">
          <CustomHeading
            myClass="!text-start"
            headingText="OUR HAPPY CUSTOMERS"
          />
          <div className="flex justify-end gap-4 ">
            <button className="cursor-pointer swiper-prev">
              <PrevArrowIcon />
            </button>
            <button className="cursor-pointer swiper-next">
              <NextArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mx-auto mt-10 max-md:mt-6">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-prev", // Match the className of prev button
            nextEl: ".swiper-next", // Match the className of next button
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.8,
              spaceBetween: 15,
              centeredSlides: true,
            },
            1115: {
              slidesPerView: 3.4,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          className="mySwiper happy-swiper"
        >
          {HAPPY_CUSTOMERS_LIST.map((item, index) => (
            <SwiperSlide
              key={index}
              className="max-md:!justify-center max-md:!flex"
            >
              <div className="max-w-[400px] rounded-[20px] min-h-[240px] max-[907px]:min-h-[278px] max-[812px]:min-h-[300px] max-md:min-h-[unset] h-full w-full py-7 max-sm:p-6 border border-solid border-black/10 px-8 flex flex-col">
                <Image
                  src={item.rating}
                  alt="rating"
                  width={138}
                  height={22}
                  className="pointer-events-none"
                />
                <p className="font-bold text-xl max-sm:text-base flex gap-1 mt-[15px] mb-3 leading-[100%]">
                  {item.name}
                  <span className="max-sm:size-[15.5px]">
                    <Image
                      src={item.icon}
                      alt="verfied"
                      width={19}
                      height={19}
                      className="pointer-events-none"
                    />
                  </span>
                </p>
                <p className="font-normal text-base leading-[22px] text-[#00000099]">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HappyCustomer;