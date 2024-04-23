import Image from 'next/image';
import React from 'react'
import Logo from "@/public/icons/logo.svg";
import data from '@/src/constants/navBar';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="splash-bg relative bg-cover bg-center backdrop-blur-lg md:max-h-screen w-full h-full">
            <div className="absolute inset-0 bg-overlay opacity-100"></div>
            <div className="md:flex justify-cente items-cente h-full w-full relative z-10">
                <aside className='md:w-[10rem] w-full bg-black grid justify-center content-center py-[2rem]'>
                    <Link href="/" className="text-center w-full lg:w-auto">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={400}
                            height={400}
                            className="block w-[4rem] lg:w-[4rem] 2xl:w-[4rem] mx-auto"
                        />
                    </Link>
                    <nav className='grid gap-1 w-full py-3'>
                        {data.map((item) => (

                            <div className='' key={item.id} >
                                <Link href={`/dashboard/`} passHref className='grid justify-center text-center'>
                                    <Image alt={item.title} src={item.image} className='block w-[85%] h-[85%] mx-auto  object-cover' />
                                    <p className='text-sm -mt-2'>{item.title}</p>
                                </Link>
                            </div>
                        ))}
                    </nav>

                    <Button variant="ghost">
                        Logout
                    </Button>
                </aside>
                <div className='w-full md:px-[2.5rem] md:py-[1rem] px-[1rem] py-[1.50rem] overflow-y-auto'>
                    {children}

                </div>
            </div>
        </div>
    );
};

export default layout;
