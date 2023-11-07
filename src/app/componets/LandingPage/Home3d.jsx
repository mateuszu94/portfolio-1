import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Home3d(props) {
  const { nodes, materials } = useGLTF("models/home.gltf");
  const group = useRef();
  const texture = useTexture("textures/Baked.jpg");
  const [audio] = useState(new Audio("./cat_purring.mp3"));
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const [isPlaying, setIsPlaying] = useState(false);
  const isAudioPlayingRef = useRef(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const setPlaying = () => {
    setIsPlaying(!isPlaying);
  };

  const textureMatrtial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="cat"
          geometry={nodes.cat.geometry}
          material={textureMatrtial}
          position={[4.454, 3.099, -3.065]}
          rotation={[-2.706, 1.037, 2.987]}
        />
        <mesh
          name="desk"
          geometry={nodes.desk.geometry}
          material={textureMatrtial}
          position={[0.896, 0.479, -3.072]}
          rotation={[2.676, -1.555, 2.668]}
        />
        <mesh
          name="LAMP"
          geometry={nodes.LAMP.geometry}
          material={textureMatrtial}
          position={[-4.653, 3.939, 2.739]}
        />
        <mesh
          name="catTree0"
          geometry={nodes.catTree0.geometry}
          material={textureMatrtial}
          position={[4.189, 0.516, -3.753]}
          rotation={[Math.PI, -1.389, Math.PI]}
        />
        <mesh
          name="CEBORD"
          geometry={nodes.CEBORD.geometry}
          material={textureMatrtial}
          position={[-0.199, 2.872, 0.86]}
          rotation={[0, 0.521, 0]}
        />
        <mesh
          name="Mouse1"
          geometry={nodes.Mouse1.geometry}
          material={textureMatrtial}
          position={[2.14, 2.855, -1.701]}
          rotation={[-1.627, 0.037, -0.27]}
        />
        <mesh
          name="Guitar1"
          geometry={nodes.Guitar1.geometry}
          material={textureMatrtial}
          position={[-3.786, 2.699, -3.601]}
          rotation={[-1.884, -0.28, 0.531]}
          scale={209.541}
        />
        <mesh
          name="CoffePlant_mehs"
          geometry={nodes.CoffePlant_mehs.geometry}
          material={textureMatrtial}
          position={[-3.942, 2.511, -1.673]}
          rotation={[0, -1.238, -0.01]}
          scale={0.178}
        />
        <mesh
          name="SHELF"
          geometry={nodes.SHELF.geometry}
          material={textureMatrtial}
          position={[-2.463, 3.803, -3.547]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="CHAIR"
          geometry={nodes.CHAIR.geometry}
          material={textureMatrtial}
          position={[26.4, 1.219, -4.182]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
          scale={0.068}
        />
        <mesh
          name="PLANT1"
          geometry={nodes.PLANT1.geometry}
          material={textureMatrtial}
          position={[-3.908, 2.845, -0.695]}
          scale={0.29}
        />
        <mesh
          name="PLANT2"
          geometry={nodes.PLANT2.geometry}
          material={textureMatrtial}
          position={[-3.908, 2.845, -2.624]}
          scale={0.29}
        />
        <mesh
          name="iMac"
          geometry={nodes.iMac.geometry}
          material={textureMatrtial}
          position={[0.846, 2.833, -2.526]}
          rotation={[Math.PI, -1.063, Math.PI]}
          scale={0.018}
        />
        <mesh
          name="iMac001"
          geometry={nodes.iMac001.geometry}
          material={textureMatrtial}
          position={[-0.397, 2.865, -2.696]}
          rotation={[0, -1.409, 0]}
          scale={0.018}
        />
        <mesh
          name="Headphones"
          geometry={nodes.Headphones.geometry}
          material={textureMatrtial}
          position={[1.582, 2.904, -1.858]}
          rotation={[Math.PI / 2, 0, 0.395]}
          scale={390.178}
        />
        <mesh
          name="PC"
          geometry={nodes.PC.geometry}
          material={textureMatrtial}
          position={[1.027, 1.24, -1.885]}
          rotation={[-Math.PI, 1.521, -Math.PI]}
          scale={0.019}
        />
        <mesh
          name="Books"
          geometry={nodes.Books.geometry}
          material={textureMatrtial}
          position={[-2.773, 4.085, -3.552]}
          scale={467.682}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={textureMatrtial}
          position={[0.032, 0.088, -0.048]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={textureMatrtial}
          position={[-5.58, 3.501, -3.215]}
          scale={[-0.165, -2.315, -0.999]}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={textureMatrtial}
          position={[-5.583, 3.751, -1.071]}
          scale={[-0.165, -2.315, -0.999]}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={textureMatrtial}
          position={[-3.927, 2.414, -1.701]}
          scale={[0.4, 0.1, 1.392]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/home3D.gltf");
