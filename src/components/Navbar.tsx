import { useAppSelector } from "hooks/useAppSelector";
import { CustomLink } from "./CustomLink";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "assets/svgs/logo.svg";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "domain/slices/settingsSlice";
import { FaSun, FaMoon, FaRegSun } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import { clearUser } from "domain/slices/authSlice";
import img from "../assets/images/profile-pic.jpg";
import { Menu } from "@headlessui/react";

interface NavbarProps {
  landingVersion?: boolean;
}

export function Navbar({ landingVersion = false }: NavbarProps) {
  console.log("navbar rendering...");
  const { auth, settings } = useAppSelector((state) => state);
  const dispatch = useDispatch();

  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <nav
      className={`${
        landingVersion ? "fixed" : ""
      } top-0 left-0 z-20 w-full border-b border-b-slate-200 bg-slate-100 dark:border-b-slate-900 dark:bg-darkSlate dark:text-white page-gutter`}
    >
      <div className="flex flex-wrap items-center justify-between py-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-10" alt="GIA-Trainer Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-bold">GIA Trainer</span>
        </a>
        <div className="flex items-center md:order-2">
          <div className="mr-6">
            <DarkModeSwitch
              checked={!settings.darkMode}
              onChange={() => dispatch(toggleDarkMode(!settings.darkMode))}
              className=""
              size={30}
              sunColor="white"
              moonColor="black"
            />
          </div>
          {auth.user ? (
            <div className="flex flex-col justify-center" onMouseLeave={() => setShowUserDropdown(false)}>
              <img
                onMouseEnter={() => setShowUserDropdown(true)}
                className="w-8 h-8 rounded-full cursor-pointer"
                src={img}
                alt="user photo"
              />
              {showUserDropdown && (
                <div className="relative">
                  {/* Blank div for padding. This way, the dropdown isn't hidden when it loses the mouse focus */}
                  <div className="absolute right-0 h-3 w-12" />
                  <div className="z-50 w-64 absolute top-3 right-0 list-none divide-y divide-slate-500 rounded-md shadow bg-red bg-slate-200 dark:bg-slate-800">
                    <div className="px-4 py-3">
                      <span className="block text-sm text-slate-900 dark:text-white">{auth.user.firstName}</span>
                      <span className="block text-sm  text-slate-500 truncate dark:text-slate-400">{auth.user.id}</span>
                    </div>
                    <ul className="py-2">
                      <DropDownItem text="Dashboard" link="#" />
                      <DropDownItem text="Settings" link="#" />
                      <DropDownItem text="Leaderboard" link="#" />
                      <DropDownItem text="Sign out" handleClick={() => dispatch(clearUser())} />
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : landingVersion ? (
            <CustomLink text="Try Now" to="/quiz" customCss="" navLink />
          ) : (
            <CustomLink text="Sign In" to="/sign-in" customCss="" navLink cta />
          )}
        </div>
      </div>
    </nav>
  );
}

function DropDownItem({ text, link, handleClick }: { text: string; link?: string; handleClick?: () => void }) {
  return (
    <li>
      {handleClick ? (
        <button
          onClick={handleClick}
          className="text-left block align w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 dark:text-slate-200 dark:hover:text-white"
        >
          {text}
        </button>
      ) : (
        <a
          href={link}
          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 dark:text-slate-200 dark:hover:text-white"
        >
          {text}
        </a>
      )}
    </li>
  );
}
