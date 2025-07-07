"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import timelineElements from "@/data/TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProjectTimeline = ({}) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const centerElement = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const scrollOffset = elementCenter - viewportCenter;

    window.scrollBy({
      top: scrollOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Handle circle clicks
      if (target.classList.contains("vertical-timeline-element-icon")) {
        const timelineElement = target.closest(".vertical-timeline-element");
        if (timelineElement) {
          centerElement(timelineElement as HTMLElement);
        }
      }

      // Handle project card clicks
      const projectCard = target.closest(".project-card");
      if (projectCard) {
        const timelineElement = projectCard.closest(
          ".vertical-timeline-element"
        );
        if (timelineElement) {
          centerElement(timelineElement as HTMLElement);
        }
      }
    };

    const timelineContainer = timelineRef.current;
    if (timelineContainer) {
      timelineContainer.addEventListener("click", handleClick);
      return () => {
        timelineContainer.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div ref={timelineRef} className="w-full">
      <VerticalTimeline
        className="custom-timeline"
        layout="2-columns"
        animate={true}
      >
        {timelineElements.map((element, index) => (
          <VerticalTimelineElement
            visible={true}
            key={element.id}
            contentStyle={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            className="custom-timeline-element"
          >
            <div
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="cursor-pointer project-card"
            >
              <Image
                className="py-4"
                src={element.image}
                alt={element.title}
                width={800}
                height={450}
                priority={true}
              />

              {/* Project Header - matching work experience format */}
              <div className="space-y-1">
                <h3 className="font-bold max-sm:text-2xl text-3xl text-accent-400">
                  <a target="_blank" href={element.url}>
                    {element.title}
                  </a>
                </h3>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-lg">
                  {element.tag} · {element.category}
                </h4>
                <h5 className="text-gray-500 dark:text-gray-400 text-sm">
                  {element.year} · {element.duration}
                </h5>
                <h5 className="text-gray-500 dark:text-gray-400 text-sm">
                  Full-Stack Development · {element.languages.join(" · ")}
                </h5>
              </div>

              <div className="mt-4 pt-4 border-gray-200 dark:border-gray-700 border-t">
                <ul className="space-y-2">
                  {element.description.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="font-bold text-base leading-none text-accent-400">
                        •
                      </span>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ProjectTimeline;
