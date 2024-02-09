import { services } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Service from "./Service";
import { SparklesPreview } from "./SparklesComponent";

const Services = () => {
  return (
    <div className="mt-16 md:mt-5 w-full min-h-[90vh]">
      <div className="my-10 px-10  flex flex-col  justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-[700] text-[#FFF]">Services</h1>
           */}
           <SparklesPreview>Services</SparklesPreview>
        </div>
        
        <div className="mt-20 flex justify-center items-center gap-10 flex-wrap w-full">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <Service {...service} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
