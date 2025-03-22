"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
const PreLoader = () => {
      const [preLoader, setPreloader] = useState(true);

      useEffect(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
          setPreloader(false);
          document.body.style.overflow = "auto";
        }, 2500);
      }, []);
  return (
    <>
      {preLoader ? (
        <div className="bg-black fixed inset-0 flex justify-center top-0 left-0 items-center z-50 min-h-screen">
         <Image src='/assets/images/png/preloader.gif' alt='loader' width={320} height={320}/>
        </div>
      ) : null}
    </>
  );
}

export default PreLoader