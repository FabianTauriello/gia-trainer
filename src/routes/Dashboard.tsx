import { Navbar } from "components/Navbar";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiStrikingArrows } from "react-icons/gi";

export function Dashboard() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  const [activeLink, setActiveLink] = useState<"Overview" | "Attempts" | "Leaderboard" | "Settings">("Overview");

  return (
    <div className="h-screen">
      <Navbar fixed />
      <aside className="fixed left-0 bottom-0 top-20 w-20 md:w-72 dark:bg-slate-800 bg-slate-300 text-black dark:text-white">
        <ul className="border-r border-slate-400 dark:border-slate-600 flex flex-col items-center h-full py-3 px-2 md:px-3">
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Overview")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl ${
                activeLink === "Overview" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard"
            >
              <GoHome className="ml-0 md:ml-2" />
              <span className="hidden md:block">Overview</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Attempts")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                activeLink === "Attempts" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/attempts"
            >
              <GiStrikingArrows className="ml-0 md:ml-2" />
              <span className="hidden md:block">Attempts</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Leaderboard")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                activeLink === "Leaderboard" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/leaderboard"
            >
              <MdOutlineLeaderboard className="ml-0 md:ml-2" />
              <span className="hidden md:block">Leaderboard</span>
            </Link>
          </li>
          <li className="flex w-full mt-auto">
            <Link
              onClick={() => setActiveLink("Settings")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl ${
                activeLink === "Settings" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/settings"
            >
              <FiSettings className="ml-0 md:ml-2" />
              <span className="hidden md:block">Settings</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Settings")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-4 flex-1 p-4 transition duration-0 hover:duration-150 hover:bg-emerald-500 bg-emerald-600 text-white rounded-xl mt-2`}
              to="/quiz"
            >
              <BsPlusSquare className="ml-0 md:ml-2" />
              <span className="hidden md:block">Start New Attempt</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="ml-20 md:ml-72 pt-20 text-black dark:text-white">
        <div className="py-3 px-4 md:px-5">
          <Outlet />
        </div>
      </main>
      <button onClick={() => console.log("starting new attempt...")}>New Attempt</button>
    </div>
  );
}
