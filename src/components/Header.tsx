/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import ToggleTheme from '@/components/ToggleTheme';

const Header: FC = () => {
  return (
    <header className="navbar sticky top-0 z-50 w-full bg-stone-200 px-4 opacity-70 dark:bg-stone-900 md:px-8">
      <div className="max-w-7xl mx-auto my-4 my-0">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <Image src="/images/logo-32x32.png" alt="Home Logo" width={32} height={32} />
            </a>
          </Link>
          <div className="flex items-baseline space-x-4 ml-auto">
            <Link href="/about">
              <a className="mx-0 inline-flex items-center space-x-2 rounded py-1 px-0 text-lg font-medium text-gray-900 transition hover:bg-slate-200 dark:text-gray-100 hover:dark:bg-zinc-800 sm:py-2 sm:px-3  md:mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="inline h-5 w-5 text-slate-700 dark:text-slate-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  ></path>
                </svg>
                <span>About</span>
              </a>
            </Link>
            <Link href="/about">
              <a className="mx-0 inline-flex items-center space-x-2 rounded py-1 px-0 text-lg font-medium text-gray-900 transition hover:bg-slate-200 dark:text-gray-100 hover:dark:bg-zinc-800 sm:py-2 sm:px-3  md:mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="inline h-5 w-5 text-slate-700 dark:text-slate-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  ></path>
                </svg>
                <span>Contact</span>
              </a>
            </Link>
          </div>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
