"use client";

import Image from "next/image";
import educationElements from "@/data/EducationElements";

const EducationCards = () => {
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl">
      {educationElements.map((education) => (
        <div
          key={education.id}
          className="flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-6 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:-translate-y-1 duration-300"
        >
          <div className="flex flex-1 items-start gap-4">
            {/* School Logo */}
            <div className="flex flex-shrink-0 justify-center items-center bg-gray-100 dark:bg-gray-700 w-12 h-12 overflow-hidden">
              <Image
                src={education.image}
                alt={`${education.institution} logo`}
                width={48}
                height={48}
                className="object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Education Details */}
            <div className="flex-1">
              <h3 className="font-bold text-lg text-accent-400">
                {education.degree}
              </h3>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                {education.institution}
              </h4>
              <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm">
                {education.field}
              </p>
              <div className="flex flex-wrap gap-1 lg:gap-2 xl:gap-3 mt-1 text-gray-500 dark:text-gray-400 text-sm">
                <span>{education.period}</span>
                <span>•</span>
                <span>{education.location}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCards;
