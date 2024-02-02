import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { DarkModeContext } from "../context/DarkModeContect";

export default function Skills() {
  const SkillsData = useSelector((store) => store.skillsData);
  // const { mode } = useContext(DarkModeContext);

  return (
    <div id="skills" className=" h-72 mt-16 md:flex-col">
      <div className="flex flex-col">
        <div className="dark:text-[#AEBCCF] ml-32 mt-8 text-5xl not-italic font-semibold w-1/3 text-[#1F2937]">
          <p>{SkillsData.title}</p>
        </div>
        <div className="flex mt-5 md:flex-col">
          {SkillsData.skills.map((key) => (
            <div key={key.id} className="md:mt-3 ml-32">
              <p className="dark:text-[#BAB2E7] text-[#4338CA] text-3xl">
                {key.skill}
              </p>
              <div className="dark:text-[#FFFFFF] text-[#6B7280]  mt-5">
                {key.aboutSkill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
