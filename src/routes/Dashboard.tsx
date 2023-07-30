import { Navbar } from "components/Navbar";
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiArrowhead, GiStrikingArrows } from "react-icons/gi";

export function Dashboard() {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  const [activeLink, setActiveLink] = useState<"Overview" | "Attempts" | "Leaderboard" | "Settings">("Overview");

  return (
    <div className="h-screen">
      <Navbar fixed />
      <aside className="fixed left-0 bottom-0 top-20 w-[20%] dark:bg-slate-800 bg-slate-300 text-black dark:text-white">
        <ul className="border-r border-slate-400 dark:border-slate-600 flex flex-col items-center h-full">
          <li className="flex w-full mt-8">
            <Link
              onClick={() => setActiveLink("Overview")}
              className={`text-center text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 hover:bg-slate-200 rounded-xl m-2 ${
                activeLink === "Overview" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard"
            >
              <GoHome />
              Overview
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Attempts")}
              className={`text-center text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 hover:bg-slate-200 rounded-xl m-2 ${
                activeLink === "Attempts" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/attempts"
            >
              <GiStrikingArrows />
              Attempts
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Leaderboard")}
              className={`text-center text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 hover:bg-slate-200 rounded-xl m-2 ${
                activeLink === "Leaderboard" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/leaderboard"
            >
              <MdOutlineLeaderboard />
              Leaderboard
            </Link>
          </li>
          <li className="flex w-full mt-auto mb-8">
            <Link
              onClick={() => setActiveLink("Settings")}
              className={`text-center text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 hover:bg-slate-200 rounded-xl m-2 ${
                activeLink === "Settings" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/settings"
            >
              <FiSettings />
              Settings
            </Link>
          </li>
        </ul>
      </aside>
      <main className="ml-[20%] pt-20 text-black dark:text-white">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

{
  /* <h2>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </h2> */
}
