"use client";

import { FC, useEffect, useState } from "react";
import { dm_sans } from "@/library/fonts";

interface ViewCounterProps {}

const ViewCounter: FC<ViewCounterProps> = ({}) => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // Set client flag to true after component mounts
    setIsClient(true);

    const incrementPageViews = () => {
      // Get current view count from localStorage
      const currentViews = localStorage.getItem("portfolio-page-views");
      const newViewCount = currentViews ? parseInt(currentViews) + 1 : 1;

      // Update localStorage
      localStorage.setItem("portfolio-page-views", newViewCount.toString());

      // Update state
      setViewCount(newViewCount);
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      incrementPageViews();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const formatViewCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  // Don't render anything until we're on the client
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full w-2 h-2 bg-accent-400"></div>
      <span
        className={`text-sm text-gray-600 dark:text-gray-300 ${dm_sans.className}`}
      >
        <span className="font-medium text-accent-400">
          {formatViewCount(viewCount)}
        </span>{" "}
        page views
      </span>
    </div>
  );
};

export default ViewCounter;
