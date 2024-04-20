import React from "react";

import logo from "../../../../public/assests/logo.svg"
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="lg:flex grid items-center content-center justify-center">
      <div className=" lg:grid grid-cols-2 flex items-center content-center justify-center px-[2%] m:px-[20%] lg:px-[4%]  2xl:px-[6%]  py-[50px] md:py-[30px] md:h-[750px] xl:h-[757px]">
        <div className="w-full xl:w-[565px] mx-auto">
          <div className="bg-white md:rounded-t-[32px] rounded-t-[24px]  p-[4%] md:p-[32px] shadow-xl">
            <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378]  pb-[25px] md:pb-[0px] items-center">
              <div></div>
              <div className="flex justify-center">
                <Image className="w-[63px] md:w-[90px]" src={logo} alt="logo" />
              </div>
              <div className="flex justify-end">
                <Link href="/">
                  <button className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center">
                    <X className="h-[16px] w-[16px]" size={30} color="black" />
                  </button>
                </Link>
              </div>
            </div>
            <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[30px] md:mt-[30px] text-[#44464A] md:leading-[30px] md:w-[80%]">
              Log in to to see your favorite content creator
            </h4>
            <form className="mt-[20px] md:mt-[50px]">
              <div>
                <h4 className="text-[#535353] font-[500] text-[12px] mb-[8px] ">
                  Email address
                </h4>
                <input
                  className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[9px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px]"
                  placeholder="Enter"
                  type="email"
                />
              </div>

              <div className="mt-[16px] md:mt-[20px]">
                <h4 className="text-[#535353] font-[500] text-[12px] mb-[8px] ">
                  Password
                </h4>
                <input
                  className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[9px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px]"
                  placeholder="Enter"
                  type="password"
                />
              </div>
              <div className="flex justify-end mt-[8px] md:mt-[8px]">
                <Link href="/forgot-password">
                  <button className="text-[12px] font-[500] text-[#E688A3]">
                    Forgot password?
                  </button>
                </Link>
              </div>
              <button className="bg-tertiary w-full px-[20px] py-[12px] rounded-[32px] mt-[20px] md:mt-[60px] lg:mt-[80px] text-black text-[16px] md:text-[18px] font-[400] hover:bg-tertiaryHover">
                Log in
              </button>
              <div className="flex justify-center mb-[5px] md:mb-5">
                <button className="text-[16px] md:text-[18px] font-[400] text-tertiary mt-[12px]">
                  Sign up as a creator
                </button>
              </div>
            </form>
          </div>
          <div className="p-[4%] md:p-[32px] bg-white rounded-b-[24px] mt-[4px] h-[58px] md:h-[60px] flex items-center justify-center">
            <h4 className="text-[#6C6D71] font-[500] text-[14px] md:text-[18px]">
              Don’t have an account?
              <Link href="/sign-up">
                <span className="text-tertiary"> Sign up</span>{" "}
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
