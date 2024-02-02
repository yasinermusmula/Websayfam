import React from "react";
import vector from "../assets/Vector 2.png";
import { useSelector } from "react-redux";

export default function Profile() {
  const ProfileData = useSelector((store) => store.profileData);
  const ProfileDataProps = useSelector((store) => store.profileDataProps);

  return (
    <div className="w-full md:mt-80">
      <div className="md:flex-col">
        <div className="md:mt-48">
          <img src={vector} className="w-10/12 ml-24 text-end" />
        </div>
        <div className="flex md:flex-col justify-center">
          <div className="m-6">
            <h2 className="dark:text-[#AEBCCF] text-5xl not-italic font-semibold text-[#1F2937] mb-8">
              {ProfileData.titleProfile}
            </h2>
            <div>
              <h3 className="dark:text-[#BAB2E7] flex mb-4 text-[#4338CA] text-3xl">
                {ProfileData.littleTitleProfile}
              </h3>
            </div>

            <div className="flex">
              <div className=" dark:text-[#FFFFFF] w-40 font-semibold text-lg">
                <p>{ProfileDataProps.birthDate}</p>
                <p>{ProfileDataProps.city}</p>
                <p>{ProfileDataProps.education}</p>
                <br />
                <p>{ProfileDataProps.role}</p>
              </div>
              <div className="dark:text-[#FFFFFF] text-lg">
                <p>{ProfileData.birthDate}</p>
                <p>{ProfileData.city}</p>
                <p>{ProfileData.education}</p>
                <p>{ProfileData.role}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="dark:text-[#BAB2E7] flex md:text-center text-[#4338CA] text-3xl">
              {ProfileData.aboutMeTitle}
            </h3>
            <div className="flex md:text-center">
              <p className="dark:text-[#FFFFFF] mt-3 w-[600px] h-36 text-lg text-[#6B7280]">
                {ProfileData.aboutInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
