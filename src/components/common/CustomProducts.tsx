"use client";
import React from "react";
import CustomHeading from "../common/CustomHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

interface Product {
  tittle: string;
  image: string;
  rating: string;
  price: string;
  cancelPrice?: string;
  discount?: number;
}

interface ProductSliderProps {
  tittle: string;
  productList: Product[];
  showDiscount?: (index: number) => boolean;
}


const CustomProduct: React.FC<ProductSliderProps> = ({
  tittle,
  productList,
  showDiscount,
}) => {
  return (
    <div className="overflow-hidden max-xl:pl-4">
      <CustomHeading myClass="" headingText={tittle} />
      <div className="max-w-[1240px] mx-auto mt-[55px] max-sm:mt-8  max-sm:flex max-sm:items-center max-sm:justify-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1.5 , spaceBetween:10} ,
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {productList.map((obj, i) => (
            <SwiperSlide key={i}>
              <div className="transition-all w-fit ease-linear duration-300 flex items-center justify-center">
                <Link
                  href={`/product/${
                    obj?.tittle
                      ? obj.tittle.toLowerCase().replace(/\s+/g, "-")
                      : "default-tittle"
                  }`}
                  className="w-full max-sm:max-w-[195px] max-w-[295px] mx-auto max-sm:flex max-sm:flex-col max-sm:justify-center hover:shadow-[rgba(0,0,0,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px]"
                >
                  <Image
                    src={obj.image}
                    alt="clothes"
                    width={295}
                    height={298}
                    className="w-full max-w-[295px]"
                  />
                  <h4 className="font-santoshi-bold font-bold text-xl max-sm:text-base leading-[100%] mt-4">
                    {obj.tittle}
                  </h4>
                  <Image
                    src={obj.rating}
                    alt="rating"
                    width={150}
                    height={19}
                    className="w-full max-w-[150px] my-2"
                  />
                  <div className="flex items-center gap-[10px]">
                    <h5 className="font-santoshi-bold text-2xl max-sm:text-base leading-[100%] font-bold">
                      {obj.price}
                    </h5>
                    <h5 className="line-through text-[#00000066] max-sm:text-base font-santoshi-bold text-2xl leading-[100%] font-bold">
                      {obj.cancelPrice}
                    </h5>
                    {showDiscount && showDiscount(i) && obj.discount && (
                      <div className="bg-[#FF33331A] flex items-center justify-center rounded-full px-[13.5px] py-1.5">
                        <p className="text-[#FF3333] font-medium text-xs leading-[100%] max-md:text-[10px]">
                          -{obj.discount}%
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="font-medium text-base leading-[100%] border border-solid border-[#0000001A] flex items-center justify-center min-w-[218px] h-[52px] mx-auto mt-[36px] max-sm:mt-6 transition-all ease-linear duration-300 max-sm:min-w-full hover:bg-black hover:text-white rounded-full">
        View All
      </button>
    </div>
  );
};

export default CustomProduct;
