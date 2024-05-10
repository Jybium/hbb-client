"use client"

import React, { useEffect, useState } from 'react'
import { CancelIcon } from '@/src/components/svgs'
import { Button } from '@/src/components/ui/button';
import { toast } from 'sonner';
import { useModal } from '@/src/state/context/modal';
import { Separator } from '../../ui/separator';
import { z } from "zod"
import CalendarTimePicker from './CalenderGrid';


const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
    }),
    message: z.string()
})


const RequestCallModal = () => {
    const { requestCallModal, setRequestCallModal } = useModal()

    const handleToggleModal = () => {
        setRequestCallModal(!requestCallModal); // Toggle the modal state
    };

    return (
        <>
            {requestCallModal &&

                <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center z-50'>
                    {/* Overlay */}
                    <div className='w-full h-full absolute bg-black opacity-50' onClick={handleToggleModal}></div>

                    {/* The modal content */}
                    <div className='relative bg-base rounded-lg shadow-2xl p-3 md:p-5 md:w-1/2 w-11/12 md:max-h-[90vh] max-h-[80vh] overflow-auto text-black'>
                        {/* Close button */}
                        <div className='flex justify-end'>
                            <Button onClick={handleToggleModal} className='h-8 w-8 p-0 bg-placeholderText items-center rounded-md' variant="ghost">
                                <CancelIcon className='w-4/6 mx-auto p-0 text-profile' />
                            </Button>
                        </div>

                        {/* Modal header */}
                        <div className='text-white'>
                            <p className='text-xl font-bold'>Request Call</p>
                            <Separator className='w-full h-[0.04rem] bg-placeholderText my-1' orientation='horizontal' />
                        </div>

                        {/* Modal body */}
                        <section className='mt-4'>
                            <div className='bg-white rounded-lg p-2 md:p-3'>
                                <p className='font-bold text-center'>Change Time</p>
                                <CalendarTimePicker />
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

export default RequestCallModal;
