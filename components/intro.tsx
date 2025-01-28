"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import TypeWriterEffect from 'react-typewriter-effect';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const myAppRef = useRef(null);

  // useEffect(() => {
  //   // This code runs only on the client side
  //   myAppRef.current = document.querySelector('.scrollable-div');
  // }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex gap-4">
          <div className="text-gray-700 text-[80px] ml-4">
            {'>'}
          </div>
          <div className="mt-2" style={{ minWidth: '800px' }}>
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Red Hat Display',
                color: '#4A4A4A',
                fontWeight: 500,
                fontSize: '2.0em',
              }}
              startDelay={2000}
              cursorColor="#4A4A4A"
              multiText={['Vishesh Gautam']}
              multiTextDelay={1000}
              typeSpeed={50}
              scrollArea={myAppRef.current}
            />
          </div>
        </div>
      </motion.h1>
    </section>
  );
}
