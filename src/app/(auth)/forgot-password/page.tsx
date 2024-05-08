"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@/src/components/app-reusables/Modal";
import { forgotPasswordSchema } from "@/src/schema/auth/forgotPassword";
import { toast } from "sonner";
import { Input } from "@/src/components/ui/input";
import {
  button1GreenStyle,
  button2GreenStyle,
} from "@/src/constants/buttonStyles";
import { z } from "zod";

const ForgotPasswordPage = () => {
  const [showModal, setShowModal] = useState(false);

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onHandleSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
    toast.success("Registeration successful");

    setShowModal(true);
  };

  const handleYesClick = () => {
    setShowModal(false);

    startTransition(async () => {
      try {
        router.push("/log-in");
      } catch (error: any) {
        console.error("Error logging in:", error.message);
        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  const handleGoBack = () => {
    router.back();
  };

  const { formState } = form;
  const { isValid } = formState;

  return (
    <>
      <div className="py-6 md:py-10 lg:py-4 text-darkGray flex flex-col h-full md:px-6 lg:px-0">
        <div className="text-center">
          <p className="font-medium text-lg md:text-2xl mb-3">
            Forgot password?
          </p>

          <p className="text-sm md:text-base">
            Enter email address to reset your password.
          </p>
        </div>

        <div className="h-full mt-6 lg:mt-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleSubmit)}
              className="flex flex-col h-full justify-between"
            >
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

      <div
        className={`top-0 left-1/2 transform -translate-x-1/2  absolute overflow-y-hidden z-40  w-full h-full  ${
          showModal ? "top-1/2 transform -translate-y-1/2" : "-translate-y-full"
        } ease-in-out duration-500`}
      >
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onYesClick={handleYesClick}
          question="Reset mail sent"
          button1Text="Got it!"
          button2Text="send again"
          button1Style={button1GreenStyle}
          button2Style={button2GreenStyle}
        />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
