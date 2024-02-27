import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

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
    <div className="space-y-8 text-black bg-slate-100 dark:bg-slate-800 rounded-xl p-6 ring-1 ring-slate-900/5 shadow-xl flex flex-col justify-center">
      <Image
        className="rounded-lg ring-1 ring-slate-900/5 shadow-xl"
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
          className="font-bold text-4xl max-sm:text-3xl text-black dark:text-white"
        >
          {Name}
        </a>
        <div className="flex items-center gap-8">
          <p className="rounded-full px-5 py-1 font-bold bg-accent-400 text-white">
            {Year}
          </p>
          <p className="text-base text-slate-700 dark:text-slate-400">{Tag}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTag;
