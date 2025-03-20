import Image from "next/image";
import React, { useState } from "react";

const ShowsImage = ({
  productImage,
  productImageTwo,
  productImageThree,
}: {
  productImage?: any;
  productImageTwo?: any;
  productImageThree?: any;
}) => {
  const [selectedImage, setSelectedImage] = useState(productImage || "");

  return (
    <div className="flex gap-3.5 max-xl:flex-col-reverse">
      <div className="flex flex-col max-xl:flex-row max-xl:justify-center gap-3.5">
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() => setSelectedImage(productImage)}
        >
          <Image
            src={productImage || ""}
            width={152}
            height={167}
            alt="Skinny Fit Jeans"
            className="w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] object-cover bg-light-blue"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() => setSelectedImage(productImageTwo)}
        >
          <Image
            src={productImageTwo || ""}
            width={152}
            height={167}
            alt="T-Shirt with Tape Details"
            className="w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] object-cover bg-light-blue"
          />
        </div>
        <div
          className="cursor-pointer rounded-[20px] overflow-hidden"
          onClick={() => setSelectedImage(productImageThree)}
        >
          <Image
            src={productImageThree || ""}
            width={152}
            height={167}
            alt="Vertical Striped Shirt"
            className="w-[152px] h-[167px] max-sm:w-[111px] max-sm:h-[106px] object-cover bg-light-blue"
          />
        </div>
      </div>
      <div className="rounded-[20px] bg-light-blue max-xl:justify-center max-xl:flex overflow-hidden">
        {selectedImage ? (
          <Image
            src={selectedImage}
            width={444}
            height={530}
            alt="Selected Product"
            className="w-[444px] h-[530px] max-md:h-[450px] max-sm:h-[290px] max-xl:h-[446px] object-cover max-sm:object-contain"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
    </div>
  );
};

export default ShowsImage;
