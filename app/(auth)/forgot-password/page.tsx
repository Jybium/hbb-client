"use client"


import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Logo from "../../../public/assests/logo.svg";
import { Text } from "@/components/app-reusables/InputField";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/components/app-reusables/Modal";


const FormSchema = z
  .object({
 
    email: z.string().email({
      message: "Invalid email. Please enter a valid email address",
    }),
  });

export type FormInput = z.infer<typeof FormSchema>;

type EmailFormValues = {
  email: string;
};

  const button1Style = {
    bgColor: "bg-[#4EB246]",
    textColor: "text-white",
    hoverBgColor: "hover:bg-[#459937]",
    border: ""
  };

  const button2Style = {
    bgColor: "bg-white",
    textColor: "text-[#4EB246]",
    hoverBgColor: "hover:bg-[#FF7A7A]",
    border: "#4EB246",
  };

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useRouter();
    const {
      register,
      handleSubmit,
      getValues,
      setValue,
      formState: { errors },
    } = useForm<FormInput>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
      },
      reValidateMode: "onBlur",
    });

  const handleGoBack = () => {
    navigate.back();
  };
  return (
    <div className=" xl:grid grid-cols-2 flex items-center px-[5%] md:px-[4%] lg:px-[4%]  2xl:px-[6%] py-[50px] md:py-[30px] h-full">
      <div className="w-full md:w-[565px] mx-auto h-full">
        <div className="bg-white md:rounded-t-[32px] rounded-t-[24px]  p-[4%] md:p-[26px] shadow-xl h-full flex flex-col">
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
          <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[30px] text-[#44464A] md:leading-[30px] text-center md:text-start">
            Forgot password?
          </h4>
          <h4 className="text-[14px] md:text-[16px] font-[400] text-[#44464A] mt-[12px] text-center md:text-start">
            Enter email address to reset your password.
          </h4>
          <form className="mt-[40px] md:mt-[50px]   ">
            <div>
              <label className="text-[#535353]  font-[500] text-[12px] mb-[8px] ">
                Email address
              </label>

              <input
                className="w-full border-[1px] border-[#BFBEB9] rounded-[8px] px-[12px] py-[12px] md:px-[20px] md:py-[12px] outline-primary placeholder:text-[#C1C1C1] placeholder:text-[14px] placeholder:font-[400] text-[14px]"
                placeholder="Enter"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
          </form>
          <div className="mt-auto">
            <button className="bg-tertiary w-full px-[20px] py-[12px] rounded-[32px] mt-[70px] md:mt-[50px] text-black text-[16px] md:text-[18px] font-[400] hover:bg-tertiaryHover" onClick={()=> setShowModal(true)}>
              Send
            </button>
          </div>
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
      <div
        className={`top-0 left-1/2 transform -translate-x-1/2  absolute overflow-y-hidden z-40  w-full h-full  ${
          showModal ? "top-1/2 transform -translate-y-1/2" : "-translate-y-full"
        } ease-in-out duration-500`}
      >
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onYesClick={()=>setShowModal(false)}
          question="Reset mail sent"
          button1Text="Got it!"
          button2Text="send again"
          button1Style={button1Style}
          button2Style={button2Style}
        />
      </div>
    </div>
  );
};

export default Page;
