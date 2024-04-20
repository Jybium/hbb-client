"use client"

import React, { useState} from "react";
import { Button } from "@/components/ui/button";
import arrowLeft from "../../../../public/assests/arrowLeft.svg"
import arrowRight from "../../../../public/assests/arrowRight.svg"

import items from "../../../../constants/aboutUs"
import Image from "next/image";


const Screen = () => {

     const [currentIndex, setCurrentIndex] = useState(0);

     const goToNextSlide = () => {
       const nextIndex = (currentIndex + 1) % items.length;
       setCurrentIndex(nextIndex);
     };

     const goToPrevSlide = () => {
       const prevIndex =
         currentIndex === 0 ? items.length - 1 : currentIndex - 1;
       setCurrentIndex(prevIndex);
     };


  return (
    <div className=" xl:block flex items-center px-[4%] md:px-[20%] lg:px-[4%]  2xl:px-[6%]  py-[30px] ">
      <div className="mt-[20px] lg:mt-[0px]">
        <div className=" md:h-fit flex flex-col justify-end lg:w-[92%]">
          <h4 className="text-[32px] font-[500] text-white md:leading-[71px] md:text-[64px] md:font-[500]">
            About us
          </h4>
          <h4 className="text-[15px] font-[400] text-white leading-[22.5px] mt-[16px] md:mt-[18px] mb-[15px] md:mb-[25px] md:text-[18px] md:font-[400] md:leading-[25px]">
            Honey Bunny Bun is an adult subscription platform that empowers
            creators to unleash their full potential, monetize their content,
            and foster genuine connections with their audience.
          </h4>
          <div className="py-[24px] md:py-[25px] border-y-[1px] border-white">
            <h4 className="text-[20px] font-[500] leading-[36px] text-white md:text-[30px] md:font-[500] md:leading-[36px] transition-all ease-in delay-150">
              {items[currentIndex].text}
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4 text-right justify-end mt-4">
          <Button
            size="sm"
            onClick={goToPrevSlide}
            className="backdrop-blur-sm p-2 rounded bg-buttonbg"
          >
            <Image src={arrowLeft} width={13.21} height={21} alt="arrow left" />
          </Button>
          <Button
            size="sm"
            onClick={goToNextSlide}
            className="backdrop-blur-sm p-2 rounded bg-buttonbg"
          >
            <Image
              src={arrowRight}
              width={13.21}
              height={21}
              alt="arrow Right"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Screen;