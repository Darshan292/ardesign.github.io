"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

export function ARAnimation() {
  const [isVisible, setIsVisible] = useState(false); // Track if section is fully visible
  const [progress, setProgress] = useState(0); // Track scroll progress
  const scrollLock= useRef(true)
  const sectionRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Hello")
        console.log(entry.intersectionRatio)
        if(entry.intersectionRatio > 0.7){
          console.log("Yes")
          setIsVisible(true);
        }else{
          setIsVisible(false)
        }
        // setIsVisible(entry.isIntersecting && entry.intersectionRatio === 1); // Check full visibility
      },
      { threshold: 0.7 } // Trigger when section is 100% in the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // if (!isVisible) {
    //   setProgress(0); // Reset progress when section is not visible
    //   return;
    // }

    const handleScroll = (event: WheelEvent) => {
      if(progress > 0 && progress < 1){
        event.preventDefault(); 
      }
      console.log(progress)
      const delta = event.deltaY * 0.003; // Scale the scroll delta
      setProgress((prev) => Math.min(Math.max(prev + delta, 0), 1));
  }

    if(isVisible){
      window.addEventListener("wheel", handleScroll, { passive: false });
    }
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isVisible, progress, scrollLock]);

  return (
    <div
      ref={sectionRef}
      className={`relative min-h-[130vh] pt-20 pb-20 flex items-center justify-center overflow-hidden ${progress > 0.95 ? "bg-[#204480]":"bg-white"} duration-500 transition-colors`}
    >
      <motion.div
        style={{
          transform: `translateX(${progress * 100}vh)`,
        }}
        className={`${lato.className} absolute left-0 text-[10rem] font-extrabold ${progress === 1 ? "text-white" : "text-[#1a386a]" }`}
      >
        a
      </motion.div>
      <motion.div
        style={{
          transform: `translateX(${-progress * 100}vh)`,
        }}
        className={`${lato.className} absolute right-0 text-[10rem] font-extrabold ${progress === 1 ? "text-white" : "text-[#1a386a]" }`}      >
        r
      </motion.div>
    </div>
  );
}
