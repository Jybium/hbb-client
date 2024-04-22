import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="splash-bg relative bg-cover bg-center` backdrop-blur-lg md:h-screen w-full h-full">
      <div className="absolute inset-0 bg-overlay opacity-100"></div>
      <div className="flex justify-center items-cente h-full w-full relative z-10 ">
        {children}
      </div>
    </div>
  );
};

export default layout