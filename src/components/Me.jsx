import Image from "next/image";
import Link from "next/link";

const Me = () => {
  return (
    <div className=" w-full min-h-[90vh] flex justify-center items-center">
      <div className=" my-10 px-10  flex flex-col gap-10  md:flex-row justify-between h-full items-start text-white max-w-screen-xl mx-auto">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="text-3xl md:text-5xl text-[#FFFFFF] font-[700]">
            Let’s get know about me closer
          </h2>
          <p className="text-[#A8A8A8] font-[400] text-lg leading-7">
            Muzammil Hussain, a committed MERN stack developer, hails from
            Pakistan and excels in crafting dynamic web applications. His
            portfolio showcases a diverse skill set, adeptly navigating through
            MongoDB, Express.js, React, and Node.js to deliver engaging and
            functional digital solutions
          </p>
          <Link href={"/about-me"} className="flex justify-center items-center py-3 px-6 w-max rounded-full bg-indigo-500 hover:bg-indigo-600 text-[#F4F7FA] text-sm">


            Discover More About Me

          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src={"/assets/mee.jpeg"} width={400} height={300} alt="me" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Me;
