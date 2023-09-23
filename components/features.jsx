import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineApple } from "react-icons/ai";
import { TbBulb } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const controls = useAnimation();
  const [fea, inView] = useInView();

  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const animationOptions = {
    variants,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition: { duration: 0.5 },
  };
  const animationOptions1 = {
    variants,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition: { duration: 1 },
  };
  const animationOptions2 = {
    variants,
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition: { duration: 1.5 },
  };

  return (
    <main className="mt-5 overflow-hidden" ref={fea} >
      <h2 className="sectionHeading ml-5 pt-5">FEATURES</h2>
      <h2 className="subHeading ml-5 mt-5">What I can do?</h2>
      <div className="mt-20 flex  items-center gap-10 flex-wrap">
        <motion.div
          {...animationOptions}
          className="card py-10 px-10 hover:bg-[#111014] w-[80%] md:w-[30%] flex gap-8 flex-col"
        >
          <AiOutlineMenu className="text-[#EE5939ED] w-[45px] h-[25px]" />
          <h2 className="cardHeading">Web Development</h2>
          <p className="cardPara">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </p>
        </motion.div>
        <motion.div
          {...animationOptions1}
          className="card py-10 px-10 hover:bg-[#111014] w-[80%] md:w-[30%] flex gap-8 flex-col"
        >
          <AiOutlineApple className="text-[#EE5939ED] w-[45px] h-[25px]" />
          <h2 className="cardHeading">App Development</h2>
          <p className="cardPara">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </p>
        </motion.div>
        <motion.div
          {...animationOptions2}
          className="card py-10 px-10 hover:bg-[#111014] w-[80%] md:w-[30%] flex gap-8 flex-col"
        >
          <TbBulb className="text-[#EE5939ED] w-[45px] h-[25px]" />
          <h2 className="cardHeading">Ecommerce</h2>
          <p className="cardPara">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
