"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Modal from "@/components/app-reusables/Modal";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Logo from "../../../public/assests/logo.svg";
import Model from "../../../public/assests/model.png";
import Explorer from "../../../public/assests/explorer.png";
import Image from "next/image";
import {
  Password,
  Text,
} from "@/components/app-reusables/InputField";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

const FormSchema = z
  .object({
    username: z
      .string() // Base type as string
      .min(4, { message: "The username must be 4 characters or more" })
      .max(10, { message: "The username must be 10 characters or less" })
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "The username must contain only letters, numbers and underscore (_)"
      ),
    email: z.string().email({
      message: "Invalid email. Please enter a valid email address",
    }),
    gender: z.string(),
    accountType: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type FormInput = z.infer<typeof FormSchema>;

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      accountType: "",
    },
    reValidateMode: "onBlur",
  });

  
   const [gender, setGender] = useState("");
   const [formValues, setFormValues] = useState({
     username: "",
     email: "",
     password: "",
     confirmPassword: "",
     gender: "male",
     accountType: "",
   });
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);

  const formTiles = ["Account Type", "Details", "Confirmation Code"];

  const handleModalClose = (changeGenderToMale = false) => {
    if (changeGenderToMale) {
      setValue("gender", "male");
    setGender("male");

    }
    setShowModal(false);
  };

  const handleModelClick = () => {
    setShowModal(true);
  };

  const handleGenderChangeToFemale = () => {
    setValue("gender", "female");
    setGender("female")
    setValue("accountType", "model");

    setShowModal(false);
  };

  const handleExplorerClick = () => {
    setValue("gender", "male");
    setGender("male");
    setValue("accountType", "explorer");
  };

  useEffect(() => {
    // Call your getValues function here and update formValues state
    const newFormValues = getValues();
    setFormValues(newFormValues);
  }, [gender, formValues]); 

  const clearErrors = () => {
    const filteredErrorKeys = Object.keys(errors).filter(
      (fieldName) => fieldName !== "root"
    ) as Array<keyof FormInput>; // Explicitly specify the type of fieldName

    filteredErrorKeys.forEach((fieldName) => {
      setValue(fieldName, "");
    });
  };

  const handleNext = () => {
 if (page === 1) {
   router.push("/log-in")
   setTimeout(() => {
     setShowModal(true);
   }, 10000); // Adjust the delay as needed
   return;
 }

    formValues.gender &&
      formValues.accountType &&
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        if (nextPage < formTiles.length) {
          // Clear errors when moving to the next page
          clearErrors();
        }
        return nextPage;
      });
  };

  const isNextDisabled1 =
    (formValues.accountType === "model" && formValues.gender === "male") ||
    formValues.accountType === "";

  const isNextDisabled2 =
    formValues.email === "" ||
    formValues.password === "" ||
    formValues.confirmPassword === "";

  const submit = (data: FormInput) => {
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
    <div className="w-[100%]">
      <div className="w-full mx-auto h-full ">
        <div className="bg-white md:rounded-[32px] rounded-[24px] px-[4%] py-[25px] lg:p-[32px] my-3 shadow-xl w-full">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378]  pb-[10px] md:pb-[7px] items-center w-full">
            <div className="flex justify-start">
              {page !== 0 ? (
                <button
                  onClick={() => setPage(page - 1)}
                  className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center"
                >
                  <ChevronLeft
                    // className=" w-[9.5px]"
                    color="black"
                    size={20}
                  />
                </button>
              ) : (
                <></>
              )}
            </div>
            <div className="flex justify-center">
              <Image
                className="w-[63px] md:w-[80px] hidden md:block"
                width={63}
                height={63}
                src={Logo}
                alt="logo"
              />
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <button className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[45px] h-[45px] flex justify-center items-center">
                  <X className="h-[16px] w-[16px]" color="black" size={30} />
                </button>
              </Link>
            </div>
          </div>
          {page === 0 && (
            <div className="md:px-5 lg:px-4">
              <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] md:mt-[40px] mt-[30px] text-[#44464A] md:leading-[30px] text-center ">
                Are you model or explorer?
              </h4>
              <div className="mt-[40px] md:mt-[40px] grid grid-cols-2 gap-[16px] md:gap-[32px] xl:mx-[15px]">
                <div
                  onClick={handleModelClick}
                  className="radio-container h-full w-full"
                >
                  <input
                    type="radio"
                    id="model"
                    value="model"
                    className="hidden-input hidden"
                    {...register("accountType", { required: true })}
                    checked={formValues.accountType === "model"}
                  />
                  <label
                    htmlFor="model"
                    className="custom-radio md:h-[279px] h-[188px] w-full rounded-[20px] md:rounded-[28px]"
                  >
                    <div
                      className={`h-full border ${
                        formValues.accountType === "model"
                          ? "border-[0px]"
                          : "border-text"
                      } rounded-[20px] md:rounded-[28px] md:px-7`}
                    >
                      <div className="py-[28px] flex flex-col items-center justify-between h-full">
                        <div className="">
                          <Image
                            className="md:w-[160px] w-[90px] md:h-[160px] h-[90px] rounded-full"
                            src={Model.src}
                            alt="model image"
                            height={160}
                            width={160}
                          />
                        </div>
                        <h4 className="custom-text  text-black text-[16px] font-[500] md:text-[24px] ">
                          Model
                        </h4>
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
                    {...register("accountType", { required: true })}
                    checked={formValues.accountType === "explorer"}
                  />
                  <label
                    htmlFor="explorer"
                    className="custom-radio md:h-[279px] h-[188px] w-full rounded-[20px] md:rounded-[28px]"
                  >
                    <div
                      className={`h-full border ${
                        formValues.accountType === "explorer"
                          ? "border-[0px]"
                          : "border-text"
                      } rounded-[20px] md:rounded-[28px] md:px-7`}
                    >
                      <div className="py-[28px] flex flex-col items-center justify-between h-full">
                        <div>
                          <Image
                            className="md:w-[160px] w-[90px] md:h-[160px] h-[90px] rounded-full"
                            src={Explorer}
                            alt="explorer image"
                            height={160}
                            width={160}
                          />
                        </div>
                        <h4 className="custom-text  text-black text-[16px] font-[500] md:text-[24px] ">
                          Explorer
                        </h4>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              {page !== Object.keys(formValues).length - 0 && (
                <div>
                  {page !== formTiles.length - 1 && (
                    <button
                      onClick={handleNext}
                      className={`w-full px-[20px] py-[12px] rounded-[32px] mt-[50px] md:mt-[80px] text-black text-[16px] md:text-[18px] font-[400] ${
                        isNextDisabled1
                          ? "bg-[#ECECEC] cursor-not-allowed text-[#9E9E9E]"
                          : "bg-tertiary hover:bg-tertiaryHover"
                      }`}
                      disabled={isNextDisabled1}
                    >
                      Next
                    </button>
                  )}
                </div>
              )}
              <div className="mt-[20px] mb-2 md:mt-[20px]  md:mb-[20px] flex justify-center gap-[12px]">
                <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-white "></div>
                <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-white "></div>
              </div>
            </div>
          )}

          {page === 1 && (
            <div className="bg-white md:px-5 lg:px-4">
              <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[20px] md:mt-[30px] text-[#44464A] md:leading-[30px] text-center ">
                Sign up
              </h4>

              <form
                className="mt-[20px] md:mt-[20px]"
                onSubmit={handleSubmit(submit)}
              >
                <div className="w-full">
                  <Text
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    title="Email Address"
                    register={register}
                    error={errors}
                  />
                </div>
                <div className="mt-[16px] md:mt-[20px]">
                  <Password
                    register={register}
                    error={errors}
                    placeholder="Enter your password"
                    name="password"
                    title="Password"
                  />
                </div>
                <div className="mt-[16px] md:mt-[20px]">
                  <Password
                    register={register}
                    error={errors}
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    title="Confirm New Password"
                  />
                </div>
                <div className="flex items-center mt-[16px]">
                  <div className="inline-flex items-center mr-[8px]">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="checkbox"
                    >
                      {/* <Checkbox
                        name="checkbox"
                        title="This field"
                        register={register}
                        error={errors}
                      /> */}
                      <input
                        type="checkbox"
                        name="checkbox"
                        id="checkbox"
                        className="before:content[''] peer relative h-[16px] w-[16px] cursor-pointer appearance-none rounded-[3px] border-[1px] border-[#BFBEB9] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary2 checked:bg-primary2 checked:before:bg-primary2 hover:before:opacity-10"
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <div>
                    <h4 className="font-[400] text-[11px] text-[#A5A5A5] leading-[16px]">
                      By signing up, you consent to adhere to our{" "}
                      <span className="text-base2 ">Terms of Service</span> and{" "}
                      <span className="text-base2">Privacy Policy</span>
                    </h4>
                  </div>
                </div>

                {page !== Object.keys(formValues).length - 0 && (
                  <div>
                    {page !== formTiles.length - 1 && (
                      <button
                        onClick={handleNext}
                        className={`w-full px-[20px] py-[12px] rounded-[32px] mt-[30px] xl:mt-[80px] text-black text-[16px] md:text-[18px] font-[400] ${
                          isNextDisabled2
                            ? "bg-[#ECECEC] cursor-not-allowed text-[#9E9E9E]"
                            : "bg-tertiary hover:bg-tertiaryHover"
                        }`}
                        disabled={isNextDisabled2}
                      >
                        Next
                      </button>
                    )}
                  </div>
                )}
                <div className="mt-[20px] md:mb-[20px] flex justify-center gap-[12px]">
                  <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-primary"></div>
                  <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-white"></div>
                </div>
              </form>
            </div>
          )}
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
