import { useAppSelector } from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import pImg1 from "../assets/profile-pics/img-1.png";
import pImg2 from "../assets/profile-pics/img-2.png";
import pImg3 from "../assets/profile-pics/img-3.png";
import pImg4 from "../assets/profile-pics/img-4.png";
import pImg5 from "../assets/profile-pics/img-5.png";
import pImg6 from "../assets/profile-pics/img-6.png";
import pImg7 from "../assets/profile-pics/img-7.png";
import pImg8 from "../assets/profile-pics/img-8.png";
import pImg9 from "../assets/profile-pics/img-9.png";
import pImg10 from "../assets/profile-pics/img-10.png";
import pImg11 from "../assets/profile-pics/img-11.png";
import pImg12 from "../assets/profile-pics/img-12.png";
import pImg13 from "../assets/profile-pics/img-13.png";
import pImg14 from "../assets/profile-pics/img-14.png";
import pImg15 from "../assets/profile-pics/img-15.png";
import pImg16 from "../assets/profile-pics/img-16.png";
import pImg17 from "../assets/profile-pics/img-17.png";
import pImg18 from "../assets/profile-pics/img-18.png";
import pImg19 from "../assets/profile-pics/img-19.png";
import pImg20 from "../assets/profile-pics/img-20.png";
import pImg21 from "../assets/profile-pics/img-21.png";
import pImg22 from "../assets/profile-pics/img-22.png";
import pImg23 from "../assets/profile-pics/img-23.png";
import pImg24 from "../assets/profile-pics/img-24.png";
import pImg25 from "../assets/profile-pics/img-25.png";

const images = [
  pImg1,
  pImg2,
  pImg3,
  pImg4,
  pImg5,
  pImg6,
  pImg7,
  pImg8,
  pImg9,
  pImg10,
  pImg11,
  pImg12,
  pImg13,
  pImg14,
  pImg15,
  pImg16,
  pImg17,
  pImg18,
  pImg19,
  pImg20,
  pImg21,
  pImg22,
  pImg23,
  pImg24,
  pImg25,
];

interface ProfileEditorProps {
  handleCancel: () => void;
}

export function ProfileEditor({ handleCancel }: ProfileEditorProps) {
  const dispatch = useDispatch();
  const { auth, settings } = useAppSelector((state) => state);
  const user = auth.user!;

  return (
    <section className="card grid grid-cols-1 md:grid-cols-2 p-10 gap-6">
      <div className="">
        <img className="w-48 h-48 rounded-full bg-red-400 mx-auto" src={pImg1} alt="user photo" />
        <div className="grid grid-cols-4 h-[200px] overflow-y-auto border border-slate-700 rounded-lg p-6 mt-6 justify-items-center gap-4">
          {images.map((src) => (
            <img
              className="cursor-pointer hover:bg-slate-500 rounded-2xl p-2 duration-0 hover:duration-150"
              onClick={() => {}}
              key={"index"}
              width={80}
              height={80}
              src={src}
              alt="img"
            />
          ))}
        </div>
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
            // onChange={(e) => handleInputChange("firstName", e.target.value)}
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
            // onChange={(e) => handleInputChange("lastName", e.target.value)}
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
