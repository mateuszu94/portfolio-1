"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, useTransform } from "framer-motion";

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
        y: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0,
        },
      }}
      className={` ml-5 h-screen w-[70vW] max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center`}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = ({ gitar, book, setBook, setGitar }) => {
  return (
    <Section>
      <AnimatePresence initial={false}>
        {book && (
          <div className=" relative flex flex-row justify-center items-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setBook(false)}
                className="absolute top-0 right-[-3rem] z-50 rounded-full border-2 border-black w-10 h-10"
              >
                {" "}
                <p className="text-2xl text-center font-extrabold"> x</p>
              </div>
              <div className="relative z-30 bg-[#F4A261] w-[55vh] rounded-full h-[55vh] bottom-[4rem]   left-40">
                <div className="flex  w-full h-full flex-row rounded-full justify-center items-center">
                  <p className="text-center text-lg">
                    Co do literatury interesuje sie fantastyką ,psychologią
                    ,finansami , i Warhammer 40K Polecane książki: -infinite and
                    divine,Seria wiedzmina,12 rules for life
                  </p>
                </div>
              </div>
              <div className="absolute z-20 bg-[#2A9D8F] w-[45vh] rounded-full h-[45vh] bottom-[8rem] left-30" />
              <div className="absolute z-20 bg-[#3A86FF] w-[27vh] rounded-full h-[27vh] bottom-[15rem] left-[30rem]" />
              <div className="absolute z-10 bg-[#8338EC] w-[27vh] rounded-full h-[27vh] bottom-[7rem] left-[30rem]" />
              <div className="absolute z-10 bg-[#1D3557] w-[45vh] rounded-full h-[45vh] bottom-[3rem] left-36" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>{" "}
      <AnimatePresence initial={false}>
        {!gitar && !book && (
          <motion.div
            className="relative z-30"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <h1 className=" text-6xl font-bold leading-relaxed">
                {" "}
                <span>Witaj jestem</span>
                <br />
                <span className=" rounded-full ml-32 mt-4  bg-gradient-to-r from-[#980821]  to-[#0072ff] bg-clip-text text-transparent  p-2">
                  Mateusz
                </span>
              </h1>
              <h2 className="ml-52 font-bold bg-gradient-to-r from-[#8f4e09] to-[#0f40cf]  bg-clip-text text-transparent">
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
                <span className="rounded-full ml-32 mt-4     p-2">Mateusz</span>
              </h1>
              <h2 className="ml-52 font-bold text-white textShadow">
                Jestem aspirujacym full stack developerem
              </h2>
              <h2 className="ml-52 text-3xl font-bold text-white textShadow">
                Poznaj mnie bardziej prezeszukujac pokój
              </h2>
            </motion.div>
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
      <AnimatePresence initial={false}>
        {gitar && (
          <div className=" relative flex flex-row justify-center items-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={() => setGitar(false)}
                className="absolute top-0 left-10 z-30 rounded-full border-2 border-black w-10 h-10"
              >
                {" "}
                <p className="text-2xl text-center font-extrabold"> x</p>
              </div>
              <div className=" z-10 bg-[#F4A261] w-[55vh]  h-[55vh] top-[4rem]   left-40">
                <div className=" absolute z-30 w-55[vh] h-[vh] top-1/2    ">
                  <p className=" text-center text-xl font-mono text-slate-300">
                    Rock, metal i szanty to takie moje muzyczne trio idealne.
                    Zawsze gdzieś się przewijały w moim życiu czasem mocniej,
                    czasem lżej, ale zawsze były blisko. Uwielbiam ten klimat,
                    gdzie z jednej strony masz energię i moc gitar, a z drugiej
                    luzne country
                  </p>
                </div>
              </div>
              <div className="absolute z-20 bg-[#2A9D8F] w-[45vh]  h-[45vh] top-[8rem] left-30" />
              <div className="absolute z-20 bg-[#3A86FF] w-[27vh]  h-[27vh] top-[15rem] left-[30rem]" />
              <div className="absolute z-10 bg-[#8338EC] w-[27vh]  h-[27vh] top-[7rem] left-[30rem]" />
              <div className="absolute z-10 bg-[#1D3557] w-[45vh]  h-[45vh] top-[3rem] left-36" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

const Skills = ({ setIsHovered }) => {
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
            setIsHovered={setIsHovered}
            state={Open}
            setState={setOpen}
            name={"Back-end"}
            icon={<BsDatabase />}
            code={1}
          />
          <SkillDisplay
            array={frontendSkills}
            setIsHovered={setIsHovered}
            state={Open}
            setState={setOpen}
            name={"Front-end"}
            icon={<BsBrush />}
            code={2}
          />
          <SkillDisplay
            array={languagesArray}
            setIsHovered={setIsHovered}
            state={Open}
            setState={setOpen}
            name={"Języki"}
            icon={<FaLanguage />}
            code={3}
          />
          <SkillDisplay
            array={otherSkillsArray}
            setIsHovered={setIsHovered}
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

const SkillDisplay = ({
  icon,
  array,
  state,
  setState,
  name,
  code,
  setIsHovered,
}) => {
  return (
    <>
      <Button
        onPointerEnter={() => {
          setIsHovered(1);
        }}
        onPointerLeave={() => setIsHovered(0)}
        className={
          state === code
            ? `rounded-b-none textShadow cursor-none`
            : "m-2 cursor-none textShadow"
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
          className="bg-white w-full flex flex-wrap p-10 gap-12"
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
              <div className="block-container  w-20 h-20 ">
                {" "}
                <div className="rounded-xl btn-back" />
                <div className="rounded-xl btn-front flex justify-center items-center ">
                  {x.icon && (
                    <Image
                      className="w-1/2 h-1/2 object-contain "
                      src={x.icon}
                      width={30}
                      height={30}
                      alt={x.name}
                    />
                  )}
                </div>
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

export const Interface = ({
  gitar,
  book,
  setFoxAnimation,
  setGitar,
  setBook,
  setIsHovered,
}) => {
  return (
    <div className="flex flex-col  justify-start  items-start">
      <AboutSection
        gitar={gitar}
        book={book}
        setBook={setBook}
        setGitar={setGitar}
      />
      <Skills setIsHovered={setIsHovered} />
      <Section>
        {" "}
        <ProjectsSection setIsHovered={setIsHovered} />{" "}
      </Section>
      <Section>
        <Mail setFoxAnimation={setFoxAnimation} setIsHovered={setIsHovered} />
      </Section>
    </div>
  );
};
