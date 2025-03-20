"use client";
import React, { useRef } from "react";
import CustomHeading from "../common/CustomHeading";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/Helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper Navigation styles
import { Autoplay, Navigation } from "swiper/modules";
import { NextArrowIcon, PrevArrowIcon } from "@/utils/Icons";

const HappyCustomer = () => {
  const swiperRef = useRef<any>(null);

  return (
    <>
      <div className="max-w-[1240px] mx-auto pt-[80px] max-md:pt-[50px] max-xl:px-4">
        <div className="flex items-end justify-between">
          <CustomHeading
            myClass="!text-start"
            headingText="OUR HAPPY CUSTOMERS"
          />
          <div className="flex justify-end gap-4 ">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer"
            >
              <PrevArrowIcon />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer"
            >
              <NextArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mx-auto mt-10 max-md:mt-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation]}
          className="py-6"
        >
          {HAPPY_CUSTOMERS_LIST.map((customer, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white border border-solid border-[#0000001A] w-full max-w-[400px] h-[240px] rounded-[20px] px-8 pt-[28px]">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src={customer.rating}
                    alt="Rating"
                    width={100}
                    height={20}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-bold font-santoshi-bold text-xl">
                    {customer.name}
                  </p>
                  <Image
                    src={customer.icon}
                    alt="Verified"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-base font-normal text-[#00000099] leading-[22px] max-sm:text-sm max-sm:leading-5">
                  {customer.description}
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
