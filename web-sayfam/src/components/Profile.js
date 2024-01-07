import React from "react";
import vector from "../assets/Vector 2.png";
import { useSelector } from "react-redux";

export default function Profile() {
  const ProfileData = useSelector((store) => store.profileData);
  const ProfileDataProps = useSelector((store) => store.profileDataProps);

  return (
    <div className="w-11/12 h-[350px] ">
      <img src={vector} className="ml-32 w-11/12 text-end" />
      <h2 className="dark:text-[#AEBCCF] flex flex-row justify-start ml-32 w-36 h-12 mt-16 text-5xl not-italic font-semibold text-[#1F2937]">
        {ProfileData.titleProfile}
      </h2>
      <div className="flex flex-row justify-start text-left ml-32 ">
        <div>
          <div>
            <h3 className="dark:text-[#BAB2E7] flex flex-col mt-10 text-[#4338CA] text-3xl">
              {ProfileData.littleTitleProfile}
            </h3>
          </div>

          <div className="flex flex-row justify-start mt-5">
            <div className="dark:text-[#FFFFFF] flex flex-col justify-start w-48 h-44 font-semibold text-lg">
              <p>
                <span>{ProfileDataProps.birthDate}</span>
              </p>
              <p>
                <span>{ProfileDataProps.city}</span>
              </p>
              <p>
                <span>{ProfileDataProps.education}</span>
              </p>
              <br />
              <p>
                <span>{ProfileDataProps.role}</span>
              </p>
            </div>

            <div className="dark:text-[#FFFFFF] flex flex-col text-lg">
              <p>{ProfileData.birthDate}</p>
              <p>{ProfileData.city}</p>
              <p>{ProfileData.education}</p>
              <p>{ProfileData.role}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 ml-60">
          <h3 className="dark:text-[#BAB2E7] text-[#4338CA] text-3xl">
            {ProfileData.aboutMeTitle}
          </h3>
          <div>
            <p className="dark:text-[#FFFFFF] mt-5 w-[558px] h-36 text-lg text-[#6B7280]">
              {ProfileData.aboutInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
