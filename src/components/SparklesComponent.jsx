"use client";
import React from "react";



export function SparklesPreview({children}) {
  return (
    <div className=" w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20">
        {children}
      </h1>
      <div className="w-full md:w-[40rem] h-10 relative overflow-hidden">
        <div className="absolute inset-x-0 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full sm:w-3/4 blur-sm" />
        <div className="absolute inset-x-0 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full sm:w-3/4" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        

        
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
