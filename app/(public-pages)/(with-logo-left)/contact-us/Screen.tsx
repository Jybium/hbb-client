import React from "react";


const Screen = () => {
  return (
      <div className=" lg:grid grid-cols-2 items-center px-[4%] md:px-[20%] lg:px-[4%]  2xl:px-[6%] md:py-[5px] py-[10px]">
        <div className="w-full xl:w-[493px] ">
          <h4 className="text-[32px] font-[500] text-white md:mt-[5px] mt-[10px] md:text-[54px]">
            Contact us
          </h4>
          <h4 className="text-[15px] font-[400] text-white mt-[16px] md:mt-0 md:text-[18px] md:leading-[27px]">
            If you have any questions, kindly utilize the form provided below to
            get in touch with us.
          </h4>
          <form className="mt-[20px] md:mt-[10px]">
            <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 md:gap-[20px]">
              <div>
                <h4 className="text-[#F3F3F3] font-[500] text-[12px] mb-[8px] ">
                  Name
                </h4>
                <input
                  className="w-full rounded-[8px] px-[12px] py-[10px] md:px-[20px] md:py-[10px]  placeholder:text-[#F3F3F3] placeholder:text-[14px] placeholder:font-[400] text-[14px] bg-rgba-6ab5d2-16 border border-transparent focus:border-primary2 outline-none"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>

              <div className="">
                <h4 className="text-[#F3F3F3] font-[500] text-[12px] mb-[8px] ">
                  Email address
                </h4>
                <input
                  className="w-full rounded-[8px] px-[12px] py-[10px] md:px-[20px] md:py-[10px]  placeholder:text-[#F3F3F3] placeholder:text-[14px] placeholder:font-[400] text-[14px] bg-rgba-6ab5d2-16 border border-transparent focus:border-primary2 outline-none"
                  placeholder="Enter your email address"
                  type="email"
                />
              </div>
            </div>

            <div className="mt-[12px] md:mt-[20px]">
              <h4 className="text-[#F3F3F3] font-[500] text-[12px] mb-[8px] ">
                Subject of your message
              </h4>
              <input
                className="w-full rounded-[8px] px-[12px] py-[10px] md:px-[20px] md:py-[10px]  placeholder:text-[#F3F3F3] placeholder:text-[14px] placeholder:font-[400] text-[14px] bg-rgba-6ab5d2-16 border border-transparent focus:border-primary2 outline-none"
                placeholder="Enter the subject of your message"
                type="text"
              />
            </div>

            <div className="mt-[12px] md:mt-[20px]">
              <h4 className="text-[#F3F3F3] font-[500] text-[12px] mb-[8px] ">
                Message
              </h4>
              <textarea
                className="w-full rounded-[8px] px-[12px] py-[10px] md:px-[20px] md:py-[10px]  placeholder:text-[#F3F3F3] placeholder:text-[14px] placeholder:font-[400] text-[14px] bg-rgba-6ab5d2-16 border border-transparent focus:border-primary2 outline-none"
                placeholder="Enter your message here"
                rows={2}
              ></textarea>
            </div>
            <button className="bg-white w-full px-[20px] py-[12px] rounded-[32px] mt-[20px] md:mt-[20px] text-black text-[16px] md:text-[18px] font-[400] hover:bg-gray-300">
              Submit
            </button>
          </form>
        </div>
      </div>
  );
};

export default Screen;
