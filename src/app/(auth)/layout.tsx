import React from "react";
import Image from "next/image";

import Footer from "@/src/components/app-reusables/Footer";
import AuthLayoutCardHeader from "@/src/components/AuthLayoutCardHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-black h-full">
      <div className="h-screen flex flex-col">
        <div className="w-full h-full bg-background overflow-hidden">
          <div className="w-full h-full py-[35px] px-4 lg:py-14 lg:px-[120px] md:px-20 md:py-12">
            <div className="flex flex-col lg:flex-row w-full h-full lg:justify-between items-center">
              <div className="hidden lg:flex justify-center lg:justify-start w-full lg:w-1/2 items-center">
                <Image
                  className="w-[168px] h-[168px] lg:w-[390px] lg:h-[390px] object-contain"
                  width={91}
                  height={91}
                  src={"/assests/logo.svg"}
                  alt="logo"
                />
              </div>

              <div className="w-full lg:w-1/2 h-full">
                <div className="bg-white h-full rounded-[32px] w-full lg:max-w-[565px] md:py-4 md:px-9 p-4 flex flex-col">
                  <AuthLayoutCardHeader />

                  <div className="h-full overflow-hidden">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default layout;
