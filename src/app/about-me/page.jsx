import Project from "@/components/Project";
import Projects from "@/components/Projects";
import Social from "@/components/social";
import { projects, social } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";




const About = () => {
  return (
    <div className=" w-full ">
      <div className=" pt-14 pb-2 px-5 flex flex-col justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[700] text-[#FFF]">
            About Me
          </h2>
          <p className="text-[#949494] text-lg">Little Brief About Myself</p>
          <hr className="border-[0.5px] border-indigo-500 w-[100%] mt-10" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 my-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-[#FFF] flex-1">
            My mission is to streamline development processes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#949494] font-[600] flex-1">
          I&apos;m Muzammil, a dedicated MERN stack developer committed to elevating online platforms through innovative development solutions. With a focus on tailored creations, I endeavor to enhance website performance by implementing cutting-edge technologies and saying goodbye to cookie-cutter templates. My dedication to quality ensures that your digital presence surpasses competitors, delivering exceptional results aligned with your distinct objectives.
          </p>
        </div>
        <div className="flex flex-col gap-10 my-10">
          <div className="flex flex-col md:flex-row justify-start items-start gap-10">
            <Image src={"/assets/mee.jpeg"} width={430} height={500} alt="me" className="rounded-lg" />
            <Image src={"/assets/k1.png"} width={800} height={500} alt="me" />
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/contact-me"} className="w-[150px]">
              <button className="w-full flex justify-center items-center py-3 px-6 rounded-full bg-indigo-500 hover:bg-indigo-600 text-[#F4F7FA] text-sm">
                CONTACT ME
              </button>
            </Link>
          </div>
          {/* <div className="flex flex-col justify-center items-center">
            <Image
              src={"/assets/f.png"}
              width={1000}
              height={200}
              alt="projects"
            />
            <div className="flex justify-center items-center gap-10 flex-wrap w-full">
              {social.map((social, index) => (
                <React.Fragment key={index}>
                  <Social {...social} />
                </React.Fragment>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default About;
