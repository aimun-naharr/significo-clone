import gsap from "gsap";
import { useEffect, useState } from "react";
import { dataSets } from "../../constants";

const Card = ({ card }) => {
  return (
    <div className="craft-card border border-black p-8 flex items-center gap-20 w-[520px] font-satoshi-ff transition-all ">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{card.title}</h2>
        <p>{card.description}</p>
      </div>
      <div>{<card.icon size={60} />}</div>
    </div>
  );
};

export default function Craft() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#crafts",
        start: "top 50%",
      },
    });

    tl.fromTo(
      ".craft-title-text span",
      {
        y: "40px",
        opacity: 0,
        stagger: 0.5,
        ease: "power4.out",
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.5,
      }
    );
    gsap.to(".craft-card", {
      scrollTrigger: {
        trigger: ".craft-card",
        start: "top 20%",
        scrub: true,
        // markers: true,
      },
      backgroundColor: "black",
      color: "#aedee0",
      width: "550px",
      paddingLeft: "3rem",
      paddingRight: "3rem",
      stagger: 1.5,
      ease: "circ.out",
    });

    // gsap.to("");
  }, []);
  return (
    <div
      className="craft w-full px-10 flex py-10 md:gap-10  relative section"
      id="crafts"
      data-color="cyan"
    >
      {/* left part */}
      <div className=" py-2 w-full flex flex-col gap-10 sticky top-0 left-0 h-fit">
        <p className="w-3/4 text-2xl font-satoshi-ff">
          Significo is a leading health software creator founded on the belief
          that technology can transform healthcare to put people first. Whether
          they are employees, members, customers, or clients, we never forget
          the real people we’re designing for.
        </p>
        <h1 className="craft-title-text text-[5rem] font-light-ff leading-[6rem] max-w-2xl ">
          <span className="inline-block">We</span>{" "}
          <span className="inline-block">Craft</span> <br />{" "}
          <span className="inline-block">Human-Centric</span> <br />{" "}
          <span className="inline-block">Health</span>{" "}
          <span className="inline-block">Software</span>
        </h1>
        <div className="px-16 py-5 border border-[--dCyan] w-fit flex items-center justify-center cursor-pointer uppercase font-bold">
          <div className="masker overflow-hidden">
            <span>Our Solutions</span>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className=" w-full flex flex-col gap-8 pt-[30%]">
        {dataSets.craftCardElements.map((crd, i) => (
          <Card card={crd} key={i} />
        ))}
      </div>
    </div>
  );
}
