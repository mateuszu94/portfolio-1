"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";

const ScrollManager = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimated = useRef(false);
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  const scrollToSection = (targetSection) => {
    const targetScroll = targetSection * data.el.clientHeight;
    gsap.to(data.el, {
      duration: 1,
      scrollTop: targetScroll,
      onStart: () => {
        isAnimated.current = true;
      },
      onComplete: () => {
        isAnimated.current = false;
      },
    });
  };

  useEffect(() => {
    scrollToSection(section);
    console.log(section);
  }, [section]);

  let isChangingSection = false;

  useFrame(() => {
    if (isAnimated.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);

    if (!isChangingSection) {
      if (data.scroll.current > lastScroll.current) {
        if (curSection === 0) {
          onSectionChange(1);
        } else if (curSection === 1 && data.scroll.current > 0.4) {
          onSectionChange(2);
        } else if (curSection === 2 && data.scroll.current > 0.7) {
          onSectionChange(3);
        }
      }

      if (
        data.scroll.current < lastScroll.current &&
        data.scroll.current < 1 / (data.pages - 1)
      ) {
        onSectionChange(0);
      }
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};

export default ScrollManager;
