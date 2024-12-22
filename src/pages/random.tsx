"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

const ARAnimation: React.FC = () => {
  const secondPageRef = useRef<HTMLElement>(null);
  const [isOnSecondPage, setIsOnSecondPage] = useState(false);
  const [isMerged, setIsMerged] = useState(false);
  const [circleExpand, setCircleExpand] = useState(false);
  const [distance, setDistance] = useState(500);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (isOnSecondPage) {
      const scrollOffset = scrollPosition - window.innerHeight;

      if (scrollOffset >= 500 && !isMerged) {
        setIsMerged(true);
        setTimeout(() => setCircleExpand(true), 300);
      } else if (scrollOffset < 500 && isMerged) {
        setIsMerged(false);
        setCircleExpand(false);
      }

      setDistance(Math.max(500 - scrollOffset, 0));
    }
  }, [isOnSecondPage, isMerged]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsOnSecondPage(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const refElement = secondPageRef.current;
    if (refElement) {
      observer.observe(refElement);
    }

    return () => {
      if (refElement) {
        observer.unobserve(refElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isOnSecondPage) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOnSecondPage, handleScroll]);

  const positionA = isMerged ? '50%' : `calc(50% - ${distance}px)`;
  const positionR = isMerged ? '50%' : `calc(50% + ${distance}px)`;

  return (
    <div className="relative h-[200vh] w-full">
      {/* Second Page */}
      <section
        ref={secondPageRef}
        className={`h-screen relative transition-colors duration-1000 ${
          circleExpand ? 'bg-blue-500' : ''
        }`}
      >
        {isOnSecondPage && (
          <>
            <div
              className="fixed top-[40vh] text-9xl font-bold transition-all duration-500 z-10"
              style={{
                left: positionA,
                color: circleExpand ? 'white' : 'black',
              }}
            >
              A
            </div>
            <div
              className="fixed top-[40vh] text-9xl font-bold transition-all duration-500 z-10"
              style={{
                left: positionR,
                color: circleExpand ? 'white' : 'black',
              }}
            >
              R
            </div>
          </>
        )}

        {circleExpand && (
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 transition-transform duration-700 z-0"
            style={{
              width: circleExpand ? '200vw' : '0',
              height: circleExpand ? '200vw' : '0',
            }}
          ></div>
        )}
      </section>
    </div>
  );
};

export default ARAnimation;
