import React from "react";
import { useSelector } from "react-redux";
import ok from "../assets/ok.png";

export default function Footer() {
  const FooterData = useSelector((store) => store.footerData);

  return (
    <div className=" dark:bg-[#141414] w-full bg-[#F9F9F9] mt-20 md:flex-col" id="hire-me">
      <section className="flex-col ml-32 pt-32 h-full dark:bg-[#141414] ">
        <div className="dark:text-[#AEBCCF]  text-5xl not-italic font-semibold ">
          {FooterData.footerText}
        </div>

        <div className="flex flex-col justify-between my-5 md:gap-0">
          <div className=" flex flex-row h-6 mt-16 ">
            <img src={ok} alt="resim" />
            <p className="dark:text-[#BAB2E7] text-[#AF0C48] text-xl ml-3">
              {FooterData.footerMail}
            </p>
          </div>

          <div className="flex  justify-end gap-5 mt-16 mr-24">
            <a
              id="personalblog"
              className="dark:text-[#E1E1FF] text-[#0A0A14] text-lg"
              target="_blank"
              href="https://github.com/yasinermusmula"
            >
              Personal Blog
            </a>
            <a
              className="text-[#00AB6B] text-lg"
              target="_blank"
              href="https://github.com/yasinermusmula"
            >
              Github
            </a>
            <a
              className="text-[#0077B5] text-lg"
              target="_blank"
              href="https://www.linkedin.com/feed/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      //{" "}
    </div>
  );
}
