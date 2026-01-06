import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Capsula } from "../scenes/Capsula";
import { Title_3d } from "../scenes/Title_3d";
import { motion as m } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Camera from "./Camera";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  let mm = gsap.matchMedia();
  const spotRef1=useRef()

  useEffect(() => {
    window.scrollTo(0, 0);

    mm.add("(min-width:900px)", () => {
      gsap.to(".textH3Ref", {
        scrollTrigger: {
          trigger: ".textH3Ref",
          start: " 700 bottom",
          end: "bottom bottom",
          scrub: 2,
        },

        y: -150,
      });
    });

    
      gsap.to(".hero-3d", {
        scrollTrigger: {
          trigger: ".hero-3d",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        y: -250,
      });
    




 

  const handleMouseMove = (e) => {
    // Normalizamos el mouse (-1 a 1) 
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;

    gsap.to(spotRef1.current.position, {
      x: x * 10,      // ajusta la fuerza
      y: y * 5,       // opcional
      duration: 0.5, // suavidad
      ease: "power3.out"
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, [spotRef1]);
  return (
    <main>
      <m.div
        className=" fixed  inset-0 z-10 flex items-center justify-center h-screen  bg-indigo-800 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 3, delay: 0.5 }}
      > 
        <Canvas className=" bg-indigo-950 h-screen">
          <Camera />
          <spotLight ref={spotRef1} position={[0, 0, 6]} intensity={15} />
        
          <Suspense fallback={null}> 
            <Capsula />
            <Title_3d />
          </Suspense>
        </Canvas>
      </m.div>

      <m.section
        className="mt-52 hero-3d relative w-full h-40  flex flex-col items-center justify-center  z-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
       

        <m.h3
          className="opacity-0 textH3Ref text-white  w-full md:w-[50%] text-xl lg:text-3xl mt-225  font-space-grotesk tracking-wide  mx-auto text-center z-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          We design and develop digital experiences where motion, 3D and
          interaction are not decoration, but structure.
        </m.h3>
      </m.section>
    </main>
  );
}
