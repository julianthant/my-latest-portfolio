import { FC } from "react";
import { dm_sans } from "@/library/fonts";

import ProjectTimeline from "@/components/ProjectTimeline";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center space-y-2 pt-[88px] pb-16 min-h-screen">
        <div className="space-y-2 pb-4 text-center">
          <h2 className="font-bold text-4xl">Projects</h2>
          <h3
            className={`text-base text-gray-500 font-medium ${dm_sans.className}`}
          >
            Timeline of all my Projects
          </h3>
        </div>

        <ProjectTimeline />
      </div>
    </section>
  );
};

export default page;
