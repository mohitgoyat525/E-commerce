import Brands from "@/components/home/Brands";
import BrowseStyle from "@/components/home/BrowseStyle";
import HappyCustomer from "@/components/home/HappyCustomer";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import TopSelling from "@/components/home/TopSelling";
import Footer from "@/components/common/Footer";
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
      <HappyCustomer />
      <Footer />
    </>
  );
}
