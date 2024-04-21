"use client";


import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "@/src/schema/auth/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import { CancelIcon } from "@/src/components/svgs";
import { Input } from "@/src/components/ui/input";
import { onSubmitError } from "@/src/lib/utils";

const LoginForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onHandleSubmit = async (data: any) => {
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

  return (
    <div className="w-full md:w-4/5 md:mx-auto lg:mx-0 lg:ml-auto px-4 lg:px-0 lg:my-3">
      <div className="w-full ">
        <div className="bg-white rounded-t-[32px] w-full lg:px-[2rem] md:px-[4%] px-[1rem] pt-4 pb-2">
          <div className="grid grid-cols-3 border-b-[1px] border-[#EFD378] items-center pb-4">
            <div></div>
            <div className="flex justify-center">
              <Image className="w-[63px] " src={logo} alt="logo" />
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
          <h4 className="text-[16px] 2xl:text-[1.13em] font-[400] leading-[22px] mt-[30px] md:mt-[1.31em] text-[#44464A] mx-auto text-center w-4/5 mb-[1.31em]">
            Log in to to see your favorite content creator
          </h4>

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
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your Password"
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
              <Button
                className="h-8 text-xs"
                loading={isPending}
                variant="yellow"
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Form>

          <div className="flex justify-center w-full">
            <Button
              variant="ghost"
              className="text-xs font-[400] h-10 text-custom-yellow2 mx-auto hover:text-custom-yellow2"
            >
              Sign up as a creator
            </Button>
          </div>
        </div>

        <div className="p-[4%] text-[1.50rem] md:p-[1.25rem] bg-white rounded-b-[24px] mt-[4px] h-[58px] md:h-[1.94em] flex items-center justify-center">
          <h4 className="text-[#6C6D71] font-[500] text-xs ">
            Don’t have an account?
            <Link href="/sign-up">
              <span className="text-custom-yellow2"> Sign up</span>{" "}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
