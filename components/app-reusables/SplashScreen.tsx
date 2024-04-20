import React from "react";
import splashscreenMobile from "../../public/assests/splash-mobile.svg";
import splashscreenDesktop from "../../public/assests/splash-desktop.svg"
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const SplashScreen = () => {
  return (
    <div className="image-container">
      
        <Image
          src={splashscreenMobile}
          alt="splash image"
          className="h-full w-full block object-cover"
          layout="fill"
        />
    
    </div>
  );
};

export default SplashScreen;
