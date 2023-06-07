import { useAppSelector } from "hooks/useAppSelector";
import { CustomLink } from "./CustomLink";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "assets/svgs/logo.svg";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "domain/slices/settingsSlice";
import { FaSun, FaMoon, FaRegSun } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar() {
  const { auth, settings } = useAppSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-b-slate-200 bg-slate-100 dark:border-b-slate-900 dark:bg-darkSlate dark:text-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center">
          <img src={logo} className="mr-3 h-10" alt="GIA-Trainer Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-bold">GIA Trainer</span>
        </a>
        <div className="flex items-center md:order-2">
          <div className="mr-6">
            <DarkModeSwitch
              checked={!settings.darkMode}
              onChange={() => dispatch(toggleDarkMode())}
              className=""
              size={30}
              sunColor="white"
              moonColor="black"
            />
          </div>
          {auth.user ? (
            <CustomLink text="Dashboard" location="/dashboard" customCss="mr-6" cta navLink />
          ) : (
            <CustomLink text="Try Now" location="/quiz/visitor" customCss="" navLink />
          )}
          {/* Hamburger menu */}
          {/* <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>
        {/* <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                <a
                  href="/dashboard"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Option 1
                </a>
              </li>
            </ul>
          </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
