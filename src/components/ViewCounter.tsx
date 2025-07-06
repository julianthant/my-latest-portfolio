"use client";

import { FC, useEffect, useState } from "react";
import { dm_sans } from "@/library/fonts";

interface ViewCounterProps {}

const ViewCounter: FC<ViewCounterProps> = ({}) => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsClient(true);

    const incrementPageViews = async () => {
      try {
        // First, increment the page view
        const response = await fetch("/api/page-views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setViewCount(data.views || 0);
        } else {
          // Fallback: try to get current count without incrementing
          const getResponse = await fetch("/api/page-views");
          if (getResponse.ok) {
            const data = await getResponse.json();
            setViewCount(data.views || 0);
          } else {
            setViewCount(0);
          }
        }
      } catch {
        // Fallback to 0 if API fails
        setViewCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      incrementPageViews();
    }, 500);

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
        {isLoading ? (
          <>
            <span className="font-medium text-accent-400">Loading...</span>
          </>
        ) : (
          <>
            <span className="font-medium text-accent-400">
              {formatViewCount(viewCount)}
            </span>{" "}
            page views
          </>
        )}
      </span>
    </div>
  );
};

export default ViewCounter;
