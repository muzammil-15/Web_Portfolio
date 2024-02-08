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

const Testimonail = () => {
  return (
    <div className="my-12 md:mt-5 w-full overflow-hidden">
      <div className=" my-10 px-10  flex flex-col gap-10 justify-between h-full items-center text-white max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/assets/testimonial.png"}
            width={1000}
            height={200}
            alt="testimonials"
          />
          <h2 className="text-2xl sm:text-3xl mt-[-20px] font-[500] md:font-[700] md:text-5xl text-[#FFFFFF] md:mt-[-30px]">
            Testimonials
          </h2>
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

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
