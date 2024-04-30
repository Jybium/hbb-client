"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { useRouter } from "next/navigation";
import { refererSchema } from "@/src/schema/auth/referer";

const RefererForm
 = () => {
  const [isPending, startTransition] = React.useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(refererSchema),
    defaultValues: {
      referer_code: "",
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
  const isDisabled = values.referer_code !== "";

  return (
    <div className="md:w-2/3 lg:w-[70%] w-full grid mx-auto lg:mx-0 lg:justify-end lg:ml-auto px-4 lg:px-0 lg:my-3">
      <div className="w-full ">
        <div className="bg-white rounded-[32px] w-full lg:px-[2rem] md:px-[4%] px-[1rem] pt-4 pb-2">
          <div className="grid grid-cols-3 border-b-[1px] border-tertiary items-center pb-4">
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
          <div className="md:text-center md:mb-14 mb-5">
            <h4 className="text-[16px] 2xl:text-[1.13em] font-[400] leading-[22px] mt-[30px] md:mt-[1.31em] text-text mx-auto mb-[1.31em]">
              Referer Code
            </h4>
            <p className="text-text text-sm">
              Lorem ipsum dolor sit amet consectetur. Non interdum senectus
              habitant commodo morbi. Sed quisque enim arcu habitant eu nibh
              risus neque proin. Dui nunc vulputate .
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                onSubmitError(errors);
              })}
              className="grid gap-2"
            >
              <FormField
                control={form.control}
                name="referer_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Refere code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a Valid referer code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className={`w-full px-5 py-3 rounded-full mt-8 mb-10 md:mt-15 lg:mb-10 text-black font-normal text-sm h-8 ${
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
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RefererForm
;
