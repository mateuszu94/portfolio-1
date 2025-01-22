"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsArrowDownRight } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimateLetters from "@/lib/amiateLetters";
import { TypeWriter } from "./TypeWriter";

const googleLocation =
  "https://www.google.com/maps/place/Osiedle+Dywizjonu+303+39,+31-874+Krak%C3%B3w/@50.0840436,20.0121277,17z/data=!3m1!4b1!4m6!3m5!1s0x47164507b5a00331:0x209d93637bf545e1!8m2!3d50.0840436!4d20.0121277!16s%2Fg%2F11ghzvt3yn?entry=ttu";

const Hero = () => {
  const first = useRef(null);

  const { scrollYProgress } = useScroll({
    target: first,
    offset: ["end end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  return (
    <motion.div
      ref={first}
      className=" relative bg-slate-600 w-full h-[100vh]  overflow-x-hidden "
    >
      <div className="absolute flex flex-row bg-black h-14 w-60 rounded-full top-[40%] translate-y-[-50%] translate-x-[-25%] text-white text-right justify-end ">
        <div>
          <p>
            Zlokalizowany
            <br /> w Krakowie{" "}
          </p>
        </div>
        <Link href={googleLocation} target="blank">
          <div className="text-4xl ml-5 mr-2 mt-2 hover:text-red-600 ">
            <SlLocationPin />
          </div>
        </Link>
      </div>
      <div className=" absolute right-[10%] top-[55%] text-white  ">
        <BsArrowDownRight />
        <h2 className="font-mono p-4">
          {" "}
          <TypeWriter
            str={[
              "Aspirujący Full-Stack Developer",
              "Pasja do tworzenia interaktywnych stron i aplikacji",
            ]}
            boxColor={"bg-white"}
          />
        </h2>
      </div>
      <motion.div className="absolute bottom-10 " style={{ x }}>
        <h1 className="text-white text-8xl">
          <AnimateLetters str={"Mateusz Ukleja"} daley={1} />
        </h1>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>
    </motion.div>
  );
};

export default Hero;
