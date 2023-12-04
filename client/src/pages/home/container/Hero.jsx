import React from "react";
import { Images } from "../../../constants/ImgIndex";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="container flex  flex-col mx-auto px-5 py-5 lg:flex-row gap-x-20">
      <div className="mt-10 lg:w-1/2">
        <h1
          className=" font-roboto text-3xl text-center font-bold
           text-dark-colorsecond md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]"
        >
          Read the most interesting articles
        </h1>
        <p className="mt-4 text-center text-text_light md:text-xl lg:text-left lg:text-base xl:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex
          possimus rerum adipisci quam ipsam! Doloremque voluptas tenetur ipsa
          obcaecati?
        </p>

        {/* ================ this is another ================ */}
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative items-center justify-center">
            <CiSearch className="absolute left-3 top-3  -trnaslate-y-1/2 w-6 h-6 text-soft-primary " />
            <input
              type="text"
              placeholder="Search article"
              className="placeholder:font-bold font-semi-bold text-dark-colorsecond
               placeholder:text-dark-colorfourth rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none
                shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:py-4"
            />
          </div>
          <button
            className="text-white font-semibold w-full bg-bg_variant rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2
          md:w-fit md:py-2"
          >
            Search
          </button>
        </div>

        {/* ================ this is another ================ */}
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className=" text-dark-colorfourth font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            popular tags
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-lime-500 bg-opacity-10 px-3 py-1.5 text-dark-colorfourth font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-lime-500 bg-opacity-10 px-3 py-1.5 text-dark-colorfourth font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-lime-500 bg-opacity-10 px-3 py-1.5 text-dark-colorfourth font-semibold">
              User Interface
            </li>
          </ul>
        </div>
      </div>

      {/* ================ this is another ================ */}
      <div className="hidden lg:block lg:1/2">
        <img src={Images.undraw} alt="users reading" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
