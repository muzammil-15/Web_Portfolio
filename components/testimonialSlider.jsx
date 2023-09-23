"use client"
import React, { Component, RefObject } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class SampleNextArrow extends React.Component{
  render() {
    const { className, style, onClick } = this.props;
    return (
     null
    );
  }
}

class SamplePrevArrow extends React.Component{
  render() {
    const { className, style, onClick } = this.props;
    return (
     null
    );
  }
}

class TestimonialSlider extends Component {
   sliderRef

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  }

  previous() {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

   

    return (
      <div>
        <Slider ref={this.sliderRef} {...settings}>
          {this.props.testimonials.map((item, ind) => (
            <div className="relative md:h-[400px] bg-[#1e1d25] py-5 rounded-lg mt-10" key={ind}>
              <div className="hidden md:block w-full mt-[90px] h-[250px] card"></div>
              <div className="md:absolute md:inset-0 flex flex-col md:flex-row items-center gap-6 mx-8 justify-between">
                <div className="md:h-[350px] relative flex-1 rounded-full md:w-[350px]">
                  <Image src={item.img} alt="" width={350} height={350} />
                </div>
                <div className="flex-1"> 
                  <h1 className=" cardHeading">{item.title}</h1>
                  <p className="cardPara mt-3">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-2 flex justify-end gap-5">
          <Image src='/arrowleft.png' alt="" width={30} height={30} onClick={this.previous} className="cursor-pointer"/>
          <Image src='/arrowright.png' alt="" width={30} height={30} onClick={this.next} className="cursor-pointer"/>
        </div>
      </div>
    );
  }
}

// Example array of testimonials
const testimonials  = [
    {
        title: "Jenefir Smith",
        desc: "I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise.",
        img: "/tme.png"
    }
        ,
    {
        title: "Jenelia Ryan",
        desc: "I'm absolutely amazed by the impeccable quality of Kami Industries Tweezers! They've completely transformed my beauty routine, making eyebrow shaping.",
        img: "/image2.png"
    }
        , 
    
    {
        title: "Charlotte",
        desc: "Kami Industries Tweezers have elevated my beauty game to a whole new level. Their impeccable quality makes shaping my eyebrows effortlessly precise.",
        img: "/image3.png"
    }
  // Add more testimonials here
];

const TestimonialSliderWrapper= () => (
  <TestimonialSlider testimonials={testimonials} />
);

export default TestimonialSliderWrapper;