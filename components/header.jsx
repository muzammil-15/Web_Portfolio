import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

import Navbar from "./navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full min-h-screen bg-[#000] overflow-hidden ">
      <div className="w-[90%] my-0 mx-auto">
        <Navbar />
        <div className="flex justify-center items-center w-full h-[90vh]">
          <div className="flex flex-col gap-10 w-[60%] justify-center items-center text-center">
            <h2 className="mainHeading text-[40px] lg:text-[54px]">
              Hi I ‘M{" "}
              <span className="inline-block text-[#EE5939ED]">MUZAMMIL</span>{" "}
              <TypewriterComponent
                options={{
                  strings: [
                    "a FullStack developer.",
                    "a Professional Coder.",
                    "a React Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="para">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system,{" "}
            </p>
            <div>
              <p className="para">FIND WITH ME</p>
              <div className="flex items-center gap-3 mt-5">
                <Link
                  href={"https://www.facebook.com/muzammil.hussainhassu/"}
                  target="blank"
                >
                  <div className="social hover:bg-[#191c1f]">
                    <BsFacebook className="text-white text-[40px]" />
                  </div>
                </Link>
                <Link
                  href={"https://github.com/muzammil-15?tab=repositories"}
                  className="social"
                  target="blank"
                >
                  <div className="social hover:bg-[#191c1f]">
                    <BsGithub className="text-white text-[40px]" />
                  </div>
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/muzammil-hussain-a72187262/"
                  }
                  className="social"
                  target="blank"
                >
                  <div className="social hover:bg-[#191c1f]">
                    <BsLinkedin className="text-white text-[40px]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
