'use client'

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

const ARAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 0.8], ["-40vw", "0vw"])
  const negativeX = useTransform(scrollYProgress, [0, 0.8], ["40vw", "0vw"])
  const textcolor = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["#1a386a", "#ffffff"]
  )
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    ["#ffffff", "#204480"]
  )

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[500vh]"
      style={{ backgroundColor }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ x, color:textcolor }}
          className={`${lato.className} text-[10rem] font-extrabold text-[#1a386a]`}
        >
          a
        </motion.div>
        <motion.div
          style={{ x: negativeX, color:textcolor }}
          className={`${lato.className} text-[10rem] font-extrabold text-[#1a386a]`}
        >
          r
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ARAnimation

