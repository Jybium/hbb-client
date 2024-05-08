import Footer from "@/src/components/app-reusables/Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-black h-full">
      <div className="h-screen flex flex-col">
        <div className="w-full h-full bg-background overflow-hidden">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
