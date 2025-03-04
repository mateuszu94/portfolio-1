import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

import * as THREE from "three";

export function Avater(props) {
  const group = useRef();

  const { animation, section } = props;

  const { nodes, materials } = useGLTF("models/64c6f4cd365cf80d16938a2e.glb");
  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  const { animations: standingAnimation } = useFBX(
    "animations/Standing_Idle.fbx"
  );
  const { animations: fallingAnimation } = useFBX("animations/Fall.fbx");

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";
  const { actions } = useAnimations(
    [typingAnimation[0], standingAnimation[0], fallingAnimation[0]],
    group
  );
  useEffect(() => {
    const targetNode = nodes["Armature"] || nodes["root"];
    if (actions[animation] && targetNode) {
      actions[animation].reset().fadeIn(0.5).play();
      return () => {
        actions[animation].reset().fadeOut(0.5);
      };
    }
  }, [animation, actions, nodes]);

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    color: "#000000",
    transparent: true,
    opacity: 0.42,
    wireframe: true,
  });

  return (
    <group
      {...props}
      ref={group}
      dispose={null}
      scale={0.6}
      position={[2.175, 1.9, 2.942]}
      rotation={[0, 14.5, 0]}
    >
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={
            section === 1 ? textureGlassMaterial : materials.Wolf3D_Body
          }
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={
            section === 1
              ? textureGlassMaterial
              : materials.Wolf3D_Outfit_Bottom
          }
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />

        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={
            section === 1
              ? textureGlassMaterial
              : materials.Wolf3D_Outfit_Footwear
          }
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />

        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={
            section === 1 ? textureGlassMaterial : materials.Wolf3D_Outfit_Top
          }
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
          wireframe={true}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Beard"
          geometry={nodes.Wolf3D_Beard.geometry}
          material={materials.Wolf3D_Beard}
          skeleton={nodes.Wolf3D_Beard.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/64c6f4cd365cf80d16938a2e.glb");
