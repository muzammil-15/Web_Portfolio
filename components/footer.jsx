"use client";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
// import Dropdown from "./dropdown";
import Image from "next/image";

const Footer = () => {
  const menu = [
    { name: "Home", url: "/" },
    { name: "About", url: "#about" },
    { name: "Portfolio", url: "#work" },
    { name: "Client", url: "#client" },
    { name: "Contact", url: "#contactForm" },
  ];
  const resources = [
    { name: "Authentication", url: "/" },
    { name: "System Status", url: "/" },
    { name: "Our Rights", url: "/" },
    { name: "Pricing", url: "/" },
    { name: "Tearms of Services", url: "/" },
  ];
  const developers = [
    { name: "Documentation", url: "/" },
    { name: "Authentication ", url: "/" },
    { name: "Open Source", url: "/" },
    { name: "Support", url: "/" },
    { name: "Api Refrence", url: "/" },
  ];
  return (
    <nav className="w-full ">
      <div className="justify-start flex-wrap gap-40 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="">
              <div className="avatar">
                <div className="flex gap-4 items-center">
                  <Image
                    src={"/logo.png"}
                    width={70}
                    height={70}
                    className="rounded-[50%] object-cover"
                  />
                  <span className="logo">
                    MUZAMMIL <br /> HUSSIAN
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <Link href={"https://www.facebook.com/muzammil.hussainhassu/"} target="blank">
              <div className="social hover:bg-[#191c1f]">
                <BsFacebook className="text-white text-[40px]" />
              </div>
            </Link>
            <Link href={"https://github.com/muzammil-15?tab=repositories"} className="social" target="blank">
              <div className="social hover:bg-[#191c1f]">
                <BsGithub className="text-white text-[40px]" />
              </div>
            </Link>
            <Link href={"https://www.linkedin.com/in/muzammil-hussain-a72187262/"} className="social" target="blank">
              <div className="social hover:bg-[#191c1f]">
                <BsLinkedin className="text-white text-[40px]" />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
            `}
          >
            <h2 className="text-[#EE5939] ">QUICK LINKS</h2>
            <ul className="flex justify-center items-start mt-5 gap-3 flex-col">
              {menu.map(({ name, url }, index) => (
                <li key={index} className="">
                  <Link href={url} className="text-[#c4cfde] text-sm font-semibold tracking-wider hover:text-[#EE5939ED]">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
            `}
          >
            <h2 className="text-[#EE5939] ">RESOURCES</h2>
            <ul className="flex justify-center items-start mt-5 gap-3 flex-col">
              {resources.map(({ name, url }, index) => (
                <li key={index} className="">
                  <Link href={url} className="text-[#c4cfde] text-sm font-semibold tracking-wider hover:text-[#EE5939ED]">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0
            `}
          >
            <h2 className="text-[#EE5939] ">DEVELOPERS</h2>
            <ul className="flex justify-center items-start mt-5 gap-3 flex-col">
              {developers.map(({ name, url }, index) => (
                <li key={index} className="">
                  <Link href={url} className="text-[#c4cfde] text-sm font-semibold tracking-wider hover:text-[#EE5939ED]">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
