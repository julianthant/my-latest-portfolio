"use client";

import Image from "next/image";

import timelineElements from "@/data/TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProjectTimeline = ({}) => {
  return (
    <VerticalTimeline
      className="custom-timeline"
      layout="2-columns"
      animate={true}
    >
      {timelineElements.map((element) => (
        <VerticalTimelineElement
          visible={true}
          key={element.id}
          contentStyle={{ borderRadius: "10px" }}
          className="custom-timeline-element"
        >
          <Image
            className="py-4"
            src={element.image}
            alt={element.title}
            width={800}
            height={450}
            priority={true}
          />
          <a
            target="_blank"
            className="font-bold max-sm:text-3xl text-4xl"
            href={element.url}
          >
            {element.title}
          </a>
          <div className="flex items-center gap-8 pb-4">
            <p className="px-5 py-1 rounded-full font-bold text-black dark:text-white bg-accent-400">
              {element.year}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              {element.tag}
            </p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ProjectTimeline;
