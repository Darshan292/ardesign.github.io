"use client";
import { useRef, useState, useEffect } from 'react';
import styles from '../components/Background/Circles.module.css'
import { Lato } from 'next/font/google'
import { Card } from "@/components/IntroCard/Card";

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

const LandingPage: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [inViewport, setIsInViewport] = useState(true);

  useEffect(()=>{
    console.log("View port is : ", inViewport)
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio > 0.9) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      },
      { threshold: [0.9] } // Specify thresholds
    );

    observer.observe(cardRef.current);

  })


  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
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
      <div ref={cardRef} className="w-5/6 z-10 mx-auto text-center lg:text-[7rem] md:text-[5rem] text-5xl lg:pt-[7%] md:pt-[8%] pt-[16%]">
        <h1 className={`${lato.className}`}>ar designs studio</h1>
      </div>
      <div className="z-10">
        <Card isTopvisible={inViewport}/>
      </div>
    </div>
  );
};

export default LandingPage;