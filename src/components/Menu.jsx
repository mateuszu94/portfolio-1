import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";

const Menu = (props) => {
  const { onSectionChange, menuOpen, setMenuOpen, section } = props;

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
    window.scrollTo(0, 1035);
  };

  return (
    <>
      {" "}
      {scrollY > 710 && (
        <AnimatePresence mode="wait">
          <motion.div
            className=" z-20 fixed right-2 top-12 rounded-md h-11 w-11"
            initial={{
              translateX: "20rem",
            }}
            animate={{
              translateX: "0rem",
            }}
            exit={{
              translateX: "20rem",
            }}
          >
            <Button
              className="z-20 border-slate-400 border fixed  p-3 rounded-md h-11 w-11"
              onClick={() => {
                setMenuOpen(!menuOpen);
                scrollto3d();
              }}
            >
              <div
                className={cn(
                  `absolute h-[1px] w-8 bg-white duration-300 ease-in-out `,
                  `before:absolute before:block before:w-8 before:h-[1px] before:bg-white before:top-[5px]`,
                  `after:absolute after:block after:w-8 after:h-[1px] after:bg-white after:top-[-5px]`,
                  `${
                    menuOpen
                      ? ` before:opacity-0 rotate-45 before:rotate-45 after:rotate-[-90deg] after:top-0`
                      : ``
                  }`
                )}
              />
            </Button>
          </motion.div>
        </AnimatePresence>
      )}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className={`bg-black z-10 rounded-l-full h-[115%] border-black border-l-2   absolute top-[-7%] transition-all right-[15rem] bottom-0 overflow-hidden flex flex-col  
        }`}
            initial={{
              width: "0rem",
              bordertopleftradius: "0px",
              borderbottomleftradius: "0px",
              translateX: "20rem",
            }}
            animate={{
              width: "10rem",
              bordertopleftradius: "9999px",
              borderbottomleftradius: "9999px",
              translateX: "0rem",
            }}
            exit={{
              width: "0rem",
              bordertopleftradius: "0px",
              borderbottomleftradius: "0px",
              translateX: "20rem",
            }}
            transition={{
              duration: 0.5,
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className={`bg-white z-10 border-black border-l-2   absolute top-0 transition-all right-0 bottom-0 overflow-hidden flex flex-col  
        }`}
            initial={{ width: "20rem" }}
            animate={{ width: "20rem" }}
            exit={{ width: "0rem" }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="grid grid-flow-row items-start gap-20  p-14">
              <div className="border-slate-500 border-b-2 ">
                <p className="text-2xl font-serif">Nawigacja</p>
              </div>
              {navItems.map((navItem, index) => (
                <motion.div
                  key={index}
                  className={navItem.tellwind}
                  initial={{ translateX: "20rem" }}
                  animate={{ translateX: "0rem" }}
                  exit={{ translateX: "20rem" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.76, 0, 0.34, 1],
                    delay: index / 4,
                  }}
                >
                  <Button
                    className="bg-white text-black text-2xl font-serif hover:bg-white hover:text-slate-500"
                    onClick={() => (
                      onSectionChange(navItem.section), setMenuOpen(false)
                    )}
                  >
                    {navItem.title}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
