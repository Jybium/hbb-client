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
    <div className='w-full h-screen backdrop-blur-md'>
      <section className='h-[85vh] bg-base grid justify-center'>

        <div className=' px-[2rem] py-[2.50rem] w-4/5 mx-auto'>
          <div className='flex justify-between'>
            <p>Edit Profile</p>
            <Button onClick={hideModal}>

            <CancelIcon />
            </Button>
          </div>
          <section className=''>
            <div className='w-1/2 bg-profile p-[1rem] rounded-lg backdrop-blur-sm overflow-y-auto'>
              <div className='bg-black w-full h-[2rem] my-[1rem] rounded-lg'>

              </div>

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
            <div>
              <p>Interest (maximum 3 interests)</p>

              <div className='flex flex-wrap gap-2 py-[0.75rem]'>
                {data.map((item) => (
                  <p key={item.id} className='px-3 py-1 h-[2rem] text-center w-fit content-center grid bg-profile rounded-full text-xs'>{item.name}</p>
                ))}

              </div>
            </div>
          </section>
        </div>
      </section>
    </div> 
  )
}

export default EditModal