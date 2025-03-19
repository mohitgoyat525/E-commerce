import React from 'react'
import Link from "next/link";
import LastestOffer from '../home/LastestOffer';
import { FooterLogo } from '@/utils/Icons';
import { FOOTER_LIST, PAYMENTS_METHOD_LIST, SOCIAL_LIST } from '@/utils/Helper';
import Image from 'next/image';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-bg px-4 mt-[80px]">
      <LastestOffer />
      <div className="max-w-[1240px] mx-auto  container">
        <div className="flex gap-[113.5px] max-lg:gap-0 py-[50px] max-sm:py-[31px] max-md:py-10 max-lg:py-12 max-lg:flex-col gap-y-10">
          <div className="max-w-[248px] max-lg:max-w-[unset] w-full">
            <Link
              href={"/"}
              className="text-custom-3xl font-bold leading-[100%] max-lg:text-3xl max-md:text-[25.2px] font-integral-cf"
            >
              <FooterLogo />
            </Link>
            <p className="font-normal text-sm leading-[22px] text-[#00000099] max-w-[248px] mt-6">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 pt-9 max-sm:pt-5 max-md:pt-6 max-lg:pt-7">
              {SOCIAL_LIST.map((item, index) => (
                <Link
                  href={item.link}
                  target="_blank"
                  className="size-7 bg-white border border-solid border-black/20 flex hover:bg-black group transition-all duration-300 justify-center items-center rounded-full"
                  key={index}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between flex-wrap gap-[113px] max-sm:justify-start max-sm:gap-y-6 max-sm:gap-[50px] max-xl:gap-18 max-md:gap-6 max-lg:pt-10">
              {FOOTER_LIST.map((item, i) => (
                <div key={i} className="max-sm:max-w-[130px] max-sm:w-full">
                  <p className="uppercase font-medium leading-[18px] max-md:text-sm">
                    {item.title}
                  </p>
                  <ul className="pt-[26px] max-md:pt-4">
                    {item.list.map((list, j) => (
                      <li key={j} className="pb-4">
                        <Link
                          href={list.link}
                          className="leading-[19px] text-black/60 whitespace-nowrap max-md:text-sm"
                        >
                          {list.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-black/10 h-[1px]"></div>
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:justify-center gap-4 pt-5 max-sm:pt-4 max-md:pb-[77px] pb-[82px]">
          <p className="text-sm leading-[100%] text-black/60">
            Shop.co © 2000-{year}, All Rights Reserved
          </p>
          <div className="flex items-center gap-3 max-md:gap-[10.3px] max-md:pt-4">
            {PAYMENTS_METHOD_LIST.map((item, inedx) => (
              <div key={inedx}>
                <Image
                  width={46.61}
                  height={30.3}
                  alt="payment-company"
                  src={item}
                  className="pointer-events-none payment-company-images max-md:h-[26px] max-md:w-[40px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer