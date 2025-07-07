import CurrentPortfolio from "@/assets/current-portfolio.png";
import CoffeeWebsite from "@/assets/coffee-website.png";
import ToDoListWebsite from "@/assets/todolist-website.png";
import CarShowroom from "@/assets/dad-showroom.png";
import SoleSteals from "@/assets/shoe-website.webp";
import Yaps from "@/assets/yaps-website.webp";
import StyleZ from "@/assets/stylez-store.png";
import TwisterCambodia from "@/assets/twistercambodia.png";
import { StaticImageData } from "next/image";

export interface TimelineElement {
  id: number;
  title: string;
  url: string;
  year: string;
  duration: string;
  tag: string;
  category: string;
  languages: string[];
  image: StaticImageData;
  description: string[];
}

let timelineElements: TimelineElement[] = [
  {
    id: 8,
    title: "Portfolio",
    url: "https://julianzaw.tech",
    year: "2025",
    duration: "2 mos",
    tag: "My Portfolio",
    category: "Personal Project",
    languages: ["TypeScript", "JavaScript"],
    image: CurrentPortfolio,
    description: [
      "Frontend: Next.js 15 with React 19",
      "Backend: Next.js API routes with Vercel serverless functions",
      "Database: Vercel Blob for page views tracking",
      "Tailwind CSS for responsive design",
      "Next-themes for dark/light mode toggle",
      "React Simple Typewriter for animated text",
      "React Vertical Timeline for project showcase",
    ],
  },
  {
    id: 7,
    title: "Enterprise Management System",
    url: "https://dev.twistercambodia.com",
    year: "2024 - 2025",
    duration: "8 mos",
    tag: "Twister",
    category: "Enterprise",
    languages: ["TypeScript", "Java"],
    image: TwisterCambodia,
    description: [
      "Frontend: React 18 with Vite",
      "Backend: Spring Boot with RESTful APIs",
      "Database: PostgreSQL with Flyway migrations",
      "TanStack Router/Query/Table for state management",
      "Keycloak OAuth2/OIDC authentication",
      "MinIO S3-compatible object storage service",
      "GitHub Actions CI/CD with automated testing",
      "Docker builds with GitHub Container Registry",
      "Docker Compose for service orchestration",
      "Digital Ocean cloud infrastructure deployment",
    ],
  },
  {
    id: 6,
    title: "Online Clothing Store",
    url: "https://stylez.julianzaw.tech",
    year: "2024",
    duration: "3 mos",
    tag: "StyleZ",
    category: "E-Commerce",
    languages: ["TypeScript", "JavaScript"],
    image: StyleZ,
    description: [
      "Frontend: Next.js 14 with React 18",
      "Backend: Next.js API routes with Prisma ORM",
      "Database: PostgreSQL with NextAuth.js adapter",
      "Radix UI components with shadcn/ui design system",
      "NextUI for advanced component library",
      "TanStack Query for server state management",
      "Framer Motion for smooth animations",
      "React Hook Form with Zod validation",
      "Tailwind CSS with custom animations",
      "Sentry for error monitoring and performance",
    ],
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    url: "https://yaps-social.vercel.app",
    year: "2024",
    duration: "2 mos",
    tag: "Yaps",
    category: "Social",
    languages: ["TypeScript", "JavaScript"],
    image: Yaps,
    description: [
      "Frontend: Next.js 14 with React 18",
      "Backend: Next.js API routes with Pusher integration",
      "Database: Upstash Redis for session storage and caching",
      "NextAuth.js with Upstash Redis adapter",
      "React Hook Form with Zod validation",
      "Headless UI for accessible components",
      "Tailwind CSS with custom forms styling",
      "React Hot Toast for notifications",
      "Vercel Analytics and Speed Insights",
      "Lucide React for consistent iconography",
    ],
  },
  {
    id: 4,
    title: "Online Shoe Store",
    url: "https://solesteals.netlify.app",
    year: "2023",
    duration: "2 mos",
    tag: "SoleSteals",
    category: "E-Commerce",
    languages: ["JavaScript"],
    image: SoleSteals,
    description: [
      "Frontend: React 18 with Vite",
      "Backend: Firebase authentication and cloud functions",
      "Database: Firebase Firestore NoSQL database",
      "React Router DOM for client-side routing",
      "Tailwind CSS for utility-first styling",
      "Framer Motion for interactive animations",
      "React Responsive Carousel for product galleries",
      "React Select for enhanced filtering options",
    ],
  },
  {
    id: 3,
    title: "To Do List",
    url: "https://todolist-juju.netlify.app",
    year: "2023",
    duration: "1 mos",
    tag: "Todoer",
    category: "Utility",
    languages: ["JavaScript"],
    image: ToDoListWebsite,
    description: [
      "Frontend: Vanilla ES6+ features",
      "Backend: Local storage for data persistence",
      "Sass for advanced CSS preprocessing",
      "Autoprefixer for cross-browser compatibility",
      "Browser-sync for live development server",
      "PostCSS with CSSnano for optimization",
      "NPM scripts for automated build pipeline",
    ],
  },
  {
    id: 2,
    title: "Car Showroom Website",
    url: "https://stylenation.netlify.app",
    year: "2023",
    duration: "2 mos",
    tag: "Style Nation",
    category: "Business",
    languages: ["JavaScript"],
    image: CarShowroom,
    description: [
      "Frontend: Astro.js for static site generation",
      "Island architecture for optimized loading",
      "Zero-JS by default with selective hydration",
      "Built-in image optimization and lazy loading",
    ],
  },
  {
    id: 1,
    title: "Coffee Recipe Website",
    url: "https://baristachawsu.netlify.app",
    year: "2023",
    duration: "1 mos",
    tag: "Barista Chaw Su",
    category: "Educational",
    languages: ["JavaScript"],
    image: CoffeeWebsite,
    description: [
      "Frontend: Astro.js with React components",
      "Material-UI for consistent design system",
      "Framer Motion for smooth animations",
      "Sass for advanced styling capabilities",
    ],
  },
];

export default timelineElements;
