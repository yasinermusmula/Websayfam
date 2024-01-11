import React, { useContext } from "react";
import line from "../assets/Line 11.png";
import { useSelector } from "react-redux";
import gitHub from "../assets/github.png";
import gitHubDark from "../assets/githubDark.png";
import linkedIn from "../assets/LinkedIn.png";
import linkedInDark from "../assets/LinkedInDark.png";
import "../Css/Information.css";
import { DarkModeContext } from "../context/DarkModeContect";

export default function Information() {
  const InformationData = useSelector((strore) => strore.informationData);
  const { mode } = useContext(DarkModeContext);

  // console.log(mode);

  return (
    // <div>
    <div className="main-div flex-col md:flex-row items-center justify-center ">
      <div>
        <div className="dark:text-[#B7AAFF] photo-div text-[#4338CA] text-lg md:text-xl">
          <img src={line} className="ml-20 m-4 w-28" />
          <p>{InformationData.name}</p>
        </div>
        <div className="dark:text-[#AEBCCF] info-title font-bold mt-2 text-[#1F2937]">
          <h2>{InformationData.titleHeader}</h2>
        </div>
        <div>
          <div className="dark:text-[#FFFFFF] mt-16 ml-16 w-3/5 h-32 text-lg text-[#6B7280] font-inter font-normal md:w-[553px]">
            {InformationData.aboutInfoBody}
          </div>
        </div>
        <div className="flex justify-center w-96 h-20 ml-16 md:justify-start">
          <a
            href="#hire-me"
            className="dark:bg-[#E1E1FF] dark:text-[#000000] flex justify-center p-3 w-48 h-14 text-lg font-medium text-[#FFFFFF] bg-[#3730A3] border-2 rounded-md md:py-4"
          >
            {InformationData.infoHireMe}
          </a>

          <a
            href="https://github.com/yasinermusmula"
            target="_blank"
            className="dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] ml-5 w-48 h-14 flex items-center gap-2 border-2 rounded-md p-2 text-lg border-[#3730A3] text-[#3730A3] font-medium "
          >
            <img src={mode === "dark" ? gitHubDark : gitHub} alt="github" />
            {/* <i class="fa-brands fa-github"></i> */}

            <span>{InformationData.infoGithub}</span>
          </a>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            className="dark:bg-[#383838] dark:text-[#E1E1FF] dark:border-[#E1E1FF] ml-5 w-48 h-14 flex items-center gap-2 border-2 rounded-md p-2 text-lg border-[#3730A3] text-[#3730A3] font-medium "
          >
            <img
              src={mode === "dark" ? linkedInDark : linkedIn}
              alt="linkedin"
            />{" "}
            <span>{InformationData.infoLinkedin}</span>
          </a>
        </div>
      </div>
      <div className=" h-1/5 mt-8 md:h-full">
        <img
          src={InformationData.portfoliaImg}
          alt="resim"
          className="rounded-3xl w-full h-full"
        />
      </div>
      {/* </div> */}
    </div>
  );
}
