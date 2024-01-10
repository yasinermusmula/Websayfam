import React from "react";
import vector from "../assets/Vector 2.png";
import { useSelector } from "react-redux";

export default function Projects() {
  const ProjectData = useSelector((store) => store.projectsData);

  return (
    <div
      id="projects"
      className="w-11/12 content-center flex-wrap gap-20 mt-8"
    >
      <img src={vector} className="ml-32 w-11/12" />
      <p
        id="projects"
        className="dark:text-[#AEBCCF] ml-32 mt-8 text-5xl not-italic font-semibold text-[#1F2937]"
      >
        {ProjectData.title}
      </p>
      <div className=" flex flex-col md:flex-row ">
        {ProjectData.projects.map((key) => (
          <div key={key.id} className="flex flex-col ml-32">
            <img
              src={key.projectImg}
              alt="resim"
              className="w-[300px] md:m-a md:w-[300px] lg:w-[350px] h-[180px] md:h-[200px] lg:h-[220px] mt-8 md:mt-0 xl:mt-8"
            />
            <p className="dark:text-[#CFCBFF] text-3xl font-medium text-[#4338CA] mt-3">
              {key.title}
            </p>
            <div className="dark:text-[#FFFFFF] flex flex-wrap w-full md:w-[300px] gap-[9px] pb-10 mt-3 text-[#6B7280]">
              {key.projectInfo}
            </div>

            <div className="flex gap-2 ">
              <button className="dark:bg-[#383838] dark:text-[#8F88FF] border-[#8F88FF] text-[#3730A3] border-2 px-3 rounded ">
                {key.skillFirst}
              </button>
              <button className="dark:bg-[#383838] dark:text-[#8F88FF] border-[#8F88FF] text-[#3730A3] border-2 px-3 rounded">
                {key.skillSecond}
              </button>
              <button className="dark:bg-[#383838] dark:text-[#8F88FF] border-[#8F88FF] text-[#3730A3] border-2 px-3 rounded">
                {key.skillThird}
              </button>
            </div>

            <div className="dark:text-[#E1E1FF] flex gap-44 font-semibold text-base text-[#3730A3] mt-3 underline decoration-[#3730A3] dark:decoration-[#E1E1FF]">
              <a href={key.github} target="_blank">
                Github
              </a>
              <a href={key.github} target="_blank">
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
