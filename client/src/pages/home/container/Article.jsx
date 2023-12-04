import React from "react";
import ArticleCard from "../../../layout/components/ArticleCard";

import { MdOutlineArrowRightAlt } from "react-icons/md";

const Article = () => {
  return (
    <section className="container flex flex-col mx-auto px-5 py-10">

       {/* =================== for the entire articleCard.jsx  file ====================== */}
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
         {/* =================== `$classname is used as a prop in ArticleCard.jsx` ====================== */}
      </div>

       {/* =================== Article button ====================== */}
      <button className=" mx-auto flex items-center gap-x-2 font-bold text-blue-500
       border-2 border-blue-500 px-6 py-3 rounded-lg  hover:bg-blue-500 hover:text-white transition-all duration-300">
        <span>More Articles</span>
        <MdOutlineArrowRightAlt className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Article;
