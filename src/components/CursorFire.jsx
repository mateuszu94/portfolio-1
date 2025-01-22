import useMousePosition from "@/hooks/useMousePosition";
import React, { useEffect, useRef, useState } from "react";
import { animate, motion, transform, useMotionValue } from "framer-motion";

const CursorFire = ({ isHovered, sticky, setIsHovered, menuOpen }) => {
  const { x, y } = useMousePosition();
  const [scrollY, setScrollY] = useState(0);
  const [cursorSize, setCursorSize] = useState(32);
  const [cursorColor, setCursorColor] = useState("#000");
  const { scrollHeight, clientHeight } = document.documentElement;
  const maxScrollY = scrollHeight - clientHeight;
  const cursor = useRef(null);

  useEffect(() => {
    if (isHovered === 1) {
      setCursorSize(20);
      setCursorColor("#f00");
    } else if (isHovered === 0) {
      setCursorSize(32);
      setCursorColor("#000");
    } else if (isHovered === 2) {
      setCursorSize(62);
      setCursorColor(menuOpen ? "#e34128" : "#000");
    }
  }, [isHovered, menuOpen]);

  const manageMouseOver = () => {
    setIsHovered(2);
  };

  const manageMouseLeave = () => {
    setIsHovered(0);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" }
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      setScrollY(currentScrollY);
    };
    sticky.current.addEventListener("mouseover", manageMouseOver);
    sticky.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };
  const manageMouseMove = () => {
    const { left, top, width, height } = sticky.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: x - center.x, y: y - center.y };

    if (isHovered === 2) {
      //rotation
      rotate(distance);

      // stretch
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.2);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.2);
    } else {
      mouse.x.set(x - cursorSize / 2);
      mouse.y.set(y - cursorSize / 2);
    }
  };
  useEffect(() => {
    manageMouseMove();
  }, [x, y]);
  const template = ({ rotate, scaleX, scaleY }) => {
    return ` rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };
  return (
    <>
      {scrollY === maxScrollY && (
        <motion.div
          transformTemplate={template}
          ref={cursor}
          className={`   scale-100  z-20 absolute rounded-full pointer-events-none ${"opacity-70"}  `}
          style={{
            left: mouse.x,
            top: mouse.y,
            scaleX: scale.x,
            scaleY: scale.y,
          }}
          animate={{
            width: cursorSize,
            height: cursorSize,
            backgroundColor: cursorColor,
          }}
        ></motion.div>
      )}
    </>
  );
};

export default CursorFire;
