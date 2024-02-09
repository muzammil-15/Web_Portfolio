"use client";
import { project, projects } from "@/lib/utils";
import Image from "next/image";
import React, { useRef } from "react";
import Project from "./Project";
import { HoverEffect } from "./ProjectCardHoverEffect";
import { SparklesPreview } from "./SparklesComponent";

const Projects = () => {
  const ref = useRef("work");
  return (
    <div className="mt-16 md:mt-5 w-full min-h-[90vh]" id="work" ref={ref}>
      <div className=" my-10 px-10  flex flex-col gap-10 justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <SparklesPreview>Portfolio</SparklesPreview>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap w-full ">
          <HoverEffect projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
