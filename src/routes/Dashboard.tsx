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
      <aside className="fixed left-0 bottom-0 top-20 w-20 md:w-72 dark:bg-slate-800 bg-slate-300 text-black dark:text-white">
        <ul className="border-r border-slate-400 dark:border-slate-600 flex flex-col items-center h-full p-3">
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Overview")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl ${
                activeLink === "Overview" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard"
            >
              <GoHome />
              <span className="hidden md:block">Overview</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Attempts")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                activeLink === "Attempts" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/attempts"
            >
              <GiStrikingArrows />
              <span className="hidden md:block">Attempts</span>
            </Link>
          </li>
          <li className="flex w-full">
            <Link
              onClick={() => setActiveLink("Leaderboard")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl mt-2 ${
                activeLink === "Leaderboard" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/leaderboard"
            >
              <MdOutlineLeaderboard />
              <span className="hidden md:block">Leaderboard</span>
            </Link>
          </li>
          <li className="flex w-full mt-auto">
            <Link
              onClick={() => setActiveLink("Settings")}
              className={`text-center justify-center md:justify-start text-lg flex items-center gap-6 flex-1 p-4 dark:hover:bg-slate-900 transition duration-0 hover:duration-150 hover:bg-slate-200 rounded-xl ${
                activeLink === "Settings" ? "dark:bg-slate-900 bg-slate-200" : ""
              }`}
              to="/dashboard/settings"
            >
              <FiSettings />
              <span className="hidden md:block">Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="ml-20 md:ml-72 pt-20 text-black dark:text-white">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
      <button onClick={() => console.log("starting new attempt...")}>New Attempt</button>
    </div>
  );
}

{
  /* <h2>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
      </h2> */
}
