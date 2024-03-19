import React from "react";
import { assets } from "../../constants";

export default function HeroVideo() {
  return (
    <div className="z-[3] hidden  vdodiv w-full h-screen absolute top-0 left-0 overflow-hidden ">
      <video
        src={assets.heroVideo}
        autoPlay
        muted
        loop
        className=" w-full object-cover h-full absolute left-0 top-0 "
      ></video>
    </div>
  );
}
