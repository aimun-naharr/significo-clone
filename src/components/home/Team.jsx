import { useEffect } from "react";
import { assets, dataSets } from "../../constants";
import { cn } from "../../utils";
import gsap from "gsap";

const TeamCard = ({ team, index, lastElement }) => {
  return (
    <div
      className={cn(
        "team-card py-10  font-light-ff flex items-center justify-between relative",
        {
          "border-b border-b-black": !lastElement,
        }
      )}
    >
      <div className="flex gap-10 items-center text-6xl">
        <h3 className="text-gray-200 ">{"0" + (index + 1)}.</h3>
        <h2 className="">{team.name}</h2>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{team.post}</h2>
      </div>

      {/* blue layer */}
      <div className="absolute bg-blue-600 h-0 w-full bottom-0"></div>

      {/* picture */}
      <div className="absolute picture top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-56 rounded-full overflow-hidden  scale-10 opacity-0 transition-all">
        <img src={team.img} alt="" className=" object-cover h-full w-full " />
      </div>
    </div>
  );
};

export default function Team() {
  useEffect(() => {
    const teams = document.querySelectorAll(".team-card");
    teams.forEach((team) => {
      team.addEventListener("mousemove", function (dets) {
        const img = team.querySelector(".picture");
        const x = gsap.utils.mapRange(
          0,
          window.innerWidth,
          -200,
          200,
          dets.clientX
        );
        gsap.to(img, {
          opacity: 1,
          x: x,
          ease: "circ.out",
          scale: 1,
        });
      });
      team.addEventListener("mouseleave", function () {
        const img = team.querySelector(".picture");
        gsap.to(img, {
          opacity: 0,
          scale: 0.1,
        });
      });
    });
  }, []);

  return (
    <div className="mt-20 mb-40">
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
