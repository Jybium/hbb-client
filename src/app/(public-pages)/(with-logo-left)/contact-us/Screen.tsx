"use client"


import React from "react";
import { onSubmitError } from "@/src/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import contactUsSchema from "@/src/schema/contactUs";
import { Textarea } from "@/src/components/ui/textarea";

const Screen = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      subject: "",
    },
  });

  const onHandleSubmit = async (data: any) => {
    try {
      startTransition(async () => {
        // Add your code to hit the backend here
        console.log(data); // Use this to log form data
        toast.success("Submission successful!");
      });
    } catch (error) {
      console.error("Error submitting form:");
      toast.error("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="xl:block flex items-center lg:w-2/3 mr-auto px-[4%] md:px-[20%] lg:px-[4%] 2xl:px-[6%] lg:py-[20px] my-[0px]">
      <div className="w-full">
        <h4 className="text-[32px] font-[500] text-white md:mt-[5px] mt-[10px] md:text-[44px]">
          Contact us
        </h4>
        <h4 className="text-[15px] font-[400] text-white mt-[16px] md:mt-0 md:text-[18px] md:leading-[27px]">
          If you have any questions, kindly utilize the form provided below to
          get in touch with us.
        </h4>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
              onSubmitError(errors);
            })}
            className="mt-[20px] md:mt-[10px]  grid gap-1 text-white"
          >
            <div className="md:flex justify-between items-center  gap-[12px] md:gap-[20px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="bg-line backdrop-blur-sm placeholder:text-placeholerText border-transparent focus:border-base2 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="bg-line backdrop-blur-sm placeholder:text-placeholerText border-transparent focus:border-base2 outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject"
                      {...field}
                      className="bg-line backdrop-blur-sm placeholder:text-placeholerText border-transparent focus:border-base2 outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="bg-line backdrop-blur-sm placeholder:text-placeholerText border-transparent focus:border-base2 outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="h-8 text-xs bg-white text-black"
              loading={isPending}
              variant="ghost"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Screen;
