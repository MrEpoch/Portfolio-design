/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 src/assets/Shape.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/src/assets/Shape.glb");
  useFrame(
    (state, delta) => (
      (ref.current.rotation.y += delta / 2),
      (ref.current.rotation.x += delta / 2)
    )
  );
  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} geometry={nodes.Icosphere.geometry}>
        <meshLambertMaterial attach="material" color="#5B14A0" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Shape.glb");
