"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { BsArrowDown, BsArrowUp, BsBrush, BsDatabase } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import { FaLanguage } from "react-icons/fa6";
import AnimateLetters from "@/lib/amiateLetters";
import ProjectsSection from "./ProjectsSection";
import Mail from "./Mail";

let size = 40;

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
      className={` ml-5 h-screen w-[70vW] max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center`}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = ({ gitar, book }) => {
  const [isInside, setisInside] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isInside) {
      setpositionX(x - size);
      setpositionY(y + size / 2);
    }
  });
  const musicArray = [
    {
      name: "Metal",
      bands: [
        { name: "metalica", src: "/metalica.png" },
        { name: "apocaliptyka", src: "/apocaliptyka.jpg" },
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
      ],
    },
    {
      name: "Rock",
      bands: [
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
      ],
    },
    {
      name: "Rap",
      bands: [
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
        { name: "metalica", src: "/metalica.png" },
      ],
    },
  ];

  return (
    <Section>
      {gitar && (
        <motion.div
          animate={{
            opacity: [0, 0.5, 1],
            translateX: ["-100%", "50%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          className="flex w-1/2 items-center justify-center flex-col shadow-md shadow-black"
        >
          <div className="font-bold font-serif  relative flex h-10 justify-center items-center  text-2xl w-full bg-[#1B3C73] rounded-t-xl">
            <AnimateLetters str={"Ulubiona Muzyka"} daley={1} />
            <Button className="w-10 h-10 text-xl absolute p-0 bg-red-500 right-0 rounded-l-none rounded-b-none ">
              <SlClose />
            </Button>
          </div>
          <Carousel className="bg-white rounded-b-xl">
            <CarouselContent>
              {musicArray.map((music) => (
                <CarouselItem className="flex flex-col w-1/4 items-center py-2 justify-center">
                  {" "}
                  <p className="h-10 text-center flex items-center justify-center  font-extrabold text-xl font-mono">
                    {music.name}
                  </p>
                  <div className="grid grid-cols-2 w-1/2  gap-1 ">
                    {" "}
                    {music.bands.map((band) => (
                      <div>
                        {" "}
                        <Image
                          onClick={() => {}}
                          className="w-full shadow-md hover:shadow-black cursor-pointer hover:border-2 hover:border-slate-500 hover:rounded-md  ease-in-out duration-100"
                          src={band.src}
                          width={100}
                          height={100}
                          alt={band.name}
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>{" "}
          </Carousel>
        </motion.div>
      )}
      {book && <div>hjkhjk</div>}
      {!gitar && !book && (
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
            animate={{
              WebkitMaskPosition: [
                `0% 0%`,
                `50% 50%`,
                `150% 50%`,
                `160% -160%`,
              ],
              WebkitMaskSize: ["4rem", "20rem", "20rem", "4rem"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.6, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <h1 className="text-6xl font-bold text-white textShadow leading-relaxed">
              {" "}
              <span>Witaj jestem</span>
              <br />
              <span className="bg-black rounded-full ml-32 mt-4 textShadow text-blue-600 italic p-2">
                Mateusz
              </span>
            </h1>
            <h2 className="ml-52 font-bold text-white textShadow">
              Jestem aspirujacym full stack developerem
            </h2>
            <h2 className="ml-52 text-3xl font-bold text-white textShadow">
              Poznaj mnie bardziej prezeszukujac pokój
            </h2>
          </motion.div>
        </div>
      )}
    </Section>
  );
};

const Skills = () => {
  const [Open, setOpen] = useState(0);

  const backendSkils = [
    {
      name: "Java",
      percent: 80,
      icon: "/icons/java (1).png",
    },
    {
      name: "Spring",
      percent: 60,
      icon: "/icons/spring (1).png",
    },
    {
      name: "Postman",
      percent: 80,
      icon: "/icons/postman (1).jpg",
    },
    {
      name: "Node.js",
      percent: 60,
      icon: "/icons/node (1).png",
    },
    {
      name: "Next.js",
      percent: 80,
      icon: "/icons/next-js (1).svg",
    },
    {
      name: "SQL",
      percent: 70,
      icon: "/icons/sql (1).png",
    },
    {
      name: "MongoBD",
      percent: 50,
      icon: "/icons/mongo (1).png",
    },
    {
      name: "Prisma",
      percent: 50,
      icon: "/icons/prisma (1).png",
    },
    {
      name: "TypeScript",
      percent: 60,
      icon: "/icons/ts (1).png",
    },
  ];
  const frontendSkills = [
    {
      name: "Html/Css",
      percent: 90,
      icon: "/icons/css (1).png",
    },
    {
      name: "JavaScript",
      percent: 70,
      icon: "/icons/js (1).png",
    },
    {
      name: "React",
      percent: 80,
      icon: "/icons/react (1).png",
    },
    {
      name: "Tellwind",
      percent: 90,
      icon: "/icons/tellwind (1).png",
    },
    {
      name: "FremerMotion",
      percent: 80,
      icon: "/icons/framer (1).png",
    },
    {
      name: "Threejs",
      percent: 50,
      icon: "/icons/threejs (1).png",
    },
    {
      name: "Shadcn/ui",
      percent: 90,
      icon: "/icons/shat (1).png",
    },
    {
      name: "Material-ui",
      percent: 80,
      icon: "/icons/mui (1).png",
    },
    {
      name: "Blender",
      percent: 30,
      icon: "/icons/blender (1).png",
    },
  ];
  const languagesArray = [
    {
      name: "Angielski",
      percent: 80,
      icon: "/icons/Angielski (1).png",
    },
    {
      name: "Polski",
      percent: 100,
      icon: "/icons/Polska (1).png",
    },
  ];
  const otherSkillsArray = [
    {
      name: "API",
    },
    {
      name: "Open Ai",
    },
    {
      name: "Chat Gpt",
    },
  ];
  return (
    <Section>
      <div className=" shadow-md w-1/2  ">
        <h2 className="text-5xl text-white p-2  bg-[#1B3C73] shadow-md textShadow shadow-black rounded-t-md font-bold font-serif">
          Umiejętnośći :
        </h2>
        <div className="grid grid-flow-row bg-[#40679E] pt-2  w-full  ">
          {" "}
          <SkillDisplay
            array={backendSkils}
            state={Open}
            setState={setOpen}
            name={"Back-end"}
            icon={<BsDatabase />}
            code={1}
          />
          <SkillDisplay
            array={frontendSkills}
            state={Open}
            setState={setOpen}
            name={"Front-end"}
            icon={<BsBrush />}
            code={2}
          />
          <SkillDisplay
            array={languagesArray}
            state={Open}
            setState={setOpen}
            name={"Języki"}
            icon={<FaLanguage />}
            code={3}
          />
          <SkillDisplay
            array={otherSkillsArray}
            state={Open}
            setState={setOpen}
            name={"Inne Umiejętności"}
            code={4}
          />
        </div>
      </div>
    </Section>
  );
};

const SkillDisplay = ({ icon, array, state, setState, name, code }) => {
  return (
    <>
      <Button
        className={
          state === code ? `rounded-b-none textShadow` : "m-2 textShadow"
        }
        onClick={() => {
          if (state === code) setState(-1);
          else setState(code);
        }}
      >
        <p className="p-2">{icon}</p>
        {name}
        {state === code ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsArrowUp />
          </motion.p>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BsArrowDown />
          </motion.p>
        )}
      </Button>
      {state === code && (
        <motion.div
          className="bg-white w-full"
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: [0, 0, 1],
            height: "auto",
          }}
          transition={{
            times: [0, 0.7, 1],
            duration: 0.5,
            delay: 0.3,
          }}
          on
        >
          {array.map((x) => (
            <div key={x.name}>
              <div className="flex flex-row items-center  gap-4 p-1">
                {x.icon && (
                  <Image
                    className="shadow-md rounded-md shadow-black "
                    src={x.icon}
                    width={30}
                    height={30}
                    alt={x.name}
                  />
                )}
                <p className="font-bold font-serif text-xl ">- {x.name}</p>
              </div>
              {x.percent && (
                <div className="h-2 w-full bg-gray-200 rounded-full my-2">
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: `${x.percent}%`,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                    }}
                    className="h-full bg-[#1B3C73] shadow-md rounded-full"
                  ></motion.div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export const Interface = ({ gitar, book, setFoxAnimation }) => {
  return (
    <div className="flex flex-col  justify-start  items-start">
      <AboutSection gitar={gitar} book={book} />
      <Skills />
      <Section>
        {" "}
        <ProjectsSection />{" "}
      </Section>
      <Section>
        <Mail setFoxAnimation={setFoxAnimation} />
      </Section>
    </div>
  );
};
