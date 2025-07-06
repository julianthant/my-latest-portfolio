import MyPortfolioWebsite from "@/assets/my-portfolio.png";
import CoffeeWebsite from "@/assets/coffee-website.png";
import ToDoListWebsite from "@/assets/todolist-website.png";
import CarShowroom from "@/assets/dad-showroom.png";
import SoleSteals from "@/assets/shoe-website.webp";
import Yaps from "@/assets/yaps-website.webp";
import StyleZ from "@/assets/stylez-store.png";

let timelineElements = [
  {
    id: 1,
    title: "Coffee Website",
    url: "https://baristachawsu.netlify.app",
    year: "2023",
    tag: "Educational",
    image: CoffeeWebsite,
    description: [
      "Astro.js for static site generation and performance",
      "React components integrated with Astro",
      "Material-UI for consistent design system",
      "Framer Motion for smooth animations",
      "Sass for advanced styling capabilities",
    ],
  },
  {
    id: 2,
    title: "Car Showroom Website",
    url: "https://stylenation.netlify.app",
    year: "2023",
    tag: "Business",
    image: CarShowroom,
    description: [
      "Astro.js for static site generation and performance",
      "Island architecture for optimized loading",
      "Zero-JS by default with selective hydration",
      "Built-in image optimization and lazy loading",
    ],
  },
  {
    id: 3,
    title: "To Do List",
    url: "https://todolist-juju.netlify.app",
    year: "2023",
    tag: "Utility",
    image: ToDoListWebsite,
    description: [
      "Vanilla JavaScript with modern ES6+ features",
      "Sass for advanced CSS preprocessing",
      "Autoprefixer for cross-browser compatibility",
      "Browser-sync for live development server",
      "PostCSS with CSSnano for optimization",
      "NPM scripts for automated build pipeline",
    ],
  },
  {
    id: 4,
    title: "Online Shoe Store",
    url: "https://solesteals.netlify.app",
    year: "2023",
    tag: "E-Commerce",
    image: SoleSteals,
    description: [
      "React with Vite for fast development builds",
      "Firebase for backend and authentication",
      "React Router DOM for client-side routing",
      "Tailwind CSS for utility-first styling",
      "Framer Motion for interactive animations",
      "React Responsive Carousel for product galleries",
      "React Select for enhanced filtering options",
    ],
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    url: "https://yaps-social.vercel.app",
    year: "2024",
    tag: "Social",
    image: Yaps,
    description: [
      "Next.js 14 with TypeScript and React 18",
      "Pusher for real-time messaging infrastructure",
      "NextAuth.js with Upstash Redis adapter",
      "Upstash Redis for session storage and caching",
      "React Hook Form with Zod validation",
      "Headless UI for accessible components",
      "Tailwind CSS with custom forms styling",
      "React Hot Toast for notifications",
      "Vercel Analytics and Speed Insights",
      "Lucide React for consistent iconography",
    ],
  },
  {
    id: 6,
    title: "Online Clothing Store",
    url: "https://stylez.julianzaw.tech",
    year: "2024",
    tag: "E-Commerce",
    image: StyleZ,
    description: [
      "Next.js 14 with TypeScript and React 18",
      "Prisma ORM with PostgreSQL database",
      "NextAuth.js v5 with Prisma adapter",
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
    id: 7,
    title: "Latest Portfolio Website",
    url: "https://julianzaw.tech",
    year: "2025",
    tag: "Portfolio",
    image: MyPortfolioWebsite,
    description: [
      "Next.js 15 with latest React 19",
      "TypeScript for type safety",
      "Tailwind CSS for responsive design",
      "Next-themes for dark/light mode toggle",
      "React Simple Typewriter for animated text",
      "React Vertical Timeline for project showcase",
      "Vercel Blob for page views tracking",
    ],
  },
];

export default timelineElements;
