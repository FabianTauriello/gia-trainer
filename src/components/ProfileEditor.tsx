import { useAppSelector } from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { profileImages } from "utils/ProfileImages";
import { HexColorPicker } from "react-colorful";
import { Profile } from "domain/Types";
import { useUpdateUserMutation } from "domain/slices/apislice";
import { CustomButton } from "./CustomButton";
import { updateUserProfile } from "domain/slices/authSlice";
import { Utils } from "utils/Utils";

interface ProfileEditorProps {
  handleCancel: () => void;
  showToast: (title: string, description: string | null, variant: "default" | "destructive") => void;
}

export function ProfileEditor({ handleCancel, showToast }: ProfileEditorProps) {
  const dispatch = useDispatch();
  const { auth, settings } = useAppSelector((state) => state);

  const [mutateUser, { isLoading, isError, error, reset }] = useUpdateUserMutation();

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
      const res = await mutateUser({ newProfile: profile, userId: auth.user!.id }).unwrap();
      showToast("Profile changed successfully!", null, "default");
      if (res.success) {
        dispatch(updateUserProfile(profile));
      }
    } catch (error) {
      console.log("Failed to update user profile");
      showToast("Profile could not be saved!", "There was a problem with your request. Try again later.", "destructive");
    }
  }

  return (
    <section className="card grid grid-cols-1 lg:grid-cols-2 p-10 gap-8">
      <div className="flex flex-col">
        <label className="mb-3 block text-sm font-medium">Profile Icon</label>
        <ScrollArea className="h-[240px] border dark:border-slate-700 border-slate-300 rounded-md px-4 justify-items-center gap-4">
          <div className="grid grid-cols-4 justify-center">
            {profileImages.map((image, i) => (
              <img
                loading="lazy"
                // min-w-[80px] min-h-[80px]
                key={i}
                className="cursor-pointer hover:scale-125 transition-transform rounded-2xl p-2 mx-auto"
                onClick={() => setProfile({ ...profile, profileImgId: image.id })}
                width={80}
                height={80}
                src={image.source}
                alt="img"
              />
            ))}
          </div>
        </ScrollArea>
        <label className="mb-3 mt-4 block text-sm font-medium">Profile Icon Background Color</label>
        <HexColorPicker
          className="reduceColorPickerBorderRadius w-full"
          color={profile.profileImgColor}
          onChange={(color) => setProfile({ ...profile, profileImgColor: color })}
        />
      </div>
      <div className="flex flex-col justify-between">
        {/* <div>{JSON.stringify(profile)}</div> */}
        <div className="flex-1 flex justify-center items-center">
          <img
            style={{ backgroundColor: profile.profileImgColor }}
            className={`w-48 h-48 rounded-full mx-auto border-black border-4`}
            src={userImage.source}
            alt="user's photo"
          />
        </div>
        <div>
          <form>
            <label htmlFor="firstName" className="mb-3 mt-4 block text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={profile.firstName}
              required
              className={`block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm`}
              onChange={(e) => handleInputChange(e)}
            />
            <label htmlFor="lastName" className="mb-3 mt-4 block text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={profile.lastName}
              required
              className={`block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm`}
              onChange={(e) => handleInputChange(e)}
            />
          </form>
          <div className="flex flex-col mt-6 gap-3">
            <button
              className="bg-red-600 hover:bg-red-500 px-5 py-2.5 text-sm font-medium text-white rounded-lg select-none"
              onClick={handleCancel}
            >
              {/* TODO is 'cancel' best options here? maybe close button instead? */}
              Cancel
            </button>
            <CustomButton className="w-1/2" loading={isLoading} onClick={() => updateUser()}>
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
