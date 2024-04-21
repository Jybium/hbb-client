"use client"


import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/src/components/app-reusables/Modal";
import { forgotPasswordSchema } from "@/src/schema/auth/forgotPassword";
import { toast } from "sonner";
import { onSubmitError } from "@/src/lib/utils";
import { Input } from "@/src/components/ui/input";
import { CancelIcon } from "@/src/components/svgs";




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
    const [isPending, startTransition] = React.useTransition();
    const router = useRouter();
    const form = useForm({
      resolver: zodResolver(forgotPasswordSchema),
      defaultValues: {
        email: "",
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


  const handleGoBack = () => {
    router.back();
  };


  return (
    <div className="flex items-center  px-[5%] md:px-[4%] lg:pl-[4%] lg:p-0 2xl:px-[6%] py-[50px] md:py-[0px] h-full w-full md:w-4/5 md:mx-auto lg:mx-0 lg:w-full px- lg:px-0 lg:my-3 ml-auto">
      <div className="w-full h-full justify-center content-center">
        <div className="bg-white md:rounded-t-[32px] rounded-t-[24px] rounded-b-[24px] md:rounded-b-[0px]  p-[4%] md:p-[26px] shadow-xl h-full flex flex-col">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378] items-center pb-4">
            <div className="flex justify-start">
              <button
                onClick={handleGoBack}
                className="bg-[#F7F6F3] hover:bg-gray-200 rounded-[9px] w-[48px] h-[48px] flex justify-center items-center"
              >
                <ChevronLeft
                 
                  color="black"
                  size={10}
                />
              </button>
            </div>
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

          <h4 className="text-[18px] md:text-[24px] font-[500] leading-[22px] mt-[30px] text-[#44464A] md:leading-[30px] text-center">
            Forgot password?
          </h4>
          <h4 className="text-[14px] md:text-[16px] font-[400] text-[#44464A] mt-[12px] text-center">
            Enter email address to reset your password.
          </h4>

          <div className="mt-[40px] md:mt-[2.63rem]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                  onSubmitError(errors);
                })}
                className="grid gap-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter a Valid Email" {...field} className=""/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  className="bg-tertiary w-full px-[20px] py-[12px] rounded-[32px] mt-[70px] md:mt-[50px] text-black text-[16px] md:text-[18px] font-[400] hover:bg-tertiaryHover h-8 text-xs"
                  onClick={() => setShowModal(true)}
                  loading={isPending}
                  variant="yellow"
                  type="submit"
                >
                 Send
                </Button>
              </form>
            </Form>
          </div>
          
        </div>
        <div className="p-[4%] text-[1.50rem] md:p-[1.25rem] bg-white rounded-b-[24px] mt-[4px] hidden h-[58px] md:h-[1.94em] md:flex items-center justify-center">
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
          onYesClick={() => setShowModal(false)}
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
