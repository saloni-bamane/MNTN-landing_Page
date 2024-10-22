import React from "react";
import img from "../assets/images/img1.svg";
import arrow from "../assets/images/rightArrow.svg";
function Section1() {
  return (
    <>
      <div className="flex w-full items-center pb-52">
        <div className="w-2/3">
          <div className="container relative mt-20">
            <div className="flex w-[39rem] flex-col gap-[1.75rem] pl-36 font-gilroy text-lg">
              <span className="pl-24 font-extrabold uppercase tracking-[0.375rem] text-accent before:absolute before:left-[9rem] before:h-[2px] before:w-[4.5rem] before:translate-y-3 before:bg-accent before:content-['']">
                GEt Started
              </span>
              <h1 className="w-[35rem] font-chronicle text-[4rem] font-semibold leading-none">
                What level of hiker are you?
              </h1>
              <p className="w-[39rem] font-bold">
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help
                you plan hikes according to different hike ratings set by
                various websites like All Trails and Modern Hiker. What type of
                hiker are you – novice, moderate, advanced moderate, expert, or
                expert backpacker?
              </p>
              <p className="flex gap-3">
                <span className="font-bold text-accent">read more</span>
                <img src={arrow} alt="" />
              </p>
            </div>
            <span className="absolute -left-1 -top-28 font-gilroy text-[15rem] font-bold leading-none opacity-10">
              01
            </span>
          </div>
        </div>
        <div className="flex w-1/2 justify-end">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Section1;
