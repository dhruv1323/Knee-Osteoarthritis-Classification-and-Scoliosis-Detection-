"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ChevronDownIcon = ({ flipped }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={`h-4 w-4 inline-block ${flipped ? 'rotate-180' : ''}`}
        >
            <path
                fill="currentColor"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
    );
};
  

const Navbar = () =>{
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isFlipped, setFlipped] = useState(false);
    const [isFlipped1, setFlipped1] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
        setFlipped(true);
        
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(false);
        setFlipped(false);
      };

      const handleMouseEnter1 = () => {
        setOpen(true);
        setFlipped1(true);
      };
    
      const handleMouseLeave1 = () => {
        setOpen(false);
        setFlipped1(false);
      };
      
      const handleClick =() =>{
        setDropdownOpen(false);
        setOpen(false);
      }
    // const toggleDropdown = () => {
    //     setDropdownOpen(!isDropdownOpen);
    // };

    return(
            <nav id="top" className="sticky w-full h-24 bg-white container mx-auto border z-20">
                <div className="flex items-center px-24">
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
                        <li className="text-lg font-semi-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100">
                            <Link className="p-2" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="dropdown relative text-lg font-semi-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span className="p-2 rounded">Disease <ChevronDownIcon  flipped={isFlipped} /></span>
                            {isDropdownOpen && (
                                <div className="absolute top-8 bg-white p-3 rounded-sm shadow-sm shadow-slate-500">
                                    <ul className="dropdown-content">
                                        <li className="hover:underline underline-offset-4 decoration-blue-500 hover:bg-sky-100">
                                        <Link onClick={handleClick} href="/pages/uploadImage">
                                            Osteoarthritis
                                        </Link>
                                        </li>
                                        <li className="hover:underline underline-offset-4 decoration-blue-500">
                                        <Link className=" hover:bg-sky-100" onClick={handleClick} href="/pages/uploadImage">
                                            Scoliosis
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="dropdown relative text-lg font-semi-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >
                            <span className="p-2 rounded">Read More <ChevronDownIcon  flipped={isFlipped1} /></span>
                            {isOpen && (
                                <div className="absolute top-8 bg-white p-3 rounded-sm shadow-sm shadow-slate-500">
                                    <ul className="dropdown-content">
                                        <li className="hover:underline underline-offset-4 decoration-blue-500 hover:bg-sky-100">
                                        <Link onClick={handleClick} href="/pages/osteoarthritis">
                                            Osteoarthritis
                                        </Link>
                                        </li>
                                        <li className="hover:underline underline-offset-4 decoration-blue-500">
                                        <Link className=" hover:bg-sky-100" onClick={handleClick} href="/pages/scoliosis">
                                            Scoliosis
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="text-lg font-semi-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100">
                            <Link className="p-2" href="/">
                                Login/SignUp
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
    );
};
export default Navbar;