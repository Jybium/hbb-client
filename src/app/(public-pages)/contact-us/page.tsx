import ContactForm from "@/src/components/ContactForm";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full py-[35px] px-4 lg:py-14 lg:px-[120px] md:px-20 md:py-12">
      <div className="flex flex-col lg:flex-row w-full h-full lg:justify-between items-center overflow-y-scroll no-scrollbar lg:overflow-y-hidden">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2 items-center">
          <Image
            className="w-[168px] h-[168px] lg:w-[390px] lg:h-[390px] object-contain"
            width={91}
            height={91}
            src={"/assests/logo.svg"}
            alt="logo"
          />
        </div>

        <div className="w-full lg:w-1/2 md:mt-8 lg:mt-0 text-white h-full lg:flex lg:items-center lg:justify-center">
          <div className="w-full lg:max-w-[493px]">
            <div className="mb-5 lg:mb-6">
              <h4 className="font-medium lg:text-4xl text-32px mb-4 lg:mb-5">
                Contact us
              </h4>
              <p className="">
                If you have any questions, kindly utilize the form provided
                below to get in touch with us.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
