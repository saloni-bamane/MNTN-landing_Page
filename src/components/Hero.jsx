import React from "react";
import arrowdown from "../assets/images/arrow_downward_24px.svg";
import BgImage from "./BgImage";
import BackgroundImage from "../BackgroundImage";
function Hero() {
  return (
    <>
      <div className="relative">
        <section className="absolute inset-0 left-1/4 top-[15%] z-10">
          <div className="flex flex-col gap-8">
            <div className="pl-[7.5rem] font-gilroy font-extrabold uppercase text-accent">
              <span className='before:absolute before:h-[2px] before:w-[72px] before:-translate-x-[120px] before:translate-y-3 before:bg-accent before:content-[""]'>
                <p>A Hiking guide</p>
              </span>
            </div>
            <h1 className="w-[950px] font-chronicle text-[88px] font-semibold capitalize leading-[100px]">
              Be prepared for the Mountains and beyond!
            </h1>
            <div className="flex items-center gap-4">
              <p className="font-gilroy text-lg">scroll down</p>
              <img src={arrowdown} alt="scroll_arrow" />
            </div>
          </div>
        </section>
        <BackgroundImage />
      </div>
    </>
  );
}

export default Hero;
