import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { testimonials } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { InfiniteMovingCards } from "./ui/infiniteMovingCard";
import { SparklesPreview } from "./SparklesComponent";

const Testimonail = () => {
  return (
    <div className="my-12 md:mt-5 w-full overflow-hidden">
      <div className=" my-10 px-10  flex flex-col gap-10 justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          {/* <h2 className="text-2xl sm:text-3xl mt-[-20px] font-[500] md:font-[700] md:text-5xl text-[#FFFFFF] md:mt-[-30px]">
            Testimonials
          </h2> */}
          <SparklesPreview>Testimonials</SparklesPreview>
        </div>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent ] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
