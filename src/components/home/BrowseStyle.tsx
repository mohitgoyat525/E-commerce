import React from "react";
import CustomHeading from "../common/CustomHeading";
import Image from "next/image";
const BrowseStyle = () => {
  return (
    <div className="px-4 pt-20 max-md:pt-[50px]">
    <div className="w-full mx-auto max-w-[1240px] bg-[#F0F0F0] rounded-[40px] max-xl:px-4">
      <CustomHeading
        myClass="uppercase pt-[70px] pb-[64px] max-lg:py-[50px] max-md:py-10 max-sm:py-7"
        headingText="BROWSE BY dress STYLE"
      />
      <div className="flex items-center gap-5 justify-center max-md:flex-wrap">
        <Image
          src="/assets/images/webp/casual-dress.webp"
          alt="casual-dress"
          width={407}
          height={289}
          className="w-full max-w-[407px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px] max-lg:max-w-[350px] max-lg:h-[260px] max-sm:max-w-[310px] max-sm:h-[190px]"
        />
        <Image
          src="/assets/images/webp/formal-dress.webp"
          alt="formal-dress"
          width={684}
          height={289}
          className="w-full max-w-[684px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px] max-lg:max-w-[350px] max-lg:h-[260px] max-sm:max-w-[310px] max-sm:h-[190px]"
        />
      </div>
      <div className="flex items-center gap-5 pt-5 pb-[76px] max-lg:pb-12 max-md:pb-10 max-sm:pb-5 justify-center max-md:flex-wrap">
        <Image
          src="/assets/images/webp/party-dress.webp"
          alt="party-dress"
          width={684}
          height={289}
          className="w-full max-w-[684px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px] max-lg:max-w-[350px] max-lg:h-[260px] max-sm:max-w-[310px] max-sm:h-[190px]"
        />
        <Image
          src="/assets/images/webp/gym-dress.webp"
          alt="hym-dress"
          width={407}
          height={289}
          className="w-full max-w-[407px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px] transition-all ease-linear duration-300 hover:scale-150 max-lg:max-w-[350px] max-lg:h-[260px] max-sm:max-w-[310px] max-sm:h-[190px]"
        />
      </div>
      </div>
      </div>
  );
};

export default BrowseStyle;
