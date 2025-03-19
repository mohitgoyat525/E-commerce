"use client";
import React from "react";
import { NEW_ARRIVALS_LIST } from "@/utils/Helper";
import CustomProduct from "../common/CustomProducts";

const NewArrivals = () => {
  return (
    <CustomProduct
      tittle="NEW ARRIVALS"
      productList={NEW_ARRIVALS_LIST}
      showDiscount={(i) => i !== 0}
    />
  );
};

export default NewArrivals;
