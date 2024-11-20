import React from 'react'
import Image from "next/image"
import logo from "../../../public/Logo.svg"
import wordmark from "../../../public/WordMark.svg"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="bg-black text-white px-4 py-3 flex items-center justify-between">
        <div className="flex text-2xl font-bold">
          <a href="/" className="hover:text-gray-300 mr-3">
            <Image
              src = {logo}
              alt="Logo"
            />
          </a>
          <Image
            src={wordmark}
            alt="Lexyk"
          />
        </div>
        <button className="bg-white hover:bg-gray-50 text-black py-2 px-4 rounded-xl">
          <p className="font-inter">Get Started</p>
        </button>
      </header>
  )
}

export default Header;