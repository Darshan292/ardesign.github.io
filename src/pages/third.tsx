"use client";

import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";

const BoatAnimation = () => {
//   const [progress, setProgress] = useState(0); // Track scroll progress


  return (
    <>
    <div
      className="min-h-screen w-full bg-[#204480] overflow-hidden flex justify-center items-center"
    > 
        <Image
          src="/boat.png" // Replace with the path to your boat image
          alt="Boat"
          width={100} // Adjust width
          height={100} // Adjust height
          priority
          className="mx-auto h-fit w-fit" // Ensure the image loads quickly
        />    
    </div>
    <div className="h-[60vh] bg-[#204480]"/>
    </>
  );
}

export default BoatAnimation;
