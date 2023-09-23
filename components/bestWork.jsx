import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BestWork() {
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
    <main className="mt-5 overflow-hidden" ref={work} id="work" >
      <h2 className="sectionHeading ml-5 pt-5">LOOK MY PROJECT & JUDGE</h2>
      <h2 className="subHeading ml-5 mt-5">My Best Work</h2>

        <motion.div
          {...animationOptions}
          className="mt-20 flex justify-center flex-col  items-center gap-20 card py-10 md:flex-row "
        >
            <div className="flex flex-col justify-start items-start gap-5 w-[80%] md:w-[40%] ">
              <h2 className="subHeading">The Services Provice Of Android User </h2>
              <p className="cardPara">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
              </p>
              <div className="flex justify-center items-center gap-5">
                <Image src={"/tick.png"} width={20} height={20} alt="tick"/>
                <span className="cardPara">Responcive design</span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <Image src={"/tick.png"} width={20} height={20} alt="tick"/>
                <span className="cardPara">Responcive design</span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <Image src={"/tick.png"} width={20} height={20} alt="tick"/>
                <span className="cardPara">Responcive design</span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <Image src={"/tick.png"} width={20} height={20} alt="tick"/>
                <span className="cardPara">Responcive design</span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <Image src={"/tick.png"} width={20} height={20} alt="tick"/>
                <span className="cardPara">Responcive design</span>
              </div>
            </div>

          <div className=" w-[80%] md:w-[40%]">
              <Image src={'/ai.png'} width={500} height={500}/>
            </div>
        </motion.div>
        
    </main>
  );
}
