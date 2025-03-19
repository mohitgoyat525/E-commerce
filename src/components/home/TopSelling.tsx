"use client"
import React from "react";
import { TOP_SELLING_LIST } from "@/utils/Helper";
import CustomProduct from "../common/CustomProducts";

const TopSelling = () => {
  return (
    <CustomProduct
      tittle="TOP SELLING"
      productList={TOP_SELLING_LIST}
      showDiscount={(i) => i === 0}
    />
  );
};

export default TopSelling;
