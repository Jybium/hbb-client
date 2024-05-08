"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { onSubmitError } from "../lib/utils";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactUsSchema from "../schema/contactUs";
import { toast } from "sonner";
import { z } from "zod";

const ContactForm = () => {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      subject: "",
    },
  });

  const onHandleSubmit = async (data: z.infer<typeof contactUsSchema>) => {
    try {
      startTransition(async () => {
        console.log(data);
        toast.success("Submission successful!");
      });
    } catch (error) {
      console.error("Error submitting form:");
      toast.error("Error submitting form. Please try again later.");
    }

    form.reset();
  };

  const { formState } = form;
  const { isValid } = formState;

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onHandleSubmit)}
          className="space-y-5 md:space-y-8"
        >
          <div className="space-y-3 md:space-y-5">
            <div className="md:flex w-full md:items-center md:justify-between space-y-3 md:space-y-0 md:gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white text-xs mb-2">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="bg-[#FFFFFF29] rounded-lg py-12.5px px-5 w-full placeholder:text-lightgray border-transparent focus:border-white outline-none focus:bg-transparent"
                        {...field}
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
                  <FormItem className="w-full">
                    <FormLabel className="text-white text-xs mb-2">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-[#FFFFFF29] rounded-lg py-12.5px px-5 w-full placeholder:text-lightgray border-transparent focus:border-white outline-none focus:bg-transparent"
                        {...field}
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
                  <FormLabel className="text-white text-xs mb-2">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject"
                      className="bg-[#FFFFFF29] rounded-lg py-12.5px px-5 w-full placeholder:text-lightgray border-transparent focus:border-white outline-none focus:bg-transparent"
                      {...field}
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
                  <FormLabel className="text-white text-xs mb-2">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="bg-[#FFFFFF29] rounded-lg py-12.5px px-5 w-full placeholder:text-lightgray border-transparent focus:border-white outline-none focus:bg-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className={`text-lg bg-white text-black w-full rounded-full p-3 hover:bg-white hover:text-black ${
              isValid ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            loading={isPending}
            disabled={!isValid}
            variant="ghost"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
