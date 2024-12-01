"use client";

import React, { useEffect } from "react";
import styles from '../components/Background/Circles.module.css'

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Add JavaScript logic to animate the circles if needed
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 bottom-0 blur-3xl ">
        {/* Circles */}
        {/* <div className={`${styles.circlesAnimation}  absolute bg-black w-32 h-32 rounded opacity-0  left-1/4`}></div> */}
        <div className={`${styles.circlesAnimation}  absolute bg-[#204480] w-60 h-60 rounded-full opacity-0 -right-10`}></div>
        {/* <div className={`${styles.circlesAnimation}  absolute bg-black w-40 h-40 rounded-full opacity-0 left-1/2`}></div> */}
      </div>
    </div>
  );
};

export default LandingPage;
