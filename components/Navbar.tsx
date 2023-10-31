"use client"
import React from "react";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { listItemNavbar } from "@/utils";


const defaulAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
  },
};

export const Navbar = () => {
  return (
    <div className="w-full shadow-sm fixed z-10 top-0 bg-[#fcf7f1]">
      {/* <div className="h-12 w-full px-8 container mx-auto flex items-center justify-between md:bg-emerald-400 lg:bg-orange-400 xl:bg-red-400"> */}
      <div className="h-12 w-full px-8 container mx-auto flex items-center justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={defaulAnimation}
          transition={{ type: "easeInOut", delay: 0.1 }}
        >
          <h1 className="font-dm-serif-desplay text-xl">TICs</h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={defaulAnimation}
          transition={{ type: "easeInOut", delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          {listItemNavbar.map((item, index) => (
            <p
              className="font-montserrat text-sm px-1 cursor-pointer hover:underline"
              key={index}
            >
              {item.name}
            </p>
          ))}
        </motion.div>
        <div className="block lg:hidden">
          <Menu size={27} className="text-neutral-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
