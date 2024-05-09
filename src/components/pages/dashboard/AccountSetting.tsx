"use client"
import React, { useState, useEffect, startTransition } from "react";
import { onSubmitError } from "@/src/lib/utils";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form";

import { Button } from "@/src/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/src/components/ui/tabs"
import arrowRight from "@/public/assests/arrowRight.svg";
import Image from "next/image"
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight, MoveRight } from "lucide-react";

export function Settings() {
    const [isPending, startTransition] = React.useTransition();


    const form = useForm({
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
        <Tabs defaultValue="account" className="w-full flex justify-between bg-pink rounded-xl h-[calc(100vh-100px)]">

            <TabsList className="flex flex-col w-2/5 h-2/3 justify-center">

                <TabsTrigger value="account" className="flex justify-between w-full py-[1rem] px-[1.50rem]"><p className="text-lg font-normal">Account</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>
                <TabsTrigger value="security" className="flex justify-between w-full py-[1rem] px-[1.50rem]"><p className="text-lg font-normal">Security</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>
                <TabsTrigger value="subscribe" className="flex justify-between w-full py-[1rem] px-[1.50rem]"><p className="text-lg font-normal">Subscription</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>
                <TabsTrigger value="payment" className="flex justify-between w-full py-[1rem] px-[1.50rem]"><p className="text-lg font-normal">Payment</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>

            </TabsList>

            <TabsContent value="account" className="w-3/5 p-4 border-l border-light/55 mt-0">

                <Card className="border-0 shadow-none drop-shadow-none mt-[1rem] flex flex-col justify-center">
                    <CardHeader>
                        <CardTitle>My account</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                        onSubmitError(errors);
                                    })}
                                    className="mt-[2rem] md:mt-[10px] w-full grid gap-1 text-white"
                                >

                                    {/*BEGINNING OF FORM SECTION THAT TAKES THE USER"S DATA */}

                                    <section className="grid md:gap-y-1 gap-y-2 mt-[1rem] md:mt-0 w-full">
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

                                            <FormField
                                                control={form.control}
                                                name="phoneNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-white">Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="+(217) 902 - 4382"
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
                                        className={`px-5 pt-3 rounded-full mt-[4rem] bg-white md:mt-[2rem] text-black font-normal mx-auto text-sm h-8 lg:w-1/2 w-full shadow-custom-shadow ${!isDisabled
                                            ? "bg-white cursor-not-allowed text-gray"
                                            : "bg-white text-black hover:bg-tertiaryHover"
                                            }`}
                                        loading={isPending}
                                        disabled={!isDisabled}
                                        variant="ghost"
                                        type="submit"
                                    >
                                        Save changes
                                    </Button>
                                </form>
                                <p className="text-deepRed font-bold text-[0.88rem] text-center md:mt-2 mt-4">
                                    Delete account
                                </p>
                            </Form>
                        </div>
                    </CardContent>
                </Card>

            </TabsContent>

            <TabsContent value="security" className="w-3/5 p-4 border-l border-light/55 mt-0">

                <Card className="border-0 shadow-none drop-shadow-none mt-[1rem] flex flex-col justify-center gap-y-5">
                    <CardHeader>
                        <CardTitle>Security</CardTitle>

                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex justify-between items-center cursor-pointer">

                            <div className="space-y-1">
                                <h1 className="text-lg">Change password</h1>
                                <p className="text-white/60 text-sm">Change your password here at anytime</p>
                            </div>
                            <ArrowRight />
                        </div>
                        <div className="flex justify-between items-center cursor-pointer">

                            <div className="space-y-1">
                                <h1 className="text-lg">Notification</h1>
                                <p className="text-white/60 text-sm">Choose your notification preferences here</p>
                            </div>
                            <ArrowRight />
                        </div>

                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
