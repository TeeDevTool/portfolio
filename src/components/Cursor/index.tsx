import React, { useEffect, useRef } from "react";
import "./index.css";

interface CursorProps {}

interface StateInterface {
  x: string | number;
  y: string | number;
  width: string | number;
  height: string | number;
  radius: string | null;
  scale: string | null;
}

const CURSOR_SIZE = 20;

const Cursor: React.FC<CursorProps> = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const clickableRef = useRef<Element | null>(null);
  const contactRef = useRef<Element | null>(null);
  const logoRef = useRef<Element | null>(null);
  const overviewRef = useRef<Element | null>(null);

  useEffect(() => {
    function updateProperties(el: HTMLDivElement, state: StateInterface) {
      el.style.setProperty("left", `${state.x}px`);
      el.style.setProperty("top", `${state.y}px`);
      el.style.setProperty("width", `${state.width}px`);
      el.style.setProperty("height", `${state.height}px`);
    }

    function createState(e: MouseEvent): StateInterface {
      const defaultState = {
        x: e.pageX - CURSOR_SIZE / 2,
        y: e.pageY - CURSOR_SIZE / 2,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        radius: "50%",
        scale: null,
      };

      const computedState: any = {};

      if (clickableRef.current) {
        const { top, left, width, height } = clickableRef.current.getBoundingClientRect();

        computedState.x = left + width / 2;
        computedState.y = top + height / 2;
        computedState.width = 0;
        computedState.height = 0;
      }

      if (contactRef.current) {
        const { top, left, width, height } = contactRef.current.getBoundingClientRect();

        computedState.x = left - width / 2;
        computedState.y = top - height / 2;
        computedState.width = width * 2;
        computedState.height = height * 2;
      }

      if (logoRef.current) {
        const { top, left, height } = logoRef.current.getBoundingClientRect();

        computedState.x = left - height / 4;
        computedState.y = top - height / 2;
        computedState.width = height * 2;
        computedState.height = height * 2;
      }

      return {
        ...defaultState,
        ...computedState,
      };
    }

    function onMouseMove(e: MouseEvent) {
      if (cursorRef.current) {
        const state = createState(e);
        updateProperties(cursorRef.current, state);
      }
    }

    function onMouseHoverX1() {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(6)";
    }

    function onMouseHoverOutX1() {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
    }

    function onMouseHoverX2() {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(12)";
    }

    function onMouseHoverOutX2() {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
    }

    function onMouseHoverOverview() {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(0)";
    }

    function onMouseHoverOutOverview() {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
    }

    function setNavElement(el: Element | null) {
      clickableRef.current = el;
    }

    function setContactElement(el: Element | null) {
      contactRef.current = el;
    }

    function setLogoElement(el: Element | null) {
      logoRef.current = el;
    }

    if (document) {
      const hoverableX1El = document.querySelectorAll(".hoverableX1");
      const hoverableX2El = document.querySelectorAll(".hoverableX2");
      const clickableEl = document.querySelectorAll(".clickable");
      const contactElAll = document.querySelectorAll(".contact-me");
      const logoEl = document.querySelectorAll(".logo");
      const overviewEl = document.querySelectorAll(".overview");

      document.addEventListener("mousemove", onMouseMove);

      hoverableX1El.forEach((el) => {
        el.addEventListener("mouseenter", onMouseHoverX1);
        el.addEventListener("mouseleave", onMouseHoverOutX1);
      });

      hoverableX2El.forEach((el) => {
        el.addEventListener("mouseenter", onMouseHoverX2);
        el.addEventListener("mouseleave", onMouseHoverOutX2);
      });

      clickableEl.forEach((el) => {
        el.addEventListener("mouseenter", () => setNavElement(el));
        el.addEventListener("mouseleave", () => setNavElement(null));
      });

      logoEl.forEach((el) => {
        el.addEventListener("mouseenter", () => setLogoElement(el));
        el.addEventListener("mouseleave", () => setLogoElement(null));
      });

      overviewEl.forEach((el) => {
        el.addEventListener("mouseenter", onMouseHoverOverview);
        el.addEventListener("mouseleave", onMouseHoverOutOverview);
      });

      contactElAll.forEach((contactRef) => {
        contactRef.querySelectorAll("a").forEach((el) => {
          el.addEventListener("mouseenter", () => setContactElement(el));
          el.addEventListener("mouseleave", () => setContactElement(null));
        });
      });
    }

    return () => {
      const hoverableX1El = document.querySelectorAll(".hoverableX1");
      const hoverableX2El = document.querySelectorAll(".hoverableX2");
      const clickableEl = document.querySelectorAll(".clickable");
      const contactElAll = document.querySelectorAll(".contact-me");
      const logoEl = document.querySelectorAll(".logo");
      const overviewEl = document.querySelectorAll(".overview");

      document.removeEventListener("mousemove", onMouseMove);

      hoverableX1El.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHoverX1);
        el.removeEventListener("mouseleave", onMouseHoverOutX1);
      });

      hoverableX2El.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHoverX2);
        el.removeEventListener("mouseleave", onMouseHoverOutX2);
      });

      clickableEl.forEach((el) => {
        el.removeEventListener("mouseenter", () => setNavElement(el));
        el.removeEventListener("mouseleave", () => setNavElement(null));
      });

      logoEl.forEach((el) => {
        el.removeEventListener("mouseenter", () => setLogoElement(el));
        el.removeEventListener("mouseleave", () => setLogoElement(null));
      });

      overviewEl.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseHoverOverview);
        el.removeEventListener("mouseleave", onMouseHoverOutOverview);
      });

      contactElAll.forEach((contactEl) => {
        contactEl.querySelectorAll("a").forEach((el) => {
          el.removeEventListener("mouseenter", () => setContactElement(el));
          el.removeEventListener("mouseleave", () => setContactElement(null));
        });
      });
    };
  }, [cursorRef.current]);

  return <div ref={cursorRef} className="cursor-default"></div>;
};

export default Cursor;
