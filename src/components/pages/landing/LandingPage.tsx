"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "@/src/components/app-reusables/SplashScreen";
import landingPage from "@/src/constants/landingPage";
import Logo from "@/public/icons/logo.svg";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import Footer from "@/src/components/app-reusables/Footer";
import Modal from "@/src/components/app-reusables/Modal";

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
    <main className="h-screen w-full">
      <section className="sm:grid lg:flex items-center content-cente w-full h-[85vh] lg:h-[85vh] bg-background">
        <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 pt-16 lg:pt-0 lg:gap-32">
          <div className="text-center content-center w-full lg:w-auto">
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              className="block w-40 lg:w-80 2xl:w-96 mx-auto"
            />
          </div>

          <div className="mx-4 lg:w-1/2  2xl:w-[35%] lg:h-[50%] h-full justify-center flex flex-col gap-6 mt-4 sm:mt-0">
            <div className="grid gap-y-4 lg:gap-y-2">
              <h1 className="text-[34px] font-[500] leading-[40px] text-white md:text-[48px] 2xl:text-[52px] md:leading-[81px]">
                {landingPage[text].heading}
              </h1>
              <p className="text-sm lg:w-4/5 font-thin">{landingPage[text].text}</p>
            </div>
            <div className="flex flex-col gap-y-4 lg:flex-row md:gap-x-6 gap-x-3 mt-8">
              <Button
                asChild
                className={`${
                  text === 1
                    ? "bg-base2 text-white"
                    : "bg-white text-text border border-white"
                } md:px-[48px] px-[40px] py-[14px] md:py-[20px] rounded-[40px] text-xs h-10 2xl:h-12`}
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
                variant="secondary"
                className="md:px-[48px] px-[40px] py-[14px] md:py-[20px] b rounded-[40px] border border-white text-white h-10 2xl:h-12 text-xs"
              >
                <Link href="/log-in" className="text-white py-5">
                  Log in
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </section>
      <div className="h-[15vh]">
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
