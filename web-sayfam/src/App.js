import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";
import { DarkModeContext } from "./context/DarkModeContect";

function App() {
  
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
    setMode((prev) => (prev === "light" ? "dark" : "light"));
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
      <div className="bg-[#FFFF] h-auto dark:bg-[#252128]">
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
