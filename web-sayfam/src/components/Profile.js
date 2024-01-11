import React from "react";
import vector from "../assets/Vector 2.png";
import { useSelector } from "react-redux";

export default function Profile() {
  const ProfileData = useSelector((store) => store.profileData);
  const ProfileDataProps = useSelector((store) => store.profileDataProps);

  return (
    <div className="w-11/12 md:flex md:flex-col">
      <img src={vector} className="ml-32 w-11/12 text-end" />
      <h2 className="dark:text-[#AEBCCF] flex flex-row justify-start ml-32 w-36 h-12 mt-10 mb-5 text-5xl not-italic font-semibold text-[#1F2937]">
        {ProfileData.titleProfile}
      </h2>
      <div className="flex flex-col md:flex-row justify-start text-left ml-32 ">
        <div>
          <div>
            <h3 className="dark:text-[#BAB2E7] flex flex-col mb-4 text-[#4338CA] text-3xl">
              {ProfileData.littleTitleProfile}
            </h3>
          </div>

          <div className="flex mt-4 md:mt-0 overflow-hidden">
            <div className=" dark:text-[#FFFFFF] flex-col  md:w-48  font-semibold text-lg">
              <p>{ProfileDataProps.birthDate}</p>
              <p>{ProfileDataProps.city}</p>
              <p>{ProfileDataProps.education}</p>
              <br />
              <p>{ProfileDataProps.role}</p>
            </div>
            <div className="dark:text-[#FFFFFF] flex-col text-lg">
              <p>{ProfileData.birthDate}</p>
              <p>{ProfileData.city}</p>
              <p>{ProfileData.education}</p>
              <p>{ProfileData.role}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:ml-0 md:mt-0 md:pl-8">
          <h3 className="dark:text-[#BAB2E7] text-[#4338CA] text-3xl">
            {ProfileData.aboutMeTitle}
          </h3>
          <div className="flex">
            <p className="dark:text-[#FFFFFF] mt-3 w-[600px] h-36 text-lg text-[#6B7280] md:flex-col">
              {ProfileData.aboutInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
