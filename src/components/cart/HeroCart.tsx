"use client";
import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Image from "next/image";
import { DeleteIcon, MinusIcon, PlusIcon } from "@/utils/Icons";

const HeroCart = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItem, setCartItem] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true); // Prevents UI flickering

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem("cartItems");
      console.log("Raw localStorage value:", storedItem);

      if (storedItem) {
        try {
          const parsedItem = JSON.parse(storedItem);
          console.log("Parsed item:", parsedItem);

          if (Array.isArray(parsedItem) && parsedItem.length > 0) {
            setCartItem(parsedItem[0]); // Get the first item in the array
            setQuantity(parsedItem[0].quantity || 1);
          }
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
        }
      }
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("cartItem updated:", cartItem);
  }, [cartItem]);

  console.log("Rendering with cartItem:", cartItem);

  if (isLoading) return <p className="text-center py-4">Loading...</p>; // Prevents rendering empty state

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
        {cartItem ? (
          <div className="flex justify-between items-center mt-6">
            <div className="w-full max-w-[715px] border border-solid border-[#0000001A]">
              <div className="flex items-center max-w-[667px]">
                <Image
                  src={cartItem.selectedImg || "/default-image.jpg"}
                  alt="item"
                  width={124}
                  height={124}
                  className="w-full max-w-[124px]"
                />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h2>{cartItem.heading || "Item Name"}</h2>
                    <p className="cursor-pointer">
                      <DeleteIcon />
                    </p>
                  </div>
                  <p>Size: {cartItem.selectedSize || "N/A"}</p>
                  <p>Color: {cartItem.selectedColor || "N/A"}</p>
                  <div className="flex items-center justify-between">
                    <p>${cartItem.price || "0.00"}</p>
                    <div className="flex items-center justify-between w-full max-w-[170px] rounded-full bg-[#F0F0F0] p-2 h-[52px]">
                      <button
                        className="px-3"
                        onClick={() =>
                          setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                      >
                        <MinusIcon />
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="px-3"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center mt-6">Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default HeroCart;
