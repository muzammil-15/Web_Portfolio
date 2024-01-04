import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const animationOptions = {
    variants,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full overflow-hidden px-10" id="about" ref={ref}>
      <div className="w-[95%] md:w-[90%] my-0 mx-auto">
        <div className="flex  flex-col lg:flex-row gap-20 mt-10">
          {/* image */}
          <motion.div {...animationOptions}>
            <div className="w-full h-[400px] md:w-[480px] md:h-[516px]  card flex  justify-center items-center">
              <div className="bg-[black]  w-full h-[300px] md:h-[486px] m-5 overflow-hidden">
                <Image src={"/me.png"} width={600} height={800} />
              </div>
            </div>
          </motion.div>
          {/* brief introduction */}
          <motion.div {...animationOptions}>
            <div className="flex flex-col justify-between gap-10  mt-10">
              <h2 className="sectionHeading">VISIT MY PORTFOILO & HIRE ME</h2>
              <h2 className="subHeading">About Me</h2>
              <p className="para">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, <br />
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system,
              </p>
              <button className="card sectionHeading py-4 px-10 hover:bg-[#101014] hover:translate-y-3  transition-all">
                DOWNLOAD MY CV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
