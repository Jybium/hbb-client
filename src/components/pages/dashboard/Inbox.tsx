"use client"

import React, { startTransition } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Separator } from '../../ui/separator';
import { useForm } from 'react-hook-form';
import { Button } from "@/src/components/ui/button";
import { SearchIcon } from '../../svgs';
import { toast } from 'sonner';
import { Input } from "@/src/components/ui/input";
import InboxCard from '@/src/components/app-reusables/explorer/inbox/InboxCard'
import InboxDetails from '@/src/components/app-reusables/explorer/inbox/InboxDetails'

const Inbox = () => {

  const form = useForm({

    defaultValues: {
      search: "",
      password: "",
    },
  });

  const onHandleSubmit = async (data: any) => {
    startTransition(async () => {
      try {
       
      } catch (error: any) {
        console.error("Error logging in:", error.message);
        // Handle any errors here, such as displaying an error message to the user
        toast.error("Error logging in. Please try again later.");
      }
    });
  };

  return (
    <main className='bg-pink md:h-[calc(100vh-100px)]  w-full rounded-2xl'>

      <div className='h-full w-full md:flex md:justify-between'>

        <div className='md:w-2/5 px-[1.50rem] py-[1.50rem] md:border-r border-placeholderText2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onHandleSubmit)}
              className="space-y-5 lg:space-y-3 md:space-y-72"
            >
              <div className="relative bg-white rounded-2xl focus:bg-white/20 active:bg-white-20">
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem className='relative pl-6'>
                      <FormControl className="relative">
                        <Input
                          placeholder='Search .....'
                          className="border-0 py-12.5px bg-white pl-10 px-5 placeholder:text-placeholderText2 text-sm w-full placeholder:font-bold h-fit focus:border-0 rounded-2xl focus:bg-white/20 active:bg-white-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span className="absolute top-1 left-2">
                    <SearchIcon/>
                </span>
              </div>
            </form>
          </Form>

          <div className="flex justify-between items-center">

            <p>All inbox</p>
            <Button variant="link" className='text-xs font-thin text-red no-underline'>
              Empty inbox
            </Button>

          </div>


          <div className="grid flex-grow overflow-y-auto md:h-4/5 h-full pr-3 gap-y-2">
          <InboxCard type='actionRequired'/>
          <InboxCard type='accepted'/>
          <InboxCard type='admin'/>
          <InboxCard type='rejected'/>
          <InboxCard type='neutral'/>
          </div>

        </div>


        <Separator className='w-[0.04rem] h-full bg-placeholderText hidden lg:grid overflow-hidden' orientation='vertical' />

        <div className="md:w-3/5 px-[1.50rem] py-[1.50rem]">

        <InboxDetails />

        </div>

      </div>

    </main>
  )
}

export default Inbox;