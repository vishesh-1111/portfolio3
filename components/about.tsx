"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <div className="mt-10">

    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      >
      {/* <SectionHeading>About me</SectionHeading> */}
      <p 
  className="mb-3" 
  style={{ color: '#4A4A4A', fontSize:'25px' }} // Adjust the color to a lighter shade
>
  I am a Computer Science Under-graduate Currently in Third Year, 
  I am Interested in Backend-Development and AI. 
  I enjoy learning new tech stuff.
</p> 

{/* <p 
  className="mb-3 mt-10"  
  style={{ color: '#4A4A4A', fontSize:'20px' }} // Adjust the color to a lighter shade
>
<span className="italic">When I'm not coding</span>, I enjoy playing
        Chess, watching movies, TV shows, Anime. I am currently
        learning about{" "}
        <span className="font-medium">Retrieval Augmented Generation in language models</span>. I also 
        like hitting the <span className="font-medium">Gym</span>.
</p> */}
    </motion.section>
      </div>
  );
}
