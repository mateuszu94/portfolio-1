"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Computer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7],
    ["40%", "-160%", "-210%"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 0.71],
    ["0%", "10%", "200%", "60%"]
  );
  const opacity = useTransform(scrollYProgress, [0.7, 0.71], [1, 0]);

  const opacity1 = useTransform(scrollYProgress, [0.3, 0.31], [1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.31, 0.51],
    [0, 0, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0, 0.5, 0.51, 0.71],
    [0, 0, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 0.71],
    [0, 1.1, 5, 1]
  );
  const background = useTransform(
    scrollYProgress,
    [0.7, 0.71],
    ["rgb(0, 0, 0)", "rgb(179, 83, 120)"]
  );
  const font = useTransform(
    scrollYProgress,
    [0.7, 0.71],
    ["rgb(0, 0, 0)", "rgb(179, 83, 120)"]
  );
  return (
    <motion.div
      ref={ref}
      className="relative h-[100vh] w-full bg-black "
      style={{ background }}
    >
      <motion.div
        className="absolute bg-laptopBg bg-cover h-[50%] w-[40%] z-30  right-[-40%] rounded-full   "
        style={{ x, scale, y, opacity }}
      >
        {" "}
        <div className="text-white font-bold font-mono text-md absolute top-[30%] left-[50%] translate-x-1/2 ">
          <div>
            <motion.div className="absolute " style={{ opacity: opacity1 }}>
              Responsywny design
            </motion.div>
            <motion.div className="absolute " style={{ opacity: opacity2 }}>
              {" "}
              Estetyczny design
            </motion.div>
            <motion.div className="absolute" style={{ opacity: opacity3 }}>
              Nowoczesny design
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Computer;
