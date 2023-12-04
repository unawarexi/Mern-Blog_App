import React from "react";
import { Images } from "../../constants/ImgIndex";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import { useState } from "react";

const NavItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Article", type: "link" },
  { name: "Pages", type: "dropdowm", items: ["About us", "Contact us"] },
  { name: "Pricing", type: "link" },
  { name: "Faqs", type: "link" },
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          {" "}
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          {/**============= DROPDOWN  ================ */}
          <a href="/" className="px-4 py-2 flex gap-x-1 items-center">
            <span>{item.name}</span>
            <RiArrowDownSFill className="text-lime-500 text-[30px]" />
          </a>
          <div className="hidden transition-all duration-500 lg:pt-4 absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max">
            <ul className="flex flex-row lg:flex-col shadow-lg rounded-lg  overflow-hidden  -mr-10 lg:-mr-0">
              {item.items.map((page) => (
                <a
                  href="/"
                  className="hover:bg-dark-colorsecond  bg-lime-500 lg:bg-lime-300 hover:text-white px-4 py-2 text-white lg:text-dark-colorfirst text-[12px] lg:text-sm"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {
  {
    /**============= STATE FUNCTION FOR NAV TOGGLE ================ */
  }
  const [navIsVisible, setnavIsVisible] = useState(false);

  const NavToggle = () => {
    setnavIsVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        {/* ============ this is for the logo ==============*/}
        <div>
          <img src={Images.logo} alt="logo" className="w-40" />
        </div>

        {/* ============ this is for the nav-icons Hamburger =============== */}

        <div className="z-50 lg:hidden">
          {navIsVisible ? (
            <AiOutlineClose className="w-6 h-6" onClick={NavToggle} />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" onClick={NavToggle} />
          )}
        </div>

        {/* ============ this is for the lists =============== */}

        <div
          className={`${
            navIsVisible ? "right-0 " : "-right-full"
          } bg-dark-colorsecond lg:bg-transparent rounded-tl-3xl rounded-bl-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:shadow-none rounded lg:rounded-tl-none  lg:rounded-bl-none transition-all duration-500
           z-50 mt-[90px] lg:mt-0 flex flex-col lg:flex-row fixed w-[60%] md:w-[50%] lg:w-auto lg:static justify-center lg:justify-end top-0 bottom-0 gap-x-9 items-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-x-2 font-semibold text-xs lg:text-lg text-white lg:text-dark-colorthird items-center gap-y-14">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="border-blue-500 border-2 px-6 py-2 mt-10 lg:mt-0 text-xs lg:text-lg
          rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
