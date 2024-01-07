import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import myData from "./data/FooterData/FooterData";
import "./App.css";
import axios from "axios";
import { DarkModeContext } from "./context/DarkModeContect";

function App() {
  // useEffect = () => {
  //   axios.post(`https://reqres.in/api/workintech/'${myData}`).then((res) => {
  //     console.log(res);
  //   });
  // };

  const [mode, setMode] = useState(
    localStorage.getItem("mode") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    if (
      localStorage.mode === "dark" ||
      (!("mode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleMode = () => {
    setMode((initialMode) => (initialMode === "light" ? "dark" : "light"));
    console.log("handle mode tetiklendi");
    if (mode === "dark") {
      console.log("Adding 'dark' class");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      console.log("Removing 'dark' class");
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  };

  return (
    <DarkModeContext.Provider value={{ mode, handleMode }}>
      <div className={`h-auto dark:bg-[#252128] bg-[#FFFF] ${mode}`}>
        <Header />
        <Information />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
