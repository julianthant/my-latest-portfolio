'use client';

import { FC, useState, useEffect } from 'react';
import { Light_Icon, Dark_Icon, Dropdown_Icon } from './svgs';
import { useTheme } from 'next-themes';

interface ToggleDayNightProps {}

const ToggleDayNight: FC<ToggleDayNightProps> = ({}) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [firstRender, setFirstRender] = useState(true);

  const toggleThemeSwitch = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <button
      onClick={toggleThemeSwitch}
      className="max-md:hidden flex items-center justify-center w-6 h-6 relative overflow-hidden"
      aria-label="toggle dark mode"
    >
      <div
        className={`absolute inset-0 ${
          firstRender ? '' : 'transition-all duration-500 ease-in-out'
        } transform ${
          resolvedTheme === 'dark'
            ? 'translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        <Light_Icon className="hover:opacity-60" />
      </div>
      <div
        className={`absolute inset-0 ${
          firstRender ? '' : 'transition-all duration-500 ease-in-out'
        } transform ${
          resolvedTheme === 'dark'
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <Dark_Icon className="hover:opacity-60" />
      </div>
    </button>
  );
};
export const SelectDayNight = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <div className="cursor-pointer relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-500 dark:text-slate-700 font-semibold">
      {resolvedTheme === 'dark' ? (
        <Dark_Icon className="w-6 h-6 mr-2" />
      ) : (
        <Light_Icon className="w-6 h-6 mr-2" />
      )}
      <p className="capitalize">{resolvedTheme}</p>
      <Dropdown_Icon className="w-6 h-6 ml-2" />
      <select
        id="theme"
        className="absolute appearance-none inset-0 w-full h-full opacity-0 cursor-pointer"
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
