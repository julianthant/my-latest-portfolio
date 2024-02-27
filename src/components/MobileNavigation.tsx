'use client';

import { Menu, Close_Icon } from './svgs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SelectDayNight } from './ToggleDayNight';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/blog/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Contact Me', href: '/contact/' },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md h-8 w-10 flex items-center justify-center"
        aria-label="mobile navigation button"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="dark:fill-white" />
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-sm dark:bg-slate-900/80 z-10"
              onClick={() => setIsOpen(false)}
            ></div>
            <nav className="fixed left-auto right-4 top-4 z-20 dark:bg-white bg-slate-900 rounded-lg w-[20rem] shadow-lg text-slate-900 p-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600"
              >
                <Close_Icon />
              </button>
              <ul
                aria-label="mobile navigation links"
                role="list"
                className="space-y-6 grid"
              >
                {navItems.map((item) => (
                  <li key={item.name} className="flex">
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="font-bold text-base flex hover:text-accent-400 cursor-pointer text-slate-400 dark:text-slate-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="dark:text-slate-700 text-slate-500 font-normal">
                      Switch theme
                    </p>
                    <SelectDayNight />
                  </div>
                </div>
              </ul>
            </nav>
          </>,
          document.body
        )}
    </div>
  );
};

export default MobileNavigation;
