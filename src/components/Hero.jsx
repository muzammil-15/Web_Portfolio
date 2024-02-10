
import Link from "next/link";
import React from "react";
import Button from "./ui/button";


const Hero = () => {
  return (
    <div
      className=" w-full h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/hero.png')" }}
    >
      <div
        className="w-full h-full "
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="flex flex-col gap-5 justify-center h-full items-center text-white max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-center font-[700] heading w-[80%]">
            Innovative WEB Solutions for a Connected World
          </h1>
          <p className="font-[500] text-base text-[#FFFFFF] text-center w-[70%]">
            Muzammil Hussain, a dedicated MERN stack developer, expertly
            engineers dynamic web applications with proficiency across MongoDB,
            Express.js, React, and Node.js, ensuring robust functionality and
            user-centric experiences
          </p>
          {/* <Link href={"#work"}>
            <button className="flex justify-center items-center py-3 px-6 rounded-full bg-indigo-500 hover:bg-indigo-600 text-[#F4F7FA] text-sm">
              Explore works
            </button>
          </Link> */}
          <Button href={"#work"}>Explore works </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
