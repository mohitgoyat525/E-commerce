import React, { useState } from "react";
import { REVIEWS_LIST } from "@/utils/Helper";
import { ThreeDots } from "@/utils/Icons";
import Image from "next/image";
const ReviewsData = () => {
  const [sortOption, setSortOption] = useState("Oldest");
  const [sortedReviews, setSortedReviews] = useState([...REVIEWS_LIST]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const option: string = e.target.value;
    setSortOption(option);

    const sortedList = [...REVIEWS_LIST].sort((a, b) => {
      const dateA: Date = new Date(a.postDate.split("Posted on ")[1]);
      const dateB: Date = new Date(b.postDate.split("Posted on ")[1]);
      return option === "Latest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });
    setSortedReviews(sortedList);
  };

  return (
    <div className="pt-8">
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <p className="font-bold text-2xl leading-[100%]">All Reviews</p>
            <p className="leading-[100%] text-black/60 text-base">
              ({REVIEWS_LIST.length})
            </p>
          </div>
          <select
            className="cursor-pointer outline-none rounded-[62px] font-medium py-[13px] px-5 bg-light-blue"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option>Oldest</option>
            <option>Latest</option>
          </select>
        </div>
        <div className="flex w-full max-w-[1240px] pt-7 flex-wrap lg:gap-x-[1.62%] max-lg:gap-5 gap-y-5">
          {sortedReviews.map((item, index) => (
            <div
              key={index}
              className="w-[49.19%] max-lg:w-full border border-solid border-black/10 rounded-[20px] py-7 max-sm:p-6 max-lg:px-7 px-8"
            >
              <div className="flex w-full justify-between items-center">
                <span>{item.reviewsStart}</span>
                <span className="cursor-pointer flex">
                  <ThreeDots />
                </span>
              </div>
              <div className="flex gap-1 items-center pt-[15px]">
                <p className="font-bold text-xl leading-[100%]">
                  {item.userName}
                </p>
                      <Image src="/assets/images/svg/check-box-img.svg" alt='check' width={19} height={19} />
              </div>
            
                  <p className="text-black/60 mt-3 mb-6 font-normal text-sm">{item.description}</p>
                  <p className="font-medium text-black/60">{item.postDate}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full py-9">
                  <button className="py-[15px] px-[45px] border-black/10 hover:bg-black hover:text-white border border-solid rounded-full transition-all ease-linear duration-300">Load More Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsData;
