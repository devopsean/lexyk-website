import React from "react";
import Image from "next/image";
import logo from "../../../public/Logo.svg";
import wordmark from "../../../public/WordMark.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white px-4 py-3 flex items-center justify-between max-w-screen-2xl over-2000:max-w-[80vw] mx-auto">
      <div className="flex text-2xl font-bold">
        <Link href="/" className="hover:text-gray-300 mr-3">
          <Image src={logo} alt="Logo" className="over-2000:w-[3.5vw] over-2000:h-auto"/>
        </Link>
        <Image src={wordmark} alt="Lexyk" className="over-2000:w-[3.5vw] over-2000:h-auto"/>
      </div>
      <button className="bg-white hover:bg-gray-50 text-black py-2 px-4 over-2000:py-[0.5vw] over-2000:px-[0.75vw] over-2000:text-[1vw] rounded-xl">
        <p className="font-inter">Get Started</p>
      </button>
    </header>
  );
};

export default Header;
