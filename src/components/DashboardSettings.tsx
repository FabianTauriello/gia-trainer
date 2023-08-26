import { useAppSelector } from "hooks/useAppSelector";
import { CustomButton } from "./CustomButton";
import { Switch } from "@/components/ui/switch";
import { useDispatch } from "react-redux";
import { toggleDarkMode, toggleExposeName, toggleShowQuizTimer } from "domain/slices/settingsSlice";
import { useState } from "react";
import { ProfileEditor } from "./ProfileEditor";
import { profileImages } from "utils/ProfileImages";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

interface DashboardSettingsProps {}

export function DashboardSettings({}: DashboardSettingsProps) {
  const dispatch = useDispatch();
  const { auth, settings } = useAppSelector((state) => state);

  const { toast } = useToast();

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {/* <div>{JSON.stringify(user, null, 2)}</div> */}
      {/* <div>{JSON.stringify(settings, null, 2)}</div> */}
      {/* <div>{JSON.stringify(editMode, null, 2)}</div> */}
      {editMode ? (
        <ProfileEditor
          handleCancel={() => setEditMode(false)}
          showToast={(title, description, variant) => toast({ title, description, variant })}
        />
      ) : (
        <section className="flex flex-col card items-center py-10">
          <img className="w-48 h-48 rounded-full bg-red-400" src={profileImages[2].source} alt="user photo" />
          <p className="mt-6 font-bold text-xl dark:text-slate-300 text-slate-600">{`${auth.user!.firstName} ${
            auth.user!.lastName
          }`}</p>
          <span className="mt-2 text-lg dark:text-slate-300 text-slate-600">{auth.user!.email}</span>
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
      <Toaster />
    </>
  );
}
