"use client";

import { Avater } from "./Avater";
import { useControls } from "leva";
import { Home3d } from "./Home3d";
import { Canvas } from "@react-three/fiber";

import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./Interface";

const Section3D = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });

  return (
    <div className="relative overflow-hidden  z-10 h-[100vh] w-full">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }} className="">
        <ScrollControls pages={4} damping={0.1} style={{ left: "20px" }}>
          <color attach="background" args={["rgb(179, 83, 120)"]} />
          <group>
            <group
              position-y={-0.1}
              position-x={1.2}
              rotation={[0, 14.5, 0]}
              scale={0.6}
            >
              <Avater animation={animation} />
            </group>
            <group
              scale={0.28}
              position-x={1.2}
              position-y={-0.5}
              rotation={[0, -0.7, 0]}
            >
              <Home3d />
            </group>
          </group>
          <ambientLight intensity={5} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Section3D;
