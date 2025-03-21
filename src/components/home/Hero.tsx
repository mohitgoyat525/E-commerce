import React from "react";
import Header from "../common/Header";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <Header />
      <div className="relative bg-[#F2F0F1] overflow-hidden">
        <div className="flex items-center  max-w-[1240px]  mx-auto relative h-[663px] max-lg:h-full max-lg:flex-col">
          <div className="pt-[103px] px-4 pb-[116px] max-lg:pb-0 max-xl:pt-20 max-lg:pt-10 max-md:pt-8 relative z-10 mr-auto max-lg:ml-auto">
            <h1 className="text-[64px] font-bold font-intergal-cf leading-[64px] max-w-[577px] max-lg:max-w-full max-lg:text-5xl max-sm:text-[36px] max-sm:leading-[34px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#00000099] text-base font-normal leading-[22px] max-sm:text-sm mt-8 max-w-[545px] max-lg:max-w-full max-sm:mt-5">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white cursor-pointer flex items-center justify-center mt-5 w-[210px] min-w-[210px] max-sm:min-w-full max-sm:w-full h-[52px] rounded-full border border-solid border-black transition-all ease-linear duration-300 hover:bg-white hover:text-black">
              Shop Now
            </button>
            <div className="flex items-center gap-7 mt-12 max-sm:mt-5 flex-wrap max-md:justify-center max-md:gap-7">
              <div className="flex gap-7 items-center max-md:justify-center">
                <div className="flex flex-col">
                  <h3 className="font-bold text-[40px] leading-[100%] max-md:text-2xl font-santoshi-bold">
                    200+
                  </h3>
                  <p className="font-normal text-base leading-[22px] text-[#00000099] max-md:text-xs">
                    International Brands
                  </p>
                </div>
                <div className="h-[74px] border-[#0000001A] border border-solid max-md:h-[52px]"></div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-[40px] leading-[100%] max-md:text-2xl font-santoshi-bold">
                    2,000+
                  </h3>
                  <p className="font-normal text-base leading-[22px] text-[#00000099] max-md:text-xs">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className="h-[74px] border-[#0000001A] border border-solid max-md:hidden"></div>
              <div className="flex flex-col">
                <h3 className="font-bold text-[40px] leading-[100%] max-md:text-2xl font-santoshi-bold">
                  30,000+
                </h3>
                <p className="font-normal text-base leading-[22px] text-[#00000099] max-md:text-xs">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="absolute bottom-[-281px] right-0 max-xl:bottom-0 max-lg:relative">
              <div className="relative">
                <Image
                  src="/assets/images/png/small-star.png"
                  alt="star"
                  width={56}
                  height={56}
                  className="absolute top-[32%] left-[40px] max-sm:left-[25px] w-full max-w-[56px] pointer-events-none"
                />
                <Image
                  src="/assets/images/png/big-star.png"
                  alt="star"
                  width={104}
                  height={104}
                  className="absolute top-[12%] right-[10px] max-sm:right-[5px] w-full max-w-[104px] pointer-events-none"
                />
                <Image
                  src="/assets/images/webp/infulencers-img.webp"
                  alt="infulencers-img"
                  width={655}
                  height={500}
                  className="w-full max-w-[655px] max-xl:max-w-[460px] max-lg:max-w-[555px] max-sm:hidden pointer-events-none"
                />
                <Image
                  src="/assets/images/webp/sm-infulencer-img.webp"
                  alt="infulencer"
                  width={655}
                  height={500}
                  className="w-full max-w-[655px] pointer-events-none max-sm:block sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
