"use client";

import { Canvas } from "@react-three/fiber";

import { Scroll, ScrollControls } from "@react-three/drei";

import { useState } from "react";

import { Interface } from "./Interface";
import ScrollManager from "./ScrollManager";
import Menu from "./Menu";

import { MotionConfig } from "framer-motion";
import Scroll3d from "./Scroll3d";
import { framerMotionConfig } from "@/lib/config";

const Section3D = () => {
  const [book, setBook] = useState(false);
  const [gitar, setGitar] = useState(false);
  const [section, setSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [foxAnimation, setFoxAnimation] = useState("idle");

  return (
    <div className="relative overflow-hidden  z-10 h-[100vh] w-full">
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} className="">
          <ScrollControls pages={4} damping={0.1} style={{ left: "20px" }}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <color attach="background" args={["rgb(179, 83, 120)"]} />
            <Scroll>
              <Scroll3d
                section1={section}
                book={book}
                setBook={setBook}
                gitar={gitar}
                setGitar={setGitar}
                menuOpen={menuOpen}
                setcSection={setSection}
                foxAnimation={foxAnimation}
              />
            </Scroll>
            <Scroll html>
              <Interface
                setFoxAnimation={setFoxAnimation}
                book={book}
                gitar={gitar}
                setSection={setSection}
              />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          section={section}
          onSectionChange={setSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </MotionConfig>
    </div>
  );
};

export default Section3D;
