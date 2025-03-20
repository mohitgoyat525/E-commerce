"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../common/Header";
import { CheckIcon, NextMoveIcon } from "@/utils/Icons";
import Image from "next/image";
import {
  TOP_SELLING_LIST,
  NEW_ARRIVALS_LIST,
  YOU_MIGHT_LIST,
} from "@/utils/Helper";

// Define the Product interface
interface Product {
  tittle: string;
  image: string;
  rating: string;
  price: string;
  additionalImages?: string[];
}

const ReviewHero: React.FC = () => {
  // Combine product lists
  const productList: Product[] = [
    ...TOP_SELLING_LIST,
    ...NEW_ARRIVALS_LIST,
    ...YOU_MIGHT_LIST,
  ];
  const pathname = usePathname();
  const productSlug = pathname.split("/").pop(); // Extract last segment of URL

  // State declarations with TypeScript types
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#4F4631");
  const [selectedSize, setSelectedSize] = useState<string>("Medium");
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const defaultImageTwo = "/assets/images/webp/skinny-jeans-img-one.webp";
  const defaultImageThree = "/assets/images/webp/t-shirt-img-one.webp";

  // Effect to load product based on slug
  useEffect(() => {
    if (productSlug) {
      const formattedSlug = productSlug.replace(/-/g, " ");
      const foundProduct = productList.find(
        (item) => item.tittle.toLowerCase() === formattedSlug.toLowerCase()
      );
      setProduct(foundProduct ?? null);
      if (foundProduct) {
        setSelectedImage(foundProduct.image);
      }
    }
  }, [productSlug]);

  // Loading state
  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="px-4">
        <div className="w-full max-w-[1240px] bg-[#0000001A] mx-auto my-6"></div>
        <div className="flex items-center gap-2.5 max-w-[1240px] w-full mx-auto">
          <p className="text-[#00000099]">Home</p>
          <NextMoveIcon />
          <p className="text-[#00000099]">Shop</p>
          <NextMoveIcon />
          <p className="text-[#00000099]">Men</p>
          <NextMoveIcon />
          <p className="text-[#00000099]">T-Shirts</p>
        </div>
        <div className="flex items-center w-full max-w-[1240px] max-lg:flex-wrap mx-auto gap-6 mt-6">
          <div className="flex items-center gap-4 flex-wrap-reverse">
            <div className="max-lg:flex flex-col gap-[14px]">
              {/* Thumbnail Images */}
              <Image
                id="one"
                src={product.image}
                alt="product thumbnail 1"
                width={152}
                height={167}
                className="w-full max-w-[152px] h-[167px] max-sm:max-w-[111px] max-sm:h-[106px] cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              />
              <Image
                id="two"
                src={defaultImageTwo}
                alt="product thumbnail 2"
                width={152}
                height={167}
                className="w-full max-w-[152px] h-[167px] max-sm:max-w-[111px] max-sm:h-[106px] cursor-pointer"
                onClick={() => setSelectedImage(defaultImageTwo)}
              />
              <Image
                id="three"
                src={defaultImageThree}
                alt="product thumbnail 3"
                width={152}
                height={167}
                className="w-full max-w-[152px] h-[167px] max-sm:max-w-[111px] max-sm:h-[106px] cursor-pointer"
                onClick={() => setSelectedImage(defaultImageThree)}
              />
            </div>
            {/* Main Image */}
            <Image
              id="main"
              src={selectedImage}
              alt={product.tittle}
              width={444}
              height={530}
              className="w-full max-w-[444px] h-[530px] max-sm:max-w-[358px] max-sm:h-[290px]"
            />
          </div>
          <div className="w-full max-w-[600px]">
            <h1 className="text-2xl font-bold">{product.tittle}</h1>
            <Image src={product.rating} alt="rating" width={150} height={19} />
            <h2 className="text-xl font-bold">{product.price}</h2>
            <p className="text-[#00000099] font-normal text-base">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>
            <div className="w-full max-w-[590px] border border-solid border-[#0000001A] my-3"></div>

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

            <div className="w-full max-w-[590px] border border-solid border-[#0000001A] my-3"></div>
            {/* Size Selection */}
            <p>Select Size</p>
            <div className="flex gap-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className={`px-6 py-3 max-sm:px-3 max-sm:py-2 border rounded-full cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="w-full max-w-[590px] border border-solid border-[#0000001A] my-3"></div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-between w-full max-w-[170px] rounded-full bg-[#F0F0F0] p-2">
                <button
                  className="px-3"
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
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
              <button className="w-full bg-black text-white py-3 mt-4 rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewHero;
