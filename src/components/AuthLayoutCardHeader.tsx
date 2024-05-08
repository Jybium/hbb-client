"use client";

import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AuthLayoutCardHeader = () => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-2 pb-3 lg:pb-2 border-b border-b-tertiary">
      <div className="flex items-center">
        {pathname === "/forgot-password" && (
          <Link
            href="/log-in"
            className="w-7 h-7 bg-borderWhite text-black rounded-lg flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" color="black" size={18} />
          </Link>
        )}
      </div>

      <div className="flex lg:items-center justify-between">
        <Image
          className="lg:w-[70px] w-[63px]"
          width={63}
          height={63}
          src={"/icons/logo.svg"}
          alt="logo"
        />

        <Link
          href="/"
          className="w-7 h-7 bg-borderWhite text-black rounded-lg flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" color="black" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default AuthLayoutCardHeader;
