import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [menuSelected, setMenuSelected] = useState(false);

  const toggleMenu = () => {
    setMenuSelected(!menuSelected);
  };


  return (
    <div className="nav flex justify-between mx-2 sm:mx-8 lg:mx-16 relative">
      <div className="logo flex z-30 mt-4 lg:mt-0">
        <img src={assets.logo} alt="REGENCY LOGO" className="h-14 sm:h-24" />
        <span className="title text-white mt-2 sm:mt-7 text-2xl sm:text-2xl font-bold">REGENCY</span>
      </div>
      <div className="nav-links z-30 mt-4 lg:mt-0">
        <FontAwesomeIcon
          icon={menuSelected ? faXmark : faBarsStaggered}
          className="text-white mt-2 cursor-pointer lg:hidden sm:mt-7"
          size="2xl"
          onClick={toggleMenu}
        />

        <ul className="nav hidden lg:flex text-white space-x-4 font-bold text-2xl mt-7 cursor-pointer">
            <li>Academics</li>
            <li>Degrees</li>
            <li>Admissions</li>
            <li>About</li>
        </ul>
      </div>

      {/* trigger slider when menu button is clicked */}

        <div className={`menu-slider bg-black h-screen text-white absolute z-40  text-center p-16 ease-in duration-500 lg:hidden  ${menuSelected ? "left-[-4.3%]" : "left-[-100%]"}`}>
          <ul className="slider-navlinks space-y-8 mt-8 cursor-pointer text-2xl">
            <li>Academics</li>
            <li>Degrees</li>
            <li>Admissions</li>
            <li>About</li>
          </ul>
        </div>
    </div>
  );
};

export default Nav;
