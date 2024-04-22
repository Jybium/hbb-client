import React from "react";
import  Link  from "next/link";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-full flex items-center justify-center w-full">
      <div className="px-[4%] w-full">
        <div className=" pb-[8px] border-b-[1px] border-[#D9D9D9] md:w-2/4 mx-auto">
          <div className="flex justify-between lg:w-5/6 mx-auto items-center">
            <Link href="/about-us">
              <button className="text-[11px] md:text-xs text-text font-[400]">
                About
              </button>
            </Link>
            <Link href="/terms-of-use">
              <button className="text-[11px] md:text-xs text-text font-[400]">
                Terms of service
              </button>
            </Link>
            <Link href="/privacy-policy">
              <button className="text-[11px] md:text-xs text-text font-[400]">
                Privacy policy
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="text-[11px] md:text-xs text-text font-[400]">
                Contact us
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[15px]">
          <div className="mr-[4px]">
            <Copyright color="#6C6D71" size={12}/>
          </div>
          <h4 className="text-[11px] text-text font-[400] ">
            2024 Honey bunny bun{" "}
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
