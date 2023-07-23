import React, { memo, useCallback, useEffect, useRef, useState } from "react";

interface SkillOverwiewProps {}

interface CountingBadgeProps {
  count: number;
  title: string;
  description1?: string;
  description2?: string;
  classes?: string;
}

const CountingBadge: React.FC<CountingBadgeProps> = ({
  count,
  title,
  description1,
  description2,
  classes,
}) => {
  return (
    <div className={`counting-badge ${classes}`}>
      <h1>{count}</h1>
      <h3>{title}</h3>
      <h6>{description1}</h6>
      <h6>{description2}</h6>
    </div>
  );
};

const CountingBadgeMemo = memo(CountingBadge);

const SkillOverwiew: React.FC<SkillOverwiewProps> = () => {
  const [isHover, setHover] = useState<boolean>(false);
  const pointerRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (pos: any) => {
      if (pointerRef.current) {
        const { top, left, right, bottom } = pointerRef.current.getBoundingClientRect();
        let x = pos.pageX - left;
        let y = pos.pageY - top;
        // reverse of x, y
        let xr = right - pos.pageX;
        let yr = bottom - pos.pageY;

        pointerRef.current?.style.setProperty("--mouse-x", x + "px");
        pointerRef.current?.style.setProperty("--mouse-y", y + "px");

        pointerRef.current?.style.setProperty(
          "--overview-pointer",
          Math.min(x, y, xr, yr, 100) + "px"
        );
      }
    },
    [isHover, pointerRef.current]
  );

  useEffect(() => {
    function onMouseHover() {
      setHover(true);
      if (pointerRef.current) {
        pointerRef.current?.style.setProperty("--overview-pointer", "80px");
      }
    }

    function onMouseHoverOut() {
      setHover(false);
      if (pointerRef.current) {
        pointerRef.current?.style.setProperty("--overview-pointer", "0px");
      }
    }

    if (document) {
      document.addEventListener("mousemove", onMouseMove);

      document.querySelectorAll(".overview").forEach((el) => {
        el.addEventListener("mouseenter", onMouseHover);
        el.addEventListener("mouseleave", onMouseHoverOut);
      });
    }

    return () => {
      if (document) {
        document.removeEventListener("mousemove", onMouseMove);

        document.querySelectorAll(".overview").forEach((el) => {
          el.removeEventListener("mouseenter", onMouseHover);
          el.removeEventListener("mouseleave", onMouseHoverOut);
        });
      }
    };
  }, [pointerRef.current, onMouseMove]);

  return (
    <section className="overview">
      <div ref={pointerRef}>
        <CountingBadgeMemo
          classes="left"
          count={4}
          title="Years of Experience"
          description1="Only time can increase this number"
        />
        <CountingBadgeMemo
          classes="right"
          count={26}
          title="Stacks"
          description1="Wanna increase this number?"
          description2="Mail me, the interesting stack!"
        />
      </div>
    </section>
  );
};

export default memo(SkillOverwiew);
