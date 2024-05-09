"use client";

import Modal from "@/src/components/app-reusables/Modal";
import React, { useState } from "react";
import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import {
  button1GreenStyle,
  button2RedStyle,
} from "@/src/constants/buttonStyles";
import RoleCard from "@/src/components/RoleCard";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [account, setAccount] = useState<string>("");
  const isDisabled = account === "";

  const handleModalClose = (changeGenderToMale = false) => {
    // if (changeGenderToMale) {
    //   setAccount("explorer");
    // }
    setShowModal(false);
  };

  const handleYesClick = () => {
    setAccount("model");
    setShowModal(false);
  };

  const handleModelClick = () => {
    setShowModal(true);
  };

  const handleExplorerClick = () => {
    setAccount("explorer");
  };

  return (
    <>
      <div className="mt-9 lg:mt-6 text-center text-darkGray">
        <p className="font-medium text-lg md:text-xl mb-9 lg:mb-6">
          Are you model or explorer?
        </p>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <RoleCard
            role="model"
            selected={account === "model"}
            onClick={handleModelClick}
          />
          <RoleCard
            role="explorer"
            selected={account === "explorer"}
            onClick={handleExplorerClick}
          />
        </div>

        <div className="mt-8 lg:mt-7 md:px-6 lg:px-0">
          <p>
            Or would you prefer an{" "}
            <Link href="/agency/sign-up" className="text-base2">
              agency account?
            </Link>
          </p>

          <Button
            asChild
            className={`w-full px-5 py-3 rounded-full lg:mt-2 mt-4 text-black text-sm ${
              isDisabled
                ? "bg-lightgray cursor-not-allowed text-gray"
                : "bg-tertiary hover:bg-tertiaryHover"
            }`}
            disabled={isDisabled}
            type="submit"
          >
            {isDisabled ? (
              <p>Next</p>
            ) : (
              <Link
                href={
                  account === "model" ? "/model/referer" : "/explorer/sign-up"
                }
              >
                Next
              </Link>
            )}
          </Button>
        </div>
      </div>

      <div
        className={`top-0 left-1/2 transform -translate-x-1/2  absolute overflow-y-hidden z-40  w-full h-full  ${
          showModal ? "top-1/2 transform -translate-y-1/2" : "-translate-y-full"
        } ease-in-out duration-500`}
      >
        <Modal
          isOpen={showModal}
          onClose={() => handleModalClose(true)}
          onYesClick={handleYesClick}
          question="Must be female"
          button1Text="Yes, I am"
          button2Text="No, cancel"
          button1Style={button1GreenStyle}
          button2Style={button2RedStyle}
        />
      </div>
    </>
  );
};

export default Page;
