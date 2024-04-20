import React from "react";
import Image from "next/image";

import Logo from "../../../public/assests/logo.svg";
import Footer from "../../../components/app-reusables/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="md:h-screen w-full">
      <section className="md:flex justify-center content-center w-full md:h-[82%] h-full bg-background">
        <section className="md:flex justify-between items-center content-center m-auto w-[90%]">
          <div>
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              priority
              className="block max-w-full md:w-[350px] w-[196px] mx-auto md:mx-[0px]"
            />
          </div>
          <section className="md:w-[57%] md:h-[80%] w-full h-full">
            {children}
          </section>
        </section>
      </section>
      <div className="md:h-1/6 h-fit">
        <Footer />
      </div>
    </main>
  );
};

export default layout;
