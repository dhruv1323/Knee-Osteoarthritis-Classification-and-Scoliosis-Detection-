import Image from "next/image";
import Link from "next/link";

const Navbar = () =>{
    return(
            <nav className="fixed w-full h-24 bg-white container mx-auto">
                <div className="flex items-center px-24 ">
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
                        <li className=""><Link href="/">
                        </Link> Home</li>
                        <li className="">Disease</li>
                        <li className="">ReadMore</li>
                        <li className="">Login/SignUp</li>
                    </ul>
                    </div>
                </div>
                </div>
            </nav>
    );
};
export default Navbar;