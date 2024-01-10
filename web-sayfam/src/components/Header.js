import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/Header.css";
import { enAction, trAction } from "../actions/langAction";
import { DarkModeContext } from "../context/DarkModeContect";
import eclipse from "../assets/Ellipse 1.png";

export default function Header() {
  const HeaderData = useSelector((state) => state.headerData);

  const { handleMode, mode } = useContext(DarkModeContext);

  const [language, setLanguage] = useState("Türkçe");
  const dispatch = useDispatch();

  const changeLanguage = () => {
    setLanguage(language === "Türkçe" ? "English" : "Türkçe");
    if (language === "Türkçe") {
      dispatch(trAction());
    } else {
      dispatch(enAction());
    }
  };

  function goSkills() {
    var skillsSide = document.getElementById("skills");
    skillsSide.scrollIntoView({ behavior: "smooth" });
  }
  function goProjects() {
    var skillsSide = document.getElementById("projects");
    skillsSide.scrollIntoView({ behavior: "smooth" });
  }
  function goHireMe() {
    var skillsSide = document.getElementById("hire-me");
    skillsSide.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <div className="main-header pt-2 relative ">
        <div className="second-div ps-2 text-lg">
          <button
            onClick={changeLanguage}
            className="dark:text-[#BAB2E7] lang-button"
          >
            {language}
          </button>
        </div>
        <div className="header-div text-[#777777] ">|</div>
        <div
          className="
            dark:text-[#D9D9D9] text-black third-div md:float-right "
        >
          <button
            className="flex items-center space-x-2 w-14 h-6  dark:bg-[#3A3A3A] bg-[#4731D3] rounded-full"
            onClick={() => handleMode()}
          >
            <img
              src={eclipse}
              className={mode === "dark" ? `w-4 h-4` : `w-4 h-4 ml-auto`}
            />
          </button>
          <button onClick={() => handleMode()} className="dark:text-[#D9D9D9]">
            {mode === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
      <div className="about-div">
        <div className="flex flex-row">
          <div className="bg-[#EEEBFF] text-[#7B61FF] dark:bg-[#4731D3] h-12 w-12 ml-32 p-3 mt-3 text-center rotate-45 rounded-full ">
            Y
          </div>
        </div>
        <div className="flex flex-col md:flex-row m-2">
          <button
            className="dark:text-[#6B7280] mx-0 md:mx-2 mt-3 py-2  text-lg font-medium"
            onClick={goSkills}
          >
            {HeaderData.skills}
          </button>
          <button
            className="dark:text-[#6B7280] mx-0 md:mx-2 mt-3 py-2 p-10 text-lg font-medium"
            onClick={goProjects}
          >
            {HeaderData.projects}
          </button>
          <button
            className="dark:text-[#3730A3] dark:bg-[#FFFFFF] border-2 text-lg font-medium border-[#3730A3] rounded px-7 py-2 mt-3 mb-3 md:mb-0"
            onClick={goHireMe}
          >
            {HeaderData.hireMe}
          </button>
        </div>
      </div>
    </header>
  );
}
