"use client"

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
            className={`h-4 w-4 inline-block ${flipped ? 'rotate-180 transition-transform duration-300 ease-in-out' : 'transition-transform duration-300 ease-in-out'}`}
        >
            <path
                fill="currentColor"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
    );
};
  

const Navbar = () =>{
    const [dropdownInfo, setDropdownInfo] = useState({
        isDiseaseOpen: false,
        isReadMoreOpen: false,
        isDiseaseFlipped: false,
        isReadMoreFlipped: false,
      });
    
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
      };
    // const toggleDropdown = () => {
    //     setDropdownOpen(!isDropdownOpen);
    // };

    return(
            <nav id="top" className="sticky w-full h-24 bg-white container mx-auto border z-20">
                <div className="flex items-center px-12">
                    <Image
                    src="/images/Logo.png"
                    alt="logo"
                    className="cursor-pointer"
                    width={75}
                    height={25}
                    />
                <div className="flex justify-between items-center w-full">
                    <span className="text-4xl font-bold">Nexus</span>
                    <div className="">
                    <ul className="flex gap-12">
                        <li className="text-lg border border-hidden rounded-xl  font-semi-bold hover:bg-sky-500 hover:text-white">
                            <Link className="p-2 pt-4 pb-4 " href="/">
                                Home
                            </Link>
                        </li>
                        <li className="dropdown relative text-lg border border-hidden rounded-xl font-semi-bold hover:bg-sky-500 hover:text-white" 
                            onMouseEnter={() => handleMouseEnter('isDisease')}
                            onMouseLeave={() => handleMouseLeave('isDisease')} >
                            <span className="p-2  rounded">Disease <ChevronDownIcon  flipped={dropdownInfo.isDiseaseFlipped} /></span>
                            {dropdownInfo.isDiseaseOpen && (
                                <div className="absolute top-8 bg-white p-3 rounded-sm shadow-sm shadow-slate-500">
                                    <ul className="dropdown-content">
                                        <li className="text-black hover:underline underline-offset-4 decoration-black-500 hover:text-blue-500">
                                        <Link className="" onClick={handleClick}  
                                            href={{
                                                pathname: '/pages/uploadImage',
                                                query: { name: 'scoliosis' },
                                            }}
                                        >
                                            Scoliosis
                                        </Link>
                                        </li>
                                        <li className="text-black hover:underline underline-offset-4 decoration-black-500 hover:text-blue-500">
                                        <Link onClick={handleClick} 
                                            href={{
                                            pathname: '/pages/uploadImage',
                                            query: { name: 'osteoarthritis' },
                                            }}
                                        >
                                            Osteoarthritis
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="dropdown relative text-lg border border-hidden rounded-xl font-semi-bold hover:bg-sky-500 hover:text-white" 
                            onMouseEnter={() => handleMouseEnter('isReadMore')}
                            onMouseLeave={() => handleMouseLeave('isReadMore')}
                            >
                            <span className="p-2 rounded">Read More <ChevronDownIcon  flipped={dropdownInfo.isReadMoreFlipped} /></span>
                            {dropdownInfo.isReadMoreOpen && (
                                <div className="absolute top-8 bg-white p-3 rounded-sm shadow-sm shadow-slate-500">
                                    <ul className="dropdown-content">
                                        <li className="text-black hover:underline underline-offset-4 decoration-black-500 hover:text-blue-500">
                                        <Link className="" onClick={handleClick} href="/pages/scoliosis">
                                            Scoliosis
                                        </Link>
                                        </li>
                                        <li className="text-black hover:underline underline-offset-4 decoration-back-500 hover:text-blue-500">
                                        <Link onClick={handleClick} href="/pages/osteoarthritis">
                                            Osteoarthritis
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="text-lg text-white font-semi-bold bg-sky-500 rounded-xl hover:text-white">
                            <Link className="p-4 pt-4 " href="/pages/login">
                                Login
                            </Link>
                            {/* <Link className=" hover:text-blue-500 hover:bg-sky-100" href="/">
                                SignUp
                            </Link> */}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
    );
};
export default Navbar;