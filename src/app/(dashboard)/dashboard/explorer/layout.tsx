import Image from 'next/image';
import Logo from "@/public/icons/logo.svg";
import Link from 'next/link';
import NavBar from '@/src/components/app-reusables/explorer/NavBar';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="splash-bg relative bg-cover bg-center backdrop-blur-lg lg:max-h-screen w-full h-full">
            <div className="absolute inset-0 bg-overlay opacity-100"></div>
            <div className="lg:flex justify-cente items-cente h-full w-full relative z-10">
                <NavBar />
                <div className='w-full md:px-[2.5rem] md:py-[0.5rem] px-[1rem] py-[1.50rem] h-screen overflow-y-auto'>
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

                    <div className='mt-5'>
                    {children}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default layout;