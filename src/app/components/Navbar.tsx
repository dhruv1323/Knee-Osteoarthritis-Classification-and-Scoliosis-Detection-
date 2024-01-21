"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () =>{
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(false);
      };

    // const toggleDropdown = () => {
    //     setDropdownOpen(!isDropdownOpen);
    // };

    return(
            <nav id="top" className="sticky w-full h-24 bg-white container mx-auto border z-10">
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
                        <li className="text-lg font-semi-bold hover:underline underline-offset-2 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="dropdown relative text-lg font-semi-bold hover:underline underline-offset-2 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                            <span>Disease</span>
                            {isDropdownOpen && (
                                <div className="absolute bg-white top-6 p-2 rounded-sm shadow-sm shadow-slate-500">
                                    <ul className="dropdown-content">
                                        <li>
                                        <Link href="/pages/uploadImage">
                                            Osteoarthritis
                                        </Link>
                                        </li>
                                        <li>
                                        <Link href="/pages/uploadImage">
                                            Scoliosis
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="text-lg font-semi-bold hover:underline underline-offset-2 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100">
                            <Link href="/pages/osteoarthritis">
                                ReadMore
                            </Link>
                        </li>
                        <li className="text-lg font-semi-bold hover:underline underline-offset-2 decoration-blue-500 hover:text-blue-500 hover:bg-sky-100">
                            <Link href="/">
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