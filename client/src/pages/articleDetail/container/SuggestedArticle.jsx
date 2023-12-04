import React from "react";
import { Link } from "react-router-dom";

{
  /* 
1. the prop arguments are all declared in the articledetail file
2. the both files are linked because the props below articledetail file
3. ensure to give it it's unique key during mapping
4. index is unique to all items mapped in a given array ============== */
}

const SuggestedArticle = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >


    {/* ===========  Main Content ============== */}
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
        {header}
      </h2>

      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            {" "}
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="laptop"
            />
            {" "}

            <div className="text-sm font-roboto text-dark-colorsecond font-medium">
              <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                {item.title}
              </h3>
              {" "}

              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-us", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              {/* ===========  the items are worked on accordingly from the array  ============== */}
            </div>
          </div>
        ))}
      </div>


      <h2 className="font-roboto font-medium text-dark-colorsecond mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item, index) => (
          <Link
            to="/"
            key={index}
            className="inline-block rounded-md px-3 py-1.5 bg-lime-500 font-roboto text-xs text-white md:text-sm"
          >
            {item}
          </Link>
        ))}
      </div>
        {/* ===========  the index is unique for each mapped item  ============== */}
    </div>
  );
};

export default SuggestedArticle;
