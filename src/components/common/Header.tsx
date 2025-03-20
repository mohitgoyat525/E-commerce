"use client";
import { CrossIcon, SearchIcon, ShopIcon } from "@/utils/Icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HEADER_LIST } from "@/utils/Helper";

interface CartItem {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  selectedImg: string;
  heading: string;
  price: number;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handler = () => {
    setIsOpen(!isOpen);
  };

  // Function to update cart count from localStorage
  const updateCartCount = () => {
    const cartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as CartItem[];
    setCartCount(cartItems.length);
  };

  useEffect(() => {
    // Initial cart count load
    updateCartCount();

    // Listen for storage changes
    window.addEventListener("storage", updateCartCount);

    const handleOverflow = () => {
      if (isOpen && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    handleOverflow();
    window.addEventListener("resize", handleOverflow);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleOverflow);
      window.removeEventListener("storage", updateCartCount);
    };
  }, [isOpen]);

  const addToCart = (item: CartItem) => {
    const existingItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as CartItem[];
    const updatedItems = [...existingItems, item];
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setCartCount(updatedItems.length);
  };

  return (
    <>
      <div className="bg-black">
        <div className="flex items-center justify-center max-w-[1240px] mx-auto relative">
          <p className="text-white text-sm font-normal leading-[100%] text-center py-2.5">
            Sign up and get 20% off to your first order.
            <span className="border-b font-normal border-solid border-white cursor-pointer">
              Sign Up Now
            </span>
          </p>
          <p className="absolute right-0 cursor-pointer max-sm:hidden max-xl:right-4">
            <CrossIcon />
          </p>
        </div>
      </div>
      <nav className="max-w-[1240px] mx-auto my-6">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-10">
            <button
              onClick={handler}
              className="flex flex-col justify-center items-center z-[100] gap-1 lg:hidden relative size-6"
            >
              <span
                className={`h-1 w-full bg-black rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              ></span>
              <span
                className={`h-1 w-full bg-black rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-1 w-full bg-black rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              ></span>
            </button>
            <Link href="/">
              <Image
                src="/assets/images/png/shop-co-logo.png"
                alt="logo"
                width={160}
                height={22}
              />
            </Link>
          </div>
          <div>
            <div
              className={`flex items-center gap-4 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-screen max-lg:bg-white max-lg:z-[90] transition-transform duration-300 ${
                isOpen ? "max-lg:-translate-y-0" : "max-lg:-translate-y-full"
              }`}
            >
              <ul className="flex items-center gap-5 max-lg:flex-col max-lg:justify-center">
                {HEADER_LIST.map((obj, i) => (
                  <li
                    key={i}
                    className="cursor-pointer font-normal text-base leading-[100%] max-lg:text-2xl"
                  >
                    {obj.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center bg-[#F0F0F0] gap-4 py-2.5 px-3 max-w-[577px] w-full rounded-full max-[1280px]:hidden">
            <label htmlFor="search">
              <SearchIcon />
            </label>
            <input
              type="text"
              name="search"
              className="placeholder:text-[#00000066] text-base placeholder:text-base placeholder:font-normal leading-[100%] font-normal bg-transparent w-full outline-none"
              placeholder="Search for products..."
            />
          </div>
          <div className="flex items-center gap-[40px]">
            <div className="min-[1280px]:hidden">
              <SearchIcon />
            </div>
            <Link href="/cart" className="relative">
              <ShopIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
