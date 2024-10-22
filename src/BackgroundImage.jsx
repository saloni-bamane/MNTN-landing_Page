import React from "react";
import img from "./assets/images/bgImage.png";
function BackgroundImage() {
  return (
    <>
      <div className="relative h-[102rem]">
        <div className='absolute left-0 top-0 -z-10 h-full w-full bg-[url("./assets/images/bgImage2.png")] bg-cover bg-top' />
        <div className="absolute inset-0 h-full bg-gradient-to-br from-backgroundColor from-5% via-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-[43rem] bg-gradient-to-t from-backgroundColor to-transparent" />
      </div>
    </>
  );
}

export default BackgroundImage;
