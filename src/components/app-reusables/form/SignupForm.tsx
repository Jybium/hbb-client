"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
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
import { Input } from "@/src/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { signUpSchema } from "@/src/schema/auth/signup";
import { Checkbox } from "../../ui/checkbox";
import { z } from "zod";

const SignupForm = () => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const segment = pathname.split("/")[1];

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      consent: false,
    },
  });

  const onHandleSubmit = async (data: z.infer<typeof signUpSchema>) => {
    // console.log(data);

    toast.success("Registeration successful");

    startTransition(async () => {
      try {
        router.push(`/${segment}/confirm`);
      } catch (error: any) {
        console.error("Error logging in:", error.message);

        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  const { formState } = form;
  const { isValid } = formState;

  return (
    <div className="py-6 md:py-10 lg:py-4 text-darkGray flex flex-col h-full md:px-6 lg:px-0">
      <p className="font-medium text-lg md:text-2xl text-center">Sign up</p>

      <div className="h-full mt-6 lg:mt-3 overflow-y-scroll no-scrollbar">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onHandleSubmit)}>
            <div className="space-y-3 md:space-y-5 lg:space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-textGray2 text-xs mb-2 font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a Valid Email"
                        className="border-borderGray py-12.5px rounded-lg px-5 placeholder:text-placeholderText2 text-sm w-full h-fit focus:border-base"
                        {...field}
                      />
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
                    <FormLabel className="text-textGray2 text-xs mb-2 font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        className="border-borderGray py-12.5px rounded-lg px-5 placeholder:text-placeholderText2 text-sm w-full h-fit focus:border-base"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="my-2">
                      <FormLabel className="text-textGray2 text-xs mb-2 font-medium">
                        Confirm password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm your password"
                          className="border-borderGray py-12.5px rounded-lg px-5 placeholder:text-placeholderText2 text-sm w-full h-fit focus:border-base"
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
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="mt-4 lg:mt-2">
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="consent"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-borderGray data-[state=checked]:bg-base2 data-[state=checked]:border-none data-[state=checked]:text-white"
                          />
                          <div className="grid gap-1.5 leading-none">
                            <FormLabel
                              htmlFor="consent"
                              className="text-[11px] text-[#A5A5A5]"
                            >
                              By signing up, you consent to adhere to our{" "}
                              <span className="text-base2 ">
                                <Link href={"/terms-of-use"}>
                                  Terms of Service
                                </Link>
                              </span>{" "}
                              and{" "}
                              <span className="text-base2">
                                <Link href="/privacy-policy">
                                  Privacy Policy
                                </Link>
                              </span>
                            </FormLabel>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mt-5 md:mt-20 lg:mt-0">
              <Button
                className={`w-full px-5 py-3 rounded-full mt-8 text-black font-normal text-sm ${
                  !isValid
                    ? "bg-lightgray text-gray"
                    : "bg-tertiary hover:bg-tertiaryHover"
                }
              `}
                // disabled={!isValid}
                loading={isPending}
                variant="yellow"
                type="submit"
              >
                Sign up
              </Button>

              <div className="mt-5 lg:mt-3 flex justify-center gap-[12px]">
                <div className="w-[10px] h-[10px] border border-base rounded-full bg-primary"></div>
                <div className="w-[10px] h-[10px] border border-base rounded-full bg-white"></div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
