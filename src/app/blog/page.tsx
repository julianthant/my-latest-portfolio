import { FC } from "react";
import Link from "next/link";
import { dm_sans } from "@/library/fonts";

import ProjectTag from "@/components/ProjectTag";
import StyleZ from "@/assets/stylez-store.png";
import ShoeStore from "@/assets/shoe-website.webp";
import CodewarsDashboard from "@/components/CodewarsDashboard";
import LeetcodeDashboard from "@/components/LeetcodeDashboard";

interface pageProps {}

const programmingLanguages = [
  "C++",
  "Java (Spring Boot)",
  "Python",
  "Assembly",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Visual Basic",
];

const frameworks = [
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "Tailwind CSS",
  "Supabase",
  "Prisma ORM",
  "REST APIs",
  "JWT",
  "Webpack",
  "Vite",
  "OAuth2",
];

const databases = [
  "PostgreSQL",
  "MongoDB",
  "Neon",
  "Firebase",
  "MySQL",
  "SQLite",
  "Upstash Redis",
  "Supabase Database",
];

const tools = [
  "Docker",
  "Git",
  "Visual Studio Code",
  "Microsoft Azure",
  "Google Cloud Platform",
  "Figma",
  "Slack",
  "Trello",
  "Notion",
  "Microsoft Teams",
  "Agile",
  "Microsoft Office",
  "Google Suite",
];

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col pt-[102px] min-h-screen">
      {/* Dashboard Section */}
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

      {/* Skills Section */}
      <div className="flex-grow gap-8 grid grid-flow-row py-14 max-statsMD:pt-16">
        <div className="flex flex-col justify-center gap-10 px-8 container">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl">Technical Skills</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Programming Languages & Technologies
            </h3>
          </div>

          {/* Skills organized by category */}
          <div className="space-y-6">
            {/* Programming Languages */}
            <div>
              <h4 className="mb-4 font-semibold text-xl text-center text-accent-400">
                Programming Languages
              </h4>
              <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-4xl">
                {programmingLanguages.map((language, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 text-sm transition-colors"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h4 className="mb-4 font-semibold text-xl text-center text-accent-400">
                Libraries & Frameworks
              </h4>
              <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-4xl">
                {frameworks.map((framework, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 text-sm transition-colors"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h4 className="mb-4 font-semibold text-xl text-center text-accent-400">
                Databases
              </h4>
              <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-4xl">
                {databases.map((database, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 text-sm transition-colors"
                  >
                    {database}
                  </span>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div>
              <h4 className="mb-4 font-semibold text-xl text-center text-accent-400">
                Developer Tools
              </h4>
              <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-4xl">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 text-sm transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
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

          <div className="flex justify-end pb-12">
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
