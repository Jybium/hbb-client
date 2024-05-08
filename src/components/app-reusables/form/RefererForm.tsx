"use client";

import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/src/components/ui/input";
import { useRouter } from "next/navigation";
import { refererSchema } from "@/src/schema/auth/referer";
import { z } from "zod";

const RefererForm = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof refererSchema>>({
    resolver: zodResolver(refererSchema),
    defaultValues: {
      referer_code: "",
    },
  });

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (name === "referer_code" && value.referer_code) {
        setShowDetail(value.referer_code.length >= 6);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch]);

  const onHandleSubmit = async (data: z.infer<typeof refererSchema>) => {
    // console.log(data);
    toast.success("Registeration successful");

    startTransition(async () => {
      try {
        router.push("/model/sign-up");
      } catch (error: any) {
        console.error("Error logging in:", error.message);

        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  const { formState } = form;
  const { isValid } = formState;

  return (
    <>
      <div className="py-6 md:py-10 lg:py-6 text-darkGray flex flex-col h-full">
        <div className="md:text-center">
          <p className="font-medium text-lg md:text-2xl mb-5 lg:mb-4">
            Are you model or explorer?
          </p>

          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Non interdum senectus
            habitant commodo morbi. Sed quisque enim arcu habitant eu nibh risus
            neque proin. Dui nunc vulputate .
          </p>
        </div>

        <div className="h-full mt-5 md:mt-10 lg:mt-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleSubmit)}
              className="h-full flex justify-between flex-col gap-2"
            >
              <FormField
                control={form.control}
                name="referer_code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-textGray2 text-xs mb-2 font-medium">
                      Referer code
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a Valid referer code"
                        className="border-borderGray py-12.5px rounded-lg px-5 placeholder:text-placeholderText2 text-sm w-full h-fit focus:border-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="">
                {showDetail && (
                  <div className="md:w-3/5 w-full border-b border-[#8FC0D3] mx-auto lg:pb-2 pb-3">
                    <div className="flex md:flex-col md:items-center gap-2 md:gap-4 lg:gap-2">
                      <div className="md:w-16 w-[52px] lg:w-[52px] md:h-16 h-[52px] lg:h-[52px] rounded-full bg-gray"></div>
                      <div className="">
                        <p className="text-black font-medium md:text-xl lg:text-base mb-2 lg:mb-0 pl-[14px] md:pl-0">
                          Sassy L, <span className="font-light">24</span>
                        </p>
                        <div className="flex items-center gap-1">
                          <Image
                            src={"/icons/location.svg"}
                            alt=""
                            width={20}
                            height={20}
                          />
                          <p className="font-light text-xs text-black">
                            Washington D.C
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  className={`w-full px-5 py-3 rounded-full text-black font-normal text-sm 
                  ${showDetail ? "mt-10 lg:mt-2" : "mt-10"} 
                  ${
                    !isValid
                      ? "bg-lightgray cursor-not-allowed text-gray"
                      : "bg-tertiary hover:bg-tertiaryHover"
                  }`}
                  disabled={!isValid}
                  loading={isPending}
                  variant="yellow"
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RefererForm;
