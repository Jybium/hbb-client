"use client"


import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import Logo from "@/public/assests/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CancelIcon } from "@/src/components/svgs";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/src/schema/auth/resetPassword";
import { toast } from "sonner";
import { Input } from "@/src/components/ui/input";
import { onSubmitError } from "@/src/lib/utils";








const Page= () => {
 const [isPending, startTransition] = React.useTransition();
 const router = useRouter();
 const form = useForm({
   resolver: zodResolver(resetPasswordSchema),
   defaultValues: {
     password: "",
     confirmPassword: "",
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


  const isSubmitDisabled = values.password === "" || values.confirmPassword === "";

  return (
    <div className="flex items-center  px-[5%] md:px-[4%] lg:p-0 2xl:px-[6%] py-[50px] md:py-[0px] h-full w-full md:w-4/5 md:mx-auto lg:mx-0 lg:w-full px- lg:px-0 lg:my-3 ml-auto">
      <div className="w-full h-full justify-center content-center">
        <div className="bg-white md:rounded-[32px] rounded-[24px] p-[1rem] md:p-[2.25rem] md:pt-[20px] lg:p-[2em]  shadow-xl h-full flex flex-col w-full">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378] items-center pb-4">
            <div className="flex justify-start"></div>
            <div className="flex justify-center">
              <Image className="w-[63px] " src={Logo} alt="logo" />
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="bg-borderWhite hover:bg-gray-200 rounded-[9px] h-8 px-2"
                >
                  <CancelIcon className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[30px] md:mt-[20px] text-darkGray md:leading-[30px] text-center md:text-start">
            Create new password
          </h4>

          <div className="mt-[30px] md:mt-[30px] w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                  onSubmitError(errors);
                })}
                className="grid gap-2"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm new password</FormLabel>
                      <FormControl>
                        <Input placeholder="Confirm your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  className={`w-full px-[20px] py-[12px] rounded-[32px] md:mb-14 mb-5 mt-[30px] md:mt-[80px] text-black text-[16px] md:text-[18px] h-8 text-xs font-[400] ${
                    isSubmitDisabled
                      ? "bg-[#ECECEC] cursor-not-allowed text-[#9E9E9E]"
                      : "bg-tertiary hover:bg-tertiaryHover"
                  }`}
                  loading={isPending}
                  variant="yellow"
                  disabled={isSubmitDisabled}
                  type="submit"
                >
                  Confirm
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
