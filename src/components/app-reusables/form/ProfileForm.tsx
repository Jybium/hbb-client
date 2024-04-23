"use client";

import React, { useState, useEffect } from "react";
import { onSubmitError } from "@/src/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import { Input } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import { modelProfileSchema } from "@/src/schema/profile";
import { CameraIcon } from "../../svgs";
import DragAndDrop from "../DragnDrop";
import { SearchX } from "lucide-react";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";

const ProfileForm = () => {
  const [isPending, startTransition] = React.useTransition();
  const [isDragging, setIsDragging] = useState(false);

  const form = useForm({
    resolver: zodResolver(modelProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      sex: "",
      dateOfBirth: "",
      video: "",
      phoneNumber: ""
    },
  });

  const values = form.getValues();

  const isDisabled =
    values.email !== "" &&
    values.lastName !== "" &&
    values.image !== "" &&
    values.firstName !== "" &&
    values.video !== "" &&
    values.sex !== "" &&
    values.dateOfBirth !== ""


  // Event handler for dragenter and dragover
  function handleDragOver(e: any) {
    e.preventDefault();
    setIsDragging(true);
  };

  // Event handler for dragleave
  function handleDragLeave() {
    setIsDragging(false);
  };





  // Dynamic styling for the component
  const dropAreaStyle = isDragging
    ? "border-[1px] border-dashed border-base2 rounded-md"
    : "border-[1px] border-dashed border-placeholderText rounded-md";

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
    <div className="w-full py-4">
      <div className="grid md:gap-y-1 mb-[2rem] md:mb-0">
        <h1 className="text-white text-2xl font-medium">
          Provide you personal information
        </h1>
        <p className="text-[1rem] mt-3 md:mt-0 text-placeholderText">
          Complete your information and verify your identity to get started
        </p>
      </div>

      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
              onSubmitError(errors);
            })}
            className="mt-[2rem] md:mt-[10px]  grid gap-1 text-white"
          >
            {/* BEGINNING OF FORM SECTION THAT TAKES VIDEO AND IMAGE ASSESTS */}
            <section>
              <div className="border-b border-white py-[2rem] md:py-[1rem] md:flex">
                <div className="flex items-center gap-4 md:border-r pr-[1.50rem] border-placeholderText">
                  <div className="relative h-[5rem] w-[5rem] rounded-full border-white border ">
                    <CameraIcon className="absolute top-5 left-5 h-9 w-9 m-auto" />
                  </div>
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            {...field}
                            className="bg-white hidden"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="file-upload"
                          className="bg-white text-base2 py-1 px-3 w-2/5 rounded-md h-[1.8rem]"
                        >
                          choose photo
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:flex items-center gap-4 md:pl-[1.50rem] border-placeholderText mt-[2rem] md:mt-0">
                  <div
                    className={`md:w-1/2 w-full px-4 h-[5rem] flex items-center justify-center text-center ${dropAreaStyle}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    id="video-upload"
                  >
                    {isDragging ? (
                      <p className="text-base text-[0.70rem]">
                        Drop the video here...
                      </p>
                    ) : (
                      <p className="text-gray-500 text-[0.70rem]">
                        Drag and drop file{" "}
                        <span className="text-tertiary">here </span>
                      </p>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="video"
                    render={({ field }) => (
                      <FormItem className="mx-auto w-3/5">
                        <FormControl>

                          <Input
                            id="video-upload"
                            type="file"
                            accept="video/*"
                            {...field}
                            className="bg-white hidden"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="video-upload"
                          className="bg-transparent border border-placeholderText text-placeholderText py-1 px-3 w-3/5 mx-auto md:mx-0 rounded-md h-[1.8rem]"
                        >
                          Promotional video
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </section>

            {/*BEGINNING OF FORM SECTION THAT TAKES THE USER"S DATA */}

            <section className="grid md:gap-y-1 gap-y-2 mt-[1rem] md:mt-0">
              <div className="grid md:grid-cols-2 gap-[12px] md:gap-[0.94rem] gap-y-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel className="text-white">First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          {...field}
                          className="bg-transparent  backdrop-blur-sm placeholder:text-profile border border-profile text-white focus:border-white outline-none w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your last name"
                          {...field}
                          className="bg-transparent  backdrop-blur-sm placeholder:text-profile border border-profile text-white focus:border-white outline-none w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-[12px] md:gap-[0.94rem] gap-y-2">
                <FormField
                  control={form.control}
                  name="sex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Sex</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="female"
                          {...field}
                          className="bg-transparent  backdrop-blur-sm placeholder:text-profile border border-profile text-white focus:border-white outline-none w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Date of birth</FormLabel>
                      <FormControl>
                        <Input
                          type="date"

                          {...field}
                          className="bg-transparent  backdrop-blur-sm placeholder:text-profile border border-profile text-white focus:border-white outline-none w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-[12px] md:gap-[0.94rem] gap-y-2">
                <div className="">


                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => {

                      const handleCountrySelect = (value: any) => {

                        const [countryCode, flag] = value.split('|');

                        form.setValue('phoneNumber', countryCode);
                        field.onChange(flag);
                      };

                      return (
                        <FormItem className="relative">
                          <FormLabel className="text-white">Phone number</FormLabel>
                          <div className="flex w-full relative">

                            <Select onValueChange={handleCountrySelect} defaultValue={`${field.value} | `}>
                              <SelectTrigger className="w-1/4 bg-transparent rounded-r-none  backdrop-blur-sm px-2 placeholder:text-profile border border-profile text-white focus:border-white outline-none relative">
                                <SelectValue placeholder="Select a country" className="text-sm" />
                              </SelectTrigger>
                              <SelectContent className="w-[17rem] bg-profile absolute top-0 max-h-20 overflow-y-auto">
                                <ScrollArea className="absolute max-h-20 overflow-y-auto scroll">
                                  <SelectItem value="US|🇺🇸" className="w-full">🇺🇸 +1dsdjhsjhjshjh</SelectItem>
                                  <SelectItem value="GB|🇬🇧">🇬🇧 +44sjkjkkkkkkkkkkerrrrrrr</SelectItem>
                                  <SelectItem value="CA|🇨🇦">🇨🇦 +1 hsdjjjjjsdddsderrrrrere</SelectItem>
                                  <SelectItem value="CA|🇨🇦">🇨🇦 +1 dssssdsdsddsdseerreeree</SelectItem>
                                  <SelectItem value="CA|🇨🇦">🇨🇦 +1 sdsdssddsddsdddsserererr</SelectItem>
                                  <SelectItem value="CA|🇨🇦">🇨🇦 +1ddssddddddddssdddsdjereeee</SelectItem>
                                  <SelectItem value="CA|🇨🇦">🇨🇦 +1 ejjekerkeruiuksjkjseereere</SelectItem>
                                  <SelectItem value="CA|🇨🇦">🇨🇦 +1 djsisdjkjsdjksdiuerereere</SelectItem>
                                  <ScrollBar orientation="vertical" className="bg-placeholderText scroll"/>
                                </ScrollArea>
                             
                              </SelectContent>
                            </Select>
                            <FormControl className="">

                              <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={form.getValues('phoneNumber')}
                                onChange={(e) => form.setValue('phoneNumber', e.target.value)}
                                className="bg-transparent backdrop-blur-sm placeholder:text-profile border rounded-l-none border-profile text-white focus:border-white outline-none w-full"
                              />
                            </FormControl>
                          </div>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />


                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="bg-transparent  backdrop-blur-sm placeholder:text-profile border border-profile text-white focus:border-white outline-none w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </section>

            {/*END OF FORM SECTION THAT TAKES THE USER"S DATA */}

            <Button
              //   className="h-8 text-xs bg-white text-black w-1/2 mx-auto mt-[2rem] shadow-[8px_8px_0px_-5px_rgba(0,0,0,0.75)]"
              className={`px-5 py-3 rounded-full mt-[2rem] text-black font-normal mx-auto text-sm h-8 lg:w-1/2 w-full shadow-[8px_8px_0px_-5px_rgba(0,0,0,0.75)] ${!isDisabled
                ? "bg-lightgray cursor-not-allowed text-gray"
                : "bg-tertiary hover:bg-tertiaryHover"
                }`}
              loading={isPending}
              disabled={!isDisabled}
              variant="ghost"
              type="submit"
            >
              proceed to verification
            </Button>
          </form>
          <p className="text-tertiary text-[0.88rem] text-center md:mt-1 mt-4">
            save update
          </p>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
