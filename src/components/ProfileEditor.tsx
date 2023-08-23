import { useAppSelector } from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { profileImages } from "utils/ProfileImages";

interface ProfileEditorProps {
  handleCancel: () => void;
}

export function ProfileEditor({ handleCancel }: ProfileEditorProps) {
  const dispatch = useDispatch();
  const { auth, settings } = useAppSelector((state) => state);
  const user = auth.user!;

  const userImage = getUserImage();

  function getUserImage() {
    const image = profileImages.find((image) => {
      const imageFileParts = image.split("/");
      const imageSuffix = imageFileParts[imageFileParts.length - 1];
      return imageSuffix == `img-${settings.profileImgId}.png`;
    });

    return image ?? profileImages[0]; // Nullish coalescing
  }

  return (
    <section className="card grid grid-cols-1 md:grid-cols-2 p-10 gap-6">
      <div className="">
        <img className="w-48 h-48 rounded-full bg-red-400 mx-auto" src={userImage} alt="user's photo" />
        <ScrollArea className="h-[200px] border border-slate-700 rounded-lg p-6 mt-6 justify-items-center gap-4">
          <div className="grid grid-cols-4">
            {profileImages.map((src, i) => (
              <img
                className="cursor-pointer hover:bg-slate-500 rounded-2xl p-2 duration-0 hover:duration-150"
                onClick={() => {}}
                key={i}
                width={80}
                height={80}
                src={src}
                alt="img"
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div>
        <form>
          <label htmlFor="firstName" className="mb-3 block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={user.firstName}
            required
            className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm`}
            onChange={(e) => {}} // handleInputChange("firstName", e.target.value)
          />
          <label htmlFor="lastName" className="mb-3 mt-4 block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={user.lastName}
            required
            className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm`}
            onChange={(e) => {}} // handleInputChange("lastName", e.target.value)
          />
        </form>
        <div className="flex mt-6 gap-3">
          <button
            className="w-1/2 bg-red-600 hover:bg-red-500 px-5 py-2.5 text-sm font-medium text-white rounded-lg select-none"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="w-1/2 primary-button">Save Changes</button>
        </div>
      </div>
    </section>
  );
}
