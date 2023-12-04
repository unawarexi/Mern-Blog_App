import React from "react";
import { Images } from "../../../constants/ImgIndex";

const CTA = () => {
  return (
    <>
    {/* =================== SVG wavy image ====================== */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=" translate-y-[1px]">
        <path
          fill="#183D3D"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,224C640,192,800,96,960,85.3C1120,75,1280,149,1360,186.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

       {/* =================== Section div containing content ====================== */}

      <section className=" relative bg-dark-colorsecond px-5">

         {/* =================== First div containing CTA buttons ====================== */}
        <div
          className="container grid grid-cols-12 mx-auto py-10 md:pb-20
        lg:place-items-center"
        >
          <div className="col-span-12 lg:col-span-6">
            <h2
              className="text-white font-robot font-bold text-2xl md:text-4xl md:text-center md:leading-normal
            lg:text-left  "
            >
              Get Our Weekly Update Newsletters
            </h2>
            <div
              className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2
            lg:mx-0"
            >
              <input
                type="text"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg w-full placeholder:text-soft-primary"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-blue-500 text-white font-bold md:w-fit md:whitespace-nowrap">
                Get Started
              </button>
            </div>
            <p className=" text-soft-primary text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left ">
              <span className=" font-bold italic text-dark-colorfourth md:not-italic md:font-normal md:text-dark-colorfourth lg:font-bold">
                Lorem, ipsum dolor sit amet consectetur
              </span>{" "}
              adipisicing elit. Quod minus quisquam velit dolor cum distinctio
              voluptatum autem deserunt amet atque.
            </p>
          </div>

           {/* =================== div containing facebook image card ====================== */}

          <div className=" col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">

               {/* =================== two div for backdrop design behind image ====================== */}
              <div className=" w-1/2 h-1/2 bg-red-400 rounded-lg absolute top-[10%] -right-[8%]" />
              <div className=" w-1/2 h-1/2 bg-white opacity-[.06] rounded-lg absolute -bottom-[10%] -left-[8%]" />
              
              <div className={"w-full bg-white p-3 z-[1] relative rounded-xl "}>
                <img
                  src={Images.ctaImage}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl  text-lime-500  md:text-2xl lg:text-[28px]">
                    Future of Work
                  </h2>
                  <p className=" text-soft-primary mt-3 text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos distinctio repellat et! Quo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
