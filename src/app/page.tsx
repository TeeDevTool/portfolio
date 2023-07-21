"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [isPCSize, setPCSize] = useState<boolean>(false);
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

  useEffect(() => {
    function getAllElement(): Element[] {
      const elementList: Element[] = [];
      const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");
      const lefts: NodeListOf<HTMLElement> = document.querySelectorAll(".left");
      const rights: NodeListOf<HTMLElement> = document.querySelectorAll(".right");
      const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".card");

      sections.forEach((section) => {
        section.querySelectorAll(":scope > *").forEach((el) => {
          if (!el.classList.contains("modal")) elementList.push(el);
        });
      });

      lefts.forEach((el) => elementList.push(el));

      rights.forEach((el) => elementList.push(el));

      cards.forEach((el) => elementList.push(el));

      return elementList;
    }

    const allEl = getAllElement();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {});

    allEl.forEach((el) => observer.observe(el));

    return () => {
      allEl.forEach((el) => observer.unobserve(el));
    };
  }, [isPCSize]);

  useEffect(() => {
    setPCSize(isLaptopOrPC());
  }, []);

  return (
    <main ref={mainRef}>
      <Navbar onNavigate={onNavigate} />
      <Introduction reference={introductionRef} onNavigate={onNavigate} />
      <Skills reference={skillsRef} />
      <SkillOverwiew />
      <Experience reference={experienceRef} />
      <Projects reference={projectsRef} />
      {isPCSize && <Cursor />}
    </main>
  );
}
