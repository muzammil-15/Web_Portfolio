"use client"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialSliderWrapper from "./testimonialSlider";



export default function Testimonials () {

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
      transition: { duration: 1.6 },
    };


  return (
    <div className=" py-4 px-4 sm:px-6 lg:px-8 text-center overflow-hidden" ref={work} id="client">
      <div className="max-w-7xl mx-auto">
        <h2 className="sectionHeading">VISIT MY CLIENT</h2>
        <h3 className="mt-6 subHeading">OUR TRUSTED CLIENT</h3>

        <motion.div {...animationOptions}>
            <TestimonialSliderWrapper/>
        </motion.div>
        
        {/* <div className="mt-20 flex justify-center items-center gap-6 flex-wrap">
          Repeat the card component for each client
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div {...animationOptions}
              key={index}
              className="card overflow-hidden w-[283px] h-[250px] ">
              <div className=" py-3 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <Image src={'/client.png'} width={180} height={180} alt="client" className="mx-auto"/>
                <hr className=' border-black' />
                <p className="para pt-3">Amy Smith</p>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  );
};


