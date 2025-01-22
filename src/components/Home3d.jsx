import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture, Html, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { FaItunesNote } from "react-icons/fa6";
import { motion } from "framer-motion";
export function Home3d(props) {
  const { nodes, materials } = useGLTF("models/home.gltf");
  const textureCode = useVideoTexture("code1.mp4", {
    autoplay: true,
    loop: true,
  });
  const textureCode2 = useVideoTexture("code2.mp4", {
    autoplay: true,
    loop: true,
  });

  const [cat] = useState(new Audio("./cat_purring.mp3"));
  const [miusic] = useState(new Audio("./rock.mp3"));
  const [catPurring, setCatPurring] = useState(false);

  const {
    dark,
    setDark,
    guitar,
    setGuitar,
    book,
    setBook,
    setIsHovered,
    isPlaying,
    setIsPlaying,
  } = props;
  const texture = useTexture("textures/Baked.jpg");

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureMatrtial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  const textureGlass = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.4,
  });
  useEffect(() => {
    if (catPurring) {
      cat.play();
    } else {
      cat.pause();
    }
  }, [catPurring]);
  useEffect(() => {
    if (isPlaying) {
      miusic.play();
    } else {
      miusic.pause();
    }
  }, [isPlaying]);

  const setOposite = (X, setX) => {
    setX(!X);
  };
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
  ];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <group {...props} dispose={null}>
      <group
        onPointerEnter={() => {
          setOposite(catPurring, setCatPurring);
          setIsHovered(1);
        }}
        onPointerLeave={() => {
          setOposite(catPurring, setCatPurring);
          setIsHovered(0);
        }}
        name="cat"
        position={[4.454, 3.099, -3.065]}
        rotation={[-2.706, 1.037, 2.987]}
      >
        <mesh
          name="mesh34835231"
          geometry={nodes.mesh34835231.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh34835231_1"
          geometry={nodes.mesh34835231_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh34835231_2"
          geometry={nodes.mesh34835231_2.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh34835231_3"
          geometry={nodes.mesh34835231_3.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh34835231_4"
          geometry={nodes.mesh34835231_4.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh34835231_5"
          geometry={nodes.mesh34835231_5.geometry}
          material={textureMatrtial}
        />
      </group>
      <group
        name="desk"
        position={[0.896, 0.479, -3.072]}
        rotation={[2.676, -1.555, 2.668]}
      >
        <mesh
          name="Cube007_Cube008_GrayPlastic"
          geometry={nodes.Cube007_Cube008_GrayPlastic.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Cube007_Cube008_GrayPlastic_1"
          geometry={nodes.Cube007_Cube008_GrayPlastic_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Cube007_Cube008_GrayPlastic_2"
          geometry={nodes.Cube007_Cube008_GrayPlastic_2.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Cube007_Cube008_GrayPlastic_3"
          geometry={nodes.Cube007_Cube008_GrayPlastic_3.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Cube007_Cube008_GrayPlastic_4"
          geometry={nodes.Cube007_Cube008_GrayPlastic_4.geometry}
          material={textureMatrtial}
        />
      </group>
      <group
        onClick={() => setOposite(dark, setDark)}
        onPointerEnter={() => {
          setIsHovered(1);
        }}
        onPointerLeave={() => setIsHovered(0)}
        name="LAMP"
        position={[-4.653, 3.939, 2.739]}
      >
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh_2"
          geometry={nodes["Node-Mesh_2"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh_3"
          geometry={nodes["Node-Mesh_3"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh_4"
          geometry={nodes["Node-Mesh_4"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh_5"
          geometry={nodes["Node-Mesh_5"].geometry}
          material={textureMatrtial}
        />
      </group>
      <group
        name="catTree0"
        position={[4.189, 0.516, -3.753]}
        rotation={[Math.PI, -1.389, Math.PI]}
      >
        <mesh
          name="pPlane1_Mesh_CatTree1_1"
          geometry={nodes.pPlane1_Mesh_CatTree1_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_1"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_2"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_2.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_3"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_3.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_4"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_4.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_5"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_5.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_6"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_6.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_7"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_7.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_8"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_8.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="pPlane1_Mesh_CatTree1_1_9"
          geometry={nodes.pPlane1_Mesh_CatTree1_1_9.geometry}
          material={textureMatrtial}
        />
      </group>
      <group
        name="CEBORD"
        position={[-0.199, 2.872, 0.86]}
        rotation={[0, 0.521, 0]}
      >
        <mesh
          name="Box20179_1002"
          geometry={nodes.Box20179_1002.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Box20179_1002_1"
          geometry={nodes.Box20179_1002_1.geometry}
          material={textureMatrtial}
        />
      </group>
      <mesh
        name="Mouse1"
        geometry={nodes.Mouse1.geometry}
        material={textureMatrtial}
        position={[2.14, 2.855, -1.701]}
        rotation={[-1.627, 0.037, -0.27]}
      />
      <group
        onClick={() => {
          setOposite(guitar, setGuitar), setBook(false);
        }}
        onPointerEnter={() => {
          setIsHovered(1);
        }}
        onPointerLeave={() => setIsHovered(0)}
        name="Guitar1"
        position={[-3.786, 2.699, -3.601]}
        rotation={[-1.884, -0.28, 0.531]}
        scale={209.541}
      >
        <mesh
          name="Guitar1_1"
          geometry={nodes.Guitar1_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Guitar1_2"
          geometry={nodes.Guitar1_2.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Guitar1_3"
          geometry={nodes.Guitar1_3.geometry}
          material={textureMatrtial}
        />
      </group>
      <mesh
        onClick={() => {
          setOposite(book, setBook);
          setGuitar(false);
        }}
        onPointerEnter={() => {
          setIsHovered(1);
        }}
        onPointerLeave={() => setIsHovered(0)}
        name="Books"
        geometry={nodes.Books.geometry}
        material={textureMatrtial}
        position={[-2.081, 4.12, -3.534]}
        scale={417.384}
      />
      <mesh
        name="CoffePlant_mehs"
        geometry={nodes.CoffePlant_mehs.geometry}
        material={textureMatrtial}
        position={[-3.942, 2.511, -1.673]}
        rotation={[0, -1.238, -0.01]}
        scale={0.178}
      />
      <group
        name="SHELF"
        position={[-2.463, 3.803, -3.547]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Cube-Mesh"
          geometry={nodes["Cube-Mesh"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Cube-Mesh_1"
          geometry={nodes["Cube-Mesh_1"].geometry}
          material={textureMatrtial}
        />
      </group>
      <group
        name="CHAIR"
        position={[26.4, 1.219, -4.182]}
        rotation={[-Math.PI, 0.42, -Math.PI]}
        scale={0.068}
      >
        <mesh
          name="Node-Mesh004"
          geometry={nodes["Node-Mesh004"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh004_1"
          geometry={nodes["Node-Mesh004_1"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh004_2"
          geometry={nodes["Node-Mesh004_2"].geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Node-Mesh004_3"
          geometry={nodes["Node-Mesh004_3"].geometry}
          material={textureMatrtial}
        />
      </group>
      <group name="PLANT1" position={[-3.908, 2.845, -0.695]} scale={0.29}>
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMatrtial}
        />
      </group>
      <group name="PLANT2" position={[-3.908, 2.845, -2.624]} scale={0.29}>
        <mesh
          name="mesh24448074002"
          geometry={nodes.mesh24448074002.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh24448074002_1"
          geometry={nodes.mesh24448074002_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="mesh24448074002_2"
          geometry={nodes.mesh24448074002_2.geometry}
          material={textureMatrtial}
        />
      </group>
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
      {/* dodawanie nut wyświetlajacych sie ponad słuchawkami    */}
      <Html position={[1.3, 3.204, -1.258]}>
        {isPlaying && (
          <div className="relative">
            <motion.div
              style={{
                color: getRandomColor(),
                fontSize: "1.5rem",
                position: "absolute",
              }}
              animate={{
                translateY: ["0px", "-30px", "-40px"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <FaItunesNote />
            </motion.div>
          </div>
        )}
      </Html>
      <mesh
        onClick={() => setOposite(isPlaying, setIsPlaying)}
        onPointerEnter={() => {
          setIsHovered(0);
        }}
        onPointerLeave={() => setIsHovered(1)}
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
      <group name="Plane" position={[0.032, 0.088, -0.048]}>
        <mesh
          name="Plane_1"
          geometry={nodes.Plane_1.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Plane_2"
          geometry={nodes.Plane_2.geometry}
          material={textureMatrtial}
        />
        <mesh
          name="Plane_3"
          geometry={nodes.Plane_3.geometry}
          material={textureMatrtial}
        />
      </group>
      <mesh
        name="Cube"
        geometry={nodes.Cube.geometry}
        material={textureGlass}
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
        material={textureGlass}
        position={[-3.927, 2.414, -1.701]}
        scale={[0.4, 0.1, 1.392]}
      />
      <mesh
        name="screan"
        geometry={nodes.screan.geometry}
        material={textureCode}
        position={[-0.397, 2.865, -2.696]}
        rotation={[0, -1.409, 0]}
        scale={0.018}
      >
        <meshBasicMaterial map={textureCode} toneMapped={false} />
      </mesh>
      <mesh
        name="screan2"
        geometry={nodes.screan2.geometry}
        material={textureCode2}
        position={[0.846, 2.833, -2.526]}
        rotation={[Math.PI, -1.063, Math.PI]}
        scale={0.018}
      >
        <meshBasicMaterial map={textureCode2} toneMapped={false} />
      </mesh>
    </group>
  );
}
useGLTF.preload("models/home.gltf");
