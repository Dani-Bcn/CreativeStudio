import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Capsula(coco, ...props) {
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



  const { nodes, materials } = useGLTF('/models/capsula.glb')
  return (
    <group ref={groupRef} {...props} dispose={null} scale={0.01} >
      <mesh
        name="Capsule18"
        castShadow
        receiveShadow
        geometry={nodes.Capsule18.geometry}
        material={nodes.Capsule18.material}
      />
      <mesh
        name="Capsule17"
        castShadow
        receiveShadow
        geometry={nodes.Capsule17.geometry}
        material={nodes.Capsule17.material}
      />
      <mesh
        name="Capsule16"
        castShadow
        receiveShadow
        geometry={nodes.Capsule16.geometry}
        material={nodes.Capsule16.material}
      />
      <mesh
        name="Capsule15"
        castShadow
        receiveShadow
        geometry={nodes.Capsule15.geometry}
        material={nodes.Capsule15.material}
      />
      <mesh
        name="Capsule14"
        castShadow
        receiveShadow
        geometry={nodes.Capsule14.geometry}
        material={nodes.Capsule14.material}
      />
      <mesh
        name="Capsule13"
        castShadow
        receiveShadow
        geometry={nodes.Capsule13.geometry}
        material={nodes.Capsule13.material}
      />
      <mesh
        name="Capsule12"
        castShadow
        receiveShadow
        geometry={nodes.Capsule12.geometry}
        material={nodes.Capsule12.material}
      />
      <mesh
        name="Capsule11"
        castShadow
        receiveShadow
        geometry={nodes.Capsule11.geometry}
        material={nodes.Capsule11.material}
      />
      <mesh
        name="Capsule10"
        castShadow
        receiveShadow
        geometry={nodes.Capsule10.geometry}
        material={nodes.Capsule10.material}
      />
      <mesh
        name="Capsule9"
        castShadow
        receiveShadow
        geometry={nodes.Capsule9.geometry}
        material={nodes.Capsule9.material}
      />
      <mesh
        name="Capsule8"
        castShadow
        receiveShadow
        geometry={nodes.Capsule8.geometry}
        material={nodes.Capsule8.material}
      />
      <mesh
        name="Capsule7"
        castShadow
        receiveShadow
        geometry={nodes.Capsule7.geometry}
        material={nodes.Capsule7.material}
      />
      <mesh
        name="Capsule6"
        castShadow
        receiveShadow
        geometry={nodes.Capsule6.geometry}
        material={nodes.Capsule6.material}
      />
      <mesh
        name="Capsule5"
        castShadow
        receiveShadow
        geometry={nodes.Capsule5.geometry}
        material={nodes.Capsule5.material}
      />
      <mesh
        name="Capsule4"
        castShadow
        receiveShadow
        geometry={nodes.Capsule4.geometry}
        material={nodes.Capsule4.material}
      />
      <mesh
        name="Capsule3"
        castShadow
        receiveShadow
        geometry={nodes.Capsule3.geometry}
        material={nodes.Capsule3.material}
      />
      <mesh
        name="Capsule2"
        castShadow
        receiveShadow
        geometry={nodes.Capsule2.geometry}
        material={nodes.Capsule2.material}
      />
      <mesh
        name="Capsule1"
        castShadow
        receiveShadow
        geometry={nodes.Capsule1.geometry}
        material={nodes.Capsule1.material}
      />
    </group>
  )
}

useGLTF.preload('/capsula.glb')
