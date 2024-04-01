import { Sphere, useScroll } from "@react-three/drei";
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap/gsap-core";

const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#83C5BE",
  });
  const data = useScroll();

  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: "#EDF6F9",
    });
    tl.current.to(color.current, {
      color: "#FFDDD2",
    });
    tl.current.to(color.current, {
      color: "#E29578",
    });
  }, []);
  useFrame(() => {
    if (tl.current) {
      tl.current.progress(data.scroll.current);
    }
    if (material.current) {
      material.current.color.set(color.current.color);
    }
  });
  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        ></meshBasicMaterial>
      </Sphere>
    </group>
  );
};

export default Background;
