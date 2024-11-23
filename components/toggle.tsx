"use client";
import Image from "next/image";
import { useState } from "react";

import sunIcon from "@/public/icon-sun.svg";
import moonIcon from "@/public/icon-moon.svg";

export const Toggle = () => {
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div
      onClick={handleToggle}
      className="uppercase font-spaceMono cursor-pointer font-bold"
    >
      {dark ? (
        <div className="flex items-center gap-4">
          <p>Light</p>
          <Image src={sunIcon} alt="" className="w-5" />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <p>Dark</p>
          <Image src={moonIcon} alt="" className="w-5" />
        </div>
      )}
    </div>
  );
};
