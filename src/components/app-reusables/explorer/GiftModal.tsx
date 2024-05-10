"use client"

import React, { useState } from 'react'
import { CancelIcon} from '@/src/components/svgs'
import { Button } from '@/src/components/ui/button';
import { toast } from 'sonner';
import Image from "next/image"
import { useModal } from '@/src/state/context/modal';
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { Separator } from '../../ui/separator';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import data from '@/src/constants/gifts';

const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
    }),
    message: z.string()
})



const GiftModal = () => {
    const { giftModal, setGiftModal } = useModal()
    const [gift, setGift] = useState<string>("")
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
        setGiftModal(!giftModal); // Toggle the modal state
    };

    const isDisabled = gift === ""


    return (
        <>

            {giftModal &&

                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center z-50'>

                    <div className='w-full h-full absolute bg-black opacity-50' onClick={handleToggleModal}></div>

                    <div className='relative bg-pink rounded-lg shadow-2xl p-3 md:p-5 md:w-1/2 w-11/12 md:max-h-[90vh] max-h-[80vh] overflow-auto'>
                        {/* Close button */}
                        <div className='flex justify-end'>
                            <Button onClick={handleToggleModal} className='h-8 w-8 p-0 flex bg-placeholderText  items-center rounded-md' variant="ghost">

                                <CancelIcon className='w-4/6 mx-auto p-0 text-profile' />
                            </Button>
                        </div>

                        <p className=''>Gifts</p>
                        <Separator className='w-full h-[0.04rem] bg-placeholderText my-2' orientation='horizontal' />
                        <p className='text-sm md:text-base'>Show support by gifting her one of the above options</p>
                        {/* rest of the page */}
                        <section className='w-full md:h-3/4 h-full mt-[2rem] relative'>
                            <div className='md:flex grid md:justify-between gap-[1rem] w-full'>
                                {data.map((item) => 
                                <div className={`${gift === item.title ? "bg-base" : "bg-transparent"} rounded-md border border-white text-center  md:flex md:flex-col md:content-center md:justify-between grid grid-flow-col place-items-center py-[1rem] gap-3  w-full`} key={item.id} onClick={() => setGift((prev) => `${item.title}`)}>
                                    <Image src={item.image} alt={`${item.image}'s picture`} className='w-2/4 mx-auto' />
                                    <div className=''>
                                        <p className='text-[0.69rem] font-thin w-fit mx-auto border-b border-white px-1 pb-[2px]'>{item.title}</p>
                                        <p className='mt-[2px]'>{item.price}</p>
                                    </div>
                                </div>)}
                            </div>


                            <div className='flex flex-col items-center'>
                                <Button
                                    className={`px-5 pt-3 rounded-full md:mt-[4rem] mt-[2rem] text-black font-normal mx-auto text-sm h-8 lg:w-1/2 w-full shadow-[8px_8px_0px_-5px_rgba(0,0,0,0.75)] ${isDisabled
                                        ? "bg-lightgray cursor-not-allowed text-gray"
                                        : "bg-tertiary hover:bg-tertiaryHover"
                                        }`}
                                    loading={isPending}
                                    disabled={isDisabled}
                                    variant="ghost"
                                    type="submit"
                                >
                                    send gift
                                </Button>
                                <p className="text-tertiary text-[0.88rem] text-center md:mt-1 mt-4" onClick={handleToggleModal}>
                                   Cancel
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

export default GiftModal