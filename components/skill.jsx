import Image from "next/image";


export default function Skills() {
  return (
    <main className="text-center px-10">
      <h2 className="sectionHeading">VISIT MY SKILLS & HIRE ME</h2>
      <h2 className="subHeading">MY SKILLS</h2>
      <div className="mt-10 flex justify-center items-center gap-20 flex-wrap">
        <div className="card py-5 px-10 hover:bg-[#111014]">
          <Image src={"/react.png"} width={170} height={50} alt="react"/>
        </div>
        <div className="card py-5 px-10 hover:bg-[#111014]">
          <Image src={"/figma.png"} width={170} height={50} alt="react"/>
        </div>
        <div className="card py-5 px-10 hover:bg-[#111014]">
          <Image src={"/js.png"} width={170} height={50} alt="react"/>
        </div>
        <div className="card py-5 px-10 hover:bg-[#111014]">
          <Image src={"/ilustrator.png"} width={170} height={50} alt="react"/>
        </div>
        <div className="card py-5 px-10 hover:bg-[#111014]">
          <Image src={"/next.png"} width={170} height={50} alt="react"/>
        </div>
        
      </div>
    </main>
  );
}
