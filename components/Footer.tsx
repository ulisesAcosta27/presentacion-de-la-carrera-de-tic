import React from "react";

import { listSections } from "@/utils";

export const Footer = () => {
  return (
    <div className="bg-black h-[20rem] text-white">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4">
          <div className="text-center">
            <p className="font-dm-serif-desplay text-xl py-2">Sections</p>
            {listSections.map((item, index) => (
              <p
                key={index}
                className="font-montserrat text-xs py-1 cursor-pointer"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="text-center">
            <p className="font-dm-serif-desplay text-xl py-2">Sections</p>
          </div>
        </div>
      </div>
    </div>
  );
};
