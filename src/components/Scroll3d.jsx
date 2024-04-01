import React, { useEffect, useState } from "react";
import { Avater } from "./Avater";
import { Home3d } from "./Home3d";
import { motion } from "framer-motion-3d";
import { useMotionValue, animate } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { framerMotionConfig } from "@/lib/config";
import { Tank } from "./Tank";
import { Float, MeshDistortMaterial, useScroll } from "@react-three/drei";
import Projects from "./Projects";
import { Fox } from "./Fox";
import Background from "./Background";

const Scroll3d = (props) => {
  const data = useScroll();
  const { book, setBook, gitar, setGitar, menuOpen, section1, foxAnimation } =
    props;
  const [dark, setDark] = useState(false);
  const [section, setSection] = useState(0);
  const [miusic, setMiusic] = useState(false);
  const [animation, setAnimation] = useState("Typing");
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, menuOpen ? -1 : 0);
    animate(cameraLookAtX, menuOpen ? 1 : 0),
      {
        ...framerMotionConfig,
      };
  }, [menuOpen]);
  useEffect(() => {
    setAnimation("Falling");
    setTimeout(() => {
      setAnimation(section === 0 ? "Typing" : "Standing");
    }, 500);
  }, [section]);

  useFrame((state) => {
    const curSection = Math.floor(data.scroll.current * data.pages);

    if (section !== curSection) {
      setSection(curSection);
    }
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  return (
    <>
      <Background />
      <group>
        <motion.group
          scale={0.28}
          position-x={1.2}
          position-y={-0.5}
          rotation={[0, -0.7, 0]}
          animate={{
            y: section === 0 ? -0.5 : -1,
          }}
        >
          <Home3d
            dark={dark}
            setDark={setDark}
            book={book}
            setBook={setBook}
            guitar={gitar}
            setGuitar={setGitar}
            music={miusic}
            setMusic={setMiusic}
          />
        </motion.group>
      </group>
      <Tank section={section} />
      <motion.group
        animate={{
          scale: section === 1 ? 1 : 0,
          x: section === 1 ? 1 : 20,
          ...framerMotionConfig,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Float>
          <mesh scale={[1, 1, 1]} position={[1, -6, -14]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 1]} position={[3, -6, -14]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.5}
              speed={4}
              color={"gray"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 1]} position={[-1, -6, -14]}>
            <boxGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.6}
              speed={4}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <motion.group
        animate={"" + section}
        transition={{
          duration: 1,
        }}
        variants={{
          0: { z: -3, y: -2, x: -1, scale: 1 },
          1: {
            z: -1.5,
            y: -7,
            x: 7.5,
            scale: 1.8,
            rotateY: -2,
          },
          2: { z: -3, y: -8.5, x: 2, scale: 1.3, rotateY: -1.5 },
        }}
      >
        <Avater section={section} animation={animation} />
      </motion.group>
      <Projects section={section}></Projects>
      <group>
        <directionalLight
          intensity={2.5}
          position={[0, 0, 1]}
        ></directionalLight>
        <Fox currentAnimation={foxAnimation} />
      </group>
      {dark ? <ambientLight intensity={1} /> : <ambientLight intensity={5} />}
    </>
  );
};

export default Scroll3d;
