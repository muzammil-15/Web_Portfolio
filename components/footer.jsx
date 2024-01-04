"use client";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
// import Dropdown from "./dropdown";
import Image from "next/image";

const Footer = () => {

  
  return (
    <nav className="w-full px-10">
      <div className="justify-start flex-wrap gap-40 px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex justify-between w-full items-center flex-wrap">
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
        
        
        
      </div>
    </nav>
  );
};
export default Footer;
