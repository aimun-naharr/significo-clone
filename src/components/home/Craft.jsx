import React from "react";

export default function Craft() {
  return (
    <div className="craft w-full px-10 flex py-10 md:gap-10 section relative">
      {/* left part */}
      <div className=" py-2 w-full flex flex-col gap-10 sticky top-0 left-0 h-fit">
        <p className="w-3/4 text-2xl font-satoshi-ff">
          Significo is a leading health software creator founded on the belief
          that technology can transform healthcare to put people first. Whether
          they are employees, members, customers, or clients, we never forget
          the real people we’re designing for.
        </p>
        <h1 className="text-[5rem] font-light-ff leading-[6rem]">
          We Craft <br /> Human-Centric <br /> Health Software
        </h1>
        <div className="px-16 py-5 border border-[--dCyan] w-fit flex items-center justify-center cursor-pointer uppercase font-bold">
          <div className="masker overflow-hidden">
            <span>Our Solutions</span>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="bg-red-400 py-2 w-full text-6xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vitae
      </div>
    </div>
  );
}
