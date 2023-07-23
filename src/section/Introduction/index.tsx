import React, { useCallback, memo, useEffect, useState } from "react";
import Image from "next/image";
import NavigationMenus from "@app/components/Menus";
import { toUpperCase } from "@app/utils/string.uitl";
import { NavigateType } from "@app/hooks/useNavigate";
import { isLaptopOrPC } from "@app/utils/general.util";

interface IntroductionProps {
  reference: React.MutableRefObject<HTMLElement | null>;
  onNavigate: (section: NavigateType) => void;
}

const MY_IMAGE = "/images/profile.jpg";
const MY_IMAGE_BRUSH = "/images/profile-colorwater.jpg";
const IMAGE_ALT = "Tee's profile";

const Introduction: React.FC<IntroductionProps> = ({ reference, onNavigate }) => {
  const [isPCSize, setPCSize] = useState<boolean>(false);

  const renderMenus = useCallback(() => {
    if (!isPCSize) return null;
    return <NavigationMenus onNavigate={onNavigate} />;
  }, [isPCSize, onNavigate]);

  useEffect(() => {
    let words = document.getElementsByClassName("word") as HTMLCollectionOf<HTMLElement>;
    let wordArray: HTMLSpanElement[][] = [];
    let currentWord = 0;

    if (words[currentWord]) words[currentWord].style.opacity = "1";
    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i]);
    }

    function changeWord() {
      let cw = wordArray[currentWord];
      let nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
      for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
      }

      for (let i = 0; i < nw.length; i++) {
        nw[i].className = `letter behind ${nw[i].className.includes("mr-3") ? "mr-3" : ""}`;

        if (nw[0].parentElement) nw[0].parentElement.style.opacity = "1";
        animateLetterIn(nw, i);
      }

      currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw: HTMLSpanElement[], i: number) {
      setTimeout(function () {
        cw[i].className = `letter out ${cw[i].className.includes("mr-3") ? "mr-3" : ""}`;
      }, i * 80);
    }

    function animateLetterIn(nw: HTMLSpanElement[], i: number) {
      setTimeout(function () {
        nw[i].className = `letter in ${nw[i].className.includes("mr-3") ? "mr-3" : ""}`;
      }, 340 + i * 80);
    }

    function splitLetters(word: HTMLElement) {
      let content = word.innerHTML;
      word.innerHTML = "";
      let letters = [];
      for (let i = 0; i < content.length; i++) {
        let letter = document.createElement("span");
        letter.className = `letter ${content.charAt(i) === " " ? "mr-3" : ""}`;
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
      }

      wordArray.push(letters);
    }

    changeWord();

    const timer = setInterval(changeWord, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let mouseTimer: null | NodeJS.Timeout = null;

    function handleImageOpacity(e: MouseEvent) {
      if (reference.current)
        reference.current.style.setProperty(
          "--opacity-x",
          `${Math.min(
            1,
            Math.max(
              Math.abs(
                (e.pageY - reference.current.clientHeight / 2) /
                  (reference.current.clientHeight / 2)
              ),
              Math.abs(
                (e.pageX - reference.current.clientWidth / 2) / (reference.current.clientWidth / 2)
              )
            )
          )}`
        );
    }

    function handleMouseMove(e: MouseEvent) {
      if (mouseTimer) clearTimeout(mouseTimer);

      mouseTimer = setTimeout(() => handleImageOpacity(e), 100);
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reference.current]);

  useEffect(() => {
    setPCSize(isLaptopOrPC());
  }, []);

  return (
    <section ref={reference}>
      <div>
        <h2 className="hoverableX1 w-fit">Hi! I&apos;m Thanakorn (Tee),</h2>
        <h2 className="hoverableX1  w-fit">
          <span className="mr-3">A</span>
          <span className="word font-secondary font-bold">
            {toUpperCase(`fullstack developer .`)}
          </span>
          <span className="word font-secondary font-bold">
            {toUpperCase(`frontend developer .`)}
          </span>
          <span className="word font-secondary font-bold">{toUpperCase(`web developer .`)}</span>
        </h2>
      </div>
      <p className="hoverableX1 description">
        A developer based in Bangkok, Thailand. As a developer, my goal is to deliver
        high-performance solutions to clients while also enhancing existing code bases to improve
        performance and create exceptional user experiences. I have experience in developing various
        platforms, including real estate, government, and financial platforms. My passion lies in
        becoming a versatile and skilled developer that can solve any problem. I am constantly
        motivated to learn new things and stay updated with the latest industry trends. In addition,
        I have target to relocating to new country and contributing my skills to exciting projects
        elsewhere.
      </p>
      <div className="hero-image hoverableX2">
        <div className="hero-image-wrapper">
          <Image src={MY_IMAGE_BRUSH} alt={IMAGE_ALT} width={584} height={631} />
          <Image src={MY_IMAGE} alt={IMAGE_ALT} width={584} height={631} />
        </div>
      </div>
      {renderMenus()}
    </section>
  );
};

export default memo(Introduction);
