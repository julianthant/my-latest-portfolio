import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import ToggleDayNight from "./ToggleDayNight";
import { dm_sans } from "@/library/fonts";
import { Github_Logo } from "./svgs";

export default function Navbar() {
  return (
    <header className="top-0 bottom-auto z-10 fixed inset-x-0 bg-white dark:bg-slate-900 drop-shadow-sm py-3 border-slate-200/20 border-tr border-b-[1px]">
      <div className="px-8 container">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`font-bold text-3xl text-accent-400 ${dm_sans.className}`}
          >
            Hein Thant Zaw
          </Link>

          <div className="max-lg:hidden flex justify-center items-center gap-6">
            <nav className="pr-8 border-slate-200/20 border-r">
              <ul
                role="list"
                className="flex space-x-12 text-slate-600 dark:text-slate-400"
              >
                <li className="flex font-bold text-base hover:text-accent-350 cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="flex font-bold text-base hover:text-accent-350 cursor-pointer">
                  <Link href="/blog/">About</Link>
                </li>
                <li className="flex font-bold text-base hover:text-accent-350 cursor-pointer">
                  <Link href="/projects/">Projects</Link>
                </li>
                <li className="flex font-bold text-base hover:text-accent-350 cursor-pointer">
                  <Link href="/contact/">Contact Me</Link>
                </li>
              </ul>
            </nav>

            <ToggleDayNight />
            <a
              aria-label="github"
              href="https://github.com/julianthant"
              target="_blank"
              rel="noreferrer"
            >
              <Github_Logo className="hover:opacity-60 fill-slate-500 dark:fill-slate-400 w-5 h-5 cursor-pointer" />
            </a>
          </div>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
