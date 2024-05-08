"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/src/components/ui/input";
import { useRouter } from "next/navigation";
import { z } from "zod";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onHandleSubmit = async (data: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      try {
        router.push("/dashboard/model/profile");
      } catch (error: any) {
        console.error("Error logging in:", error.message);
        // Handle any errors here, such as displaying an error message to the user
        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  const { formState } = form;
  const { isValid } = formState;

  return (
    <div className="py-6 md:py-10 lg:py-6 text-darkGray flex flex-col h-full md:px-6 lg:px-0">
      <div className="h-full overflow-y-scroll no-scrollbar">
        <p className="font-medium text-lg md:text-2xl lg:text-lg text-center mb-6 lg:mb-3">
          Log in to to see your favorite content creator
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onHandleSubmit)}
            className="space-y-5 lg:space-y-3 md:space-y-72"
          >
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

              <div className="">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-textGray2 text-xs mb-2 font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your Password"
                          className="border-borderGray py-12.5px rounded-lg px-5 placeholder:text-placeholderText2 text-sm w-full h-fit focus:border-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end mt-2">
                  <Link
                    href="/forgot-password"
                    className="text-xs font-medium text-base2"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
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
                Next
              </Button>

              <div className="text-center mt-1">
                <Link
                  href="/model/sign-up"
                  className="font-medium text-tertiary"
                >
                  Sign up as a creator
                </Link>
              </div>

              <div className="w-full h-[2px] bg-base rounded-lg my-5 lg:my-4" />

              <p className="font-medium text-sm mb-3">
                Don’t have an account?{" "}
                <Link href="/sign-up" className="text-tertiary">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
