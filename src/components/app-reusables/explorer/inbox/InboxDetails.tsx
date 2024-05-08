"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { LocationIcon, TimeIcon, TrashIcon } from '@/src/components/svgs'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/src/components/ui/separator'
import { AspectRatio } from '@/src/components/ui/aspect-ratio'

import userImage from "@/public/assests/dashboard/GoLiveImage.svg"
import CalendarTimePicker from '../CalenderGrid'



const InboxDetails = () => {

  const [modal, setModal] = useState(false)
  return (
    <div className='md:flex flex-col justify-between h-full hidden'>

      <div className=''>

        <div className=" flex justify-between items-center">
          <div className='flex gap-x-[0.75rem]'>
            <p className="h-12 w-12 rounded-full bg-black"></p>
            <p className='text-lg font-medium'>Claudia Maudi</p>
          </div>
          <TrashIcon />
        </div>

        <div className="md:flex md:justify-between items-center mt-4 relative">
          <p>Call request</p>
          <div className="flex gap-x-3 items-center text-white mt-2 md:mt-0">
            <Button className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-green rounded-lg text-xs'>Accept</Button>
            <Button className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-red rounded-lg text-xs'>Reject</Button>
            <Button className='px-3 py-1 h-[2rem] text-center w-fit content-center flex gap-x-2 bg-background rounded-lg text-xs' onClick={() => setModal((prev: boolean) => !prev)}>
              Propose new time <TimeIcon />
            </Button>

          </div>
        </div>

        <p className="bg-white/20 rounded-[1rem] px-[1rem] py-[0.5rem] my-[1rem] font-normal text-sm">Hi! I would like to schedule a new time at 09:00 PM today.</p>

        <section className='lg:flex justify-between gap-[1rem] rounded-lg h-fit bg-white text-black p-3'>
          {/* USER IMAGE */}
          <div className='w-3/4 object-cover'>
            <Image src={userImage} alt='user image' className='lg:w-3/3 lg:h-full hidden lg:inline-flex w-full h-full mx-auto md:object-cover rounded-lg' priority />
          </div>

          <div className='block lg:hidden'>
            <AspectRatio ratio={16 / 9} className='block lg:hidden'>
              <Image src={userImage} alt='user image' className='lg:hidden w-full h-full mx-auto object-cover rounded-lg mb-3' priority />
            </AspectRatio>
          </div>


          <Separator className='w-[0.04rem] h-full bg-background hidden lg:grid overflow-hidden ' orientation='vertical' />

          {/* USER PROFILE */}
          <div className=' w-full rounded-lg flex flex-col justify-between h-5/5 overflow-y-auto px-[1rem] md:px-0'>
            <div className='px-2 py-1 backdrop-blur-lg w-full lg:grid flex justify-between items-center'>
              <p className='text-xl flex items-center'>sazzy, <span className='font-thin'>24</span></p>
              <p className='text-xs font-light flex gap-2'><LocationIcon /> <span>Washington, D.C</span></p>
            </div>
            <hr className='my-3 md:my-2 bg-background text-background h-[0.04rem]' />

            <div>
              <p className='bg-tertiary px-2 py-1 rounded-full w-fit text-black my-3 md:my-0 text-xs'>Aquarius</p>
            </div>

            {/* Interests */}
            <div className='my-3'>
              <p className='mb-3 md:mb-2 text-xs'>My interests</p>
              <div className='flex flex-wrap gap-2 mb-4 md:mb-0'>
                <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-background text-white rounded-full text-xs'>Writing</p>
                <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-background text-white rounded-full text-xs'>Walking dog</p>
                <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-background text-white rounded-full text-xs'>Whiskey</p>
              </div>
            </div>

            {/* BIO */}
            <div>
              <h3 className='text-xs'>Bio</h3>
              <p className='text-[0.69rem] mb-2 font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla sit libero sed neque aliquam curabitur ac adipi rescing et. Nulla odio gravida augue tellus pellentesque.</p>
            </div>

            <hr className='my-3 md:my-2 bg-background text-background h-[0.04rem]' />

          </div>
        </section>


        {modal && <div className="absolute bottom-[3%] right-[5%] text-black bg-white rounded-xl shadow-custom-shadow"><CalendarTimePicker /></div>}
      </div>

      <p className="flex justify-end font-thin text-xs">24, march 2024</p>

    </div>
  )
}

export default InboxDetails