"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
export const ExampleHero = () => {
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
    <div className="h-[100vh] w-full flex items-center justify-center bg-[#f8efe2]/10">
      <div className="flex flex-col text-start">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={standarAnimation}
          transition={{ delay: 0.1, ease: "linear", duration: 0.3 }}
          className="font-dm-serif-desplay text-5xl"
        >
          Las TICs son{" "}
          <motion.span
            key={selectedTask}
            variants={wordTransition}
            animate={"show"}
            initial="hide"
            transition={{ delay: 0.1, ease: "linear" }}
          >
            {selectedTask}
          </motion.span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={standarAnimation}
          transition={{ delay: 0.2, ease: "linear" }}
          className="font-montserrat my-2 w-[55rem]"
        >
          Construye un mundo digital de conocimiento. Tu camino hacia la
          enseñanza del futuro comienza aquí, en TICs y educación
        </motion.p>
      </div>
    </div>
  );
};
