import { Navbar } from "components/Navbar";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiStrikingArrows } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { DashboardContextProvider } from "components/DashboardContextProvider";

export function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  return (
    <div className="h-screen">
      <Navbar fixed />
      <aside className="fixed left-0 bottom-0 top-20 w-16 md:w-72 dark:bg-slate-800 bg-slate-300 text-black dark:text-white">
        <ul className="border-r border-slate-400 dark:border-slate-600 flex flex-col items-center h-full py-3 md:py-8 px-2 md:px-8">
          <li className="flex w-full">
            <Link
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-3 md:p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl ${
                location.pathname === "/dashboard" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard"
            >
              <GoHome className="ml-0 md:ml-2" size={22} />
              <span className="hidden md:block">Overview</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-3 md:p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                location.pathname === "/dashboard/attempts" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/attempts"
            >
              <GiStrikingArrows className="ml-0 md:ml-2" size={22} />
              <span className="hidden md:block">Attempts</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-3 md:p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                location.pathname === "/dashboard/leaderboard" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/leaderboard"
            >
              <MdOutlineLeaderboard className="ml-0 md:ml-2" size={22} />
              <span className="hidden md:block">Leaderboard</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-3 md:p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                location.pathname === "/dashboard/settings" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/settings"
            >
              <FiSettings className="ml-0 md:ml-2" size={22} />
              <span className="hidden md:block">Settings</span>
            </Link>
          </li>
          <li className="flex w-full mt-auto hover:scale-105">
            <Link
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-3 md:p-4 transition duration-0 hover:duration-150 hover:bg-emerald-700 bg-emerald-600 text-white rounded-xl mt-2`}
              to="/quiz"
            >
              <BsPlusSquare className="ml-0 md:ml-2" size={22} />
              <span className="hidden md:block text-center">Start New Attempt</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="ml-16 md:ml-72 pt-20 text-black dark:text-white h-full">
        <DashboardContextProvider>
          <Outlet />
        </DashboardContextProvider>
      </main>
    </div>
  );
}
