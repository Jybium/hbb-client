import React from "react";
import Image from "next/image";
import image from "@/public/assests/dashboard/dashboard.png";
import ProfileForm from "../../app-reusables/form/ProfileForm";

const Profile = () => {
  return (
    <main className="w-full md:px-[2.5rem] md:py-[2rem] px-[1rem]  py-[1.50rem]">
      <section className="lg:flex justify-between grid w-full h-full rounded-[1rem]  bg-base2">
        <div className="">
          <Image
            src={image}
            alt=""
            className="object-cover lg:block hidden h-full w-full rounded-l-[1rem] overflow-hidden"
          />
        </div>

        <div className="flex-1 w-full flex md:mx-[2rem] md:-[2.94rem px-[1rem]">
          <ProfileForm />
        </div>
      </section>
    </main>
  );
};

export default Profile;
