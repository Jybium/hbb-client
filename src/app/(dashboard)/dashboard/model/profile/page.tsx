"use client"


import Image from 'next/image'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { onSubmitError } from "@/src/lib/utils";
import React, { useState } from 'react'
import { Camera } from 'lucide-react';
import { EditIcon, PlayIcon } from '@/src/components/svgs';
import { Button } from '@/src/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/src/schema/auth/login';
import { Input } from '@/src/components/ui/input';
import { toast } from 'sonner';
import { Textarea } from '@/src/components/ui/textarea';
import video from "@/public/assests/dashboard/video.svg"
import EditModal from '@/src/components/app-reusables/EditModal';
import data from '@/src/constants/appointment';
import AppointmentCard from '@/src/components/app-reusables/AppointmentCard';
import LineCharts from '@/src/components/app-reusables/visualizations/LineChart';
import datas from '@/src/constants/lineChart';
import Link from 'next/link';
import Logo from "@/public/icons/logo.svg";




const Page = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isPending, startTransition] = React.useTransition();

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            earning: "",
            username: "",
            location: "",
            bio: "",
            callRate: ""
        },
    });

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


    const hideModal = () => {
        setShowModal((prev) => !prev)
    }

    return (
        <main className='lg:max-h-screen'>
            {/* Scrollable */}
            <div className='bg-base2 mt-3 w-full max-h-screen lg:flex justify-between lg:flex-1 gap-x-3 gap-y-3 md:gap-y-0 md:px-[1.5rem] px-[1rem] md:py-[1rem] rounded-lg md:h-[80vh] overflow-y-auto '>

                {/* Model Info */}
                <div className='lg:w-[36%] bg-profile p-[1rem] rounded-lg backdrop-blur-sm overflow-y-auto'>
                    <div className='flex items-center justify-between '>
                        <div className='relative'>
                            {/* <Image src={Logo} alt='image' className='w-[6rem] h-[6rem] rounded-full object-cover' /> */}
                            <div className='w-[5rem] h-[5rem] rounded-full object-cover bg-black relative'></div>
                            <Camera className='p-2 bg-white absolute -left-0 bottom-0 text-base2 rounded-full' color='#E688A3' size={35} />
                        </div>
                        <Button className='text-base2 h-[2rem] bg-white text-sm py-1 px-3 w-2/5 rounded-lg'>
                            Likes 200k
                        </Button>
                    </div>


                    <div className='bg-black w-full h-[2rem] my-[1rem] rounded-lg'>

                    </div>

                    <div>
                        <div className='flex justify-between items-center'>
                            <p>Info</p>
                            <Button className='flex gap-1 border h-[2rem] border-white rounded-lg py-1 lg:py-[2px] px-3 bg-transparent' onClick={hideModal}>

                                <p className='text-xs'>Edit</p>
                                <EditIcon className='' />

                            </Button>
                        </div>
                        <hr className='my-3' />

                        {/* Form */}
                        <div className=''>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                        onSubmitError(errors);
                                    })}
                                    className="grid gap-1"
                                >
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white -mt-2">Username</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter a Valid Email" {...field}
                                                        className="bg-transparent   backdrop-blur-sm placeholder:text-placeholderText placeholder:text-xs border border-white text-white focus:border-white outline-none w-full"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Location</FormLabel>
                                                <FormControl>
                                                    <Input

                                                        placeholder="City, State"
                                                        {...field}
                                                        className="bg-transparent  backdrop-blur-sm placeholder:text-placeholderText placeholder:text-xs border border-white text-white focus:border-white outline-none w-full"

                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="bio"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white">My bio</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        rows={1}
                                                        placeholder="Write something about you"
                                                        {...field}

                                                        className="bg-transparent  backdrop-blur-sm placeholder:text-placeholderText placeholder:text-xs border border-white text-white focus:border-white outline-none w-full"

                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                    {/* Interests */}
                                    <div className='flex flex-wrap gap-2 py-[0.75rem]'>
                                        <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-base rounded-full text-xs'>Walking dog</p>
                                        <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-base rounded-full text-xs'>Walking dog</p>
                                        <p className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-base rounded-full text-xs'>Walking dog</p>
                                    </div>

                                    {/* Call rate */}
                                    <FormField
                                        control={form.control}
                                        name="callRate"
                                        render={({ field }) => (
                                            <FormItem className='relative'>
                                                <FormLabel className="text-white">Your call request rate</FormLabel>
                                                {/* <p className='absolute left-0 bottom-0 bg-'>$</p> */}
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        type='number'
                                                        placeholder='$'
                                                        className="bg-transparent  backdrop-blur-sm relative placeholder:text-placeholderText placeholder:text-xs border border-white text-white focus:border-white outline-none w-full"

                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </form>
                            </Form>
                        </div>
                    </div>
                </div>

                {/* Model Video */}

                <div className='lg:w-[36%] rounded-lg backdrop-blur-sm'>
                    <div className='relative h-3/5 rounded-lg'>
                        <Button className='flex justify-end gap-1 border h-[2rem] border-white rounded-lg py-1 lg:py-[2px] px-3 bg-transparent absolute top-2 right-2 z-30' >

                            <p className='text-xs'>Edit</p>
                            <EditIcon className='' />

                        </Button>
                        <Image alt='profile video' src={video} className='relative w-full h-full object-cover rounded-lg' />
                        <div className='absolute top-[36%] left-[38%]'>

                            <PlayIcon />
                        </div>
                    </div>
                    <div className='bg-base bottom-0 mt-2 relative pb-[0.4rem] rounded-lg overflow-hidden hidde'>
                        <div className="flex justify-between items-center mt-1">
                            <p>my profile views <span>32</span></p>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                        onSubmitError(errors);
                                    })}
                                    className="mt-[2rem] lg:mt-[10px]  grid gap-1 text-white"
                                >
                                    <FormField
                                        control={form.control}
                                        name="earning"
                                        render={({ field }) => {

                                            const handleCountrySelect = (value: any) => {

                                                const [countryCode, flag] = value.split('|');

                                                form.setValue('earning', countryCode);
                                                field.onChange(flag);
                                            };

                                            return (
                                                <FormItem className="relative w-full">
                                                    <div className="flex w-full relative">
                                                        <FormControl className="text-xs">

                                                            <Select onValueChange={handleCountrySelect} defaultValue={`${field.value} | `}>
                                                                <SelectTrigger className="w-full bg-white rounded-r-none text-xs  backdrop-blur-sm placeholder:text-profile border border-profile text-base focus:border-white outline-none relative">
                                                                    <SelectValue placeholder="Last 7 days" className="text-xs w-fit text-base" />
                                                                </SelectTrigger>
                                                                <SelectContent className="w-fit bg-base top-0 max-h-20 overflow-y-auto drop-shadow-md" >
                                                                    <ScrollArea className="absolute max-h-20 overflow-y-auto scroll">
                                                                        <SelectItem value="US|🇺🇸" className="w-full">Last 7 days</SelectItem>
                                                                        <SelectItem value="GB|🇬🇧">This Month</SelectItem>
                                                                        <SelectItem value="CA|🇨🇦">This year</SelectItem>
                                                                        <SelectItem value="CA|🇨🇦">All</SelectItem>
                                                                        <ScrollBar orientation="vertical" className="bg-placeholderText scroll" />
                                                                    </ScrollArea>

                                                                </SelectContent>
                                                            </Select>


                                                        </FormControl>
                                                    </div>

                                                    <FormMessage />
                                                </FormItem>
                                            );
                                        }}
                                    />
                                </form>
                            </Form>
                        </div>
                        <div>

                            <LineCharts data={datas} />
                        </div>
                    </div>
                </div>


                {/* Model Appointment */}
                <div className='lg:w-[36%] rounded-lg backdrop-blur-sm'>
                    <div className='lg:h-3/5 px-[0.5rem] pt-[0.8rem]  bg-profile rounded-lg'>

                        <p>My appointment <span>12</span></p>
                        <div className='md:h-5/6 overflow-y-auto'>
                            <div className='my-1'>
                                <AppointmentCard item={data} />
                            </div>
                        </div>
                    </div>
                    <div className='overflow-y-auto'>
                        <div className='bg-profile lg:px-[1rem] px-[1rem] py-[1.2rem] lg:py-[0.3rem] rounded-lg shadow-md my-1'>
                            <div className='flex justify-between'>
                                <p>Earning from live calls</p>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                            onSubmitError(errors);
                                        })}
                                        className="mt-[2rem] md:mt-[10px]  grid gap-1 text-white"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="earning"
                                            render={({ field }) => {

                                                const handleCountrySelect = (value: any) => {

                                                    const [countryCode, flag] = value.split('|');

                                                    form.setValue('earning', countryCode);
                                                    field.onChange(flag);
                                                };

                                                return (
                                                    <FormItem className="relative">
                                                        <div className="flex w-full relative">
                                                            <FormControl className="">

                                                                <Select onValueChange={handleCountrySelect} defaultValue={`${field.value} | `}>
                                                                    <SelectTrigger className="w-2/4 bg-transparent rounded-r-none  backdrop-blur-sm px-2 placeholder:text-profile border border-profile text-white focus:border-white outline-none relative">
                                                                        <SelectValue placeholder="Select a country" className="text-sm" />
                                                                    </SelectTrigger>
                                                                    <SelectContent className="w-full bg-base absolute top-0 max-h-20 overflow-y-auto">
                                                                        <ScrollArea className="absolute max-h-20 overflow-y-auto scroll">
                                                                            <SelectItem value="US|🇺🇸" className="w-full">🇺🇸 +1dsdjhsjhjshjh</SelectItem>
                                                                            <SelectItem value="GB|🇬🇧">🇬🇧 +44sjkjkkkkkkkkkkerrrrrrr</SelectItem>
                                                                            <SelectItem value="CA|🇨🇦">🇨🇦 +1 hsdjjjjjsdddsderrrrrere</SelectItem>
                                                                            <SelectItem value="CA|🇨🇦">🇨🇦 +1 dssssdsdsddsdseerreeree</SelectItem>
                                                                            <ScrollBar orientation="vertical" className="bg-placeholderText scroll" />
                                                                        </ScrollArea>

                                                                    </SelectContent>
                                                                </Select>


                                                            </FormControl>
                                                        </div>

                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    </form>
                                </Form>
                            </div>
                            <p>$1,234</p>
                        </div>
                        <div className='bg-profile lg:px-[1rem] px-[1rem] py-[1.2rem] lg:py-[0.3rem] rounded-lg shadow-md my-1'>
                            <div className='flex justify-between '>
                                <p>Earning from gifts</p>
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onHandleSubmit, (errors) => {
                                            onSubmitError(errors);
                                        })}
                                        className="mt-[2rem] md:mt-[10px]  grid gap-1 text-white"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="earning"
                                            render={({ field }) => {

                                                const handleCountrySelect = (value: any) => {

                                                    const [countryCode, flag] = value.split('|');

                                                    form.setValue('earning', countryCode);
                                                    field.onChange(flag);
                                                };

                                                return (
                                                    <FormItem className="relative">
                                                        <div className="flex w-full relative">
                                                            <FormControl className="">

                                                                <Select onValueChange={handleCountrySelect} defaultValue={`${field.value} | `}>
                                                                    <SelectTrigger className="w-2/4 bg-transparent rounded-r-none  backdrop-blur-sm px-2 placeholder:text-profile border border-profile text-white focus:border-white outline-none relative">
                                                                        <SelectValue placeholder="Select a country" className="text-sm" />
                                                                    </SelectTrigger>
                                                                    <SelectContent className="w-full bg-base absolute top-0 max-h-20 overflow-y-auto">
                                                                        <ScrollArea className="absolute max-h-20 overflow-y-auto scroll">
                                                                            <SelectItem value="US|🇺🇸" className="w-full">🇺🇸 +1dsdjhsjhjshjh</SelectItem>
                                                                            <SelectItem value="GB|🇬🇧">🇬🇧 +44sjkjkkkkkkkkkkerrrrrrr</SelectItem>
                                                                            <SelectItem value="CA|🇨🇦">🇨🇦 +1 hsdjjjjjsdddsderrrrrere</SelectItem>
                                                                            <SelectItem value="CA|🇨🇦">🇨🇦 +1 dssssdsdsddsdseerreeree</SelectItem>
                                                                            <ScrollBar orientation="vertical" className="bg-placeholderText scroll" />
                                                                        </ScrollArea>

                                                                    </SelectContent>
                                                                </Select>


                                                            </FormControl>
                                                        </div>

                                                        <FormMessage />
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                    </form>
                                </Form>
                            </div>
                            <p>$1,234</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* Scrollable */}


            {/* Edit Modal */}

            <div>
                {showModal && <EditModal hideModal={hideModal} />}
            </div>
        </main>
    )
}

export default Page