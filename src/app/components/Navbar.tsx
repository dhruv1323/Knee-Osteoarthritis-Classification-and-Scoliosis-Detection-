"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ChevronDownIconProps {
  flipped: boolean;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ flipped }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`h-4 w-4 inline-block ${
        flipped
          ? "rotate-180 transition-transform duration-300 ease-in-out"
          : "transition-transform duration-300 ease-in-out"
      }`}
    >
      <path
        fill="currentColor"
        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
      />
    </svg>
  );
};

const Navbar = () => {
  const [dropdownInfo, setDropdownInfo] = useState({
    isDiseaseOpen: false,
    isReadMoreOpen: false,
    isDiseaseFlipped: false,
    isReadMoreFlipped: false,
  });
  const [open, setOpen] = useState(false);

  const handleMouseEnter = (type: string) => {
    setDropdownInfo({
      ...dropdownInfo,
      [`${type}Open`]: true,
      [`${type}Flipped`]: true,
    });
  };

  const handleMouseLeave = (type: string) => {
    setDropdownInfo({
      ...dropdownInfo,
      [`${type}Open`]: false,
      [`${type}Flipped`]: false,
    });
  };

  const handleClick = () => {
    setDropdownInfo({
      isDiseaseOpen: false,
      isReadMoreOpen: false,
      isDiseaseFlipped: false,
      isReadMoreFlipped: false,
    });
    setOpen(!open);
  };
  // const toggleDropdown = () => {
  //     setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <nav id="top" className="sticky w-full h-24 mx-auto md:px-12 md:flex md:justify-between md:items-center bg-white  border z-20 ">
      <div className="flex justify-between items-center mt-4 ">
        <span className="text-3xl mx-4 md:p-0 md:text-4xl font-bold">
          <Image
            src="/images/Logo.png"
            alt="logo"
            className="cursor-pointer inline h-16 w-16"
            width={65}
            height={25}
          />
          Nexus
        </span>
        <span className="md:hidden block mx-4" onClick={()=>setOpen(!open)}>
            {open ? <Image
                src="/images/icons8-close.svg"
                alt="menu h-10 cursor-pointer"
                width={30}
                height={25}
            />:<Image
                src="/images/icons8-menu.svg"
                alt="menu h-10 cursor-pointer"
                width={35}
                height={25}
            />}   
        </span>
      </div>
      <ul className={`flex flex-col justify-between items-center gap-6 bg-white w-full left-0 z-[-1] absolute md:z-auto md:static md:flex md:w-auto md:flex-row md:items-center md:justify-between md:py-0 py-4 md:pl-0 pl-7 md:gap-12 md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-20 opacity-100':'top-[-400px] opacity-0'}`}>
        <li className="text-lg border border-hidden rounded-xl w-20 md:w-auto font-semi-bold hover:bg-sky-500 hover:text-white">
          <Link onClick={handleClick} className="p-2 pt-4 pb-4 " href="/">
            Home
          </Link>
        </li>
        <li
          className="dropdown relative text-lg border border-hidden rounded-xl w-28 font-semi-bold hover:bg-sky-500 hover:text-white"
          onMouseEnter={() => handleMouseEnter("isDisease")}
          onMouseLeave={() => handleMouseLeave("isDisease")}
        >
          <span className="p-2  rounded">
            Disease <ChevronDownIcon flipped={dropdownInfo.isDiseaseFlipped} />
          </span>
          {dropdownInfo.isDiseaseOpen && (
            <div className="absolute top-8 bg-white p-3 z-10 rounded-sm shadow-sm shadow-slate-500">
              <ul className="dropdown-content">
                <li className="text-black hover:text-blue-500">
                  <Link
                    className=""
                    onClick={handleClick}
                    href={{
                      pathname: "/pages/uploadImage",
                      query: { name: "scoliosis" },
                    }}
                  >
                    Scoliosis
                  </Link>
                </li>
                <li className="text-black hover:text-blue-500">
                  <Link
                    onClick={handleClick}
                    href={{
                      pathname: "/pages/uploadImage",
                      query: { name: "osteoarthritis" },
                    }}
                  >
                    Osteoarthritis
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="dropdown relative text-lg border border-hidden rounded-xl w-36 md:w-auto font-semi-bold hover:bg-sky-500 hover:text-white"
          onMouseEnter={() => handleMouseEnter("isReadMore")}
          onMouseLeave={() => handleMouseLeave("isReadMore")}
        >
          <span className="p-2 rounded">
            Read More{" "}
            <ChevronDownIcon flipped={dropdownInfo.isReadMoreFlipped} />
          </span>
          {dropdownInfo.isReadMoreOpen && (
            <div className="absolute top-8 bg-white p-3 rounded-sm shadow-sm shadow-slate-500">
              <ul className="dropdown-content">
                <li className="text-black hover:text-blue-500">
                  <Link
                    className=""
                    onClick={handleClick}
                    href="/pages/scoliosis"
                  >
                    Scoliosis
                  </Link>
                </li>
                <li className="text-black hover:text-blue-500">
                  <Link onClick={handleClick} href="/pages/osteoarthritis">
                    Osteoarthritis
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="text-lg px-4 py-1 md:px- md:py-1 rounded-3xl w-28 md:w-auto text-white font-semi-bold bg-sky-500 hover:bg-sky-600">
          <Link onClick={handleClick} className="" href="/pages/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
