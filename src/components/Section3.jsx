import React from "react";
import rightArrow from "../assets/images/rightArrow.svg";
import img1 from "../assets/images/img1.svg";
function Section3() {
  return (
    <div className='flex gap-36 justify-center items-center pb-52'>
      <div className='font-gilroy relative'>
        <span className='absolute -top-44 -left-24 font-gilroy text-[15rem] font-bold opacity-10 '>
          01
        </span>
        <div className='ml-6 w-[39.5rem] flex flex-col gap-7'>
          <div className='uppercase font-gilroy font-extrabold text-accent pl-[7.5rem]'>
            <span className='before:content-[""] before:absolute before:w-[72px] before:h-[2px] before:bg-accent before:-translate-x-[120px] before:translate-y-3 '>
              <p>A Hiking guide</p>
            </span>
          </div>
          <h2 className='font-chronicle font-semibold text-[4rem] leading-tight'>
            What level of hiker are you?
          </h2>
          <p className='text-lg'>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <p className='flex gap-4 text-lg'>
            <span>read more</span> <img src={rightArrow} alt='' />
          </p>
        </div>
      </div>
      <div>
        <img src={img1} alt='' />
      </div>
    </div>
  );
}

export default Section3;
