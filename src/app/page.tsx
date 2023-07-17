"use client";
import React from "react";
import Cursor from "@app/components/Cursor";
import Navbar from "@app/components/Navbar";
import Introduction from "@app/section/Introduction";
import Skills from "@app/section/Skills";
import SkillOverwiew from "@app/section/SkillOverview";
import Experience from "@app/section/Experience";
import Projects from "@app/section/Projects";
import { isLaptopOrPC } from "@app/utils/general.util";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <Skills />
      <SkillOverwiew />
      <Experience />
      <Projects />
      {isLaptopOrPC() && <Cursor />}
    </main>
  );
}
