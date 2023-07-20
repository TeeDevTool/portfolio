"use client";
import React, { useEffect, useRef } from "react";
import Cursor from "@app/components/Cursor";
import Navbar from "@app/components/Navbar";
import Introduction from "@app/section/Introduction";
import Skills from "@app/section/Skills";
import SkillOverwiew from "@app/section/SkillOverview";
import Experience from "@app/section/Experience";
import Projects from "@app/section/Projects";
import useNavigate from "@app/hooks/useNavigate";
import { isLaptopOrPC } from "@app/utils/general.util";

export default function Home() {
  const { onNavigate, introductionRef, skillsRef, experienceRef, projectsRef } = useNavigate();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const navEl = document.querySelector("nav");
      if (mainRef.current && navEl) {
        mainRef.current.scrollTop > 10
          ? navEl.classList.add("scrolled")
          : navEl.classList.remove("scrolled");
      }
    }

    mainRef.current?.addEventListener("scroll", onScroll);

    return () => {
      mainRef.current?.removeEventListener("scroll", onScroll);
    };
  }, [mainRef.current]);

  return (
    <main ref={mainRef}>
      <Navbar onNavigate={onNavigate} />
      <Introduction reference={introductionRef} onNavigate={onNavigate} />
      <Skills reference={skillsRef} />
      <SkillOverwiew />
      <Experience reference={experienceRef} />
      <Projects reference={projectsRef} />
      {isLaptopOrPC() && <Cursor />}
    </main>
  );
}
