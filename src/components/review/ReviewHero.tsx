"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../common/Header";
import { CheckIcon, MinusIcon, NextMoveIcon, PlusIcon } from "@/utils/Icons";
import Image from "next/image";
import {
  TOP_SELLING_LIST,
  NEW_ARRIVALS_LIST,
  YOU_MIGHT_LIST,
  SELECT_SIZE_LIST,
  SELECT_COLOR_LIST,
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
      <div className="max-xl:px-4">
        <Header />
        <div className="w-full max-w-[1240px] mx-auto border border-solid border-[#0000001A]"></div>
      </div>
      <div className="px-4">
        <div className="w-full max-w-[1240px] bg-[#0000001A] mx-auto my-6"></div>
        <div className="flex items-center gap-2.5 max-w-[1240px] w-full mx-auto">
          <p className="text-[#00000099] text-base font-medium leading-[100%]">
            Home
          </p>
          <NextMoveIcon />
          <p className="text-[#00000099] text-base font-medium leading-[100%]">
            Shop
          </p>
          <NextMoveIcon />
          <p className="text-[#00000099] text-base font-medium leading-[100%]">
            Men
          </p>
          <NextMoveIcon />
          <p className="text-[#00000099] text-base font-medium leading-[100%]">
            T-Shirts
          </p>
        </div>
        <div className="flex items-center w-full max-w-[1240px] max-lg:flex-wrap mx-auto gap-6 mt-6">
          <div className="flex items-center gap-4 max-[1025px]:flex max-xl:flex-col-reverse max-lg:mx-auto">
            <div className="max-xl:flex max-xl:items-center  gap-[14px]">
              {/* Thumbnail Images */}
              <Image
                id="one"
                src={product.image}
                alt="product thumbnail 1"
                width={152}
                height={167}
                className="w-full max-w-[152px] h-[167px] max-sm:max-w-[111px] max-xl:max-w-[130px] max-xl:h-[130px] max-sm:h-[106px] cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              />
              <Image
                id="two"
                src={defaultImageTwo}
                alt="product thumbnail 2"
                width={152}
                height={167}
                className="w-full max-w-[152px] h-[167px] max-sm:max-w-[111px] max-xl:my-0 max-xl:max-w-[130px] max-xl:h-[130px] my-3.5 max-sm:h-[106px] cursor-pointer"
                onClick={() => setSelectedImage(defaultImageTwo)}
              />
              <Image
                id="three"
                src={defaultImageThree}
                alt="product thumbnail 3"
                width={152}
                height={167}
                className="w-full max-w-[152px] h-[167px] max-xl:max-w-[130px] max-xl:h-[130px]  max-sm:max-w-[111px] max-sm:h-[106px] cursor-pointer"
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
              className="w-full max-w-[444px] h-[530px] max-sm:max-w-[358px] max-sm:h-[290px] max-xl:max-w-[418px] max-xl:h-[480px]"
            />
          </div>
          <div className="w-full max-w-[600px] max-xl:max-w-[570px] max-lg:mx-auto max-lg:max-w-full">
            <h2 className="text-[40px] font-bold leading-[100%]  max-md:text-3xl max-sm:text-2xl font-intergal-cf whitespace-nowrap max-xl:whitespace-break-spaces mb-3.5">
              {product.tittle}
            </h2>
            <Image src={product.rating} alt="rating" width={150} height={19} />
            <div className="flex items-center gap-3 mt-3.5">
              <h2 className="text-[32px] leading-[100%] font-bold">
                {product.price}
              </h2>
              <p className="line-through text-[#0000004D] text-[32px] font-bold leading-[100%]">
                $300
              </p>
              <div className="flex items-center justify-center rounded-full min-w-[72px] h-[34px] bg-[#FF33331A]">
                <p className="text-[#FF3333] font-normal text-base leading-[100%]">
                  -40%
                </p>
              </div>
            </div>
            <p className="text-[#00000099] font-normal text-base leading-[100%] mt-5">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>
            <div className="w-full max-w-[590px] border border-solid border-[#0000001A] my-6"></div>

            {/* Color Selection */}
            <p className="font-normal text-base text-[#00000099] leading-[100%]">
              Select Color
            </p>
            <div className="flex gap-4 mt-4">
              {SELECT_COLOR_LIST.map((color) => (
                <div
                  key={color}
                  className={`size-[37px] rounded-full flex items-center justify-center cursor-pointer`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && <CheckIcon />}
                </div>
              ))}
            </div>

            <div className="w-full max-w-[590px] border border-solid border-[#0000001A] my-6"></div>
            {/* Size Selection */}
            <p className="font-normal text-base text-[#00000099] leading-[100%]">
              Select Size
            </p>
            <div className="flex gap-3 mt-4">
              {SELECT_SIZE_LIST.map((size) => (
                <button
                  key={size}
                  className={`px-6 py-[13.8px] max-sm:px-3 max-sm:py-2 border border-transparent border-solid text-[#00000099] rounded-full cursor-pointer font-normal text-base leading-[100%] ${
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

            <div className="w-full max-w-[590px] border border-solid border-[#0000001A] my-6"></div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
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
              <button className="w-full bg-black text-white py-3  rounded-full h-[52px] font-medium text-base leading-[100%]">
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
