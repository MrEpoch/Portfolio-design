/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Phone.glb
*/

import phone from "../../assets/Phone.glb";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Phone(props) {
  const { nodes, materials } = useGLTF(phone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}> 
        <mesh geometry={nodes.Phone_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Phone_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Phone_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload(phone)
