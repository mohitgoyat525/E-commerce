import Brands from "@/components/Brands";
import BrowseStyle from "@/components/BrowseStyle";
import HappyCustomer from "@/components/HappyCustomer";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/helper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <HappyCustomer/>
    </>
  );
}
