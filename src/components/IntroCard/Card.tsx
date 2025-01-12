"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, } from "../ui/3d-card";
import Image from "next/image";
// import { style } from "framer-motion/client";

export function Card() {


  const [clicked, setClicked] = useState(false);
  const [showContent, setShowContent] = useState(true);
const handleClick = () => {
  setClicked(!clicked);
  setTimeout(() => setShowContent(!showContent), 250); // Matches animation timing
};
  return (
    <motion.div
      id="animatedCard" 
    >
      <div
      className=" cursor-pointer transition-transform duration-700 transform-style-3d"
      style={{
      transform :`rotateY(${clicked? 180 : 0}deg)`,
    }}>
      <CardContainer className={` rounded-mg hover:shadow-black hover:shadow-2xl`} onClick={handleClick}>
        <CardBody >
          {showContent ? (<>
          
          <Image
                    src="/cardfront.png" // Replace with the path to your boat image
                    alt="cardfront"
                    width={450} // Adjust width
                    height={350} // Adjust height
                    priority
                    className="mx-auto max-lg:h-5/6 rounded" // Ensure the image loads quickly
                  />    
          </>) : (
          <>
          <Image
                    src="/cardback.png" // Replace with the path to your boat image
                    alt="Cardfront"
                    width={450} // Adjust width
                    height={350} // Adjust height
                    priority
                    className="mx-auto max-lg:h-5/6 scale-x-[-1] rounded" // Ensure the image loads quickly
                  />   
          
          </>)}
        </CardBody>
      </CardContainer>
      </div>
    </motion.div>
  );
}
