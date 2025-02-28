import { useAppSelector } from "hooks/useAppSelector";
import { CustomLink } from "./CustomLink";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logo from "assets/svgs/logo.svg";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "domain/slices/settingsSlice";
import React, { useState, Ref, forwardRef } from "react";
import { clearUser } from "domain/slices/authSlice";
import userIcon from "../assets/svgs/user-temp-icon.svg";
import { Menu } from "@headlessui/react";
import { Utils } from "utils/Utils";

interface NavbarProps {
  fixed?: boolean;
}

export function Navbar({ fixed = false }: NavbarProps) {
  const { auth, settings } = useAppSelector((state) => state);
  const dispatch = useDispatch();

  const [showUserDropdown, setShowUserDropdown] = useState(false);

  function renderNavbarRight() {
    if (auth.user) {
      return (
        <div className="flex flex-col justify-center" onMouseLeave={() => setShowUserDropdown(false)}>
          <img
            style={{ backgroundColor: auth.user!.profileImgColor }}
            onMouseEnter={() => setShowUserDropdown(true)}
            className="w-8 h-8 rounded-full border-black border-[0.5px] cursor-pointer mr-2"
            src={Utils.getUserImage(auth.user?.profileImgId).source}
            alt="user photo"
          />
          {showUserDropdown && (
            <div className="relative">
              {/* Blank div for padding. This way, the dropdown isn't hidden when it loses the mouse focus */}
              <div className="absolute right-0 h-3 w-12" />
              <div className="z-50 w-64 absolute top-3 right-0 list-none divide-y divide-slate-300 dark:divide-slate-700 rounded-xl shadow bg-red bg-slate-200 dark:bg-slate-800">
                <div className="px-4 py-3">
                  <span className="block text-sm text-slate-900 dark:text-white">{auth.user.firstName}</span>
                  <span className="block text-sm text-slate-500 truncate dark:text-slate-400">{auth.user.email}</span>
                </div>
                <ul className="py-2 bg-slate-100 dark:bg-slate-700 rounded-b-xl">
                  <DropDownItem text="Dashboard" link="/dashboard" />
                  <DropDownItem text="Sign out" handleClick={() => dispatch(clearUser())} />
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (fixed) {
      return <CustomLink text="Try Now" to="/quiz" customCss="" navLink />;
    } else {
      return <CustomLink text="Sign In" to="/sign-in" customCss="" navLink cta />;
    }
  }

  return (
    <nav
      className={`${
        fixed && "fixed"
      } top-0 h-20 left-0 z-20 w-full border-b border-b-slate-300 drop-shadow-md bg-slate-100 dark:border-b-slate-900 dark:bg-darkSlate dark:text-white page-gutter`}
    >
      <div className="flex flex-wrap h-full items-center justify-between py-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-10" alt="GIA-Trainer Logo" />
          <span className="self-center whitespace-nowrap text-lg md:text-2xl font-bold">GIA Trainer</span>
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
          {/* i don't like this syntax */}
          {renderNavbarRight()}
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
          className="text-left block align w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-slate-200 dark:hover:text-white"
        >
          {text}
        </button>
      ) : (
        <a
          href={link}
          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-slate-200 dark:hover:text-white"
        >
          {text}
        </a>
      )}
    </li>
  );
}
