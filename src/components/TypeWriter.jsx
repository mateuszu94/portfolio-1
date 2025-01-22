"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const boxFadeDuration = 0.01;
const fade_delay = 5;
const main_fade_duration = 0.25;
const swanp_delay_in_ms = 5000;
const letter_delay = 0.02;
export const TypeWriter = ({ str, boxColor, textSize }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    if (str.length > 0) {
      const intervalId = setInterval(() => {
        setExampleIndex((pv) => (pv + 1) % str.length);
      }, swanp_delay_in_ms);

      return () => clearInterval(intervalId);
    }
  }, []);
  return (
    <p className={`mb-2.5 text-sm ${textSize}  font-light uppercase`}>
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        {str[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={
              exampleIndex
                ? {
                    opacity: 0,
                  }
                : { opacity: 1 }
            }
            transition={{
              delay: fade_delay,
              duration: main_fade_duration,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * letter_delay,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * letter_delay,
                times: [0, 0.1, 1],
                duration: boxFadeDuration,
                ease: "easeInOut",
              }}
              className={`absolute bottom-[3px] left-[1px] right-0 top-[3px] ${boxColor}`}
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
