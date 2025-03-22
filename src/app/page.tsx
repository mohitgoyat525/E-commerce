import Brands from "@/components/home/Brands";
import BrowseStyle from "@/components/home/BrowseStyle";
import HappyCustomer from "@/components/home/HappyCustomer";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import TopSelling from "@/components/home/TopSelling";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import PreLoader from "@/components/home/PreLoader";

export default function Home() {
  return (
    <Suspense>
      <PreLoader/>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseStyle />
      <HappyCustomer />
      <Footer />
    </Suspense>
  );
}
