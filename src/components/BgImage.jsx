import React from "react";
import img from "../assets/images/img.png";
function BgImage() {
  console.log(img);
  return (
    // <div className="absolute relative -top-[400px] h-screen w-full opacity-100">
    //   <img
    //     className="h-auto min-h-full w-auto"
    //     src={img}
    //     alt="Description"
    //     style={{ zIndex: -1 }}
    //   />
    //   {/* <div className="absolute inset-0 h-full bg-gradient-to-br from-backgroundColor from-5% via-transparent opacity-80" /> */}
    //   {/* <div className="absolute inset-0 bg-gradient-to-t from-backgroundColor from-5% via-transparent opacity-100" /> */}
    // </div>

    <div className="relative h-screen w-full opacity-100">
      <img
        src={img}
        alt="Description"
        className="absolute -top-[400px] h-auto min-h-full w-auto"
        style={{ zIndex: -1 }} // Ensure the image is behind the gradient
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          position: "absolute",
          background: `linear-gradient(160deg, rgba(128, 0, 128, 1) 0%, rgba(128, 0, 128, 1) 100%);`,
          height: `100vh`,
        }}
      />
    </div>
  );
}

export default BgImage;
