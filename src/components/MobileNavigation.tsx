"use client";

import { Menu, Close_Icon } from "./svgs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SelectDayNight } from "./ToggleDayNight";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/blog/" },
  { name: "Projects", href: "/blog/projects/" },
  { name: "Contact Me", href: "/contact/" },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        className="flex justify-center items-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md w-10 h-8"
        aria-label="mobile navigation button"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="dark:fill-white" />
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              className="z-10 fixed inset-0 bg-black/10 dark:bg-slate-900/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>
            <nav className="top-4 right-4 left-auto z-20 fixed bg-slate-900 dark:bg-white shadow-lg p-6 rounded-lg w-[20rem] text-slate-900">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="top-5 right-5 absolute flex justify-center items-center w-8 h-8 text-slate-500 hover:text-slate-600"
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
                      className="flex font-bold text-slate-400 dark:text-slate-500 text-base hover:text-accent-400 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <div className="mt-6 pt-6 border-slate-200 border-t">
                  <div className="flex justify-between items-center">
                    <p className="font-normal text-slate-500 dark:text-slate-700">
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
