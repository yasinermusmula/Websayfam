import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Css/Header.css";
import { enAction, trAction } from "../actions/langAction";
import circle from "../assets/Ellipse 9.png";
import { DarkModeContext } from "../context/DarkModeContect";

export default function Header() {
  // const projectsRef = useRef();

  // const scrollToProjects = () => {
  //   projectsRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const HeaderData = useSelector((state) => state.headerData);

  const { handleMode, mode } = useContext(DarkModeContext);

  // const [mode, setMode] = useState(
  //   localStorage.getItem("mode") === "light" ? "dark" : "light"
  // );

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

  // useEffect(() => {
  //   if (
  //     localStorage.mode === "dark" ||
  //     (!("mode" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  // const handleMode = () => {
  //   setMode(mode === "Light" ? "Dark" : "Light");
  //   if (mode === "dark") {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("mode", "light");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("mode", "dark");
  //   }
  // };

  return (
    <header>
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
        <div className={`dark:text-[#D9D9D9] third-div  md:float-right `}>
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
          <button className="dark:text-[#6B7280] mx-20 mt-3 py-2 text-lg font-medium">
            {HeaderData.skills}
          </button>
          <button className="dark:text-[#6B7280] mr-10 mt-3 py-2 text-lg font-medium">
            {HeaderData.projects}
          </button>
          <button className="dark:text-[#3730A3] dark:bg-[#FFFFFF] border-2 text-lg font-medium border-[#3730A3] rounded px-7 py-2  mt-3 mb-3">
            {HeaderData.hireMe}
          </button>
        </div>
      </div>
    </header>
  );
}
