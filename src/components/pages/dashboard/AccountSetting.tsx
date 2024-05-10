"use client"
import React, { useState, useEffect, useRef } from "react";
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
import arrowLeft from "@/public/assests/arrowLeft.svg";
import arrowRight from "@/public/assests/arrowRight.svg";
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowRight, MoveRight } from "lucide-react";
import SubscriptionCard from "../../SubcriptionCard";

export function Settings() {

    // const [searchParams, setSearchParams] = useSearchParams();
    // const tab = searchParams.get('tab');

    const [isPending, startTransition] = React.useTransition();

    const isMobile = window.innerWidth <= 768;

    const [currentTab, setCurrentTab] = useState(`${isMobile ? "" : 'account'}`);


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


    // // Synchronize state with URL query parameter
    // useEffect(() => {
    //     if (tab && tab !== currentTab) {
    //         setCurrentTab(tab);
    //     }
    // }, [tab, currentTab]);


    // const updateUrlQuery = (newTab: string) => {
    //     searchParams.set({ tab: newTab }); // Update search params with new tab
    // };

    // useEffect(() => {
    //     updateUrlQuery(currentTab); // Update URL on initial render and tab change
    // }, [currentTab]);

    // Handle tab change
    const handleTabChange = (event: any) => {
        const target = event.target.innerText;

        if (target) {
            setCurrentTab(target.toLowerCase());
        } else {
            console.warn('No "value" attribute found on the target element.');
        }

        console.log(!currentTab, currentTab);
    };

    // Open tab function
    const openTab = () => {
        setCurrentTab('');
    };

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
        <Tabs defaultValue={currentTab} className="w-full flex justify-between bg-pink rounded-xl h-[85vh] max-h-[90vh] self-center overflow-y-auto">

            {(!isMobile || !currentTab || currentTab === "") && (
                <TabsList className={`${!currentTab ? "flex" : "hidden"} md:flex flex-col w-full md:w-[35%] md:h-2/3 h-3/5 justify-center`}>

                    <TabsTrigger value="account" className="flex justify-between w-full py-[1rem] px-[1.50rem]" onClick={(e) => handleTabChange(e)} ><p className="text-lg font-normal" >Account</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>
                    <TabsTrigger value="security" className="flex justify-between w-full py-[1rem] px-[1.50rem]" onClick={handleTabChange}><p className="text-lg font-normal">Security</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>
                    <TabsTrigger value="subscription" className="flex justify-between w-full py-[1rem] px-[1.50rem]" onClick={handleTabChange}><p className="text-lg font-normal">Subscription</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>
                    <TabsTrigger value="payment" className="flex justify-between w-full py-[1rem] px-[1.50rem]" onClick={handleTabChange}><p className="text-lg font-normal">Payment</p> <Image src={arrowRight} width={13.21} height={21} alt="arrow right" /></TabsTrigger>

                </TabsList>
            )}

            {currentTab === "account" &&

                <TabsContent value="account" className="w-full md:w-[65%] md:py-4 md:px-1 border-l overflow-y-auto border-light/55 mt-0">

                    <Card className="border-0 shadow-none drop-shadow-none md:mt-[rem] flex flex-col justify-center">
                        <CardHeader className="md:p-6 px-6 pt-6 pb-0">
                            <CardTitle className="flex gap-x-3 items-center" onClick={openTab}><Image src={arrowLeft} width={13.21} height={21} alt="arrow left" className="md:hidden z-30" onClick={openTab} /> My account</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-">
                            <div>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                            onSubmitError(errors);
                                        })}
                                        className="mt-[1rem] md:mt-[10px] w-full grid gap-1 text-white"
                                    >

                                        {/*BEGINNING OF FORM SECTION THAT TAKES THE USER"S DATA */}

                                        <section className="grid md:gap-y-1 gap-y-2 mt-[1rem] md:mt-0 w-full">
                                            <div className="grid md:grid-cols-2 gap-[12px] md:gap-[0.94rem] gap-y-2 w-full">
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
                                            className={`px-5 pt-3 rounded-full mt-[2rem] bg-white md:mt-[2.5rem] text-black font-normal mx-auto text-sm h-8 lg:w-1/2 w-full shadow-custom-shadow ${!isDisabled
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
                                    <p className="text-deepRed font-bold text-[0.88rem] text-center md:mt-3 mt-2">
                                        Delete account
                                    </p>
                                </Form>
                            </div>
                        </CardContent>
                    </Card>

                </TabsContent>

            }



            {currentTab === "security" &&

                <TabsContent value="security" className="w-full md:w-[65%] md:py-4 md:px-1 border-l border-light/55 mt-0">

                    <Card className="border-0 shadow-none drop-shadow-none mt-[1rem] flex flex-col justify-center gap-y-5">
                        <CardHeader className="md:p-6 px-6 pt-6 pb-0">
                            <CardTitle className="flex gap-x-3 items-center" onClick={openTab}><Image src={arrowLeft} width={13.21} height={21} alt="arrow left" className="md:hidden" onClick={openTab} /> Security</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-between items-center cursor-pointer">

                                <div className="space-y-1 w-[75%] md:w-full">
                                    <h1 className="text-lg">Change password</h1>
                                    <p className="text-white/60 text-sm">Change your password here at anytime</p>
                                </div>
                                <Image src={arrowRight} width={13.21} height={21} alt="arrow right" className="block md:hidden" />
                                <ArrowRight />
                            </div>
                            <div className="flex justify-between items-center cursor-pointer">

                                <div className="space-y-1 w-[75%] md:w-full">
                                    <h1 className="text-lg">Notification</h1>
                                    <p className="text-white/60 text-sm">Choose your notification preferences here</p>
                                </div>
                                <Image src={arrowRight} width={13.21} height={21} alt="arrow right" className="block md:hidden" />
                                <ArrowRight />
                            </div>

                        </CardContent>
                    </Card>
                </TabsContent>

            }


            {currentTab === "subscription" &&

                <TabsContent value="subscription" className="w-full md:w-[65%] md:py-4 md:px-1 border-l overflow-y-auto border-light/55 mt-0">

                    <Card className="border-0 shadow-none drop-shadow-none mt-[1rem] flex flex-col justify-center gap-y-3">
                        <CardHeader className="md:p-6 px-6 pt-6 pb-0">
                            <CardTitle className="flex gap-x-3 items-center" onClick={openTab}><Image src={arrowLeft} width={13.21} height={21} alt="arrow left" className="" onClick={openTab} /> Subscription</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-sm">Choose the feature plan</p>

                            <div className="lg:flex grid lg:justify-between gap-x-2 gap-y-2">
                                <SubscriptionCard className="bg-[#FFB5CA] backdrop-blur-md px-1 md:w-[13.3rem] " type="Free" />
                                <SubscriptionCard className="bg-purple backdrop-blur-md px-1 md:w-[13.3rem]" type="Standard" />
                                <SubscriptionCard className="bg-armyGreen backdrop-blur-md px-1 md:w-[13.3rem]" type="Premium" />
                            </div>
                            <hr/>
                            <div className="grid gap-2 text-lg">
                                <p>Next payment date</p>
                                <p className="text-sm">You are current on the free subscription</p>
                            </div>

                        </CardContent>
                    </Card>
                </TabsContent>

            }


            {currentTab === "payment" &&

                <TabsContent value="payment" className="w-full md:w-[65%] md:py-4 md:px-1 border-l border-light/55 mt-0">

                    <Card className="border-0 shadow-none drop-shadow-none mt-[1rem] flex flex-col justify-center gap-y-5">
                        <CardHeader className="md:p-6 px-6 pt-6 pb-0">
                            <CardTitle className="flex gap-x-3 items-center" onClick={openTab}><Image src={arrowLeft} width={13.21} height={21} alt="arrow left" className="md:hidden" onClick={openTab} /> Payment</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-between items-center cursor-pointer">

                                <div className="space-y-1 w-full">
                                    <h1 className="text-lg">Card info</h1>
                                    <p className="text-white/60 text-sm">Access your card information here</p>
                                </div>
                                <Image src={arrowRight} width={13.21} height={21} alt="arrow right" className="block" />
                                
                            </div>
                            <div className="flex justify-between items-center cursor-pointer">

                                <div className="space-y-1 w-full">
                                    <h1 className="text-lg">Transaction history/invoice</h1>
                                    <p className="text-white/60 text-sm">My transaction history</p>
                                </div>
                                <Image src={arrowRight} width={13.21} height={21} alt="arrow right" className="block" />
                                
                            </div>

                        </CardContent>
                    </Card>
                </TabsContent>

            }

        </Tabs>
    )
}
