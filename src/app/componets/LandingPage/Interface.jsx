"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/app/utils/useMousePosition";
let size = 40;

const Section = (props) => {
  const { children } = props;

  return (
    <section
      className={` ml-5 h-screen w-[70vW] max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center`}
    >
      {children}
    </section>
  );
};

const AboutSection = () => {
  const [isInside, setisInside] = useState(false);
  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);
  const [positionX, setpositionX] = useState(180);
  const [positionY, setpositionY] = useState(200);
  useEffect(() => {
    if (isInside) {
      setpositionX(x - size);
      setpositionY(y + size / 2);
    }
  });

  return (
    <Section>
      <div ref={ref} className="relative z-30">
        <div>
          <h1 className=" text-6xl font-bold leading-relaxed">
            {" "}
            <span>Witaj jestem</span>
            <br />
            <span className="bg-blue-600 rounded-full ml-32 mt-4 text-black italic p-2">
              Mateusz
            </span>
          </h1>
          <h2 className="ml-52 font-bold">
            Jestem aspirujacym full stack developerem
          </h2>
        </div>
        <motion.div
          className="mask absolute top-0"
          onMouseEnter={() => setisInside(true)}
          onMouseLeave={() => setisInside(false)}
          animate={{
            WebkitMaskPosition: `${positionX}px ${positionY}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <h1 className="text-6xl font-bold text-white leading-relaxed">
            {" "}
            <span>Witaj jestem</span>
            <br />
            <span className="bg-black rounded-full ml-32 mt-4 text-blue-600 italic p-2">
              Mateusz
            </span>
          </h1>
          <h2 className="ml-52 font-bold text-white">
            Jestem aspirujacym full stack developerem
          </h2>
          <h2 className="ml-52 text-3xl font-bold text-white">
            Poznaj mnie bardziej prezeszukujac pokój
          </h2>
        </motion.div>
      </div>
    </Section>
  );
};

const Skills = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Umiejętnośći :</h2>
      <div className="bg-gray  w-1/3 h-14 border border-black rounded-t-xl"></div>
      <div className="bg-white  w-1/3 h-14 border border-black "></div>
      <div className="bg-white  w-1/3 h-14 border border-black "></div>
      <div className="bg-white  w-1/3 h-14 border border-black "></div>
      <div className="bg-white  w-1/3 h-14 border border-black rounded-b-xl"></div>
    </Section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col  justify-start  items-start">
      <AboutSection />
      <Skills />
      <Section>
        <h1>Projekty</h1>
      </Section>
      <Section>
        <h1>Kontakt</h1>
      </Section>
    </div>
  );
};
