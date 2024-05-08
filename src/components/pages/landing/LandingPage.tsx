"use client";

import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import Footer from "@/src/components/app-reusables/Footer";
import Modal from "@/src/components/app-reusables/Modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../../ui/carousel";
import landingPageData from "@/src/constants/landingPage";
import {
  button1GreenStyle,
  button2RedStyle,
} from "@/src/constants/buttonStyles";

const Landingpage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [api, setApi] = useState<CarouselApi>();

  const plugin = React.useRef(Autoplay({ delay: 7000 }));

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (hasSeenSplash === "true") {
      setLoading(false);
    } else {
      const timeoutId = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasSeenSplash", "true");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleYesClick = () => {
    handleModalClose();
    router.push("/sign-up");
  };

  if (loading) {
    return <div className="splash-bg h-screen w-full" />;
  }

  return (
    <div className="h-full">
      <div className="h-screen flex flex-col">
        <div className="w-full h-full bg-background overflow-hidden">
          <div className="w-full h-full py-8 px-4 lg:py-14 lg:px-[120px] md:px-20 md:py-12">
            <div className="flex flex-col lg:flex-row w-full h-full lg:justify-between items-center">
              <div className="flex justify-center lg:justify-start w-full lg:w-1/2 items-center">
                <Image
                  className="w-[168px] h-[168px] lg:w-[390px] lg:h-[390px] object-contain"
                  width={91}
                  height={91}
                  src={"/assests/logo.svg"}
                  alt="logo"
                />
              </div>

              <div className="w-full lg:w-1/2 mt-14 lg:mt-0 md:px-6 lg:px-0 text-white h-full lg:flex lg:justify-center lg:items-center">
                <div className="h-full md:h-fit">
                  <div className="h-full w-full flex flex-col justify-between md:justify-normal">
                    <Carousel
                      opts={{ loop: true, align: "center" }}
                      plugins={[plugin.current]}
                      setApi={setApi}
                      className="w-full h-full flex"
                    >
                      <CarouselContent className="m-0 p-0 h-full">
                        {landingPageData.map((item, index) => (
                          <CarouselItem key={index} className="p-0 m-0">
                            <div className="">
                              <h4 className="font-medium md:text-5xl text-32px mb-4 lg:mb-5">
                                {item.heading}
                              </h4>
                              <p className="md:text-lg">{item.text}</p>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>

                    <div className="flex flex-col gap-4 lg:flex-row md:gap-6 lg:mt-20 md:mt-28 transition-colors ease-in-out delay-100 duration-700">
                      <Button
                        className={`px-48px py-13.5px lg:py-20.5px lg:text-lg lg:rounded-40 rounded-full cursor-pointer text-center w-full lg:w-fit bg-base2 text-white ${
                          current === count
                            ? "bg-base2 text-white"
                            : "bg-white text-textGray"
                        }`}
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        <p>Sign Up</p>
                      </Button>

                      <Button
                        asChild
                        variant="secondary"
                        className="px-48px py-13.5px lg:py-20.5px lg:text-lg lg:rounded-40 rounded-full cursor-pointer text-center w-full lg:w-fit text-white border border-white"
                      >
                        <Link href="/log-in">Log in</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          button1Style={button1GreenStyle}
          button2Style={button2RedStyle}
        />
      </div>
    </div>
  );
};

export default Landingpage;
