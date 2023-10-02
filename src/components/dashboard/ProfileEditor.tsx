import { useAppSelector } from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { profileImages } from "utils/ProfileImages";
import { HexColorPicker } from "react-colorful";
import { Profile } from "domain/types";
import { useUpdateUserMutation } from "domain/slices/apislice";
import { CustomButton } from "../common/CustomButton";
import { updateUserProfile } from "domain/slices/authSlice";
import { Utils } from "utils/Utils";
import { AiOutlineCloseCircle, AiFillCloseCircle } from "react-icons/ai";
import { DialogDescription, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";

interface ProfileEditorProps {
  showToast: (title: string, description: string | null, variant: "default" | "destructive") => void;
}

// TODO add proper dialog components?
export function ProfileEditor({ showToast }: ProfileEditorProps) {
  const dispatch = useDispatch();
  const { auth, settings } = useAppSelector((state) => state);

  const [postUpdatedUserProfile, { isLoading, isError, error, reset }] = useUpdateUserMutation();

  const [profile, setProfile] = useState<Profile>({
    firstName: auth.user!.firstName,
    lastName: auth.user!.lastName,
    profileImgColor: auth.user!.profileImgColor,
    profileImgId: auth.user!.profileImgId,
  });

  const userImage = Utils.getUserImage(profile.profileImgId);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  async function updateUser() {
    try {
      const res = await postUpdatedUserProfile({ userId: auth.user!.id, newProfile: profile }).unwrap();
      if (res.success) {
        showToast("Profile changed successfully!", null, "default");
        dispatch(updateUserProfile(profile));
      }
    } catch (error) {
      console.log("Failed to update user profile");
      showToast("Profile could not be saved!", "There was a problem with your request. Try again later.", "destructive");
    }
  }

  return (
    <DialogContent
      onOpenAutoFocus={(e) => e.preventDefault()}
      className="p-6 md:p-10 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 overflow-y-scroll lg:max-w-screen-lg max-h-screen mb-10 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8"
    >
      <div className="flex flex-col justify-between">
        <div className="flex-1 flex justify-center items-center relative">
          <img
            style={{ backgroundColor: profile.profileImgColor }}
            className={`w-48 h-48 rounded-full border-black border-2`}
            src={userImage.source}
            alt="user's photo"
          />
        </div>
        <div>
          <form>
            <label htmlFor="firstName" className="mb-3 mt-4 block text-sm font-medium text-black dark:text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={profile.firstName}
              required
              className={`dark:text-white block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm`}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="lastName" className="mb-3 mt-4 block text-sm font-medium text-black dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={profile.lastName}
              required
              className={`dark:text-white block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm`}
              onChange={(e) => handleInputChange(e)}
            />
          </form>
          {/* TODO move this inside form? */}
          <CustomButton customCss="w-full mt-6 hidden md:block" loading={isLoading} onClick={() => updateUser()}>
            Save
          </CustomButton>
        </div>
      </div>
      <div className="flex flex-col">
        {/* <label className="mb-3 block text-sm font-medium text-black dark:text-white mt-4 md:mt-0">Icon</label> */}
        <ScrollArea className="h-[240px] border dark:border-slate-700 border-slate-300 rounded-md px-4 justify-items-center gap-4 mt-4 md:mt-0">
          <div className="grid grid-cols-3 gap-4 justify-center">
            {profileImages.map((image, i) => (
              <img
                loading="lazy"
                // min-w-[80px] min-h-[80px]
                key={i}
                className={`cursor-pointer hover:scale-125 transition-transform rounded-md p-2 mx-auto object-cover`}
                onClick={() => setProfile({ ...profile, profileImgId: image.id })}
                width={80}
                height={80}
                src={image.source}
                alt="img"
              />
            ))}
          </div>
        </ScrollArea>
        {/* <label className="mb-3 mt-4 block text-sm font-medium text-black dark:text-white">Background Color</label> */}
        <HexColorPicker
          className="reduceColorPickerBorderRadius w-full mt-4"
          color={profile.profileImgColor}
          onChange={(color) => setProfile({ ...profile, profileImgColor: color })}
        />
      </div>
      <CustomButton customCss="mt-6 block md:hidden" loading={isLoading} onClick={() => updateUser()}>
        Save
      </CustomButton>
    </DialogContent>
  );
}
