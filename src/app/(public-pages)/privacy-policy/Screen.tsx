"use client";

import React, { useState } from "react";
import arrowLeft from "@/public/assets/arrowLeft.svg";
import arrowRight from "@/public/assets/arrowRight.svg";
import Logo from "@/public/assets/logo.svg";
import policy from "@/src/constants/privacyPolicy";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Footer from "@/src/components/app-reusables/Footer";

const Screen = () => {
  const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Function to handle going to the next slide
  const goToNextSlide = () => {
    setActiveSlideIndex((prevIndex) => {
      if (prevIndex === policy[activeHeadingIndex].slides.length - 1) {
        if (activeHeadingIndex === policy.length - 1) {
          return prevIndex;
        } else {
          setActiveHeadingIndex((prev) => prev + 1);
          return 0;
        }
      } else {
        return prevIndex + 1;
      }
    });
  };

  // Function to handle going to the previous slide
  const goToPreviousSlide = () => {
    setActiveSlideIndex((prevIndex) => {
      if (prevIndex === 0 && activeHeadingIndex === 0) {
        return prevIndex;
      } else if (prevIndex === 0) {
        setActiveHeadingIndex((prev) => prev - 1);
        return policy[activeHeadingIndex - 1].slides.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  // Function to handle heading click
  const onHeadingClick = (index: number) => {
    setActiveHeadingIndex(index);
    setActiveSlideIndex(0);
  };

  // Determine if the previous and next buttons should be shown
  const showPreviousButton = activeHeadingIndex !== 0 || activeSlideIndex !== 0;
  const showNextButton = activeHeadingIndex !== policy.length - 1 || activeSlideIndex !== policy[activeHeadingIndex].slides.length - 1;

  return (
    <main className="md:h-screen w-full">
      <section className="px-4% md:px-20% lg:px-4% 2xl:px-6% h-85vh py-20 bg-base">
        <div className="md:pb-0 pb-20 bg-base w-90% mx-auto">
          <Image className="md:w-86 w-196 mx-auto md:mx-0" width={63} height={80} src={Logo} alt="logo" />
        </div>
        <section className="flex justify-center w-full overflow-x-auto lg:h-80% lg:w-90% mx-auto bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-25 min-h-704">
            <div className="lg:pr-80">
              {/* Privacy Policy Header */}
              <div className="pb-20 md:pb-40 mb-24 md:mb-30 border-b border-white">
                <h4 className="text-32 md:text-44 md:leading-71 font-500 text-white">
                  Privacy Policy
                </h4>
                <h4 className="text-15 font-400 leading-22.5 text-white mt-16 md:mt-32 md:text-18">
                  At Honey Bunny Bun, your privacy and trust are paramount. We prioritize transparency regarding the collection, usage, and disclosure of your information.
                </h4>
              </div>
              {/* Policy headings list */}
              <div className="border-b lg:border-b-0 border-white pb-10">
                {policy.map((heading, index) => (
                  <ul
                    key={index}
                    className={`text-16 font-700 ml-20 w-fit mb-16 md:mb-24 ${activeHeadingIndex === index ? "text-tertiary border-b border-tertiary" : "text-white"} cursor-pointer list-disc`}
                    onClick={() => onHeadingClick(index)}
                  >
                    <li>{heading.title}</li>
                  </ul>
                ))}
              </div>
            </div>
            {/* Slides section */}
            <div className="bg-rgba-6ab5d2-16 px-24 py-36 rounded-24 h-full flex flex-col">
              {policy.map((policyItem, index) => (
                <div key={index}>
                  {activeHeadingIndex === index && (
                    <div className="border-b border-line pb-17 mb-17">
                      <h4 className="text-white text-22 md:text-24 font-700 leading-28 md:leading-30.6">
                        {policyItem.title}
                      </h4>
                      <h4 className="text-white text-16 md:text-18 md:leading-27 font-400 mt-16">
                        {policyItem.description}
                      </h4>
                    </div>
                  )}
                  {activeHeadingIndex === index && policyItem.slides.map((slide, slideIndex) => (
                    activeSlideIndex === slideIndex && (
                      <div className="pb-12" key={slideIndex}>
                        <div className="flex">
                          <div className="w-15 flex justify-end mr-10">
                            <h4 className="text-14 font-400 text-white leading-21">
                              {slide.number}.
                            </h4>
                          </div>
                          <div className="w-full">
                            <h3 className="text-14 font-400 text-white leading-21">
                              {slide.title}
                            </h3>
                            {slide.texts.map((text, textIndex) => (
                              <ul className="list-disc mt-10 text-white font-400 text-14 leading-21 -ml-10 md:ml-20" key={textIndex}>
                                <li>{text}</li>
                              </ul>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ))}
              {/* Navigation buttons */}
              <div className="mt-auto md:flex flex-row items-center justify-between pt-17 border-t border-line">
                <div className="order-2 flex justify-center items-center gap-24">
                  <Button size="sm" onClick={goToPreviousSlide} className="backdrop-blur-sm p-2 rounded bg-buttonbg" disabled={!showPreviousButton}>
                    <Image src={arrowLeft} width={13.21} height={21} alt="arrow left" />
                  </Button>
                  <Button size="sm" onClick={goToNextSlide} className="backdrop-blur-sm p-2 rounded bg-buttonbg" disabled={!showNextButton}>
                    <Image src={arrowRight} width={13.21} height={21} alt="arrow right" />
                  </Button>
                </div>
                <div className="order-1 mt-20 md:mt-0">
                  <h4 className="text-white font-400 text-12 text-center">
                    Last updated: November 2021
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Footer section */}
      <div className="h-15vh">
        <Footer />
      </div>
    </main>
  );
};

export default Screen;
