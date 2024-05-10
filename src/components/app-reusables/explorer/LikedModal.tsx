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
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})



const LikedModal = () => {
    const { likeModal, setLikeModal, reportModal, setReportModal, giftModal, setGiftModal, requestCallModal, setRequestCallModal } = useModal()
    const [goLive, setGoLive] = useState(false)
    const [offer, setOffer] = useState(25.00)
    const form = useForm(
        {
            defaultValues: {
                offer: 0
            }
        }
    )

    const readOffer = form.watch("offer")

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
        setLikeModal(!likeModal); // Toggle the modal state
        setReportModal(!reportModal); // Toggle the modal state
        setGiftModal(!giftModal); // Toggle the modal state
    };


    const handleGiftModal = () => {
        setGiftModal(!giftModal); // Toggle the modal state
    };

    const handleRequestCallToggleModal = () => {
        setLikeModal(!likeModal)
        setRequestCallModal(!requestCallModal); // Toggle the modal state
    };


    return (
        <>

            {likeModal &&

                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center z-50'>

                    <div className='w-full h-full absolute bg-black opacity-50' onClick={handleToggleModal}></div>

                    <div className='relative bg-base rounded-lg shadow-2xl p-3 md:p-5 md:w-4/6 w-11/12 md:max-h-[90vh] max-h-[80vh] overflow-auto'>

                        <section className='md:flex justify-between gap-[1rem]'>
                            <div className='md:block hidden'>
                                <AspectRatio ratio={4 / 2} className='md:block hidden'>
                                    <Image src={userImage} alt='user image' className=' hidden md:grid w-full h-full mx-auto md:object-cover rounded-lg' priority />
                                </AspectRatio>
                            </div>

                            <div className='block md:hidden'>
                                <AspectRatio ratio={16 / 9} className='block md:hidden'>
                                    <Image src={userImage} alt='user image' className='md:hidden w-full h-full mx-auto object-cover rounded-lg mb-3' priority />
                                </AspectRatio>
                            </div>
                            <Separator className='w-[0.04rem] h-full bg-placeholderText hidden md:inline-flex' orientation='vertical' />

                            <div className=' w-full rounded-lg flex flex-col justify-between h-4/6'>
                                <div className='flex justify-end'>

                                    <Button onClick={handleToggleModal} className='h-8 w-8 p-0 hidden bg-placeholderText md:flex items-center rounded-md' variant="ghost">
                                        <CancelIcon className='w-4/5 p-0 text-profile font-bold' />
                                    </Button>
                                </div>
                                <div className='px-2 py-1 backdrop-blur-lg w-full lg:grid flex justify-between items-center'>
                                    <p className='text-xl'>sazzy, <span>24</span></p>
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
                                        <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-profile rounded-full text-xs'>Walking dog</p>
                                        <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-profile rounded-full text-xs'>Walking dog</p>
                                        <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-profile rounded-full text-xs'>Walking dog</p>
                                    </div>
                                </div>

                                {/* BIO */}
                                <div>
                                    <h3>Bio</h3>
                                    <p className='text-[0.7rem] mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sit libero sed neque aliquam curabitur ac adipi rescing et. Nulla odio gravida augue tellus pellentesque.</p>
                                </div>
                                <hr className='my-2' />

                                <div className='w-full'>
                                    {!goLive ? <h3>Request call</h3> : <div className='flex justify-between w-full'>
                                        <p className='flex gap-2 items-center w-full'><span className='w-6 h-6 bg-tertiary rounded-full'></span>Live caller</p>
                                        <p className='flex gap-2 items-center justify-start w-full ml-2'><span className='w-6 h-6 bg-tertiary rounded-full'></span>You</p>
                                    </div>}
                                    <div className='mt-2 flex justify-between gap-3'>
                                        <div className='text-[0.7rem] w-full'>
                                            <p className='mb-2'>Current rate</p>
                                            <p className="h-12 flex items-center pl-3 rounded-lg bg-darkPurple text-black text-base w-1/2">$ {offer}</p>
                                        </div>

                                    </div>
                                </div>

                                <Separator className='w-full h-[0.04rem] bg-placeholderText my-2' orientation='horizontal' />
                                <div className='flex md:gap-x-[0.75rem] gap-x-[0.5rem] text-sm font-medium'>
                                    {/* Bottom section */}

                                    <div className="flex justify-between w-fit md:w-full gap-2 ">
                                        <Button variant="ghost" className="shadow-custom-shadow bg-pink w-full mx-auto flex items-center gap-1 lg:gap-2 h-8 border border-black text-black" onClick={handleRequestCallToggleModal}>
                                            Request Call <span><CallIcon /></span>
                                        </Button>
                                    </div>

                                    <div className="flex justify-between content-center gap-2">
                                        <Button variant="ghost" className='w-fit mx-auto bg-pink flex items-center h-8 shadow-custom-shadow' onClick={handleGiftModal}>
                                            <GiftIcon className='p-1' />
                                        </Button>
                                        <Separator className='w-[0.04rem] h-full bg-placeholderText hidden md:inline-flex' orientation='vertical' />
                                        <Button variant="ghost" className="bg-transparent w-fit mx-auto flex items-center lg:gap-2 h-8 border border-white" onClick={handleToggleModal}>
                                            Report
                                        </Button>
                                    </div>
                                </div>
                                <Button variant="ghost" className='md:hidden mt-6 md:mt-0 h-0 p-0 text-xs text-center' onClick={handleToggleModal}>cancel</Button>

                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

export default LikedModal