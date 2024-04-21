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



const Screen = () => {
    const [isPending, startTransition] = React.useTransition();

    const form = useForm({
      resolver: zodResolver(contactUsSchema),
      defaultValues: {
        email: "",
      name:"",
      message:"",
      subject: ""
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
    <div className="  xl:block flex items-center lg:w-2/3 mr-auto px-[4%] md:px-[20%] lg:px-[4%]  2xl:px-[6%]  lg:py-[30px] my-[0px]">
      <div className="w-full">
        <h4 className="text-[32px] font-[500] text-white md:mt-[5px] mt-[10px] md:text-[44px]">
          Contact us
        </h4>
        <h4 className="text-[15px] font-[400] text-white mt-[16px] md:mt-0 md:text-[18px] md:leading-[27px]">
          If you have any questions, kindly utilize the form provided below to
          get in touch with us.
        </h4>
        <form className="mt-[20px] md:mt-[10px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                onSubmitError(errors);
              })}
              className="grid gap-2"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a Valid Email" {...field} />
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
                    <FormLabel>Email Address</FormLabel>
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
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject of your message</FormLabel>
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
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
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
             
              <Button
                className="h-8 text-xs"
                loading={isPending}
                variant="ghost"
                type="submit"
              >
               Submit
              </Button>
            </form>
          </Form>
        </form>
      </div>
    </div>
  );
};

export default Screen;
