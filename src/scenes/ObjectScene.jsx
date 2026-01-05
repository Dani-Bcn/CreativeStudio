import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect,useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { motion as m } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MeshStandardMaterial } from "three";

gsap.registerPlugin(ScrollTrigger);

export function ObjectScene(coco, ...props) {
  const groupRef = useRef();

   const [rotationZ, setRotationZ] = useState(1);

   useEffect(() => {
     if (coco) {
       setRotationZ(1);
     } else {
       setRotationZ(0.5);
     }
   }, [coco]);  


  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // Rotación suave
    }
  });
  const { nodes, materials } = useGLTF("/models/cubo.gltf");
  return (
    <group  ref={groupRef} {...props} dispose={null} scale={0.01} >
      <mesh
      color="red"
        castShadow
        receiveShadow
        geometry={nodes.Capsule.geometry}
        material={nodes.Capsule.material}
      />
      <meshStandardMaterial  color={"rgb(250,180,20)"}/>
    </group>
  );
}

useGLTF.preload("/cubo.gltf");
