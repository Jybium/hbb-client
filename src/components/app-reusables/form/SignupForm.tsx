"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Modal from "@/src/components/app-reusables/Modal";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import Logo from "@/public/assests/logo.svg";
import { CancelIcon } from "@/src/components/svgs";
import Image from "next/image";
import { Input } from "@/src/components/ui/input";
import { onSubmitError } from "@/src/lib/utils";
import { useRouter } from "next/navigation";
import { signUpSchema } from "@/src/schema/auth/signup";

const SignupForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const values = form.getValues();

  const onHandleSubmit = async (data: any) => {
    toast.success("Registeration successful");
    console.log("Registeration successful");
    router.push("/log-in");

    startTransition(async () => {
      try {
        //   code to hit backend
      } catch (error: any) {
        console.error("Error logging in:", error.message);
        // Handle any errors here, such as displaying an error message to the user
        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  const isDisabled =
    values.email !== "" && values.password !== "" && values.phoneNumber !== "";

  return (
    <div className="lg:w-2/3 grid justify-end ml-auto px-4 lg:px-0 lg:my-3">
      <div className="w-full">
        <div className="bg-white rounded-[32px] w-full lg:px-[2rem] md:px-[4%] px-[1rem] pt-4 pb-2">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378] items-center pb-4">
            <div></div>
            <div className="flex justify-center">
              <Image className="w-[63px] " src={Logo} alt="logo" />
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] h-8 px-2"
                >
                  <CancelIcon className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white md:px- lg:px-">
            <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[20px] md:mt-[20px] text-[#44464A] md:leading-[30px] text-center ">
              Sign up
            </h4>

            <form
              className="mt-[20px] md:mt-[20px] gap-2"
              onSubmit={form.handleSubmit(onHandleSubmit, (errors: any) => {
                onSubmitError(errors);
              })}
            >
              <Form {...form}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a Valid Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="my-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your Phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end -mt-2 lg:mb-8">
                  <Link href="/forgot-password">
                    <button className="text-[10px] 2xl:text-xs font-[500] text-[#E688A3]">
                      Forgot password?
                    </button>
                  </Link>
                </div>

                <div className="flex items-center mt-[16px]">
                  <div className="inline-flex items-center mr-[8px]">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="checkbox"
                    >
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

                <Button
                  className={`w-full px-5 py-3 rounded-full mt-8 text-black font-normal text-sm h-8 ${
                    !isDisabled
                      ? "bg-lightgray cursor-not-allowed text-gray"
                      : "bg-tertiary hover:bg-tertiaryHover"
                  }`}
                  disabled={!isDisabled}
                  loading={isPending}
                  variant="yellow"
                  type="submit"
                >
                  Next
                </Button>
              </Form>
            </form>
            <div className="mt-[20px] md:mb-[10px] flex justify-center gap-[12px]">
              <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-primary"></div>
              <div className="w-[10px] h-[10px] border-[1px] border-base rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
