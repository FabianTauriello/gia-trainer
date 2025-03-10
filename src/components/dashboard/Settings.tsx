import { useAppSelector } from "hooks/useAppSelector";
import { Switch } from "@/components/ui/switch";
import { useDispatch } from "react-redux";
import { selectSettings, toggleDarkMode, toggleExposeName, toggleShowQuizTimer } from "domain/slices/settingsSlice";
import React, { useEffect, useRef, useState } from "react";
import { ProfileEditor } from "./ProfileEditor";
import { profileImages } from "utils/ProfileImages";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Utils } from "utils/Utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUpdateUserSettingsMutation } from "domain/slices/apislice";
import { CustomButton } from "components/common/CustomButton";
import { selectAuth } from "domain/slices/authSlice";

interface SettingsProps {}

export function Settings({}: SettingsProps) {
  const dispatch = useDispatch();
  const auth = useAppSelector(selectAuth);
  const settings = useAppSelector(selectSettings);
  const { toast } = useToast();

  const [postUpdatedUserSettings, { isLoading, isError, error, reset }] = useUpdateUserSettingsMutation();
  const isFirstRun = useRef(true);
  const userImage = Utils.getUserImage(auth.user!.profileImgId);

  useEffect(() => {
    // Don't update server with settings on first run
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    updateSettings();
  }, [settings.darkMode, settings.exposeName, settings.showQuizTimer]);

  async function updateSettings() {
    try {
      await postUpdatedUserSettings({ userId: auth.user!.id, newSettings: settings });
    } catch (error) {
      console.log("Failed to update user's settings");
    }
  }

  return (
    <div className="p-3 md:p-8 flex flex-col">
      {/* <div>{JSON.stringify(user, null, 2)}</div> */}
      {/* <div>{JSON.stringify(settings, null, 2)}</div> */}
      {/* <div>{JSON.stringify(editMode, null, 2)}</div> */}
      <section className="flex flex-col card items-center py-4 md:py-10">
        <img
          style={{ backgroundColor: auth.user!.profileImgColor }}
          className="w-28 h-28 md:w-44 md:h-44 rounded-full border-black border-2"
          src={userImage.source}
          alt="user photo"
        />
        <p className="mt-6 font-bold text-base md:text-lg dark:text-slate-300 text-slate-600">{`${auth.user!.firstName} ${
          auth.user!.lastName
        }`}</p>
        <span className="mt-2 text-sm md:text-lg dark:text-slate-300 text-slate-600">{auth.user!.email}</span>
        <Dialog>
          <DialogTrigger className="w-full md:w-auto px-4">
            <CustomButton customCss="text mt-4 w-full md:w-auto">Edit Profile</CustomButton>
            {/* TODO put spinner for icon loading */}
          </DialogTrigger>
          <ProfileEditor showToast={(title, description, variant) => toast({ title, description, variant })} />
        </Dialog>
      </section>
      <section className="">
        <div>
          <div className="flex justify-between items-center rounded-lg border border-slate-300 dark:border-slate-800 p-4 mt-4 text-sm md:text-base">
            <span>Enable dark mode</span>
            <Switch checked={settings.darkMode} onCheckedChange={() => dispatch(toggleDarkMode())} />
          </div>
          <div className="flex justify-between items-center rounded-lg border border-slate-300 dark:border-slate-800 p-4 mt-4 text-sm md:text-base">
            <span>Show my real name in the leaderboard</span>
            <Switch checked={settings.exposeName} onCheckedChange={() => dispatch(toggleExposeName())} />
          </div>
          <div className="flex justify-between items-center rounded-lg border border-slate-300 dark:border-slate-800 p-4 mt-4 text-sm md:text-base">
            <span>Show timer in quiz attempts</span>
            <Switch checked={settings.showQuizTimer} onCheckedChange={() => dispatch(toggleShowQuizTimer())} />
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
}
