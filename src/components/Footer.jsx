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
    <div className="flex flex-col p-10 sm:flex-row sm:pb-16 md:p-0 md:pb-20 lg:pb-24 xl:pb-28">
      <div className="flex-1 sm:w-full xl:w-2/3">
        <div className="logo mb-6">
          <a href="/">
            <img src={logo} alt="MNTN Logo" className="h-auto max-w-full" />
          </a>
          <p className="mb-6 mt-4 font-gilroy text-lg text-neutral-50">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="font-gilroy font-medium opacity-50">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end md:w-fit md:flex-row lg:w-1/2 xl:w-1/2">
        <div className="mb-6 font-gilroy font-bold text-accent sm:mb-0 sm:mr-10 lg:text-lg xl:text-2xl">
          More on The Blog
          <ul className="pt-2">
            {blog.map((item) => (
              <li
                key={item}
                className="list-none pb-2 font-gilroy font-medium text-neutral-50 xl:text-lg"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-gilroy font-bold text-accent lg:text-lg xl:text-2xl">
          More on MNTN
          <ul className="pt-2">
            {mntn.map((item) => (
              <li
                key={item}
                className="list-none pb-2 font-gilroy font-medium text-neutral-50 lg:text-base xl:text-lg"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
