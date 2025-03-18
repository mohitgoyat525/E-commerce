import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <NewArrivals/>
    </>
  );
}
