/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ../../assets/ball.gltf
*/

import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import ball from "../../assets/ball.gltf";

export function Ball(props) {
  const { nodes, materials } = useGLTF(ball);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <directionalLight
          intensity={1.4}
          decay={2}
          color="#ff9ef1"
          rotation={[-2.45, 0.33, -1.2]}
        />
        <directionalLight
          intensity={1.4}
          decay={2}
          color="#ff9ef1"
          rotation={[-2.45, 0.33, -1.2]}
        />
        <directionalLight
          intensity={1.4}
          decay={2}
          color="#ff9ef1"
          rotation={[3, -0.29, -0.46]}
        />
        <directionalLight
          intensity={1}
          decay={2}
          color="#3533ff"
          rotation={[2.23, 0.27, 1.37]}
        />
        <directionalLight
          intensity={1}
          decay={2}
          color="#ff8064"
          rotation={[2.28, -0.41, -1.24]}
        />
        <directionalLight
          intensity={1.9}
          decay={2}
          color="#72baff"
          rotation={[2.9, 0.32, 0.68]}
        />
        <OrthographicCamera
          makeDefault={false}
          far={50000}
          near={0}
          position={[0, 0, 1000]}
        />
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-76.62, 24.43, 3020.63]}
        />
        <mesh
          geometry={nodes.downloadpng_3.geometry}
          material={nodes.downloadpng_3.material}
        />
        <mesh
          geometry={nodes.downloadpng_2.geometry}
          material={nodes.downloadpng_2.material}
        />
        <mesh
          geometry={nodes.downloadpng.geometry}
          material={nodes.downloadpng.material}
        />
        <mesh
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[-136.22, 8.92, 82.96]}
          rotation={[-0.74, -0.07, 2.29]}
          scale={[0.96, 1, 1]}
        />
        <directionalLight intensity={1.4} decay={2} color="#ff9ef1" />
        <mesh
          geometry={nodes.Shape_0.geometry}
          material={nodes.Shape_0.material}
          position={[2.5, -2.5, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(ball);
