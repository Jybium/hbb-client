import React from "react";
import Link from "next/link";
import { Copyright } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black w-full px-4 py-7">
      <div className="w-full mx-auto flex flex-col justify-center items-center">
        <ul className="flex items-center justify-between w-full lg:w-1/2 md:w-3/4 py-[10px] border-b border-[#D9D9D9] md:px-5">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.link} className="text-sm text-text">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5 md:mt-4 flex justify-center items-center gap-1 md:gap-2">
          <Copyright color="#6C6D71" size={16} />
          <p className="text-xs md:text-sm text-text">
            {currentYear} Honey bunny bun
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = [
  {
    name: "About",
    link: "/about-us",
  },
  {
    name: "Terms of service",
    link: "/terms-of-use",
  },
  {
    name: "Privacy policy",
    link: "/privacy-policy",
  },
  {
    name: "Contact us",
    link: "/contact-us",
  },
];
