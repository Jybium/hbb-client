"use client"

import React, { useEffect, useState } from 'react'
import { CallIcon, CancelIcon, GiftIcon, LocationIcon } from '@/src/components/svgs'
import { Button } from '@/src/components/ui/button';
import userImage from "@/public/assests/dashboard/userImage.svg"
import { toast } from 'sonner';
import Image from "next/image"
import { useModal } from '@/src/state/context/modal';
import { AspectRatio } from '../../ui/aspect-ratio';
import { Separator } from '../../ui/separator';
import { Check, X } from 'lucide-react';



const Discover = () => {

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

    return (

        <div className='w-full h-[calc(100%-100px) h-full overflow-y-auto md:overscroll-none md:h-full bg-pink backdrop-blur-sm grid rounded-lg lg:py-5'>

            <Separator className='w-full h-[0.04rem] bg-placeholderText hidden md:block' orientation='horizontal' />

            {/* THE SECTION THAT CONTAINS THE USERS DETAILS */}
            <div className=' md:px-[1rem] md:pt-[1rem] pb-[1rem] bg-base rounded-lg md:w-[65%] mx-auto grid justify-center lg:h-4/5 h-fit my-lg:my-0 m-4 w-[90%]'>
                <section className='lg:flex justify-between gap-[1rem] rounded-lg lg:h-4/5'>
                    {/* USER IMAGE */}
                    <Image src={userImage} alt='user image' className='lg:w-1/2 lg:h-5/5 hidden lg:inline-flex w-full h-full mx-auto md:object-cover rounded-lg' priority />

                    <div className='block lg:hidden'>
                        <AspectRatio ratio={16 / 9} className='block lg:hidden'>
                            <Image src={userImage} alt='user image' className='lg:hidden w-full h-full mx-auto object-cover rounded-lg mb-3' priority />
                        </AspectRatio>
                    </div>


                    <Separator className='w-[0.04rem] h-full bg-placeholderText hidden lg:grid overflow-hidden ' orientation='vertical' />

                    {/* USER PROFILE */}
                    <div className=' w-full rounded-lg flex flex-col justify-between h-5/5 overflow-y-auto px-[1rem] md:px-0'>
                        <div className='px-2 py-1 backdrop-blur-lg w-full lg:grid flex justify-between items-center'>
                            <p className='text-xl flex items-center'>sazzy, <span className='font-thin'>24</span></p>
                            <p className='text-xs font-light flex gap-2'><LocationIcon /> <span>Washington, D.C</span></p>
                        </div>
                        <hr className='my-3 md:my-2' />
                        <div>
                            <p className='bg-tertiary px-2 py-1 rounded-full w-fit text-black my-3 md:my-0'>Aquarius</p>
                        </div>

                        {/* Interests */}
                        <div className='my-3'>
                            <p className='text-sm mb-3 md:mb-2'>My interests</p>
                            <div className='flex flex-wrap gap-2 mb-4 md:mb-0'>
                                <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-pink rounded-full text-xs'>Walking dog</p>
                                <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-pink rounded-full text-xs'>Walking dog</p>
                                <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-pink rounded-full text-xs'>Walking dog</p>
                            </div>
                        </div>

                        {/* BIO */}
                        <div>
                            <h3>Bio</h3>
                            <p className='text-[0.69rem] mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sit libero sed neque aliquam curabitur ac adipi rescing et. Nulla odio gravida augue tellus pellentesque.</p>
                        </div>
                        <hr className='my-2' />

                        <div className='w-full'>
                            <h3>Request call</h3>

                            <div className='mt-2 flex justify-between gap-3'>
                                <div className='text-[0.7rem] w-full'>
                                    <p className='mb-2'>Current rate</p>
                                    <p className="lg:w-1/2 w-full md:w-1/2 h-12 flex items-center pl-3 rounded-lg bg-darkPurple text-black text-base">$ 25</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* CONTROL BUTTONS */}
            <div className='lg:flex hidden items-center gap-x-[2rem] justify-center -mt-3'>

                <div className='text-center'>
                    <Button className='w-[3rem] h-[3rem] rounded-full bg-white'>
                        <X className='text-pink' />
                    </Button>
                    <p className='text-sm md:text-xs mt-1'>Swipe left</p>
                </div>

                <Separator className='w-[0.04rem] h-full bg-placeholderText' orientation='horizontal' />

                <div className="text-center">
                    <Button className='w-[3rem] h-[3rem] rounded-full bg-white'>
                        <Check className='text-pink' />
                    </Button>
                    <p className='text-sm md:text-xs mt-1'>Swipe right</p>

                </div>

            </div>

        </div>
    )
}

export default Discover