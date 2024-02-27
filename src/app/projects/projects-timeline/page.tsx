import { FC } from 'react';
import { dm_sans } from '@/library/fonts';

import ProjectTimeline from '@/components/ProjectTimeline';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section>
      <div className="space-y-2 min-h-screen pt-[88px] flex flex-col justify-center items-center pb-16">
        <div className="text-center space-y-1">
          <h2 className="font-bold text-4xl">Projects Timeline</h2>
          <h3
            className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
          >
            All Projects I Have Worked On
          </h3>
        </div>

        <ProjectTimeline />
      </div>
    </section>
  );
};

export default page;
