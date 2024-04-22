"use client";


import Modal from "@/src/components/app-reusables/Modal";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Logo from "@/public/assests/logo.svg";
import Model from "@/public/assests/model.png";
import Explorer from "@/public/assests/explorer.png";
import Image from "next/image";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";

const Page = () => {
  const router = useRouter();

  const [account, setAccount] = useState<string>("");
  const [formValues, setFormValues] = useState({
    gender: "male",
    accountType: "",
  });
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = (changeGenderToMale = false) => {
    if (changeGenderToMale) {
      setAccount("explorer");
    }
    setShowModal(false);
  };

  const handleModelClick = () => {
    setShowModal(true);
  };

  const handleGenderChangeToFemale = () => {
    setAccount("model");
    setShowModal(false);
    console.log("button clicked", account);
  };

  const handleExplorerClick = () => {
    setAccount("explorer");
    console.log("button clicked", account);
  };

  const handleNext = () => {

    if (account === "explorer") {
   
      router.push("/explorer/sign-up");
    }

    if (account === "model") {
 
      router.push("/model/sign-up");
    }
  };

  const isDisabled = account !== "";

  const submit = (data: any) => {
    console.log(data);
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

  return (
    <div className="w-[100%] md:w-4/5 md:m-auto lg:w-full lg:m-0  content-center grid lg:justify-end">
      <div className="w-full h-full px-[1rem] md:px-[10%]  lg:px-0 ">
        <div className="bg-white md:rounded-[1.50rem] rounded-[1.50rem] px-[4%]  py-[25px] lg:pb-[20px] lg:py-[15px] lg:px-[32px] shadow-xl w-full">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378]  pb-[10px] md:pb-[5px] items-center w-full">
            <div className="flex justify-start"></div>
            <div className="flex justify-center">
              <Image
                className="w-[63px] md:w-[80px] hidden md:block"
                width={63}
                height={63}
                src={Logo.src}
                alt="logo"
              />
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <button className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[45px] h-[45px] flex justify-center items-center">
                  <X className="h-[14px] w-[14px]" color="black" size={25} />
                </button>
              </Link>
            </div>
          </div>
          <div className="md:px- lg:px-">
            <h4 className="text-[18px] lg:text-[1.20rem] font-[500] leading-[22px] lg:mt-[10px] mt-[30px] text-[#44464A] md:leading-[30px] text-center ">
              Are you model or explorer?
            </h4>
            <div className="mt-[30px] md:mt-[1rem] grid grid-cols-2 gap-[16px] md:gap-[2rem] xl:mx-[15px]">
              <div
                onClick={handleModelClick}
                className="radio-container w-full h-full"
              >
                <input
                  type="radio"
                  id="model"
                  value="model"
                  className="hidden-input hidden"
                  checked={account === "model"}
                />
                <label
                  htmlFor="model"
                  className="custom-radio w-full rounded-[20px] md:rounded-[28px]"
                >
                  <div
                    className={`h-full border ${
                      account === "model" ? "border-[0px]" : "border-text"
                    } rounded-[1.75rem] md:rounded-[1.75rem]`}
                  >
                    <div className="py-[1.55rem] lg:py-[1.20rem] flex flex-col items-center justify-between h-full">
                      <div className="">
                        <Image
                          className="lg:w-[90px] md:w-[120px] w-[90px] lg:h-[90px] md:h-[120px] h-[90px] rounded-full"
                          src={Model.src}
                          alt="model image"
                          height={100}
                          width={100}
                        />
                      </div>
                      <p className="custom-text text-black text-[16px] font-[500] md:text-[1.20rem] p-0 mt-[22px] lg:mt-[15px]">
                        Model
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              <div
                onClick={handleExplorerClick}
                className="radio-container h-full w-full"
              >
                <input
                  type="radio"
                  id="explorer"
                  value="explorer"
                  className="hidden-input hidden"
                  checked={account === "explorer"}
                />
                <label
                  htmlFor="explorer"
                  className="custom-radio  w-full rounded-[20px] md:rounded-[28px]"
                >
                  <div
                    className={`h-full border ${
                      account === "explorer" ? "border-[0px]" : "border-text"
                    } rounded-[1.75rem] md:rounded-[1.75rem] md:px-`}
                  >
                    <div className="py-[1.55rem] lg:py-[1.20rem] flex  flex-col items-center justify-between h-full">
                      <div>
                        <Image
                          className="lg:w-[90px] md:w-[120px] w-[90px] lg:h-[90px] md:h-[120px] h-[90px] rounded-full"
                          src={Explorer}
                          alt="explorer image"
                          height={100}
                          width={100}
                        />
                      </div>
                      <h4 className="custom-text  text-black text-[16px] font-[500] md:text-[1.20rem] p-0 mt-[22px] lg:mt-[15px]">
                        Explorer
                      </h4>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <p className="md:mt-[2rem] mt-[1.94rem] text-black text-center md:text-[1rem] text-[1rem] ">
              Or would you prefer an{" "}
              <span className="text-base2">agency account?</span>
            </p>
            <Button
              className={`w-full px-5 py-3 md:p-0 rounded-full md:mt-[0.50rem] mt-[1rem] lg:mb-0 md:mb-5  text-black font-normal text-sm h-8 ${
                !isDisabled
                  ? "bg-lightgray cursor-not-allowed text-gray"
                  : "bg-tertiary hover:bg-tertiaryHover"
              }`}
              disabled={!isDisabled}
              onClick={handleNext}
              type="submit"
            >
              Next
            </Button>
            <div className="mt-[20px] mb-2 md:mt-[20px]  md:mb-[10px] hidden justify-center gap-[12px]">
              <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-white "></div>
              <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-white "></div>
            </div>
          </div>
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
          onYesClick={handleGenderChangeToFemale}
          question="Must be female"
          button1Text="Yes, I am"
          button2Text="No, cancel"
          button1Style={button1Style}
          button2Style={button2Style}
        />
      </div>
    </div>
  );
};

export default Page;
