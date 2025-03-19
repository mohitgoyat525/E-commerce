"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../common/Header";
import { CheckIcon, NextMoveIcon } from "@/utils/Icons";
import Image from "next/image";
import { TOP_SELLING_LIST } from "@/utils/Helper";

interface Product {
  tittle: string;
  image: string;
  rating: string;
  price: string;
}

const ReviewHero: React.FC = () => {
  const pathname = usePathname();
  const productSlug = pathname.split("/").pop(); // Extract last segment of URL
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#4F4631");
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (productSlug) {
      const formattedSlug = productSlug.replace(/-/g, " ");
      const foundProduct = TOP_SELLING_LIST.find(
        (item) => item.tittle.toLowerCase() === formattedSlug.toLowerCase()
      );
      setProduct(foundProduct || null);
    }
  }, [productSlug]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="w-full max-w-[1240px] bg-[#0000001A] mx-auto my-6"></div>
      <div className="flex items-center gap-2.5 max-w-[1240px]">
        <p className="text-[#00000099]">Home</p>
        <NextMoveIcon />
        <p className="text-[#00000099]">Shop</p>
        <NextMoveIcon />
        <p className="text-[#00000099]">Men</p>
        <NextMoveIcon />
        <p className="text-[#00000099]">T-Shirts</p>
      </div>
      <div className="flex items-center w-full max-w-[1240px] mx-auto gap-6 mt-6">
        <Image
          src={product.image}
          alt={product.tittle}
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-2xl font-bold">{product.tittle}</h1>
          <Image src={product.rating} alt="rating" width={150} height={19} />
          <h2 className="text-xl font-bold">{product.price}</h2>
          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="w-full bg-[#0000001A] my-3"></div>

          {/* Color Selection */}
          <p>Select Color</p>
          <div className="flex gap-4">
            {["#4F4631", "#314F4A", "#31344F"].map((color) => (
              <div
                key={color}
                className={`size-[37px] rounded-full flex items-center justify-center cursor-pointer ${
                  selectedColor === color ? "border-2 border-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && <CheckIcon />}
              </div>
            ))}
          </div>

          <div className="w-full bg-[#0000001A] my-3"></div>

          {/* Size Selection */}
          <p>Select Size</p>
          <div className="flex gap-4">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className={`px-6 py-3 border rounded cursor-pointer ${
                  selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="w-full bg-[#0000001A] my-3"></div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-between w-full max-w-[170px] rounded-full bg-[#F0F0F0] p-2">
              <button
                className="px-3"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="px-3"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 mt-4 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewHero;
