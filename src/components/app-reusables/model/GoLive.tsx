"use client"




import React, { useEffect, useState } from 'react';
import Image from "next/image"
import { onSubmitError } from "@/src/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { toast } from "sonner";
import ModelBg from "@/public/assests/dashboard/GoLiveImage.svg"
import CallerBg from "@/public/assests/dashboard/GoLiveCaller.svg"
import Logo from "@/public/assests/logo.svg"
import { Schema } from '@/src/schema/dashboard/golive';
import { VideoIcon, MicrophoneIcon, CancelIcon, WalletIcon, MuteIcon } from '../../svgs';
import { AspectRatio } from '../../ui/aspect-ratio';
import Link from 'next/link';
import { X } from 'lucide-react';
import VideoProcessingOverlay from './VideoProcessingOverlay';



const GoLive = () => {
  const [isPending, startTransition] = React.useTransition();
  const [goLive, setGoLive] = useState(false)
  const [mute, setMute] = useState(false)
  const [live, setLive] = useState(false)

  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      amount: "$",

    },
  });

  const values = form.getValues();

  const isDisabled =
    values.amount.length < 2


  const handleGoLive = () => {
    setGoLive(true)
  }

  const handleMute = () => {
    setMute((prev) => !prev)
  }

  const handleLive = () => {
    setLive(true)
  }

  // useEffect(() => {

  //   const timeoutId = setTimeout(handleLive, 5000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [])


  // setTimeout(handleLive, 500)

  const onHandleSubmit = async (data: any) => {
    try {
      startTransition(async () => {
        setGoLive(true)
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
    <div className="grid content-cente items-cente w-full h-full relative lg:max-h-screen">
      <div className='flex items-center justify-between text-[1.50rem]'>
        <div className='flex gap-2'>
          <Link href="/" className="text-center w-1/2 lg:hidden ">
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              className="block w-[4rem] lg:w-[4rem] 2xl:w-[4rem] mx-auto"
            />
          </Link>
          <div>

            <p>Hi Sam!</p>
            <p className='text-xs text-nowrap'>See who is online</p>
          </div>
        </div>
        <div className='flex gap-[1.50rem]'>
          <p className='w-[3.5rem] h-[3.5rem] rounded-full bg-tertiary flex justify-center items-center'>p</p>
        </div>
      </div>



      <div className='relative lg:h-5/6 h-full bg-profile rounded-lg'>
        {/* {goLive && <div className=" bg-white lg:grid flex gap-3 my-2 lg:my-0">
          <div>
            <p className='flex gap-2 items-center'><VideoIcon /> $0.00</p>
            <p className='flex gap-2 items-center'><WalletIcon /> $0.00</p>
          </div>
        </div>} */}

        <div className='w-full lg:h-5/6 h-full object-cover hidden lg:block'>
          <AspectRatio ratio={16 / 7.5}>
            <Image src={ModelBg} priority className='block w-full h-full object-cover rounded-lg' alt='' />
          </AspectRatio>
        </div>

        <div className='w-full lg:h-5/6 lg:hidden h-full object-cover'>
          <AspectRatio ratio={1 / 1}>
            <Image src={ModelBg} priority className='block w-full h-full object-cover rounded-lg' alt='' />
          </AspectRatio>
        </div>

        {!goLive &&
          <div className='lg:absolute relative my-2 lg:my-0 bottom-0 left-[35%] bg-base rounded-lg'>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                  onSubmitError(errors);
                })}
                className="p-[0.75rem] flex items-center justify-center gap-1 text-white"
              >
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className=' border-r border-placeholderText -mt-3 pt-0 pr-[0.75rem]'>
                      <FormLabel className="text-white mt-0 pt-0 text-xs">Enter your rate</FormLabel>
                      <FormControl>
                        <Input placeholder="$ 0.00" {...field}
                          type='number'
                          className={`${isDisabled ? "bg-transparent backdrop-blur-xl text-white shadow-md placeholder:text-white border-0" : "bg-tertiary"}  backdrop-blur-lg placeholder:text-placeholderText placeholder:text-xs border  text-black focus:border-white outline-none w-full`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <div className='pl-[0.75rem]'>
                  <p className="text-white text-xs">Go live</p>
                  <Button className={` ${isDisabled ? "backdrop-blur-lg bg-placeholderText bg-blend-overlay opacity-55" : "bg-transparent bg-placeholderText"} h-7 rounded-md py-[1rem] px-[0.6rem]`}>

                    <VideoIcon />
                  </Button>
                </div>


              </form>
            </Form>


          </div>
        }

        {goLive && <div className="lg:absolute flex gap-7 my-2 lg:my-0 bottom-0 left-[45%] z-20">
          <div className={`${mute ? "bg-profile" : "bg-white"} p-1 rounded-full`} onClick={handleMute} >
            {mute ? <MuteIcon className='p-1' /> : <MicrophoneIcon />}
          </div>

          <div className='text-white bg-red p-2 rounded-full'>
            <X color='white' />
          </div>
        </div>}

        {goLive && <div className="lg:absolute bg-white lg:bg-transparent drop-shadow-lg lg:backdrop-blur-xl lg:grid flex gap-3 my-2 lg:my-0 top-[1rem] left-[1rem] p-[1rem] rounded-lg ">
          <div>
            <p className='flex gap-4 items-center'><span className='bg-white p-1 rounded-full'><VideoIcon className='w-5/6 m-auto' /></span> 60:00:00</p>
            <hr className='my-3' />
            <p className='flex gap-4 items-center'><span className='bg-white rounded-full'><WalletIcon className='w-4/6 m-auto' /></span> $0.00</p>
          </div>
        </div>}


        <div className='hidden'>
          <Image src={CallerBg} className='' alt='' />
        </div>

        {live && (
          <div className='absolute top-0 left-0 w-full h-full rounded-lg flex flex-1'>
            <VideoProcessingOverlay />
          </div>
        )}
      </div>

    </div>
  )
}

export default GoLive