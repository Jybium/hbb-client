"use client"

import React, { useState, useRef, LegacyRef } from "react";
import Logo from "@/public/assests/logo.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, X } from "lucide-react";

const Page = () => {
  const navigate = useRouter();
  const handleGoBack = () => {
    navigate.back();
  };

  const [inputs, setInputs] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(4).fill(null));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (value.length > 1) return;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < inputs.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

  const previousValue = inputs[index]; // Store the previous value before the change


  // Check if the length of the input value becomes zero after a change
  if (previousValue.length === 1 && value.length === 0 && index > 0) {
    inputRefs.current[index - 1]?.focus();
  }


    if (index === inputs.length - 1 && value) {
      submit();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .slice(0, inputs.length);
    const newInputs = [...inputs];
    data.forEach((value, index) => {
      newInputs[index] = value;
    });
    setInputs(newInputs);
    submit();
  };

  const submit = () => {
    console.log("OTP:", inputs.join(""));
  };

  const isSubmitDisabled = inputs.join("").length !== 4;

  return (
    <div className=" xl:gri grid-cols-2 flex items-center lg:justify-end px-[4%] m:px-[20%] lg:pl-[4%] 2xl:px-[6%] md:py-[30px] py-[50px] h-full w-full ml-auto lg:w-[35.31rem">
      <div className="w-full h-full">
        <div className="bg-white md:rounded-[32px] rounded-[24px]  p-[1rem] md:p-[2.25rem] shadow-xl h-full flex flex-col">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378]  pb-[20px] items-center">
            <div className="flex justify-start">
              <button
                onClick={handleGoBack}
                className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center"
              >
                <ChevronLeft
                  // className=" w-[9.5px]"
                  color="black"
                  size={20}
                />
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                className="w-[63px] md:w-[80px]"
                width={63}
                height={80}
                src={Logo}
                alt="logo"
              />
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <button className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center">
                  <X className="h-[16px] w-[16px]" color="black" size={30} />
                </button>
              </Link>
            </div>
          </div>
          <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] md:mt-[30px] mt-[30px] text-[#44464A] md:leading-[30px] text-center ">
            Enter confirmation code
          </h4>
          <h4 className="text-[14px] md:text-[16px] font-[400] text-[#44464A] md:mt-[12px] mt-[12px] text-center ">
            Enter code sent to Honeybunnybun@gmail.com{" "}
            <span className="cursor-pointer text-base2 font-[700]">Resend</span>
          </h4>
          <form className="mt-[40px] lg:mt-[50px] ">
            <div className="flex justify-center max-w-[258px] h-[56px] mx-auto md:h-[64px]">
              <div className="items-center space-x-[10px] border-[1px] border-[#BFBEB9] w-full flex justify-center rounded-[32px]">
                {inputs.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      if (el) {
                        inputRefs.current[index] = el;
                      }
                    }}
                    type="number"
                    className="w-[40px] h-[40px]  text-center border-b-[1px] border-[#BFBEB9]  focus:outline-none  font-[500] focus:border-primary2 text-[#44464A] text-[20px] md:text-[24px] placeholder:font-[500] placeholder:text-gray-300"
                    maxLength={1}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, index)
                    }
                    onPaste={handlePaste}
                  />
                ))}
              </div>
            </div>
          </form>
          <div className="mt-auto">
            <button
              className={`w-full px-[20px] py-[12px] rounded-[32px] mt-[70px] md:mt-[80px] text-black text-[16px] md:text-[18px] font-[400] ${
                isSubmitDisabled
                  ? "bg-[#ECECEC] cursor-not-allowed text-[#9E9E9E]"
                  : "bg-tertiary hover:bg-tertiaryHover"
              }`}
              type="submit"
              disabled={isSubmitDisabled}
            >
              Confirm
            </button>
          </div>
          <div className="mt-[20px] md:mb-[2em] mb-[1em] flex justify-center gap-[12px]">
            <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-base"></div>
            <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-base"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
