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
import { CameraIcon, EditIcon, PlayIcon } from '@/src/components/svgs';
import { Button } from '@/src/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/src/schema/auth/login';
import { Input } from '@/src/components/ui/input';
import { toast } from 'sonner';
import { Textarea } from '@/src/components/ui/textarea';


import video from "@/public/assests/dashboard/video.svg"
import EditModal from '@/src/components/app-reusables/EditModal';

const page = () => {
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


    const hideModal= ()=>{
        setShowModal((prev) => !prev)
    }

    return (
        <main className='md:max-h-screen'>
            <div className='flex items-center justify-between text-[1.50rem]'>
                <p>Profile</p>
                <div className='flex gap-[1.50rem]'>
                    <p className='w-[3.5rem] h-[3.5rem] rounded-full bg-tertiary flex justify-center items-center'>p</p> <p className='w-[3.5rem] h-[3.5rem] rounded-full bg-tertiary flex justify-center items-center'>p</p>
                </div>
            </div>

            {/* Scrollable */}
            <div className='bg-base2 mt-3 w-full max-h-screen flex flex-1 gap-x-3 px-[1.5rem] py-[1rem] rounded-lg md:h-[80vh] overflow-y-auto scrollbar'>

                {/* Model Info */}
                <div className='w-1/3 bg-profile p-[1rem] rounded-lg backdrop-blur-sm overflow-y-auto'>
                    <div className='flex items-center justify-between '>
                        <div className='relative'>
                            {/* <Image src={Logo} alt='image' className='w-[6rem] h-[6rem] rounded-full object-cover' /> */}
                            <div className='w-[5rem] h-[5rem] rounded-full object-cover bg-black relative'></div>
                            <Camera className='p-2 bg-white absolute -left-0 bottom-0 text-base2 rounded-full' color='#E688A3' size={35} />
                        </div>
                        <Button className='text-base2 h-[2rem] bg-white text-sm py-1 px-3 w-2/5 rounded-md'>
                            Likes 200k
                        </Button>
                    </div>


                    <div className='bg-black w-full h-[2rem] my-[1rem] rounded-lg'>

                    </div>

                    <div>
                        <div className='flex justify-between items-center'>
                            <p>Info</p>
                            <Button className='flex gap-1 border h-[2rem] border-white rounded-md py-1 md:py-[2px] px-3 bg-transparent' onClick={hideModal}>

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

                <div className='w-1/3 bg-profile rounded-lg backdrop-blur-sm'>
                    <div className='relative h-3/5'>
                        <Button className='flex justify-end gap-1 border h-[2rem] border-white rounded-md py-1 md:py-[2px] px-3 bg-transparent absolute top-2 right-2 z-30' >

                            <p className='text-xs'>Edit</p>
                            <EditIcon className='' />

                        </Button>
                        <Image alt='' src={video} className='relative' />
                        <div className='absolute top-1/3 left-[40%]'>

                            <PlayIcon />
                        </div>
                    </div>
                    <div className='bg-base mt-2'>
                        <div className="flex justify-between">
                            <p>my profile views <span>32</span></p>
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
                    </div>
                </div>


                {/* Model Appointment */}
                <div className='w-1/3 bg-profile p-[1rem] rounded-lg backdrop-blur-sm'>
                    <div className='h-3/5'>

                        <p>My appointment <span>12</span></p>
                        <div className='h-[55%]'>

                        </div>
                    </div>
                    <div>
                        <div>
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
                        <div>
                            <div className='flex justify-between'>
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
                {showModal && <EditModal hideModal={hideModal}/>}
            </div>
        </main>
    )
}

export default page