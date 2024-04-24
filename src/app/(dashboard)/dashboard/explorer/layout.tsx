import NavBar from '@/src/components/app-reusables/explorer/NavBar';


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="splash-bg relative bg-cover bg-center backdrop-blur-lg lg:max-h-screen w-full h-full">
            <div className="absolute inset-0 bg-overlay opacity-100"></div>
            <div className="lg:flex justify-cente items-cente h-full w-full relative z-10">
                <NavBar />
                <div className='w-full md:px-[2.5rem] md:py-[0.5rem] px-[1rem] py-[1.50rem] h-screen overflow-y-auto'>
                    {children}

                </div>
            </div>
        </div>
    );
};

export default layout;