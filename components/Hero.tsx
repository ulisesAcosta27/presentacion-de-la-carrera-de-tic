"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Photo1 from '@/images/Foto-1.png'

const standarAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const wordTransition = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

export const Hero = () => {
  const trackList = [
    "Imprescindibles",
    "Innovadoras",
    "Omnipresentes",
    "Transformadoras",
  ];
  const [selectedTask, setSelectedTask] = useState("Imprescindibles");

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedTask === "Imprescindibles") {
        setSelectedTask("Innovadoras");
      } else if (selectedTask === "Innovadoras") {
        setSelectedTask("Transformadoras");
      } else if (selectedTask === "Transformadoras") {
        setSelectedTask("Omnipresentes");
      } else {
        setSelectedTask("Imprescindibles");
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedTask]);

  return (
    <div className="">
      <div className="container mx-auto h-[34rem] grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center md:items-start md:mx-6 lg:mx-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={standarAnimation}
            transition={{ delay: 0.3, ease: "easeInOut", duration: 0.3 }}
            className="font-dm-serif-desplay text-2xl md:text-3xl"
          >
            Las TICs son{" "}
            <motion.span
              key={selectedTask}
              variants={wordTransition}
              animate={"show"}
              initial="hide"
              transition={{ delay: 0.1, ease: "easeInOut" }}
            >
              {selectedTask}
            </motion.span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={standarAnimation}
            transition={{ delay: 0.4, ease: "easeInOut" }}
            className="font-montserrat text-center text-sm mx-4 md:text-start md:mx-0 lg:text-base lg:mx-0"
          >
            Construye un mundo digital de conocimiento. Tu camino hacia la
            enseñanza del futuro comienza aquí.
          </motion.p>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, ease: "easeInOut" }}
            variants={standarAnimation}
          >
            <Image
              className="md:w-[340px] lg:w-[420px] xl:w-[480px]"
              src={Photo1}
              alt="Personas bucando informacion de las TICs"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
