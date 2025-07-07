import KBZBankLogo from "@/assets/company/kbz_bank_logo.jpeg";
import BaristaChawSuLogo from "@/assets/company/baristachawsu.png";
import SamsungSDSLogo from "@/assets/company/samsung.jpg";
import SMCLogo from "@/assets/company/smc.jpg";
import StyleNationLogo from "@/assets/company/style-nation.png";
import { StaticImageData } from "next/image";

interface WorkExperienceElement {
  id: number;
  title: string;
  company: string;
  location: string;
  year: string;
  period: string;
  type: string;
  image: StaticImageData;
  description: string[];
}

const workExperienceElements: WorkExperienceElement[] = [
  {
    id: 1,
    title: "SJDV Program Assistant",
    company: "Santa Monica College",
    location: "Los Angeles, California, United States",
    year: "2024",
    period: "Dec 2024 - Present · 8 mos",
    type: "Part-time",
    image: SMCLogo, // Placeholder for company logo
    description: [
      "• Created and managed 300+ detailed invoices and expedited 200+ insurance payments to Ed2Go on behalf of injured workers by coordinating directly with claims adjusters, and resolving payment issues.",
      "• Increased program revenue by $100,000+ by optimizing internal workflows, reducing processing latency, and scaling operational throughput to accommodate higher task volume.",
      "• Trained and onboarded new team members in all core operations, including Microsoft Teams, Trello workflows, payment systems, and student support procedures, ensuring team readiness.",
    ],
  },
  {
    id: 2,
    title: "Barista & Social Media Coordinator",
    company: "Tell Us Cafe",
    location: "Mandalay, Myanmar",
    year: "2023",
    period: "Sep 2023 - Nov 2023 · 3 mos",
    type: "Full-time",
    image: BaristaChawSuLogo, // Placeholder for company logo
    description: [
      "• Delivered high-quality service to 120+ customers daily by accurately fulfilling orders, operating POS systems, and maintaining a friendly, professional environment.",
      "• Reduced product waste by 35% through daily restocking, inventory rotation, and proper handling of short-date items during opening and closing procedures.",
      "• Increased customer engagement by 40% by managing the café’s Facebook page, posting weekly content, updating menus, and responding to messages and reviews.",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing & Sales Lead",
    company: "Style Nation",
    location: "Mandalay, Myanmar",
    year: "2023",
    period: "July 2021 - Nov 2023 · 2 yrs 5 mos",
    type: "Hybrid",
    image: StyleNationLogo,
    description: [
      "• Designed and launched a responsive website to showcase the car showroom, improving brand credibility and contributing to a 30% increase in online inquiries through linked social media and contact channels.",
      "• Managed and delegated daily tasks to a 5-person team, coordinating responsibilities across scheduling, showroom upkeep, and customer assistance, leading to a 40% improvement in task completion efficiency.",
      "• Sold 15+ vehicles in the owner’s absence by handling customer walk-ins, conducting vehicle walkthroughs, and closing sales, while managing a Facebook account with 2,000+ followers to post listings and engage with prospective buyers.",
    ],
  },
  {
    id: 4,
    title: "Software & Technology Intern",
    company: "KBZ Bank",
    location: "Yangon, Myanmar",
    year: "2023",
    period: "May 2023 - Aug 2023 · 4 mos",
    type: "Internship",
    image: KBZBankLogo,
    description: [
      "• Collaborated with cross-functional teams to troubleshoot 100+ technical issues across MacOS and Windows, strengthening client satisfaction and service reliability.",
      "• Resolved 100+ technical issues across MacOS and Windows systems by troubleshooting hardware, software, and network configurations, ensuring minimal downtime.",
      "• Facilitated user education by creating documentation for CRM, Google Workspace, and Zoom tools, enhancing internal support communication.",
      "• Supported rollout of Duo Multi-Factor Authentication (MFA), helping reduce post-launch security concerns by 14% and boosting user confidence across departments.",
    ],
  },
  {
    id: 5,
    title: "Operations Management Intern",
    company: "SAMSUNG SDS THAILAND",
    location: "Bangkok City, Thailand",
    year: "2022",
    period: "Mar 2022 - Jun 2022 · 4 mos",
    type: "Internship",
    image: SamsungSDSLogo, // Placeholder for company logo
    description: [
      "• Improved internal employee satisfaction rating from 3.8 to 4.3 stars (+13%) by assisting in onboarding and supporting staff with Samsung's internal CRM and Slack.",
      "• Delivered software training sessions for new employees on Slack and Microsoft Teams, streamlining team communication from day one.",
      "• Designed a new operational scheme for the cloud Storage department.",
    ],
  },
];

export default workExperienceElements;
