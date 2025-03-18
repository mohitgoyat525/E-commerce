"use client"
import React from 'react'
import CustomHeading from './common/CustomHeading'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NEW_ARRIVALS_LIST } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link';
const NewArrivals = () => {
  return (
    <>
      <CustomHeading myClass="mt-5" headingText="NEW ARRIVALS" />
      <Swiper spaceBetween={50} slidesPerView={4}>
              {NEW_ARRIVALS_LIST.map((obj, i) => (
                  <SwiperSlide key={i}>
                      <div className=''>
                          <Image src={obj.image} alt='clothes' width={295} height={298} className='w-full max-w-[295px]' />
                          <h4>{obj.tittle}</h4>
                          
                      </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default NewArrivals