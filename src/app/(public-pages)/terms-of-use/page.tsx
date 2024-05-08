"use client";

import TermsOfUse from "@/src/components/TermsOfUse";
import terms from "@/src/constants/termOfUse";
import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";

const TermsOfUsePage = () => {
  const [selectedTermIndex, setSelectedTermIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isPending, startTransition] = React.useTransition();

  const handleModalClose = () => {
    startTransition(async () => {
      setOpenModal(!openModal);
    });
  };

  return (
    <div className="text-black h-full">
      <div className="w-full h-full py-[35px] px-4 lg:py-14 lg:px-[120px] md:px-20 md:py-12">
        <div className="h-full flex flex-col overflow-y-scroll no-scrollbar lg:overflow-y-hidden">
          <div className="flex justify-center lg:justify-start">
            <Image
              className="w-[168px] h-[168px] lg:w-[91px] lg:h-[91px]"
              width={91}
              height={91}
              src={"/assests/logo.svg"}
              alt="logo"
            />
          </div>

          <div className="mt-6 lg:mt-8 flex-1 text-white lg:overflow-hidden">
            <div className="flex justify-between h-full">
              <div className="w-full lg:w-1/2 lg:overflow-y-scroll no-scrollbar h-full pr-10">
                <div className="pb-5 lg:pb-6 border-b border-white">
                  <h3 className="font-medium lg:text-4xl text-32px mb-4 lg:mb-5">
                    Terms of service
                  </h3>
                  <p className="">
                    At Honey Bunny Bun, we highly value your privacy and trust.
                    It's crucial for us to be transparent about our practices
                    regarding the collection, usage, and disclosure of your
                    information.
                  </p>
                </div>

                <ul className="mt-6 lg:mt-5 flex flex-col gap-4 lg:gap-3 pl-4">
                  {terms.map((term, index) => (
                    <li key={index} className="list-disc">
                      <p
                        onClick={() => {
                          setSelectedTermIndex(index);
                          setOpenModal(true);
                        }}
                        className={`font-bold w-full cursor-pointer ${
                          selectedTermIndex === index
                            ? "text-[#F3E3AF] underline"
                            : ""
                        }`}
                      >
                        {term.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:block w-full lg:w-1/2">
                <div className="bg-[#FFFFFF29] w-full h-full rounded-20 px-6 pt-14 pb-6">
                  <div className="overflow-y-hidden flex flex-col h-full">
                    <TermsOfUse
                      terms={terms}
                      selectedTermIndex={selectedTermIndex}
                    />

                    <p className="text-xs mt-6">Last updated: November 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="lg:hidden absolute bg-[#0000008F] top-0 left-0 right-0 bottom-0 w-full h-screen">
          <div className="px-4 py-[50px] h-full w-full">
            <div className="bg-background h-full flex flex-col w-full rounded-20 p-5">
              <div className="flex justify-end mb-4">
                <div
                  onClick={handleModalClose}
                  className="w-7 h-7 bg-white text-black rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <X className="w-5 h-5" color="black" size={18} />
                </div>
              </div>

              <div className="overflow-y-hidden flex flex-col h-full text-white">
                <TermsOfUse
                  terms={terms}
                  selectedTermIndex={selectedTermIndex}
                />

                <p className="text-xs mt-6">Last updated: November 2024</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsOfUsePage;
