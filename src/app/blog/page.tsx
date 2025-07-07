import { FC } from "react";
import Link from "next/link";
import { dm_sans } from "@/library/fonts";

import ProjectTag from "@/components/ProjectTag";
import StyleZ from "@/assets/stylez-store.png";
import ShoeStore from "@/assets/shoe-website.webp";
import CodewarsDashboard from "@/components/CodewarsDashboard";
import LeetcodeDashboard from "@/components/LeetcodeDashboard";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline";
import EducationCards from "@/components/EducationCards";
import BlogNavigation from "@/components/BlogNavigation";

interface pageProps {}

const programmingLanguages = [
  "C++",
  "Java",
  "Python",
  "Assembly",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Sass/SCSS",
  "Visual Basic",
];

const frameworks = [
  "React",
  "Next.js",
  "Spring Boot",
  "Astro.js",
  "Tailwind CSS",
  "Prisma ORM",
  "Vite",
  "Astro.js",
  "Framer Motion",
  "NextAuth.js",
  "Pusher",
  "Sentry",
  "Flyway",
  "Keycloak",
  "MinIO",
];

const databases = [
  "PostgreSQL",
  "MongoDB",
  "Neon",
  "Firebase",
  "MySQL",
  "SQLite",
  "Upstash Redis",
  "Supabase",
  "Vercel Blob",
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
  "Microsoft Teams",
  "Agile",
  "Microsoft Office",
  "Google Suite",
  "GitHub Actions",
  "Digital Ocean",
];

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex flex-col pt-[102px] min-h-screen">
      {/* Blog Navigation */}
      <BlogNavigation />

      {/* Dashboard Section */}
      <div id="dashboard" className="flex-grow gap-8 grid grid-flow-row">
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

      {/* Divider */}
      <div className="mx-auto px-8 py-14 w-full max-w-4xl">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Skills Section */}
      <div id="skills" className="flex-grow gap-8 grid grid-flow-row">
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
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-5 py-1 rounded-full font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors"
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
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-5 py-1 rounded-full font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors"
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
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-5 py-1 rounded-full font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors"
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
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-5 py-1 rounded-full font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto px-8 py-14 w-full max-w-4xl">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Work Experience Section */}
      <div id="experience" className="flex-grow gap-8 grid grid-flow-row">
        <div className="flex flex-col justify-center gap-10 px-8 container">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl">Work Experience</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Professional Development Journey
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center max-w-6xl">
            <WorkExperienceTimeline />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto px-8 py-14 w-full max-w-4xl">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Education Section */}
      <div id="education" className="flex-grow gap-8 grid grid-flow-row">
        <div className="flex flex-col justify-center gap-10 px-8 container">
          <div className="space-y-2 text-center">
            <h2 className="font-bold text-4xl">Education</h2>
            <h3
              className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
            >
              Academic Background
            </h3>
          </div>

          <EducationCards />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto px-8 py-14 w-full max-w-4xl">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Featured Projects Section */}
      <div id="projects" className="flex-grow gap-8 grid grid-flow-row">
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

          <div className="flex justify-center sm:justify-end pb-12">
            <Link href="/projects/">
              <button className="group relative bg-transparent px-4 py-2 border-2 border-gray-300 hover:border-accent-400 dark:border-gray-600 dark:hover:border-accent-400 rounded-lg font-medium text-gray-700 dark:text-gray-300 text-sm transition-all duration-300 ease-out hover:text-accent-400 dark:hover:text-accent-400">
                <span className="flex items-center gap-2">
                  View All Projects
                  <svg
                    className="w-3 h-3 transition-transform group-hover:translate-x-1 duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="bottom-0 left-0 absolute w-0 group-hover:w-full h-0.5 transition-all duration-300 ease-out bg-accent-400"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
