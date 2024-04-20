"use client"


import React, { ChangeEvent, useState } from "react";

import Logo from "../../../../public/assests/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const Page= () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Add your password reset logic here
  };

  const isSubmitDisabled = password === "" || confirmPassword === "";

  return (
    <div className=" xl:grid grid-cols-2 flex items-center px-[4%] lg:px-[4%] md:px-[32px]  2xl:px-[6%]  py-[50px] md:py-[50px] h-full">
      <div className="w-full md:w-[565px] mx-auto h-full">
        <div className="bg-white md:rounded-[32px] rounded-[24px]  p-[4%] md:p-[32px] md:pt-[20px] shadow-xl h-full flex flex-col">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378]  pb-[25px]  items-center">
            <div></div>
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
          <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[30px] md:mt-[20px] text-[#44464A] md:leading-[30px] text-center md:text-start">
            Create new password
          </h4>

          <form className="mt-[30px] md:mt-[30px]  grid md:gap-5 gap-4 ">
            <div>
              <h4 className="text-[#535353]  font-[500] text-[12px] mb-[8px] ">
                New password
              </h4>

              <input
                className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[12px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px]"
                placeholder="Enter"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="">
              <h4 className="text-[#535353]  font-[500] text-[12px] mb-[8px] ">
                Confirm new password
              </h4>

              <input
                className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[12px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px]"
                placeholder="Enter"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="mt-auto">
            <button
              className={`w-full px-[20px] py-[12px] rounded-[32px] md:mb-20 mb-5 mt-[30px] md:mt-[80px] text-black text-[16px] md:text-[18px] font-[400] ${
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
        </div>
      </div>
    </div>
  );
};

export default Page;
