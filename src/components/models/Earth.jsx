/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 src/assets/earth.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth(props) {
  const { nodes, materials } = useGLTF("src/assets/earth.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload("/earth.glb");
