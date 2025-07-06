import { FC } from "react";
import Link from "next/link";
import { dm_sans } from "@/library/fonts";

import ProjectTag from "@/components/ProjectTag";
import StyleZ from "@/assets/stylez-store.png";
import ShoeStore from "@/assets/shoe-website.webp";
import CodewarsDashboard from "@/components/CodewarsDashboard";
import LeetcodeDashboard from "@/components/LeetcodeDashboard";

import { HTML_Logo } from "@/components/svgs";
import { CSS_Logo } from "@/components/svgs";
import { JS_Logo } from "@/components/svgs";
import { TS_Logo } from "@/components/svgs";
import { SASS_Logo } from "@/components/svgs";
import { React_Logo } from "@/components/svgs";
import { Python_Logo } from "@/components/svgs";
import { Tailwind_Logo } from "@/components/svgs";
import { Astro_Logo } from "@/components/svgs";
import { CPlusPlus_Logo } from "@/components/svgs";
import { NextJS_Logo } from "@/components/svgs";
import { NodeJS_Logo } from "@/components/svgs";

interface pageProps {}

const skills = [
  { logo: HTML_Logo, lang: "HTML", level: "Advanced" },
  { logo: CSS_Logo, lang: "CSS", level: "Intermediate" },
  { logo: JS_Logo, lang: "Javascript", level: "Intermediate" },
  { logo: TS_Logo, lang: "Typescript", level: "Intermediate" },
  { logo: React_Logo, lang: "React", level: "Intermediate" },
  { logo: NextJS_Logo, lang: "Next JS", level: "Intermediate" },
  { logo: NodeJS_Logo, lang: "Node JS", level: "Intermediate" },
  { logo: Python_Logo, lang: "Python", level: "Intermediate" },
  { logo: Tailwind_Logo, lang: "Tailwind", level: "Intermediate" },
  { logo: SASS_Logo, lang: "SASS", level: "Intermediate" },
  { logo: Astro_Logo, lang: "Astro", level: "Intermediate" },
  { logo: CPlusPlus_Logo, lang: "C++", level: "Beginner" },
];

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col pt-[100px] min-h-screen">
      <div className="flex-grow gap-8 grid grid-flow-row">
        <div className="flex flex-col justify-center gap-10 px-8 container">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl">Dashboard</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Data Structures & Algorithms
            </h3>
          </div>
          <div className="gap-12 grid statsMD:grid-flow-col auto-cols-fr">
            <CodewarsDashboard />
            <LeetcodeDashboard />
          </div>
        </div>
      </div>
      <div className="flex-grow gap-8 grid grid-flow-row max-statsMD:pt-16">
        <div className="flex flex-col justify-center gap-10 px-8 container">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl">Featured Projects</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Full-Stack Web Applications
            </h3>
          </div>
          <div className="gap-12 grid statsMD:grid-flow-col auto-cols-fr">
            <ProjectTag
              ProjectImage={StyleZ}
              Link="https://stylez.julianzaw.tech"
              Name="Online Clothing Store"
              Year="2024"
              Tag="E-Commerce"
            />
            <ProjectTag
              ProjectImage={ShoeStore}
              Link="https://solesteals.netlify.app"
              Name="Online Shoe Store"
              Year="2023"
              Tag="E-Commerce"
            />
          </div>

          <div className="flex justify-end">
            <Link href="/blog/projects">
              <button className="hover:opacity-60 shadow-md px-5 py-2 rounded-lg font-bold text-white bg-accent-400">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
