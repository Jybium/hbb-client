"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "../app-reusables/SplashScreen";
import landingPage from "../../constants/landingPage";
import Logo from "../../public/assests/logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Footer from "../app-reusables/Footer";
import Modal from "../app-reusables/Modal";

const Landingpage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState<number>(0);

 useEffect(() => {
   // Check if the user has seen the splash screen before
   const hasSeenSplash = localStorage.getItem("hasSeenSplash");

   if (hasSeenSplash === "true") {
     // Skip splash screen
     setLoading(false);
   } else {
     // Show splash screen and set it to false after 3 seconds
     setTimeout(() => {
       setLoading(false);
       localStorage.setItem("hasSeenSplash", "true");
     }, 3000);
   }
 }, []);

 useEffect(() => {
   setTimeout(() => {
     setText(1);
   }, 10000);
 }, []);

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleYesClick = () => {
    handleModalClose(); // Close the modal
    router.push("/sign-up"); // Navigate to sign-up page
  };

  const button1Style = {
    bgColor: "bg-[#4EB246]",
    textColor: "text-white",
    hoverBgColor: "hover:bg-[#459937]",
  };

  const button2Style = {
    bgColor: "bg-[#EB5656]",
    textColor: "text-white",
    hoverBgColor: "hover:bg-[#FF7A7A]",
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main className="md:h-screen h-screen w-full max-w-[1728px] max-h-[1117px]">
      <section className="sm:grid lg:flex items-center content-cente w-full lg:h-[88%] h-[88%] bg-background">
        <section className="lg:flex grid justify-between items-center content-cente lg:h-full h-[88%] m-auto w-[90%] ">
          <div className="hidden md:grid sm:grid  text-center mx-au content-center w-full lg:w-auto">
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              priority
              className="block sm:w-[60%] md:w-[50%] lg:w-[400px] mx-auto"
            />
          </div>

          <section className="lg:w-[57%] w-full lg:h-[80%] h-full items-center justify-center grid mt-4 sm:mt-0">
            <div className="text-white">
              <h1 className="text-[32px] font-[500] leading-[40px] text-white md:text-[64px] md:leading-[81px]">
                {landingPage[text].heading}
              </h1>
              <p className="text-lg mt-4 mb-16">{landingPage[text].text}</p>
            </div>
            <div className="flex md:gap-x-6 gap-x-3">
              <Button
                asChild
                className={`${
                  text === 1
                    ? "bg-base2 text-white"
                    : "bg-white text-text border border-white"
                } md:px-[48px] px-[40px] py-[14px] md:py-[20px] rounded-[40px] `}
              >
                <p
                  className="cursor-pointer py-5"
                  onClick={() => setShowModal(true)}
                >
                  Sign Up
                </p>
              </Button>
              <Button
                asChild
                className="md:px-[48px] px-[40px] py-[14px] md:py-[20px] rounded-[40px] border border-white text-white"
              >
                <Link href="/log-in" className="text-white py-5">
                  Log in
                </Link>
              </Button>
            </div>
          </section>
        </section>
      </section>
      <div className="md:h-fit h-fit">
        <Footer />
      </div>
      <div
        className={`top-0 left-1/2 transform -translate-x-1/2  absolute overflow-y-hidden z-40  w-full h-full  ${
          showModal ? "top-1/2 transform -translate-y-1/2" : "-translate-y-full"
        } ease-in-out duration-500`}
      >
        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          onYesClick={handleYesClick}
          question="Are you over 20?"
          button1Text="Yes, I am"
          button2Text="No, cancel"
          button1Style={button1Style}
          button2Style={button2Style}
        />
      </div>
    </main>
  );
};

export default Landingpage;
