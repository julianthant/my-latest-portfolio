"use client";

import { FC, useState, useEffect } from "react";
import { Light_Icon, Dark_Icon, Dropdown_Icon } from "./svgs";
import { useTheme } from "next-themes";

interface ToggleDayNightProps {}

const ToggleDayNight: FC<ToggleDayNightProps> = ({}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleThemeSwitch = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="max-md:hidden relative flex justify-center items-center w-6 h-6 overflow-hidden">
        {/* Placeholder to maintain layout */}
      </div>
    );
  }

  return (
    <button
      onClick={toggleThemeSwitch}
      className="max-md:hidden relative flex justify-center items-center w-6 h-6 overflow-hidden"
      aria-label="toggle dark mode"
    >
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
          resolvedTheme === "dark"
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <Light_Icon className="hover:opacity-60" />
      </div>
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
          resolvedTheme === "dark"
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <Dark_Icon className="hover:opacity-60" />
      </div>
    </button>
  );
};
export const SelectDayNight = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="relative flex items-center shadow-sm p-2 rounded-lg ring-1 ring-slate-900/10 font-semibold text-slate-500 dark:text-slate-700 cursor-pointer">
        <Light_Icon className="mr-2 w-6 h-6" />
        <p className="capitalize">Loading</p>
        <Dropdown_Icon className="ml-2 w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center shadow-sm p-2 rounded-lg ring-1 ring-slate-900/10 font-semibold text-slate-500 dark:text-slate-700 cursor-pointer">
      {resolvedTheme === "dark" ? (
        <Dark_Icon className="mr-2 w-6 h-6" />
      ) : (
        <Light_Icon className="mr-2 w-6 h-6" />
      )}
      <p className="capitalize">{resolvedTheme}</p>
      <Dropdown_Icon className="ml-2 w-6 h-6" />
      <select
        id="theme"
        className="absolute inset-0 opacity-0 w-full h-full appearance-none cursor-pointer"
        onChange={handleThemeChange}
        value={resolvedTheme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ToggleDayNight;
