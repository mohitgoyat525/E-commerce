import { BRANDS_LIST } from "@/utils/Helper";
import React from 'react'
import Image from 'next/image';
const Brands = () => {
  return (
    <div className="bg-black max-xl:px-4">
      <div className="flex items-center justify-between max-sm:justify-center max-sm:gap-5 flex-wrap max-w-[1280px] mx-auto py-[45px]">
        {BRANDS_LIST.map((obj, i) => (
          <Image
            key={i}
            src={obj}
            alt="brands"
            width={164}
            height={33}
            className={`w-full max-w-[164px] h-[33px] max-sm:max-w-[116px] max-sm:h-[23px] pointer-events-none ${
              i === 1 ? "!h-[38px] w-full !max-w-[91px] max-sm:!max-w-[63px] max-sm:!h-[26px]" : i === 2 ? "!max-w-[156px] max-sm:!max-w-[109px] max-sm:!h-[25px] h-[36px]":i === 3 ? "!max-w-[194px] h-[32px] max-sm:!max-w-[127px] max-sm:h-[21px] ":i===4? "!max-w-[206px] h-[33px] max-sm:!max-w-[134px] max-sm:!h-[21px]":"" 
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Brands