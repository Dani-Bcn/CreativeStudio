import {  useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  const cameraRef = useRef();

  useFrame((state, delta) => {
    if (!cameraRef.current) return;

    const minZ = 2; // límite cercano
    const maxZ = 20; // límite lejano

    const scrollFactor = window.scrollY / window.innerHeight;
    let targetZ = maxZ - (maxZ - minZ) * scrollFactor;

    // Limitar el targetZ entre minZ y maxZ
    targetZ = Math.min(Math.max(targetZ, minZ), maxZ);

    // Lerp para suavizar
    cameraRef.current.position.z +=
      (targetZ - cameraRef.current.position.z) * delta * 5;
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={cameraRef}
      position={[0, 0, 0]}
      fov={7}
    />
  );
}
