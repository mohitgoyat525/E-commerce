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
  discount?: string;
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
    <div className="overflow-hidden px-4">
      <CustomHeading myClass="mt-5" headingText={tittle} />
      <div className="max-w-[1240px] mx-auto mt-[55px] max-sm:flex max-sm:items-center max-sm:justify-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {productList.map((obj, i) => (
            <SwiperSlide key={i}>
              <Link
                href={`/product/${
                  obj?.tittle
                    ? obj.tittle.toLowerCase().replace(/\s+/g, "-")
                    : "default-tittle"
                }`}
                className="w-full max-sm:max-w-[295px] mx-auto max-sm:flex max-sm:flex-col max-sm:justify-center"
              >
                <Image
                  src={obj.image}
                  alt="clothes"
                  width={295}
                  height={298}
                  className="w-full max-w-[295px]"
                />
                <h4 className="font-santoshi-bold font-bold text-xl leading-[100%] mt-4">
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
                  <h5 className="font-santoshi-bold text-2xl leading-[100%] font-bold">
                    {obj.price}
                  </h5>
                  <h5 className="line-through text-[#00000066] font-santoshi-bold text-2xl leading-[100%] font-bold">
                    {obj.cancelPrice}
                  </h5>
                  {showDiscount && showDiscount(i) && obj.discount && (
                    <div className="bg-[#FF33331A] flex items-center justify-center rounded-full px-[13.5px] py-1.5">
                      <p className="text-[#FF3333] font-medium text-xs leading-[100%] max-md:text-[10px]">
                        {obj.discount}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="font-medium text-base leading-[100%] border border-solid border-[#0000001A] flex items-center justify-center min-w-[218px] h-[52px] mx-auto mt-[36px] mb-[64px] transition-all ease-linear duration-300 hover:bg-black hover:text-white rounded-full">
        View All
      </button>
    </div>
  );
};

export default CustomProduct;
