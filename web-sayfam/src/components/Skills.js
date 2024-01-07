import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../context/DarkModeContect";

export default function Skills() {
  const SkillsData = useSelector((store) => store.skillsData);
  // const { mode } = useContext(DarkModeContext);

  return (
    <div id="skills" className="w-11/12 h-80 mt-36 ">
      <div className="">
        <div className="dark:text-[#AEBCCF] ml-32 mt-8 text-5xl not-italic font-semibold w-1/3 text-[#1F2937]">
          <p>{SkillsData.title}</p>
        </div>
        <div className="flex flex-row h-40 mb-14 pb-5 ml-32 mt-5">
          {SkillsData.skills.map((key) => (
            <div key={key.id}>
              <p className="dark:text-[#BAB2E7] text-[#4338CA] text-3xl mr-4">
                {key.skill}
              </p>
              <div className="dark:text-[#FFFFFF] text-[#6B7280] w-3/5 h-12 mr-20 mt-7">
                {key.aboutSkill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
