import Image from 'next/image';
import React from 'react'
import Logo from "@/public/icons/logo.svg";
import data from '@/src/constants/navBar';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="splash-bg relative bg-cover bg-center backdrop-blur-lg md:h-screen w-full h-full">
            <div className="absolute inset-0 bg-overlay opacity-100"></div>
            <div className="md:flex justify-center items-center h-full w-full relative z-10">
                <div className='md:w-[10.63rem] w-full'>
                    <div className="text-center w-full lg:w-auto">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={400}
                            height={400}
                            className="block w-40 lg:w-80 2xl:w-96 mx-auto"
                        />
                    </div>
                    <div>
                        {data.map((item) => (
                            // Explicitly return a React element (e.g., div) for each item
                            <div className='' key={item.id}>
                                <Link href={`/dashboard/`} passHref>
                                    <Image alt={item.title} src={item.image} />
                                    <p>{item.title}</p>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <Button>
                        Logout
                    </Button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;
