"use client";
import styles from '../components/Background/Circles.module.css'
import { Lato } from 'next/font/google'
import { Card } from "@/components/IntroCard/Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

const LandingPage: React.FC = () => {
    const cardref = useRef<HTMLDivElement>(null)
    
  const { scrollYProgress:arScrollProgress } = useScroll({
    target:cardref,
    offset: ["start end", "end start"]
  })
  
  const x = useTransform(
    arScrollProgress,
    [0, 0.7], ["-100vw", "0vw"]
  );
  const y = useTransform(
    arScrollProgress,
    [0, 0.7],["-40vh", "0vh"]
  );
  const rotate = useTransform(
    arScrollProgress,
    [0, 0.7], [-200, 0] );


  return (
    <div 
    ref={cardref}
    className="relative w-full bg-white h-[500vh]">
      <div  className="sticky top-3 flex justify-center items-center">
    
      <div className=" z-0 absolute top-0 left-0 right-0 bottom-0 blur-3xl">
        {/* Circles */}
        {/* <div
          className={`${styles.circlesAnimation} absolute bg-black w-32 h-32 rounded opacity-0 left-1/4`}
        ></div> */}
        <div
          className={`${styles.circlesAnimation} absolute bg-[#204480] w-60 h-60 rounded-sm opacity-0 -right-10`}
        ></div>
        {/* <div
          className={`${styles.circlesAnimation} absolute bg-black w-40 h-40 rounded-full opacity-0 left-1/2`}
        ></div> */}
      </div>
      <div className="w-5/6 z-10 flex flex-col mx-auto text-center lg:text-[7rem] md:text-[5rem] text-5xl lg:pt-[7%] md:pt-[8%] pt-[16%]">
        <h1 className={`${lato.className}`}>ar designs studio</h1>
        <motion.div 
        style={{ x, y, rotate }} 
        className="z-10">
          <Card/>
        </motion.div>
      </div>
      </div>
      </div>
  );
};

export default LandingPage;
