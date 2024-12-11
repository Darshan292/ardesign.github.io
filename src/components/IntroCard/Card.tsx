"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
// import { style } from "framer-motion/client";
interface CardProps {
  isTopvisible: boolean; // Track visibility of the card
}

export function Card({isTopvisible} : CardProps) {

  const scrollLock = useRef(false);
  const [progress, setProgress] = useState(0); // Tracks animation progress

  const [clicked, setClicked] = useState(false);
  const [showContent, setShowContent] = useState(true);

const handleClick = () => {
  setClicked(!clicked);
  setTimeout(() => setShowContent(!showContent), 150); // Matches animation timing
};
  

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const delta = event.deltaY;// Determine scroll direction
      const newProgress = Math.min(Math.max(progress + delta * 0.001, 0), 1); // Adjust progress
      setProgress(newProgress);

      if(progress<1){
        scrollLock.current=true;
      }

      if (!scrollLock.current) {
        return
      }; // Allow normal scroll when unlocked
      event.preventDefault(); // Prevent default scrolling behavior
      // Unlock scrolling when progress reaches 0 or 1
      if (newProgress === 1) {
        scrollLock.current=false
      }
    };
    

    if(isTopvisible){
      window.addEventListener("wheel", handleScroll, { passive: false });
    }else{
      setProgress(1);
      scrollLock.current=false;
    }
    

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [progress, scrollLock, isTopvisible]);


  return (
    <motion.div
      id="animatedCard"
      style={{
        opacity: progress,
        transform: `translateX(${-100 + progress * 100}%) 
                    translateY(${-150 + (progress)* 150}%) 
                    rotate(${-180 + progress * 180 }deg)`,
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out,",
      }}
      className="relative"
    >
      <div style={{
      transform :`rotateY(${clicked? 180 : 0}deg)`,
      transition: "transform 0.3s ease-in-out",
    }}>
      <CardContainer>
        <CardBody className={`h-60 w-96 relative bg-[#204480] hover:bg-[#204485] rounded-mg p-6 hover:shadow-black hover:shadow-2xl`} onClick={handleClick} >
          {showContent ? (<>
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            Contact Us
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-white mx-auto"
          >
            example@gmail.com
            <br />
            9876xxxx09
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
          </div> </>) : (
          <>
          <div className="scale-x-[-1]">
            <CardItem translateZ="50" className="text-xl font-bold text-white mx-auto">
            AR designs
          </CardItem>
          </div>
          
          </>)}
        </CardBody>
      </CardContainer>
      </div>
    </motion.div>
  );
}
