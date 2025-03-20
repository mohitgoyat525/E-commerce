"use client";
import React from "react";
import { NEW_ARRIVALS_LIST } from "@/utils/Helper";
import CustomProduct from "../common/CustomProducts";

const NewArrivals = () => {
  return (
    <>
      <div className="mt-[72px] max-xl:mt-16 max-lg:mt-[50px]">
    <CustomProduct
      tittle="NEW ARRIVALS"
      productList={NEW_ARRIVALS_LIST}
      showDiscount={(i) => i !== 0}
        />
        </div>
      <div className="w-full max-w-[1240px] mx-auto border border-solid border-[#0000001A] my-16 max-xl:my-12 max-lg:my-10"></div>
      </>
  );
};

export default NewArrivals;
