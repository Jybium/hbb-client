import React from "react";

import { textArray } from "@/src/constants/aboutUs";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

const AboutUsScreen = () => {
  return (
    <div className="w-full h-full py-[35px] px-4 lg:py-14 lg:px-[120px] md:px-20 md:py-12">
      <div className="flex flex-col lg:flex-row w-full h-full lg:justify-between items-center overflow-y-scroll no-scrollbar lg:overflow-y-hidden">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 items-center">
          <Image
            className="w-[168px] h-[168px] lg:w-[390px] lg:h-[390px] object-contain"
            width={91}
            height={91}
            src={"/assests/logo.svg"}
            alt="logo"
          />
        </div>

        <div className="w-full lg:w-1/2 md:mt-8 lg:mt-0 text-white">
          <div className="mb-5 lg:mb-6">
            <h4 className="font-medium lg:text-4xl text-32px mb-4 lg:mb-5">
              About us
            </h4>
            <p className="">
              Honey Bunny Bun is an adult subscription platform that empowers
              creators to unleash their full potential, monetize their content,
              and foster genuine connections with their audience.
            </p>
          </div>

          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {textArray.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:py-10 py-6 border-t border-b border-white"
                  >
                    <p
                      key={index}
                      className="font-medium md:text-32px text-2xl"
                    >
                      {item.segments.map((segment, segIndex) => (
                        <span key={segIndex} className={segment.className}>
                          {segment.text}
                        </span>
                      ))}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 md:mt-8 flex gap-6 items-center justify-center lg:justify-end">
                <CarouselPrevious className="relative left-0 w-8 h-8 rounded-md border-none bg-[#FFFFFF29] hover:bg-[#3b82a3]">
                  <Image
                    src={"/assests/arrowLeft.svg"}
                    width={13.21}
                    height={21}
                    alt="arrow left"
                  />
                </CarouselPrevious>
                <CarouselNext className="relative right-0 w-8 h-8 rounded-md border-none bg-[#FFFFFF29] hover:bg-[#3b82a3]">
                  {" "}
                  <Image
                    src={"/assests/arrowRight.svg"}
                    width={13.21}
                    height={21}
                    alt="arrow Right"
                  />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
