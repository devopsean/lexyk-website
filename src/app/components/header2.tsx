import React from "react";
import Image from "next/image";
import logo from "../../../public/Logo.svg";
import wordmark from "../../../public/WordMark.svg";
import Link from "next/link";

type Props = {};

export default function Header2({}: Props) {
  return (
    <div>
      <header className="bg-black text-white px-4 py-3 flex items-center justify-between max-w-7xl over-2000:max-w-[70vw] mx-auto">
        <div className="flex text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300 mr-3 flex">
            <Image
              src={logo}
              alt="Logo"
              className="w-[5vw] over-2000:w-[3.5vw] over-2000:h-auto"
            />
            <Image
              src={wordmark}
              alt="Lexyk"
              className="w-[5vw] over-2000:w-[3.5vw] over-2000:h-auto"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}
