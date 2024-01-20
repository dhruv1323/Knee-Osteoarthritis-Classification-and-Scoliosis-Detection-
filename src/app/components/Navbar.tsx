import Image from "next/image";
import Link from "next/link";

const Navbar = () =>{
    return(
            <nav id="top" className="sticky w-full h-24 bg-white container mx-auto border">
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
                        <li className="hover:underline underline-offset-2 decoration-sky-500 hover:text-sky-500 hover:bg-sky-100">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="hover:underline underline-offset-2 decoration-sky-500 hover:text-sky-500 hover:bg-sky-100">
                            <Link href="/">
                                Disease
                            </Link>
                        </li>
                        <li className=" hover:underline underline-offset-2 decoration-sky-500 hover:text-sky-500 hover:bg-sky-100">
                            <Link href="/pages/osteoarthritis">
                                ReadMore
                            </Link>
                        </li>
                        <li className="hover:underline underline-offset-2 decoration-sky-500 hover:text-sky-500 hover:bg-sky-100">
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