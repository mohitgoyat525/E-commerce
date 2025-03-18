"use client"
import {FooterLogo } from '@/utils/Icons';
import React from 'react'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from 'next/link';
import { FOOTER_LIST, SOCIAL_LIST } from '@/utils/helper';
const Footer = () => {
      const [formData, setFormData] = useState({
        email: "",
      });
     const [isLoading, setIsLoading] = useState(false);
     const [successMessage, setSuccessMessage] = useState("");

     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       setIsLoading(true);

       try {
         const response = await emailjs.send(
           "service_oq1cf7s", // Replace with your Service ID
           "template_oucdt6n", // Replace with your Template ID
           formData,
           "e8pPFGTd0j6uM6UBA" // Replace with your Public Key
         );

         if (response.status === 200) {
           setSuccessMessage("Email sent successfully!");
           setFormData({ email: "" }); // Reset form
         } else {
           setSuccessMessage("Failed to send email. Please try again.");
         }
       } catch (error) {
         console.error("Email sending error:", error);
         setSuccessMessage("An error occurred. Please try again.");
       } finally {
         setIsLoading(false);
       }
     };
  return (
    <>
      <div className="bg-white relative">
        {/* <div className="bg-black py-10 px-[64px] h-[180px]  w-full max-w-[1240px] mx-auto rounded-4xl absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[40px] leading-[45px] max-w-[551px] text-white font-intergal-cf">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <form className="flex items-center flex-col">
              <div className="flex items-center gap-4 bg-white w-full px-5 h-[48px]  min-w-[349px] border border-solid border-white rounded-full">
                <EmailIcon />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="outline-none w-full bg-transparent text-base leading-[100%] font-normal placeholder:font-normal text-black placeholder:text-[#00000066]"
                />
              </div>
              <button
                type="submit"
                className="text-black bg-white w-full h-[48px] min-w-[349px] text-base font-normal rounded-full mt-6"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div> */}
        <footer className="bg-[#F0F0F0] px-4">
          <div className="flex justify-between flex-wrap pt-[140px] max-w-[1240px] mx-auto">
            <div className="flex flex-col">
              <Link href="/">
                <FooterLogo />
              </Link>
              <p className="pt-6 max-w-[248px] text-sm leading-[22px] font-normal text-[#00000099]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex items-center mt-[35px] gap-3">
                {SOCIAL_LIST.map((obj, i) => (
                  <Link
                    key={i}
                    target="_blank"
                    href={obj.link}
                    className="flex items-center justify-center bg-white rounded-full min-w-[28px] h-[28px]"
                  >
                    <p>{obj.icon}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-[140px] flex-wrap max-xl:gap-24 max-lg:gap-14 max-md:gap-10">
              {FOOTER_LIST.map((obj, i) => (
                <div key={i} className="">
                  <h3 className="font-medium text-base leading-[18px] uppercase mb-[26px]">
                    {obj.title}
                  </h3>
                  <ul>
                    <li className="text-[#00000099] font-normal text-bae leading-[19px]">
                      <Link href="#">{obj.name}</Link>
                    </li>
                    <li className="text-[#00000099] font-normal text-bae leading-[19px] py-3">
                      <Link href="#">{obj.nameTwo}</Link>
                    </li>
                    <li className="text-[#00000099] font-normal text-bae leading-[19px]">
                      <Link href="#">{obj.nameThree}</Link>
                    </li>
                    <li className="text-[#00000099] font-normal text-bae leading-[19px] pt-3">
                      <Link href="#">{obj.nameFour}</Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
              <div className="w-full  mx-auto max-w-[1240px] border border-solid mt-[50px] mb-5 border-[#0000001A]"></div>
              
      </div>
    </>
  );
}

export default Footer