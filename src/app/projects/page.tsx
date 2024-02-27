import { FC } from 'react';
import { dm_sans } from '@/library/fonts';

import ProjectTag from '@/components/ProjectTag';
import YapsSocial from '@/assets/yaps-website.webp';
import ShoeStore from '@/assets/shoe-website.webp';
import Link from 'next/link';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="min-h-screen pt-[61px] max-xl:pt-[88px] max-xl:pb-8 space-y-8 container px-8 grid">
      <div className="text-center space-y-1 place-self-center">
        <h2 className="font-bold text-4xl">Featured Projects</h2>
        <h3
          className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
        >
          Full-Stack Web Applications
        </h3>
      </div>
      <div className="grid-flow-container max-lg:grid-cols-1 gap-8 w-full">
        <ProjectTag
          ProjectImage={YapsSocial}
          Link="https://stylenation.netlify.app"
          Name="Real-Time Texting"
          Year="2024"
          Tag="Social Media"
        />
        <ProjectTag
          ProjectImage={ShoeStore}
          Link="https://solesteals.netlify.app"
          Name="Online Shoe Store"
          Year="2023"
          Tag="Business"
        />
      </div>

      <div className="flex justify-end">
        <Link href="/projects/projects-timeline">
          <button className="px-5 py-2 bg-accent-400 hover:opacity-60 font-bold rounded-lg shadow-md text-white">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default page;
