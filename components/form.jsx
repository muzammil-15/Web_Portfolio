"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import ContactForm from "./contactForm";

export default function Form() {


  const controls = useAnimation();
  const [work, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationOptions = {
    variants,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition: { duration: 2 },
  };

  return (
    <main className=" overflow-hidden text-center" ref={work} id="contactForm">
      <h2 className="sectionHeading ml-5 pt-5">Contact</h2>
      <h2 className="subHeading ml-5 mt-5">Contect with me</h2>

      <motion.div
        {...animationOptions}
        className="mt-20 flex justify-center flex-col  items-center gap-20 py-10 md:flex-row "
      >
        <div className="flex card flex-col p-10 justify-start items-start gap-5 w-5/6 md:w-1/3 ">
          <Image src={"/hand.png"} width={250} height={200} alt="hand" />
          <div className="text-left">
            <h2 className="cardHeading">Muzammil Hussain</h2>
            <h2 className="text-gray-400 text-sm">WEB DEVELOPER</h2>
          </div>

          <p className="para text-left">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising paiI
          </p>
          <div>
            <p className="text-gray-400 text-left text-sm">
              Phone : 03118831496
            </p>
            <p className="text-gray-400 text-left text-sm">
              Email : muzammilalyari15@gmail.com
            </p>
          </div>
          <div className="text-left">
            <h2 className="para">Find Me</h2>
            <div className="flex items-center gap-3 mt-5">
              <Link href={"/"}>
                <div className="social hover:bg-[#191c1f]">
                  <BsFacebook className="text-white text-[40px]" />
                </div>
              </Link>
              <Link href={"/"} className="social">
                <div className="social hover:bg-[#191c1f]">
                  <BsGithub className="text-white text-[40px]" />
                </div>
              </Link>
              <Link href={"/"} className="social">
                <div className="social hover:bg-[#191c1f]">
                  <BsLinkedin className="text-white text-[40px]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-5/6 md:w-2/4">
            <ContactForm/>
        </div>
      </motion.div>
    </main>
  );
}



