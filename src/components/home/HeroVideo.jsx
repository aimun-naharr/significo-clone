import React from "react";
import { assets } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  useGSAP(() => {
    gsap.to("#hero-video", {
      scrollTrigger: {
        trigger: "#home",
        start: "2% top",
        end: "bottom bottom",
        markers: true,
      },
      "--clip": "0%",
      duration: 2,
    });
  });
  return (
    <div
      id="hero-video"
      className="z-[3] w-full h-screen absolute top-0 left-0 overflow-hidden "
      style={{ "--clip": "100%" }}
    >
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
