import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectTagProps {
  ProjectImage: StaticImageData;
  Link: string;
  Name: string;
  Year: string;
  Tag: string;
}

const ProjectTag: FC<ProjectTagProps> = ({
  ProjectImage,
  Link,
  Name,
  Year,
  Tag,
}) => {
  return (
    <div className="flex flex-col justify-center space-y-8 bg-slate-100 dark:bg-slate-800 shadow-xl p-6 rounded-xl ring-1 ring-slate-900/5 text-black">
      <Image
        className="shadow-xl rounded-lg ring-1 ring-slate-900/5"
        src={ProjectImage}
        alt={Name}
        width={655}
        height={336}
        priority={true}
        quality={80}
      />
      <div className="space-y-4">
        <a
          href={Link}
          target="_blank"
          className="font-bold text-black dark:text-white max-sm:text-3xl text-4xl"
        >
          {Name}
        </a>
        <div className="flex items-center gap-8">
          <p className="px-5 py-1 rounded-full font-bold text-white bg-accent-400">
            {Year}
          </p>
          <p className="text-slate-700 dark:text-slate-400 text-base">{Tag}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTag;
