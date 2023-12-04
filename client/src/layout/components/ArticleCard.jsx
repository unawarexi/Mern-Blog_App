import React from "react";
import { Images } from "../../constants/ImgIndex";

import { FaCheck } from "react-icons/fa6";

const ArticleCard = ({className}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
        ${className}`}
        
    >
       {/* =================== the above $classname is used in Article.jsx file ====================== */}
        
        
      <img
        src={Images.post1}
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
       {/* =================== card image ====================== */}


      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl  text-lime-500  md:text-2xl lg:text-[28px]">
          Future of Work
        </h2>
        <p className=" text-text_light mt-3 text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          distinctio repellat et! Quo.
        </p>

         {/* =================== card paragraph ====================== */}
        <div className=" flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={Images.profile1}
              alt="post profile"
              className=" h-16 w-16 rounded-full object-center object-cover"
            />

             {/* =================== card profile image ====================== */}


            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-colorsecond text-sm ">
                Morialo Christiana
              </h4>
              <div className="flex items-center gap-x-2">
                <span className=" bg-soft-primary w-fit bg-opacity-25 p-1.5 rounded-full">
                  <FaCheck className="w-1.5 h-1.5 text-bg font-bold" />
                </span>
                <span className="italic text-text_light text-xs md:text-sm">
                  verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="italic text-sm text-dark-colorsecond font-bold ">
            02 May
          </span>

           {/* =================== card profile image desc ====================== */}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
