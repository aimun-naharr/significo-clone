import { useEffect, useRef, useState } from "react";
import { assets, dataSets } from "../../constants";
import { cn } from "../../utils";
import gsap from "gsap";

const TeamCard = ({ team, index, lastElement }) => {
  const pictureRef = useRef(null);
  const blueLayerRef = useRef(null);
  const containerDivRef = useRef(null);

  const handleMouseMove = (e) => {
    const x = gsap.utils.mapRange(0, window.innerWidth, -250, 250, e.clientX);
    const tl = gsap.timeline();
    tl.to(
      pictureRef.current,
      {
        x,
        opacity: 1,
        scale: 1,
      },
      "a"
    )
      .to(
        blueLayerRef.current,
        {
          height: "100%",
        },
        "a"
      )
      .to(
        containerDivRef.current,
        {
          color: "white",
        },
        "a"
      );
  };
  const handleMouseLeave = () => {
    console.log("leave");
    gsap.to(pictureRef.current, {
      opacity: 0,
      scale: 0,
    });
    gsap.to(blueLayerRef.current, {
      height: 0,
    });
    gsap.to(containerDivRef.current, {
      color: "black",
    });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerDivRef}
      className={cn(
        " team-card py-10  font-light-ff flex items-center justify-between relative z-[5]",
        {
          "border-b border-b-black": !lastElement,
        }
      )}
    >
      <div className="flex gap-10 items-center text-6xl z-[2]">
        <h3 className="text-gray-200 ">{"0" + (index + 1)}.</h3>
        <h2 className="">{team.name}</h2>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{team.post}</h2>
      </div>

      {/* blue layer */}
      <div
        ref={blueLayerRef}
        className="absolute blue-layer bg-blue-600 h-0 w-full bottom-0 z-[1]"
      ></div>

      {/* picture */}
      <div
        className="absolute picture
        top-1/2 left-1/2
         size-56 rounded-full
         overflow-hidden opacity-0
        -translate-x-1/2 -translate-y-1/2
        transition-all z-[2] pointer-events-none"
        ref={pictureRef}
      >
        <img
          src={team.img}
          alt=""
          className="object-cover h-full w-full pointer-events-none z-[2]"
        />
      </div>
    </div>
  );
};

export default function Team() {
  // useEffect(() => {
  //   const teams = document.querySelectorAll(".team-card");
  //   teams.forEach((team) => {
  //     team.addEventListener("mousemove", function (dets) {
  //       const img = team.querySelector(".picture");
  //       const x = gsap.utils.mapRange(
  //         0,
  //         window.innerWidth,
  //         -250,
  //         250,
  //         dets.clientX
  //       );
  //       console.log("x", x);
  //       gsap.to(img, {
  //         opacity: 1,
  //         x: x,
  //         // duration: 2,
  //         scale: 1,
  //         // ease: "power1.out",
  //       });
  //     });
  //     team.addEventListener("mouseleave", function () {
  //       const img = team.querySelector(".picture");
  //       gsap.to(img, {
  //         opacity: 0,
  //         scale: 0.8,
  //       });
  //     });
  //   });
  // }, []);

  return (
    <div className="mt-20 mb-40 section" data-color="white">
      <h1 className="text-center  text-7xl font-light-ff">Our Team</h1>
      <div className="md:px-40 px-10 my-10">
        {dataSets.teamsData.map((team, i) => (
          <TeamCard
            key={i}
            team={team}
            index={i}
            lastElement={i === dataSets.teamsData.length - 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}
