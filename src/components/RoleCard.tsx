import React from "react";
import Image from "next/image";

interface RoleCardProps {
  role: "model" | "explorer";
  selected: boolean;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ role, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`py-7 px-8 lg:py-4 p-7 rounded-28 border w-fit cursor-pointer transition-all delay-75 duration-500 ease-in-out ${
        selected
          ? "bg-base2 border-base2"
          : "bg-white border-black hover:bg-base2/75"
      }`}
    >
      <div className="flex flex-col gap-8">
        <Image
          className="md:w-[120px] w-20 md:h-[120px] h-20 rounded-full"
          src={`/assests/${role}.png`}
          alt={`${role} image`}
          height={100}
          width={100}
        />
        <p className="lg:text-2xl font-medium capitalize">
          {role}
          {/* {role.charAt(0).toUpperCase() + role.slice(1)} */}
        </p>
      </div>
    </div>
  );
};

export default RoleCard;
