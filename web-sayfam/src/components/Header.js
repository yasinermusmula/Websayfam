import React, { useEffect, useState, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/Header.css";
import { enAction, trAction } from "../actions/langAction";
import circle from "../assets/Ellipse 9.png";
import { DarkModeContext } from "../context/DarkModeContect";
import eclipse from "../assets/Ellipse 1.png";

export default function Header(props) {
  const { handleScroll } = props;

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
    <header className="">
      <div className="main-header pt-2 relative z-50">
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
          <button className="w-14 h-6  dark:bg-[#3A3A3A] bg-[#4731D3] rounded-full"></button>
          <button onClick={() => handleMode()}>
            {mode === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
      <div className="about-div">
        <div className={`dark:bg-[#4731D3] circle rotate-45`}>
          <img
            src={circle}
            alt="Circle"
            className={`dark:bg-[#4731D3] ${mode}`}
          />
          <p className="absolute">Y</p>
        </div>
        <div className="flex ">
          <button
            className="dark:text-[#6B7280] mx-20 mt-3 py-2 text-lg font-medium"
            onClick={goSkills}
          >
            {HeaderData.skills}
          </button>
          <button
            className="dark:text-[#6B7280] mr-10 mt-3 py-2 text-lg font-medium"
            onClick={goProjects}
          >
            {HeaderData.projects}
          </button>
          <button
            className="dark:text-[#3730A3] dark:bg-[#FFFFFF] border-2 text-lg font-medium border-[#3730A3] rounded px-7 py-2  mt-3 mb-3"
            onClick={goHireMe}
          >
            {HeaderData.hireMe}
          </button>
        </div>
      </div>
    </header>
  );
}
