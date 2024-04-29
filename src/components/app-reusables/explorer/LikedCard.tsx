import React from 'react';
import { CallIcon, CancelIcon, GiftIcon, LikeIcon, LocationIcon, VideoIcon } from '../../svgs';
import { Button } from '../../ui/button';
import { useModal } from '@/src/state/context/modal';
import { Separator } from "@/src/components/ui/separator";

const LikedCard = ({ data, hideModal }: any) => {

    const { setGoModal, goModal } = useModal()

    const handleToggleModal = () => {
        setGoModal(!goModal); // Toggle the modal state
    };
    return (

        <div className="relative md:h-[16rem] h-[13rem] md:w-[15rem] lg:mx-auto w-full rounded-lg text-black" onClick={handleToggleModal}>
            {/* Background  tag */}
            <p className='bg-base absolute top-0 left-0 h-full w-full rounded-lg shadow-custom-shadow mx-auto'></p>

            {/* Content divs on top of background */}
            <div className="absolute flex flex-col justify-between h-full w-full px-3 pt-[1rem] text-sm">

                {/* Top section */}
                <div className="grid grid-flow-col justify-between items-start w-full">

                    <div className='hidden md:block'></div>
                    <div className='md:grid flex items-center gap-2 lg:gap-1 md:text-center mx-auto w-fit'>
                        {/* Image */}
                        <p className='bg-profile border-4 border-white h-[4rem] w-[4rem] mx-auto rounded-full'></p>
                        <div className='grid gap-1'>
                            {/* Name */}
                            <p className='font-bold mt-1'>Samuel Etoo</p>
                            {/* Location */}
                            <p className='flex items-center gap-2 text-sm'><LocationIcon /> Washington D.C</p>
                        </div>
                    </div>

                    <div className='w-fit'>
                        <Button onClick={handleToggleModal} className='h-7 w-6 p-0 rounded-sm bg-placeholderText flex items-center' variant="ghost">
                            <CancelIcon className='w-4/5 p-0 text-profile' />
                        </Button>
                    </div>

                </div>





                <div className='grid md:gap-y-[0.75rem] gap-y-[1rem]'>
                    {/* Bottom section */}

                    <div className="flex justify-between content-center gap-2">
                        <Button variant="ghost" className='w-full mx-auto bg-placeholderText flex items-center h-8  shadow-custom-shadow mr-1' >
                            View profile
                        </Button>
                        <Separator className='w-[0.04rem] h-full bg-placeholderText hidden md:inline-flex' orientation='vertical' />
                        <Button variant="ghost" className='w-fit mx-auto bg-pink flex items-center h-8 shadow-custom-shadow ' >
                            <GiftIcon className='w-full mx-auto' />
                        </Button>
                    </div>

                    <div className="pb-[1.5rem]">
                        <Button variant="ghost" className="shadow-custom-shadow bg-pink w-full mx-auto flex items-center gap-3 lg:gap-2 h-8 border border-black">
                            Request Call <span><CallIcon /></span>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LikedCard;
