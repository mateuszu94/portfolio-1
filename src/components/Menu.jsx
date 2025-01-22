import React, { forwardRef, useEffect, useState } from "react";
import { Button } from "./ui/button";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypeWriter } from "./TypeWriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Menu = forwardRef(function index(props, ref) {
  const {
    onSectionChange,
    menuOpen,
    setMenuOpen,
    isHovered,
    section,
    isPlaying,
    setisPlaying,
  } = props;

  const navItems = [
    {
      title: "Start",
      section: 0,
      tellwind: "",
    },
    {
      title: "Umiejętności",
      section: 1,
      tellwind: "ml-4",
    },
    {
      title: "Projekty",
      section: 2,
      tellwind: "ml-9",
    },
    {
      title: "Kontakt",
      section: 3,
      tellwind: "ml-14",
    },
  ];
  const [scrollY, setScrollY] = useState(0);
  const { scrollHeight, clientHeight } = document.documentElement;
  const maxScrollY = scrollHeight - clientHeight;

  useEffect(() => {
    setMenuOpen(false);
  }, [section]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollto3d = () => {
    window.scrollTo(0, scrollHeight - clientHeight);
  };

  const show = {
    opacity: 1,
    translateX: "0rem",
  };

  const hide = {
    opacity: 0,
    translateX: "40rem",
  };

  return (
    <>
      <div
        onClick={() => {
          setisPlaying(!isPlaying);
        }}
        className="z-20 fixed right-[6rem] top-2 rounded-md h-11 w-11 bg-red-500 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faMusic} className="text-white text-xl" />
      </div>
      <motion.div
        className={`z-20 fixed  right-8 top-10 rounded-md h-11 w-11`}
        animate={scrollY === maxScrollY && scrollY !== 0 ? show : hide}
      >
        <motion.div>
          <Button
            className={`z-20  cursor-none  fixed ${
              isHovered === 2
                ? "bg-transparent  hover:bg-transparent"
                : "bg-white  border-slate-500 border-r-4"
            }  p-3 rounded-full h-16 w-16`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              scrollto3d();
            }}
          >
            {" "}
            <div
              ref={ref}
              className={` ${
                isHovered === 2 ? "scale-[3]" : ""
              }   left-0  top-0 absolute  w-full h-full`}
            ></div>
            <motion.div className="w-full pointer-events-none h-full absolute top-8 left-4">
              <motion.div
                className={cn(
                  ` absolute h-[1px] w-8 bg-slate-500 duration-300 ease-in-out `,
                  `before:absolute before:block before:w-8 before:h-[1px] before:bg-slate-500 before:top-[5px]`,
                  `after:absolute  after:block after:w-8 after:h-[1px] after:bg-slate-500 after:top-[-5px]`,
                  `${
                    menuOpen
                      ? ` before:opacity-0 rotate-45 before:rotate-45 after:rotate-[-90deg] after:top-0`
                      : ``
                  }`
                )}
              />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        animate={menuOpen ? { translateX: "0rem" } : { translateX: "20rem" }}
        className={`bg-black z-10 border-slate-400 border-l-2  opacity-90 absolute top-0 transition-all right-0 bottom-0 overflow-hidden flex flex-col  
        }`}
      >
        <div className="grid grid-flow-row items-start gap-20   p-14">
          <div className="border-slate-500 text-white   border-b-2 ">
            {menuOpen && (
              <TypeWriter
                str={["Nawigacja"]}
                boxColor="bg-white"
                textSize={"text-xl"}
              />
            )}
          </div>
          {navItems.map((navItem, index) => (
            <motion.div
              key={index}
              className={navItem.tellwind + " hover:scale-150"}
              animate={
                menuOpen ? { translateX: "0rem" } : { translateX: "20rem" }
              }
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.34, 1],
                delay: index / 4,
              }}
            >
              <Button
                className="bg-white text-black text-2xl font-serif hover:bg-white hover:text-slate-500"
                onClick={() => onSectionChange(navItem.section)}
              >
                {navItem.title}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
});

export default Menu;
