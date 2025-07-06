"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Typewriter() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Engineer",
      "Fitness Enthusiast",
      "Badmintonist",
      "Foodie",
      "Chess Player",
    ],
    loop: 0,
  });

  return (
    <h2 className="text-[1.3rem] text-slate-500 dark:text-slate-400">
      <span>{text}</span>
      <Cursor cursorColor="rgb(107, 114, 128)" />
    </h2>
  );
}
