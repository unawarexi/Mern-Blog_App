import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-black opacity-50 text-xs md:text-sm font-roboto"
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-3">/</span>}
        </div>
      ))}
    </div>
  );

  {
    /*
    1. the item prop will be used to map every data in the breadcrumb array
    2. the index is to get the unique id of each data
    3. the "link to" used to route to anyitem.name with a item.link
    4. the last line index !== used to give a conditional to remove excess "/" ================= */
  }
};

export default BreadCrumbs;
