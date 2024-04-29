import { assets } from "../../constants";

export default function HeroVideo() {
  return (
    <div
      data-color="black"
      id="hero-video"
      className="video z-[3] w-full h-screen absolute top-0 left-0 overflow-hidden section"
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
