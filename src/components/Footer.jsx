import React from "react";
import logo from "../assets/images/Logo.svg";

function Footer() {
  const blog = [
    "About MNTN",
    "Contributors & Writers",
    "Write For Us",
    "Contact Us",
    "Privacy Policy",
  ];
  const mntn = ["The Team", "Jobs", "Press"];
  return (
    <div className="flex pb-28">
      <div className="w-2/3">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <p className="w-72 pt-6 font-gilroy text-lg">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="pt-32 font-gilroy text-lg font-medium opacity-50">
            {" "}
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
      </div>
      <div className="flex w-1/2 justify-end gap-[13.25rem]">
        <div className="font-gilroy text-2xl font-bold text-accent">
          More on The Blog
          <div className="pt-6">
            <div>
              {blog.map((item) => {
                return (
                  <li
                    key={item}
                    className="list-none pb-4 font-gilroy text-lg font-medium text-neutral-50"
                  >
                    <a>{item}</a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        <div className="font-gilroy text-2xl font-bold text-accent">
          More on MNTN
          <div className="pt-6">
            <div>
              {mntn.map((item) => {
                return (
                  <li
                    key={item}
                    className="list-none pb-4 font-gilroy text-lg font-medium text-neutral-50"
                  >
                    <a>{item}</a>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
