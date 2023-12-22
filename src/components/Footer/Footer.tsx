import React from "react";
import { FooterProps } from "./Footer.props";
import NavLinks from "../NavLinks/NavLinks";

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  const year = new Date().getFullYear();

  const links = [
    { href: "#", text: "About", className: "hover:underline" },
    {
      href: "#",
      text: "Privacy Policy",
      className: "hover:underline  ",
    },
    {
      href: "#",
      text: "Licensing",
      className: "hover:underline  ",
    },
    {
      href: "https://prokushev.com/",
      text: "Contact",
      className: "hover:underline  ",
    },
  ];

  return (
    <footer className="bg-white mt-16 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{year}{" "}
          <a href="https://prokushev.com/" className="hover:underline">
            Prokushev
          </a>
          . All Rights Reserved.
        </span>
        <NavLinks
          className="flex flex-wrap items-center  gap-3 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
          links={links}
        />
      </div>
    </footer>
  );
};

export default Footer;
