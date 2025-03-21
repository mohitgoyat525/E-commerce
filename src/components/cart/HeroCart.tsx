"use client";
import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Image from "next/image";
import { BtnNextIcon, DeleteIcon, MinusIcon, NextMoveIcon, PlusIcon, PromoCodeIcon,} from "@/utils/Icons";

interface CartItem {
  selectedImg: string;
  heading: string;
  selectedSize: string;
  selectedColor: string;
  price: string;
  quantity: number;
}

const HeroCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("cartItems");

      if (storedItems) {
        try {
          const parsedItems = JSON.parse(storedItems);

          if (Array.isArray(parsedItems)) {
            const itemsWithQuantity = parsedItems.map((item: any) => ({
              ...item,
              quantity: item.quantity || 1,
            }));
            setCartItems(itemsWithQuantity);
          }
        } catch (error) {}
      }
      setIsLoading(false);
    }
  }, []);

  const handleDeleteItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index
        ? { ...item, quantity: newQuantity < 1 ? 1 : newQuantity }
        : item
    );
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
      <div className="flex items-center w-full max-w-[1240px] mx-auto gap-3 max-xl:px-3 my-[29px]">
        <p className="text-[#00000099] text-base font-medium leading-[100%]">
          Home
        </p>
        <NextMoveIcon />
        <p className="text-base font-medium leading-[100%]">Cart</p>
      </div>
      <div className="w-full max-w-[1240px] mx-auto max-xl:px-4">
        <h1 className="font-bold text-[40px] leading-[100%] font-intergal-cf max-md:text-[32px]">
          Your Cart
        </h1>
        {cartItems.length > 0 ? (
          <div className="flex justify-between mt-6 max-lg:flex-wrap max-xl:gap-5">
            <div className="flex flex-col w-full max-w-[715px] max-lg:max-w-full max-sm:p-3.5 border border-solid border-[#0000001A] py-5 px-6 rounded-[12px] ">
              {cartItems.map((item, index) => (
                <div key={index} className="">
                  <div className="flex items-center max-w-[667px] gap-3 max-lg:max-w-full">
                    <Image
                      src={item.selectedImg}
                      alt="item"
                      width={124}
                      height={124}
                      className="w-full max-w-[124px] h-[124px] max-sm:max-w-[99px] max-sm:h-[99px]"
                    />
                    <div className="w-full">
                      <div className="flex items-center justify-between">
                        <h2 className="font-bold text-xl max-sm:text-base leading-[100%] mb-1.5">
                          {item.heading}
                        </h2>
                        <p
                          className="cursor-pointer"
                          onClick={() => handleDeleteItem(index)}
                        >
                          <DeleteIcon />
                        </p>
                      </div>
                      <p className="text-sm font-normal leading-[100%] text-[#00000099]">
                        <span className="text-black">Size:</span>{" "}
                        {item.selectedSize}
                      </p>
                      <p className="text-sm font-normal leading-[100%] text-[#00000099] mt-1">
                        <span className="text-black">Color:</span>{" "}
                        {item.selectedColor}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <p className="font-bold text-2xl leading-[100%] max-sm:text-xl">
                          {item.price}
                        </p>
                        <div className="flex items-center justify-between w-full max-w-[126px] max-sm:max-w-[105px] max-sm:h-[31px] rounded-full bg-[#F0F0F0] p-2 h-[52px]">
                          <button
                            className="px-3"
                            onClick={() =>
                              updateQuantity(index, item.quantity - 1)
                            }
                          >
                            <MinusIcon />
                          </button>
                          <p className="text-sm font-normal leading-[100%]">
                            {item.quantity}
                          </p>
                          <button
                            className="px-3"
                            onClick={() =>
                              updateQuantity(index, item.quantity + 1)
                            }
                          >
                            <PlusIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border border-solid border-[#0000001A] my-6 max-sm:my-4"></div>
                </div>
              ))}
            </div>
            <div className="border border-solid border-[#0000001A] max-sm:p-5 max-lg:max-w-full max-sm:h-[390px] pt-5 px-6 max-xl:max-w-[470px] rounded-[20px] w-full max-w-[505px] h-[458px]">
              <h2 className="font-bold text-2xl leading-[100%]">
                Order Summary
              </h2>
              <div className="w-full max-w-[457px] mt-6 max-lg:max-w-full">
                <div className="flex items-center justify-between">
                  <p className="text-[#00000099] font-normal text-xl leading-[100%] max-sm:text-base">
                    Subtotal
                  </p>
                  <p className="font-bold text-xl leading-[100%]">$565</p>
                </div>
                <div className="flex items-center justify-between my-5">
                  <p className="text-[#00000099] font-normal text-xl leading-[100%] max-sm:text-base">
                    Discount (-20%)
                  </p>
                  <p className="font-bold text-xl leading-[100%] text-[#FF3333]">
                    -$113
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#00000099] font-normal text-xl leading-[100%] max-sm:text-base">
                    Delivery Fee
                  </p>
                  <p className="font-bold text-xl leading-[100%]">$15</p>
                </div>
                <div className="w-full border border-solid border-[#00000011] my-5"></div>
                <div className="flex items-center justify-between">
                  <p className="font-normal text-base leading-[100%]">Total</p>
                  <p className="font-bold text-2xl leading-[100%]">$467</p>
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
                  <button className="bg-black cursor-pointer max-sm:min-w-[88px] max-sm:h-[48px] transition-all ease-linear duration-300 hover:bg-gray-700 rounded-full text-white h-[48px] text-base font-normal leading-[100%] flex items-center justify-center border border-solid border-transparent min-w-[119px]">
                    Apply
                  </button>
                </div>
                <button className="bg-black rounded-full mb-[33px] text-white font-normal gap-3 transition-all ease-linear duration-300 hover:bg-gray-700 text-base h-[48px] w-full flex items-center justify-center">
                  Go to Checkout
                  <span>
                    <BtnNextIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center font-extrabold text-4xl max-sm:text-2xl mt-6">
            There is nothing in your Cart.
          </p>
        )}
      </div>
    </>
  );
};

export default HeroCart;
