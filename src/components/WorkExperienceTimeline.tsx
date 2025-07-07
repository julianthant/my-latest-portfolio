"use client";

import { useEffect, useRef } from "react";
import workExperienceElements from "@/data/WorkExperienceElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const WorkExperienceTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      // Handle experience card clicks
      const experienceCard = target.closest(".experience-card");
      if (experienceCard) {
        const timelineElement = experienceCard.closest(
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
        {workExperienceElements.map((element, index) => (
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
                experienceRefs.current[index] = el;
              }}
              className="cursor-pointer experience-card"
            >
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="flex flex-shrink-0 justify-center items-center bg-gray-100 dark:bg-gray-800 w-12 h-12 overflow-hidden">
                  <Image
                    src={element.image}
                    alt={`${element.company} logo`}
                    width={48}
                    height={48}
                    className="rounded-none object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Job Details */}
                <div className="flex-1 space-y-1">
                  <h3 className="pt-1 font-bold text-xl leading-tight text-accent-400">
                    {element.title}
                  </h3>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm leading-tight">
                    {element.company} · {element.type}
                  </h4>
                  <h5 className="text-gray-500 dark:text-gray-400 text-sm">
                    {element.period}
                  </h5>
                  <h5 className="text-gray-500 dark:text-gray-400 text-sm">
                    {element.location}
                  </h5>
                </div>
              </div>

              <div className="mt-4">
                <ul className="space-y-2 pt-4 border-gray-200 dark:border-gray-700 border-t">
                  {element.description.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1 font-bold text-base leading-none text-accent-400">
                        •
                      </span>
                      <span className="text-sm leading-relaxed">
                        {point.replace(/^•\s*/, "")}
                      </span>
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

export default WorkExperienceTimeline;
