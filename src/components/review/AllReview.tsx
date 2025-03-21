"use client";
import { TAB_LIST } from "@/utils/Helper";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import ReviewsData from "../common/CustomReview";

const AllReviews = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "rating-and-reviews";

  return (
    <div className="px-4 pt-20 max-sm:pt-[50px]">
      <div className="flex mx-auto container relative max-w-[1240px]">
        <div className="w-full h-[1px] bg-black/10 absolute bottom-0"></div>
        {TAB_LIST.map((item, index) => {
          const itemSlug = item
            .toLocaleLowerCase()
            .replaceAll(" ", "-")
            .replace("&", "and");
          const isActive = tab === itemSlug;

          return (
            <div
              key={index}
              className={`max-w-[414px] flex justify-center pb-5 border-b-2  relative w-full ${
                isActive ? " border-black" : "border-transparent"
              }`}
            >
              <Link
                href={`?tab=${itemSlug}`}
                scroll={false}
                className={`text-center text-xl text-black/60 max-sm:px-3 max-sm:text-base max-md:text-lg whitespace-nowrap leading-[100%] ${
                  isActive && "font-medium !text-black"
                }`}
              >
                {item}
              </Link>
            </div>
          );
        })}
      </div>

      {tab === "rating-and-reviews" ? (
        <ReviewsData />
      ) : (
        <div className="mt-4">
          <h2 className="text-xl text-center font-bold">Coming soon</h2>
        </div>
      )}
    </div>
  );
};

export default AllReviews;
