import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export function Cubes(props) {
  const { nodes, materials } = useGLTF("/models/Cubes.glb");

  const groupRef = useRef();
  const piecesRef = useRef([]);

  const handlePointerOver = (index) => {
    console.log(index);
    const mesh = piecesRef.current[index];
    if (!mesh) return;

    gsap.to(mesh.material.color, {
      r: 0.3,
      g: 0.3,
      b: 0.3,
      duration: 1.5,
      ease: "power2.out",
    });

   

     gsap.to(mesh.rotation, {
    y:0.1,
      x: 0.1,
      duration: 1.5,
      ease: "power2.out",
    });
  };
  const handlePointerOut = (index) => {
    const mesh = piecesRef.current[index];
    if (!mesh) return;

    gsap.to(mesh.material.color, {
      r: 0.5,
      g: 0.5,
      b: 0.5,
      duration: 2,
      ease: "power2.out",
    });
     

     gsap.to(mesh.rotation, {
      y:0,
      x: 0,
      duration: 2,
      ease: "power2.out",
    });
  };

  return (
    <group
      {...props}
      dispose={null}
      scale={[0.0045,0.05,0.0045]}
      rotation={[1.6, 0, 0]}
      position={[0.26, 0, -5]}
      castShadow
      receiveShadow
    >
      <mesh
        ref={(el) => (piecesRef.current[0] = el)}
        castShadow
        receiveShadow
        geometry={nodes.Cube27.geometry}
        material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        position={[-650.241, 0, 252.487]}
        onPointerOver={() => handlePointerOver(0)}
        onPointerOut={() => handlePointerOut(0)}
      />
      <mesh
        ref={(el) => (piecesRef.current[1] = el)}
        castShadow
        receiveShadow
        geometry={nodes.Cube26.geometry}
        material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        position={[-450.245, 0, 252.487]}
        onPointerOver={() => handlePointerOver(1)}
        onPointerOut={() => handlePointerOut(1)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube25.geometry}
        material={nodes.Cube25.material}
        position={[-246.18, 0, 252.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube24.geometry}
        material={nodes.Cube24.material}
        position={[-47.303, 0, 252.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube23.geometry}
        material={nodes.Cube23.material}
        position={[151.574, 0, 252.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube22.geometry}
        material={nodes.Cube22.material}
        position={[352.18, 0, 252.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube21.geometry}
        material={nodes.Cube21.material}
        position={[552.786, 0, 252.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube20.geometry}
        material={nodes.Cube20.material}
        position={[552.786, 0, 48.422]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube19.geometry}
        material={nodes.Cube19.material}
        position={[352.18, 0, 48.422]}
      />
      <mesh
        ref={(el) => (piecesRef.current[10] = el)}
        castShadow
        receiveShadow
        geometry={nodes.Cube18.geometry}
        material={new THREE.MeshStandardMaterial({ color: "rgb(0,0,500)" })}
        position={[151.574, 0, 48.422]}
        onPointerOver={() => handlePointerOver(10)}
        onPointerOut={() => handlePointerOut(10)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube17.geometry}
        material={nodes.Cube17.material}
        position={[-47.303, 0, 48.422]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube16.geometry}
        material={nodes.Cube16.material}
        position={[-246.18, 0, 48.422]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube15.geometry}
        material={nodes.Cube15.material}
        position={[-450.245, 0, 48.422]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube14.geometry}
        material={nodes.Cube14.material}
        position={[-650.241, 0, 48.422]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube13.geometry}
        material={nodes.Cube13.material}
        position={[-650.241, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube12.geometry}
        material={nodes.Cube12.material}
        position={[-450.245, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube11.geometry}
        material={nodes.Cube11.material}
        position={[-246.18, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube10.geometry}
        material={nodes.Cube10.material}
        position={[-47.303, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube9.geometry}
        material={nodes.Cube9.material}
        position={[151.574, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube8.geometry}
        material={nodes.Cube8.material}
        position={[352.18, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube7.geometry}
        material={nodes.Cube7.material}
        position={[552.786, 0, -150.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube6.geometry}
        material={nodes.Cube6.material}
        position={[552.786, 0, -349.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube5.geometry}
        material={nodes.Cube5.material}
        position={[352.18, 0, -349.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube4.geometry}
        material={nodes.Cube4.material}
        position={[151.574, 0, -349.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3.geometry}
        material={nodes.Cube3.material}
        position={[-47.303, 0, -349.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2.geometry}
        material={nodes.Cube2.material}
        position={[-246.18, 0, -349.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        material={nodes.Cube1.material}
        position={[-450.245, 0, -349.332]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-650.241, 0, -349.332]}
      />
    </group>
  );
}

useGLTF.preload("/Cubes.glb");
