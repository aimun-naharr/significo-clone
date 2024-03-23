import React from "react";
import { assets } from "../../constants";
import { cn } from "../../utils";

const MarqueeElementRow = ({ arrayElements, className }) => {
  return (
    <div
      className={cn(
        "flex gap-4 row w-full whitespace-nowrap font-light-ff font-bold  -translate-x-1/3 py-2 overflow-hidden",
        className
      )}
    >
      {arrayElements.map((el, i) => (
        <div key={i} className="flex gap-4 items-center ">
          <h1 className="lg:text-5xl xl:text-7xl  lowercase ">{el.title}</h1>
          <div className="size-16 overflow-hidden rounded-full">
            <img
              src={el.imgSrc}
              alt={el.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default function MarqueeContainer() {
  const marqueeArray = [
    { title: "UseFul", imgSrc: assets.person1 },
    { title: "Intuitive", imgSrc: assets.person2 },
    { title: "Empathetic", imgSrc: assets.person3 },
    { title: "UseFul", imgSrc: assets.person4 },
    { title: "Intuitive", imgSrc: assets.person5 },
    { title: "UseFul", imgSrc: assets.person4 },
    { title: "Intuitive", imgSrc: assets.person5 },
  ];
  const marqueeArray1 = [
    { title: "UseFul", imgSrc: assets.person4 },
    { title: "Intuitive", imgSrc: assets.person5 },
    { title: "Intuitive", imgSrc: assets.person2 },
    { title: "Empathetic", imgSrc: assets.person3 },
    { title: "Useful", imgSrc: assets.person1 },
    { title: "Empathetic", imgSrc: assets.person3 },
    { title: "Useful", imgSrc: assets.person1 },
  ];
  const marqueeArray2 = [
    { title: "Intuitive", imgSrc: assets.person5 },
    { title: "UseFul", imgSrc: assets.person4 },
    { title: "Empathetic", imgSrc: assets.person3 },
    { title: "Useful", imgSrc: assets.person1 },
    { title: "Intuitive", imgSrc: assets.person2 },
    { title: "Useful", imgSrc: assets.person1 },
    { title: "Intuitive", imgSrc: assets.person2 },
  ];
  return (
    <div
      id="marquee-container"
      className="marquee-container  w-full h-screen relative overflow-hidden z-[2] scale-[3]"
    >
      <div className="heading section absolute top-[8%] left-1/2 -translate-x-1/2">
        <h1 className="text-xl text-center font-satoshi-ff">
          Crafting a new paradigm of
        </h1>
        <h1 className="text-xl text-center font-satoshi-ff">
          healthcare, one that is
        </h1>
      </div>
      <div className="w-[90%] h-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <MarqueeElementRow
          arrayElements={marqueeArray}
          className="-translate-x-20 marquee-left"
        />
        <MarqueeElementRow
          arrayElements={marqueeArray1}
          className="-translate-x-1/4 marquee-right"
        />
        <MarqueeElementRow
          arrayElements={marqueeArray2}
          className="-translate-x-1/4 marquee-left"
        />
        <MarqueeElementRow
          arrayElements={marqueeArray1}
          className="-translate-x-1/4 marquee-right"
        />
      </div>
    </div>
  );
}
