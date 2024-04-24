"use client"

import React from 'react'
import { CancelIcon, EditIcon } from '../svgs'


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";


import { Button } from '@/src/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/src/schema/auth/login';
import { Input } from '@/src/components/ui/input';
import { toast } from 'sonner';
import { Textarea } from '@/src/components/ui/textarea';
import data from '@/src/constants/interests';
import { onSubmitError } from '@/src/lib/utils';

const EditModal = ({ hideModal }: { hideModal: () => void }) => {

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


  return (
    <div className='w-full h-screen backdrop-blur-sm absolute top-0 left-0 right-0 grid justify-center content-center'>
      <section className='h-[85vh] md:w-4/5 m-auto grid justify-center'>

        <div className=' md:px-[2rem] px-[1rem] md:py-[2rem] py-[1rem] md:w-4/5 w-[90%] mx-auto bg-base rounded-lg'>
          <div className='flex justify-between items-center'>
            <p>Edit Profile</p>
            <Button onClick={hideModal} className='bg-placeholderText rounded-lg px-3 py-1' variant="link">

            <CancelIcon className='w-4/5 p-0'/>
            </Button>
          </div>
          <section className='md:flex justify-between'>
            <div className='md:w-[45%] p-[1rem] rounded-lg backdrop-blur-sm overflow-y-auto'>
              <div>
                <div className='flex justify-between items-center'>
                  <p>Info</p>
                  <Button className='flex gap-1 border h-[2rem] border-white rounded-md py-1 md:py-[2px] px-3 bg-transparent' >

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
            <div className='md:w-[45%]  rounded-lg'>
              <p>Interest (maximum 3 interests)</p>

              <div className='flex flex-wrap gap-2 py-[0.75rem] p-[0.75rem] bg-white rounded-lg mt-2' >
                {data.map((item) => (
                  <p key={item.id} className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-profile rounded-xl text-xs'>{item.name}</p>
                ))}

              </div>
            </div>
          </section>
        <Button variant="yellow" className='md:w-1/2 mx-auto  grid justify-center h-8 mt-[1.78rem]' onClick={hideModal}>

          Save updates
        </Button>
        </div>
      </section>
    </div> 
  )
}

export default EditModal