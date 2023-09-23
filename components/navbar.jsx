"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
// import Dropdown from "./dropdown";
import Image from "next/image";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "HOME", url: "/" },
    { name: "ABOUT", url: "#about" },
    { name: "PORTFOLIO", url: "#work" },
    { name: "CLIENT", url: "#client" },
    { name: "CONTACT", url: "#contactForm" },
  ];
  return (
    <nav className="w-full ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="">
              <div className="avatar">
                <div className="flex gap-4 items-center">
                  <Image src={'/logo.png'} width={70} height={70} className="rounded-[50%] object-cover"/>
                  <span className="logo">MUZAMMIL <br /> HUSSIAN</span>
                </div>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-[#EE5939ED] text-[20px]" />
                // "djdj"
                ) : (
                  <AiOutlineMenu className="text-[#EE5939ED] text-[20px]" />
                // "djd"
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url }, index) => (
                <li key={index} className="">
                    <Link href={url} className="navLinks hover:text-[#EE5939ED]">{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;