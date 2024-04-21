import React from "react";
import Image from "next/image";

import Logo from "@/public/icons/logo.svg";
import Footer from "@/src/components/app-reusables/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="md:h-screen h-screen w-full">
      <section className="sm:grid lg:flex items-center content-center w-full h-[85vh] bg-background">
        <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 pt-4 lg:pt-0 lg:gap-32">
          <div className="hidden lg:block text-center content-center w-full lg:w-auto">
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              className="block w-40 lg:w-80 mx-auto"
            />
          </div>
          <section className="lg:w-[35rem] lg:h-[80%] items-center lg:justify-end content-center w-full sm:grid">
            {children}
          </section>
        </section>
      </section>
      <div className="h-[15vh]">
        <Footer />
      </div>
    </main>
  );
};

export default layout;
