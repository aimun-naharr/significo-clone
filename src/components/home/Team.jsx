import React from "react";
import { assets } from "../../constants";
import { cn } from "../../utils";

const TeamCard = ({ team, index, lastElement }) => {
  return (
    <div
      className={cn(
        "py-10  font-light-ff flex items-center justify-between relative",
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-56 rounded-full overflow-hidden">
        <img src={team.img} alt="" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default function Team() {
  const teamsData = [
    { name: "Dr. Rick McCartney", post: "CEO", img: assets.person1 },
    { name: "Chris Koha", post: "COO", img: assets.person2 },
    {
      name: "Caroline Nieto",
      post: "Chief Product officer",
      img: assets.person3,
    },
    { name: "Victor Albatros", post: "CTO", img: assets.person4 },
    {
      name: "Michael Robbin",
      post: "Chief Innovation Officer",
      img: assets.person5,
    },
  ];
  return (
    <div>
      <h1 className="text-center  text-7xl font-light-ff">Our Team</h1>
      <div className="md:px-40 px-10 my-10">
        {teamsData.map((team, i) => (
          <TeamCard
            key={i}
            team={team}
            index={i}
            lastElement={i === teamsData.length - 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}
