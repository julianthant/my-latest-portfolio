import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import ToggleDayNight from './ToggleDayNight';
import { dm_sans } from '@/library/fonts';
import { Github_Logo } from './svgs';

export default function Navbar() {
  return (
    <header className="fixed bg-white dark:bg-slate-900 py-3 inset-x-0 top-0 bottom-auto z-10 border-b-[1px] border-tr border-slate-200/20 drop-shadow-sm">
      <div className="container px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`font-bold text-3xl text-accent-400 ${dm_sans.className}`}
          >
            julianhein
          </Link>

          <div className="flex gap-6 items-center justify-center max-lg:hidden">
            <nav className="border-r border-slate-200/20 pr-8">
              <ul
                role="list"
                className="flex space-x-12 text-slate-600 dark:text-slate-400"
              >
                <li className="hover:text-accent-350 font-bold text-base flex cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:text-accent-350 font-bold text-base flex cursor-pointer">
                  <Link href="/blog/">About</Link>
                </li>
                <li className="hover:text-accent-350 font-bold text-base flex cursor-pointer">
                  <Link href="/projects/">Projects</Link>
                </li>
                <li className="hover:text-accent-350 font-bold text-base flex cursor-pointer">
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
              <Github_Logo className="hover:opacity-60 cursor-pointer fill-slate-500 dark:fill-slate-400 w-5 h-5" />
            </a>
          </div>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
