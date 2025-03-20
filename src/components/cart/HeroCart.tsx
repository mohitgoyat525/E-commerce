"use client";
import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Image from "next/image";
import {
  BtnNextIcon,
  DeleteIcon,
  MinusIcon,
  PlusIcon,
  PromoCodeIcon,
} from "@/utils/Icons";

const HeroCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("cartItems");
      console.log("Raw localStorage value:", storedItems);

      if (storedItems) {
        try {
          const parsedItems = JSON.parse(storedItems);
          console.log("Parsed items:", parsedItems);

          if (Array.isArray(parsedItems)) {
            setCartItems(parsedItems);
          }
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
        }
      }
      setIsLoading(false);
    }
  }, []);

  const handleDeleteItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  if (isLoading)
    return <p className="text-center py-4 text-2xl font-bold">Loading...</p>;

  return (
    <>
      <div>
        <Header />
        <div className="w-full max-w-[1240px] mx-auto border border-solid border-[#00000011]"></div>
      </div>
      <div className="w-full max-w-[1240px] mx-auto">
        <h1 className="font-bold text-[40px] leading-[100%] font-intergal-cf">
          Your Cart
        </h1>
        {cartItems.length > 0 ? (
          <div className="flex justify-between mt-6">
            <div className="flex flex-col gap-6 w-full max-w-[715px]">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-solid border-[#0000001A] p-4 rounded-[12px]"
                >
                  <div className="flex items-center max-w-[667px] gap-3">
                    <Image
                      src={item.selectedImg || "/default-image.jpg"}
                      alt="item"
                      width={124}
                      height={124}
                      className="w-full max-w-[124px]"
                    />
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h2>{item.heading || "Item Name"}</h2>
                        <p
                          className="cursor-pointer"
                          onClick={() => handleDeleteItem(index)}
                        >
                          <DeleteIcon />
                        </p>
                      </div>
                      <p>Size: {item.selectedSize || "N/A"}</p>
                      <p>Color: {item.selectedColor || "N/A"}</p>
                      <div className="flex items-center justify-between">
                        <p>${item.price || "0.00"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-solid border-[#0000001A] py-5 px-6 rounded-[20px] w-full max-w-[505px]">
              <h2 className="font-bold text-2xl leading-[100%]">
                Order Summary
              </h2>
              <div className="w-full max-w-[457px]">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>$565</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Discount (-20%)</p>
                  <p>-$113</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Delivery Fee</p>
                  <p>$15</p>
                </div>
                <div className="w-full border border-solid border-[#00000011]"></div>
                <div className="flex items-center justify-between">
                  <p>Total</p>
                  <p>$467</p>
                </div>
                <div className="flex items-center justify-between gap-3 my-6">
                  <div className="w-full max-w-[326px] rounded-full h-[48px] bg-[#F0F0F0] flex items-center gap-3 px-3">
                    <PromoCodeIcon />
                    <input
                      type="text"
                      placeholder="Add Promo Code"
                      className="w-full bg-transparent outline-none text-base font-normal"
                    />
                  </div>
                  <button className="bg-black rounded-full text-white h-[48px] text-base font-normal leading-[100%] flex items-center justify-center border border-solid border-transparent min-w-[119px]">
                    Apply
                  </button>
                </div>
                <button className="bg-black rounded-full mb-[33px] text-white font-normal text-base h-[48px] w-full flex items-center justify-center">
                  Go to Checkout{" "}
                  <span>
                    <BtnNextIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center font-extrabold text-4xl max-sm:text-2xl mt-6">
            Your cart is empty.
          </p>
        )}
      </div>
    </>
  );
};

export default HeroCart;
