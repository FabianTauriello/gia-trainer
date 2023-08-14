import { useAppSelector } from "hooks/useAppSelector";
import userIcon from "../assets/svgs/user-temp-icon.svg";
import dino from "../assets/profile-pics/img-1.png";
import { CustomButton } from "./CustomButton";
import { Switch } from "@/components/ui/switch";
import { useDispatch } from "react-redux";
import { toggleDarkMode, toggleExposeName, toggleShowQuizTimer } from "domain/slices/settingsSlice";
import { useState } from "react";
import { ProfileEditor } from "./ProfileEditor";

interface DashboardSettingsProps {}

export function DashboardSettings({}: DashboardSettingsProps) {
  const dispatch = useDispatch();
  const { auth, settings } = useAppSelector((state) => state);
  const user = auth.user!;

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <div>{JSON.stringify(settings)}</div>
      <div>{JSON.stringify(editMode)}</div>
      {editMode ? (
        <ProfileEditor handleCancel={() => setEditMode(false)} />
      ) : (
        <section className="flex flex-col card items-center py-10">
          <img className="w-48 h-48 rounded-full bg-red-400" src={dino} alt="user photo" />
          <p className="mt-6 font-bold text-xl dark:text-slate-300 text-slate-600">{`${user.firstName} ${user.lastName}`}</p>
          <span className="mt-2 text-lg dark:text-slate-300 text-slate-600">{user.email}</span>
          <CustomButton onClick={() => setEditMode(true)} customCss="w-40 text-base mt-4">
            Edit Profile
          </CustomButton>
        </section>
      )}
      <p className="my-4 dark:text-slate-300 text-black text-lg">Preferences</p>
      <section className="">
        <div className="flex justify-between rounded-lg border border-slate-300 dark:border-slate-800 p-4">
          <span>Dark Mode</span>
          <Switch checked={settings.darkMode} onCheckedChange={() => dispatch(toggleDarkMode())} />
        </div>
        <div className="flex justify-between rounded-lg border border-slate-300 dark:border-slate-800 p-4 mt-4">
          <span>Show my real name in the leaderboard</span>
          <Switch checked={settings.exposeName} onCheckedChange={() => dispatch(toggleExposeName())} />
        </div>
        <div className="flex justify-between rounded-lg border border-slate-300 dark:border-slate-800 p-4 mt-4">
          <span>Show timer in quiz</span>
          <Switch checked={settings.showQuizTimer} onCheckedChange={() => dispatch(toggleShowQuizTimer())} />
        </div>
      </section>
    </>
  );
}
