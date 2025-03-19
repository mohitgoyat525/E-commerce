
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "./Icons";

export const HEADER_LIST: { name: string; link?: string }[] = [
  {
    name: "Shop ",
  },
  {
    name: "On Sale",
    link: "#On-sale",
  },
  {
    name: "New Arrivals",
    link: "#new-arrivals",
  },
  {
    name: "Brands",
    link: "#brands",
  },
];

export const BRANDS_LIST = [
  "/assets/images/webp/versace-logo.webp",
  "/assets/images/webp/zara-logo.webp",
  "/assets/images/webp/gucchi-logo.webp",
  "/assets/images/webp/prada-logo.webp",
  "/assets/images/webp/calvin-klein-logo.webp",
];
export const NEW_ARRIVALS_LIST = [
  {
    image: "/assets/images/webp/t-shirt-img-one.webp",
    tittle: "T-SHIRT WITH TAPE DETAILS",
    rating: "/assets/images/svg/rating-star-4.5-img.svg",
    price: "$120",
  },
  {
    image: "/assets/images/webp/skinny-jeans-img-one.webp",
    tittle: "SKINNY FIT JEANS",
    rating: "/assets/images/svg/rating-star-3.5-img.svg",
    price: "$240",
    cancelPrice: "$260",
    discount: "-20%",
  },
  {
    image: "/assets/images/webp/checked-shirt-img-one.webp",
    tittle: "CHECKERED SHIRT",
    rating: "/assets/images/svg/rating-star-4.5-img.svg",
    price: "$180",
  },
  {
    image: "/assets/images/webp/seleve-t-shirt-img-.webp",
    tittle: "SLEEVE STRIPED T-SHIRT",
    rating: "/assets/images/svg/rating-star-4.5-img.svg",
    price: "$130",
    cancelPrice: "$160",
    discount: "-30%",
  },
];



export const TOP_SELLING_LIST = [
  {
    image: "/assets/images/webp/verticale-shirt-img.webp",
    tittle: "VERTICAL STRIPED SHIRT",
    rating: "/assets/images/svg/rating-star-5-img.svg",
    price: "$212",
    cancelPrice: "$232",
    discount: "-20%",
  },
  {
    image: "/assets/images/webp/orange-t-shirt-img.webp",
    tittle: "COURAGE GRAPHIC T-SHIRT",
    rating: "/assets/images/svg/rating-star-4-img.svg",
    price: "$145",
  },
  {
    image: "/assets/images/webp/loose-fit-img.webp",
    tittle: "LOOSE FIT BERMUDA SHORTS",
    rating: "/assets/images/svg/rating-star-3-img.svg",
    price: "$80",
  },
  {
    image: "/assets/images/webp/faded-pant-img.webp",
    tittle: "FADED SKINNY JEANS",
    rating: "/assets/images/svg/rating-star-4.5-img.svg",
    price: "$210",
  },
];

export const HAPPY_CUSTOMERS_LIST = [
  {
    rating: "/assets/images/svg/rating-star-5star-img.svg",
    name: "Sarah M.",
    icon: "/assets/images/svg/check-box-img.svg",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    rating: "/assets/images/svg/rating-star-5star-img.svg",
    name: "Alex K.",
    icon: "/assets/images/svg/check-box-img.svg",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    rating: "/assets/images/svg/rating-star-5star-img.svg",
    name: "James L.",
    icon: "/assets/images/svg/check-box-img.svg",
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    rating: "/assets/images/svg/rating-star-5star-img.svg",
    name: "Sarah M.",
    icon: "/assets/images/svg/check-box-img.svg",
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    rating: "/assets/images/svg/rating-star-5star-img.svg",
    name: "Alex K.",
    icon: "/assets/images/svg/check-box-img.svg",
    description:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
  },
  {
    rating: "/assets/images/svg/rating-star-5star-img.svg",
    name: "James L.",
    icon: "/assets/images/svg/check-box-img.svg",
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
];

export const SOCIAL_LIST = [
  {
    icon: <TwitterIcon myClassName="group-hover:fill-white" />,
    link: "https://x.com/?lang=en",
  },
  {
    icon: <FacebookIcon myClassName="group-hover:fill-white" />,
    link: "https://facebook.com",
  },
  {
    icon: <InstagramIcon myClassName="group-hover:fill-white" />,
    link: "https://instagram.com",
  },
  {
    icon: <GithubIcon myClassName="group-hover:fill-white" />,
    link: "https://github.com",
  },
];

export const FOOTER_LIST = [
  {
    title: "Company",
    list: [
      { title: "About", link: "/about" },
      { title: "Features", link: "/features" },
      { title: "Works", link: "/works" },
      { title: "Career", link: "/career" },
    ],
  },
  {
    title: "Help",
    list: [
      { title: "Customer Support", link: "/customer-support" },
      { title: "Delivery-details", link: "/delivery-details" },
      { title: "Terms & Conditions", link: "/terms-conditions" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  {
    title: "FAQ",
    list: [
      { title: "Account", link: "/about" },
      { title: "Manage Deliveries", link: "/manage-deliveries" },
      { title: "Orders", link: "/orders" },
      { title: "Payments", link: "/payments" },
    ],
  },
  {
    title: "Resources",
    list: [
      { title: "Free eBooks", link: "/free-ebooks" },
      { title: "Development Tutorial", link: "/development-tutorial" },
      { title: "How to - Blog", link: "/how-to-blog" },
      { title: "Youtube Playlist", link: "/youtube-playlist" },
    ],
  },
];

export const PAYMENTS_METHOD_LIST = [
  "/assets/images/webp/visa.webp",
  "/assets/images/webp/master-card.webp",
  "/assets/images/webp/paypal.webp",
  "/assets/images/webp/apple-pay.webp",
  "/assets/images/webp/g-pay.webp",
];