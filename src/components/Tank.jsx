import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

export function Tank(props) {
  const { nodes, materials } = useGLTF("models/tank1.glb");

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    color: "#696969",
    metalness: 0.7,
    roughness: 0.5,
  });

  const textureGlassMaterial1 = new THREE.MeshStandardMaterial({
    color: "#00BFFF",
    opacity: 0.6,
    transparent: true,
  });

  return (
    <motion.group
      {...props}
      dispose={null}
      position={[1, -3.8, 0]}
      rotation={[-0.1, 0, 0]}
      animate={{
        scale: props.section === 1 ? 0.8 : 0,
        x: props.section === 1 ? 1 : 5,
      }}
    >
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={textureGlassMaterial1}
        position={[0, 1.5, 0]}
        scale={[1, 1.423, 1]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.004"]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.449, -0.203, -1.449]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[0, 0.11, -1.5]}
        scale={[-0.293, -0.293, -0.518]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.004"]}
        position={[0, 2.944, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.449, -0.203, -1.449]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={textureGlassMaterial}
        position={[-1.5, 0.11, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-0.293, -0.293, -0.518]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={textureGlassMaterial}
        position={[0, 0.11, 1.5]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[-0.293, -0.293, -0.518]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={textureGlassMaterial}
        position={[1.5, 0.11, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-0.293, -0.293, -0.518]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        position={[0, 0.11, -1.5]}
        material={textureGlassMaterial}
        scale={[-0.293, -0.293, -0.518]}
      />
    </motion.group>
  );
}
