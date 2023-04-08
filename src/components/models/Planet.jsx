/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 src/assets/Planet.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/src/assets/Planet.glb');
  const ref = useRef();
  useFrame((state, delta) => (
    ref.current.rotation.y += delta / 2,
    ref.current.rotation.x += delta / 2
  ))
  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} geometry={nodes.Planet_2.geometry} material={materials.Atlas} scale={100} />
    </group>
  )
}

useGLTF.preload('/Planet.glb')
