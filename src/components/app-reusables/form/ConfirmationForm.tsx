"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import { confirmCodeSchema } from "@/src/schema/auth/signup";
import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/ui/input-otp";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";

const ConfirmationForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const router = useRouter();
  const pathname = usePathname();
  const segment = pathname.split("/")[1];

  const form = useForm<z.infer<typeof confirmCodeSchema>>({
    resolver: zodResolver(confirmCodeSchema),
    defaultValues: {
      pin: "",
    },
  });

  const pin = form.watch("pin");

  const onSubmit = (data: z.infer<typeof confirmCodeSchema>) => {
    toast.success("Registeration successful");

    // console.log(data);

    startTransition(async () => {
      try {
        router.push(`/dashboard/${segment}/profile`);
      } catch (error: any) {
        console.error("Error logging in:", error.message);

        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  return (
    <div className="py-6 md:py-10 lg:py-6 text-darkGray flex flex-col h-full md:px-6 lg:px-0">
      <div className="text-center">
        <h4 className="text-lg md:text-2xl font-medium mb-4">
          Enter confirmation code
        </h4>
        <p className="">
          Enter code sent to Honeybunnybun@gmail.com{" "}
          <span className="text-base2">Resend</span>
        </p>
      </div>

      <div className="md:mt-[60px] mt-9 h-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col h-full justify-between">
              <div className="mb-20 flex items-center justify-center">
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <>
                      <FormItem className="w-fit border border-borderGray rounded-[32px] px-6 py-[6px] text-black">
                        <FormControl>
                          <InputOTP maxLength={4} {...field}>
                            <InputOTPGroup className="flex gap-[10px]">
                              {Array.from({ length: 4 }, (_, index) => (
                                <InputOTPSlot
                                  key={index}
                                  index={index}
                                  className="border-b border-r-0 border-t-0 border-l-0 border-[#BFBEB9] text-xl text-darkGray cursor-text"
                                />
                              ))}
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
              </div>

              <div className="">
                <Button
                  type="submit"
                  variant="yellow"
                  disabled={!pin || pin.length < 4}
                  loading={isPending}
                  className={`w-full px-5 py-3 rounded-full mt-8 text-black font-normal text-sm ${
                    !pin
                      ? "bg-lightgray cursor-not-allowed text-gray"
                      : "bg-tertiary hover:bg-tertiaryHover"
                  }`}
                >
                  Submit
                </Button>

                <div className="mt-5 lg:mt-3 flex justify-center gap-[12px]">
                  <div className="w-[10px] h-[10px] border border-base rounded-full bg-primary"></div>
                  <div className="w-[10px] h-[10px] border border-base rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConfirmationForm;
