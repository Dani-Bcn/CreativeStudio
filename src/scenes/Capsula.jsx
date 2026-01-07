import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function Capsula(props) {
  const groupRef = useRef();
  const piecesRef = useRef([]);

  const [rotationZ, setRotationZ] = useState(1);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // Rotación suave
    }
  });

  const handlePointerOver = (index) => {
    console.log(index);
    const mesh = piecesRef.current[index];
    if (!mesh) return;

    gsap.to(mesh.material.color, {
      r: 1,
      g: 0.5,
      b: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const handlePointerOut = (index) => {
    const mesh = piecesRef.current[index];
    if (!mesh) return;

    gsap.to(mesh.material.color, {
      r: 5,
      g: 0.5,
      b: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const { nodes, materials } = useGLTF("/models/capsula.glb");
  return (
    <group
      classname="group"
      ref={groupRef}
      {...props}
      dispose={null}
      scale={0.009}
    >
      <mesh
        ref={(el) => (piecesRef.current[0] = el)}
        castShadow
        receiveShadow
        geometry={nodes.Capsule18.geometry}
        material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(0)}
        onPointerOut={() => handlePointerOut(0)}
      />

      <mesh
        ref={(el) => (piecesRef.current[1] = el)}
        classname="piece_1"
        name="Capsule17"
        castShadow
        receiveShadow
        geometry={nodes.Capsule17.geometry}
        material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(1)}
        onPointerOut={() => handlePointerOut(1)}
      />
      <mesh
        ref={(el) => (piecesRef.current[2] = el)}
        name="Capsule16"
        castShadow
        receiveShadow
        geometry={nodes.Capsule16.geometry}
      material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(2)}
        onPointerOut={() => handlePointerOut(2)}
      />
      <mesh
        ref={(el) => (piecesRef.current[3] = el)}
        name="Capsule15"
        castShadow
        receiveShadow
        geometry={nodes.Capsule15.geometry}
     material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(3)}
        onPointerOut={() => handlePointerOut(3)}
      />
      <mesh
        ref={(el) => (piecesRef.current[4] = el)}
        name="Capsule14"
        castShadow
        receiveShadow
        geometry={nodes.Capsule14.geometry}
   material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(4)}
        onPointerOut={() => handlePointerOut(4)}
      />
      <mesh
        ref={(el) => (piecesRef.current[5] = el)}
        name="Capsule13"
        castShadow
        receiveShadow
        geometry={nodes.Capsule13.geometry}
    material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(5)}
        onPointerOut={() => handlePointerOut(5)}
      />
      <mesh
        ref={(el) => (piecesRef.current[6] = el)}
        name="Capsule12"
        castShadow
        receiveShadow
        geometry={nodes.Capsule12.geometry}
       material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(6)}
        onPointerOut={() => handlePointerOut(6)}
      />
      <mesh
        ref={(el) => (piecesRef.current[7] = el)}
        name="Capsule11"
        castShadow
        receiveShadow
        geometry={nodes.Capsule11.geometry}
       material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(7)}
        onPointerOut={() => handlePointerOut(7)}
      />
      <mesh
        ref={(el) => (piecesRef.current[8] = el)}
        name="Capsule10"
        castShadow
        receiveShadow
        geometry={nodes.Capsule10.geometry}
       material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(8)}
        onPointerOut={() => handlePointerOut(8)}
      />
      <mesh
        ref={(el) => (piecesRef.current[9] = el)}
        name="Capsule9"
        castShadow
        receiveShadow
        geometry={nodes.Capsule9.geometry}
       material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(9)}
        onPointerOut={() => handlePointerOut(9)}
      />
      <mesh
        ref={(el) => (piecesRef.current[10] = el)}
        name="Capsule8"
        castShadow
        receiveShadow
        geometry={nodes.Capsule8.geometry}
  material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(10)}
        onPointerOut={() => handlePointerOut(10)}
      />
      <mesh
        ref={(el) => (piecesRef.current[11] = el)}
        name="Capsule7"
        castShadow
        receiveShadow
        geometry={nodes.Capsule7.geometry}
       material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(11)}
        onPointerOut={() => handlePointerOut(11)}
      />
      <mesh
        ref={(el) => (piecesRef.current[12] = el)}
        name="Capsule6"
        castShadow
        receiveShadow
        geometry={nodes.Capsule6.geometry}
material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(12)}
        onPointerOut={() => handlePointerOut(12)}
      />
      <mesh
        ref={(el) => (piecesRef.current[13] = el)}
        name="Capsule5"
        castShadow
        receiveShadow
        geometry={nodes.Capsule5.geometry}
     material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(13)}
        onPointerOut={() => handlePointerOut(13)}
      />
      <mesh
        ref={(el) => (piecesRef.current[14] = el)}
        name="Capsule4"
        castShadow
        receiveShadow
        geometry={nodes.Capsule4.geometry}
      material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(14)}
        onPointerOut={() => handlePointerOut(14)}
      />
      <mesh
        ref={(el) => (piecesRef.current[15] = el)}
        name="Capsule3"
        castShadow
        receiveShadow
        geometry={nodes.Capsule3.geometry}
    material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(15)}
        onPointerOut={() => handlePointerOut(15)}
      />
      <mesh
        ref={(el) => (piecesRef.current[16] = el)}
        name="Capsule2"
        castShadow
        receiveShadow
        geometry={nodes.Capsule2.geometry}
      material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(16)}
        onPointerOut={() => handlePointerOut(16)}
      />
      <mesh
        ref={(el) => (piecesRef.current[17] = el)}
        name="Capsule1"
        castShadow
        receiveShadow
        geometry={nodes.Capsule1.geometry}
   material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        onPointerOver={() => handlePointerOver(17)}
        onPointerOut={() => handlePointerOut(17)}
      />
    </group>
  );
}

useGLTF.preload("/capsula.glb");
