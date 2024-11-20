import React from 'react'
import Image from "next/image"
import stars from "../../../public/Stars2.svg"

type Props = {}

function Stars({}: Props) {
  return (
    <div className="relative w-full ">
      <Image
        src={stars}
        alt="Stars"
        layout="fill"
        objectFit="cover" // Ensures the image fills the container proportionally
        priority={true}   // Optional: Ensures the image loads quickly
      />
    </div>
  )
}

export default Stars