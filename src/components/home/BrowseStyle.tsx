import React from "react";
import CustomHeading from "../common/CustomHeading";
import Image from "next/image";
const BrowseStyle = () => {
  return (
    <div className="w-full mx-auto max-w-[1240px] bg-[#F0F0F0] rounded-[40px] max-xl:px-4">
      <CustomHeading
        myClass="uppercase pt-[70px] pb-[64px] max-lg:py-[50px] max-md:py-10 max-sm:py-7"
        headingText="BROWSE BY dress STYLE"
      />
      <div className="flex items-center gap-5 justify-center flex-wrap">
        <Image
          src="/assets/images/webp/casual-dress.webp"
          alt="casual-dress"
          width={407}
          height={289}
          className="w-full max-w-[407px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px]"
        />
        <Image
          src="/assets/images/webp/formal-dress.webp"
          alt="formal-dress"
          width={684}
          height={289}
          className="w-full max-w-[684px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px]"
        />
      </div>
      <div className="flex items-center gap-5 pt-5 pb-[76px] max-lg:pb-12 max-md:pb-10 max-sm:pb-5 justify-center flex-wrap">
        <Image
          src="/assets/images/webp/party-dress.webp"
          alt="party-dress"
          width={684}
          height={289}
          className="w-full max-w-[684px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px]"
        />
        <Image
          src="/assets/images/webp/gym-dress.webp"
          alt="hym-dress"
          width={407}
          height={289}
          className="w-full max-w-[407px] pointer-events-none max-xl:max-w-[500px] max-xl:h-[310px]"
        />
      </div>
    </div>
  );
};

export default BrowseStyle;
