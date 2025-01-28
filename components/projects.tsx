"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { prototype } from "events";
import {properties} from "@/components/constants/data"
import Card from "./Card/Card.js";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-10 mb-20">
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {properties.map((project, index) => (
          <React.Fragment key={index}>
            <Card data={project}></Card>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
