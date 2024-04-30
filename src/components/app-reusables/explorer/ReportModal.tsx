"use client"

import React, { useEffect, useState } from 'react'
import { CallIcon, CancelIcon, GiftIcon, LocationIcon } from '@/src/components/svgs'
import { Button } from '@/src/components/ui/button';
import userImage from "@/public/assests/dashboard/userImage.svg"
import { toast } from 'sonner';
import Image from "next/image"
import { useModal } from '@/src/state/context/modal';
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Separator } from '../../ui/separator';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { Textarea } from '../../ui/textarea';

const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
    }),
    message: z.string()
})



const ReportModal = () => {
    const { reportModal, setReportModal } = useModal()
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })


    const [isPending, startTransition] = React.useTransition();

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

    const handleToggleModal = () => {
        setReportModal(!reportModal); // Toggle the modal state
    };


    return (
        <>

            {reportModal &&

                <div className='w-full h-[calc(100%-100px)] overflow-y-auto md:h-screen backdrop-blur-sm absolute top-0 left-0 right-0 grid content-center'>
                    <div className=' md:px-[1rem] px-[1rem] md:py-[1rem] py-[1rem] md:w-[70%] lg:w-[50%] w-full mx-auto bg-base rounded-lg relative  md:h-[75vh] h-full my-lg:my-0'>

                        {/* Close button */}
                        <div className='flex justify-end'>
                            <Button onClick={handleToggleModal} className='h-8 w-8 p-0 hidden md:block bg-placeholderText flex items-center rounded-md' variant="ghost">

                                <CancelIcon className='w-4/6 mx-auto p-0 text-profile' />
                            </Button>
                        </div>

                        <p className=''>Report</p>
                        <Separator className='w-full h-[0.04rem] bg-placeholderText my-2' orientation='horizontal' />
                        {/* rest of the page */}
                        <section className='w-full h-3/4 mt-[2rem] relative'>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onHandleSubmit)} className="w-full flex flex-col justify-between gap-5 ">

                                    <div className=' flex justify-between items-center gap-[1rem] w-full'>
                                        <div className='w-full'>
                                            <FormField
                                                control={form.control}
                                                name="type"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-5 text-white text-base">

                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-4"
                                                            >
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="all" className='border border-white w-6 h-6' />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal text-sm text-white">
                                                                        Catfishing
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="all" className='border border-white w-6 h-6' />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal text-sm text-white">
                                                                        Misconduct
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="all" className='border border-white w-6 h-6' />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal text-sm text-white">
                                                                        Harassment
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="all" className='border border-white w-6 h-6' />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal text-sm text-white">
                                                                        Illegal activity
                                                                    </FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl>
                                                                        <RadioGroupItem value="all" className='border border-white w-6 h-6' />
                                                                    </FormControl>
                                                                    <FormLabel className="font-normal text-sm text-white">
                                                                        Other
                                                                    </FormLabel>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                        </div>
                                        <div className='w-full h-full rounded-lg'>
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem className='w-full h-full'>
                                                        <FormLabel className='text-sm text-white mb-2 '>Write description (optional)</FormLabel>
                                                        <FormControl>
                                                            <Textarea rows={10} placeholder="Write something here" {...field} className='w-full h-full backdrop-blur-xl' />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom section */}
                                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 text-center grid gap-3 w-full'>

                                        <Button variant="ghost" className="bg-tertiary shadow-custom-shadow w-2/4 mx-auto flex items-center lg:gap-2 h-8 border border-white text-black text-sm">
                                            Send Report
                                        </Button>

                                        <Button variant="ghost" className='mt-6 md:mt-3 h-0 p-0 text-xs text-center' onClick={handleToggleModal}>cancel</Button>
                                    </div>

                                </form>
                            </Form>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

export default ReportModal