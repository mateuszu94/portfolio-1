"use client";

import { Canvas } from "@react-three/fiber";

import { Scroll, ScrollControls } from "@react-three/drei";

import { useRef, useState, useEffect } from "react";

import { Interface } from "./Interface";
import ScrollManager from "./ScrollManager";
import Menu from "./Menu";

import { MotionConfig } from "framer-motion";
import Scroll3d from "./Scroll3d";
import { framerMotionConfig } from "@/lib/config";
import CursorFire from "./CursorFire";

const Section3D = () => {
  const [book, setBook] = useState(false);
  const [gitar, setGitar] = useState(false);
  const [section, setSection] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoaded] = useState(true);
  const [isHovered, setIsHovered] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [foxAnimation, setFoxAnimation] = useState("idle");
  const sticky = useRef(null);

  useEffect(() => {
    setIsLoaded(false); // Mark page as loaded
  }, []);
  if (isLoading === true) {
    return <div></div>;
  } else
    return (
      <div className="relative overflow-hidden cursor-none  z-10 h-[100vh] w-full">
        <CursorFire
          menuOpen={menuOpen}
          isHovered={isHovered}
          sticky={sticky}
          setIsHovered={setIsHovered}
        />

        <MotionConfig transition={{ ...framerMotionConfig }}>
          <Canvas
            shadows
            camera={{ position: [0, 2, 5], fov: 30 }}
            className=""
          >
            <ScrollControls pages={4} damping={0.1} style={{ left: "20px" }}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <color attach="background" args={["rgb(179, 83, 120)"]} />
              <Scroll>
                <Scroll3d
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  book={book}
                  setBook={setBook}
                  gitar={gitar}
                  setGitar={setGitar}
                  menuOpen={menuOpen}
                  foxAnimation={foxAnimation}
                  setIsHovered={setIsHovered}
                />
              </Scroll>
              <Scroll html>
                <Interface
                  setGitar={setGitar}
                  setBook={setBook}
                  setFoxAnimation={setFoxAnimation}
                  book={book}
                  gitar={gitar}
                  setIsHovered={setIsHovered}
                />
              </Scroll>
            </ScrollControls>
          </Canvas>

          <Menu
            ref={sticky}
            isPlaying={isPlaying}
            setisPlaying={setIsPlaying}
            section={section}
            onSectionChange={setSection}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
          />
        </MotionConfig>
      </div>
    );
};

export default Section3D;
