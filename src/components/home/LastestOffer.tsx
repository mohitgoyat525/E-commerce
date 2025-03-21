"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmailIcon } from "@/utils/Icons";
import Swal from "sweetalert2";

const LatestOffer = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Error!",
        text: "Email field cannot be empty.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      setEmailError("");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please add proper email"); 
      return;
    }

    if (!form.current) return;

    setEmailError("");

    try {
      const result = await emailjs.sendForm(
        "service_oq1cf7s",
        "template_dkufmac",
        form.current,
        "e8pPFGTd0j6uM6UBA"
      );

      if (result.text === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Your email has been sent successfully.",
          icon: "success",
          confirmButtonColor: "#10B981",
        });
        form.current.reset();
        setEmail("");
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send email. Please try again later.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
      console.error("Email sending failed:", error);
    } finally {
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto rounded-[20px] flex max-lg:flex-col max-lg:gap-8 items-center justify-between bg-black container py-[43px] px-[64px] max-sm:px-6 max-md:px-7 max-lg:px-8">
      <div className="max-w-[551px] max-lg:max-w-[unset]">
        <h3 className="text-white font-integral-cf text-[40px] max-lg:text-4xl max-md:text-[32px] font-bold">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-[349px] flex flex-col gap-3.5 w-full"
      >
        <div className="w-full py-3 px-[17px] bg-white items-center rounded-[62px] flex">
          <div className="flex w-full items-center gap-3.5">
            <label className="cursor-pointer" htmlFor="mail">
              <EmailIcon />
            </label>
            <div className="w-full">
              <input
                className="w-full outline-none leading-[100%] bg-transparent placeholder:text-[#00000066] font-normal text-base placeholder:text-base "
                id="mail"
                placeholder="Enter your email address"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
        <button
          type="submit"
          className={`text-black cursor-pointer bg-white w-full max-w-[349px] rounded-full border border-solid border-white py-3 px-5  transition-all ease-linear duration-300 hover:bg-black hover:text-white hover:border-white`}
        >
          Subscribe to Newsletter
        </button>
      </form>
    </div>
  );
};

export default LatestOffer;
