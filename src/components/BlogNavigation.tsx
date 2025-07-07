"use client";

import { useState, useEffect } from "react";

interface NavigationItem {
  id: string;
  title: string;
  icon: string;
}

const navigationItems: NavigationItem[] = [
  { id: "dashboard", title: "Dashboard", icon: "📊" },
  { id: "skills", title: "Technical Skills", icon: "🛠️" },
  { id: "experience", title: "Work Experience", icon: "💼" },
  { id: "education", title: "Education", icon: "🎓" },
  { id: "projects", title: "Featured Projects", icon: "🚀" },
];

const BlogNavigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [navState, setNavState] = useState<"full" | "minimized" | "collapsed">(
    "full"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show navigation after scrolling past header
      setIsVisible(scrollPosition > 250);

      // Check if we're near the bottom of the page (for projects section)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("projects");
        return;
      }

      // Find active section - check titles specifically
      const sections = navigationItems
        .map((item) => {
          const element = document.getElementById(item.id);
          return element
            ? {
                id: item.id,
                offsetTop: element.offsetTop,
                offsetBottom: element.offsetTop + element.offsetHeight,
              }
            : null;
        })
        .filter(Boolean);

      // Find the current section based on scroll position with better logic
      let currentSection = "dashboard"; // default
      const viewportMiddle = scrollPosition + windowHeight / 2;

      // Find which section the middle of the viewport is currently in
      for (const section of sections) {
        if (
          section &&
          viewportMiddle >= section.offsetTop &&
          viewportMiddle < section.offsetBottom
        ) {
          currentSection = section.id;
          break;
        }
      }

      // If no section contains the viewport middle, use the closest one above
      if (currentSection === "dashboard") {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && scrollPosition + 100 >= section.offsetTop) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // For mobile, always scroll to the title with consistent offset
      const yOffset = -80; // Reduced offset for mobile
      const y = element.offsetTop + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToSectionDesktop = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Special handling for different sections on desktop
      if (sectionId === "projects") {
        // Scroll to bottom of page for the last section
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      } else if (sectionId === "education") {
        // Center the education section on the page
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        const centerPosition =
          elementTop + elementHeight / 2 - windowHeight / 2;

        window.scrollTo({
          top: Math.max(0, centerPosition),
          behavior: "smooth",
        });
      } else {
        // Normal scroll with offset for other sections
        const yOffset = -120; // Offset to account for header and some spacing
        const y = element.offsetTop + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const toggleNavState = () => {
    setNavState(navState === "collapsed" ? "full" : "collapsed");
  };

  return (
    <>
      {/* Desktop Side Navigation - Multi-state */}
      <div
        className={`fixed top-1/2 left-6 transform -translate-y-1/2 z-40 transition-all duration-500 hidden lg:block ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        }`}
      >
        {navState === "collapsed" ? (
          /* Collapsed State - Just Arrow */
          <button
            onClick={toggleNavState}
            className="bg-white hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 shadow-xl backdrop-blur-sm p-2.5 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-300 transition-all duration-200"
            title="Expand Navigation"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ) : (
          <div className="bg-white dark:bg-gray-900 shadow-xl backdrop-blur-sm p-1.5 border border-gray-200 dark:border-gray-700 rounded-xl">
            {/* Top Controls */}
            {navState === "minimized" && (
              <div className="mb-1">
                <button
                  onClick={() => setNavState("full")}
                  className="flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg w-10 h-10 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400 transition-all duration-200"
                  title="Expand to Full"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Header for Full Mode */}
            {navState === "full" && (
              <div className="flex justify-between items-center mb-1">
                <span className="px-2 text-gray-500 dark:text-gray-400 text-xs">
                  Navigation
                </span>
                <button
                  onClick={() => setNavState("minimized")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400 transition-colors"
                  title="Minimize"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            )}

            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSectionDesktop(item.id)}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    navState === "full" ? "w-full" : "w-10 h-10 justify-center"
                  } ${
                    activeSection === item.id
                      ? "bg-accent-400 text-white shadow-md transform scale-105"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                  }`}
                  title={item.title}
                >
                  <span
                    className={navState === "full" ? "text-sm" : "text-base"}
                  >
                    {item.icon}
                  </span>
                  {navState === "full" && (
                    <span className="text-xs transition-all duration-200">
                      {item.title}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Bottom Collapse Control for Minimized Mode */}
            {navState === "minimized" && (
              <div className="mt-1 pt-1 border-gray-200 dark:border-gray-700 border-t">
                <button
                  onClick={() => setNavState("collapsed")}
                  className="flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg w-10 h-10 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400 transition-all duration-200"
                  title="Collapse"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation - Simplified Toggle */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {navState === "collapsed" ? (
          <button
            onClick={toggleNavState}
            className="bg-white dark:bg-gray-900 shadow-xl backdrop-blur-sm px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-300"
            title="Expand Navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        ) : (
          <div className="bg-white dark:bg-gray-900 shadow-xl backdrop-blur-sm px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleNavState}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 dark:text-gray-400 transition-colors"
                title="Toggle Navigation"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <nav className="flex items-center gap-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-center w-11 h-11 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-accent-400 text-white scale-110 shadow-lg"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
                    }`}
                    title={item.title}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogNavigation;
