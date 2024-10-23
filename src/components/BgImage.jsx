import React from "react";
import img from "../assets/images/bgImage2.png";
function BgImage() {
  return (
    <>
      <div className="relative">
        <img className="-z-10 h-full w-full" src={img} alt="" />
        <div className="absolute inset-0 h-full bg-gradient-to-br from-backgroundColor from-5% via-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-[43rem] bg-gradient-to-t from-backgroundColor to-transparent" />
      </div>
    </>
  );
}

export default BgImage;
