import { Suspense, useRef, useEffect,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ObjectScene } from "../scenes/ObjectScene";
import { motion as m } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Camera from "./Camera";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  let mm = gsap.matchMedia();

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

    mm.add("(min-width:900px)", () => {
      gsap.to(".textH3Ref", {
        scrollTrigger: {
          trigger: ".textH3Ref",
          start: " 400 center",
          end: "bottom bottom",
          scrub: 2,
        },

        opacity: 0,
      });
    });

    mm.add("(min-width:900px)", () => {
      gsap.to(".hero-3d", {
        scrollTrigger: {
          trigger: ".hero-3d",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
        y: -250,
      });
    });
  }, []);
 const [coco, setCoco] = useState(false);

  const Girar = () => {
    return (
      <button
        className="absolute z-150 bg-red-200 cursor-pointer w-25 h-25"
        onClick={() => {
          setCoco(!coco);
          console.log("Girar", coco);
        }}
      >
        Girar
      </button>
    );
  };
  return (
    <main>
      <Girar />
      <m.div
        className="fixed inset-0 z-10 flex items-center justify-center "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <Canvas>
          <Camera coco={coco} />
          <ambientLight intensity={5} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <ObjectScene  coco={coco} />
          </Suspense>
        </Canvas>
      </m.div>

      <m.section
        className=" hero-3d relative w-full h-screen  flex flex-col items-center justify-center  z-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute  flex flex-col items-center justify-center text-center z-100 ">
          <m.h1
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk tracking-wide"
          >
            DIGITAL EXPERIENCES
          </m.h1>
          <m.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gray-300 text-2xl font-space-grotesk mt-4"
          >
            CRAFTED WITH CODE
          </m.h2>
        </div>

        <h3 className=" textH3Ref text-white  w-full md:w-[50%] text-xl lg:text-3xl mt-225  font-space-grotesk tracking-wide  mx-auto text-center z-100">
          We design and develop digital experiences where motion, 3D and
          interaction are not decoration, but structure.
        </h3>
      </m.section>
    </main>
  );
}
