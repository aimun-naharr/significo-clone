import gsap from "gsap";
import React, { useEffect } from "react";
import { assets } from "../../constants";
import { cn } from "../../utils";

const Slide = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "slide w-full h-screen flex-shrink-0  relative flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};
export default function HorizontalScrollSection() {
  useEffect(() => {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: "#horizontal-section",
        start: "top top",
        bottom: "bottom bottom",
        scrub: true,
      },
      xPercent: -200,
    });
  }, []);
  return (
    <div className="w-full " id="horizontal-section">
      <div className="h-[400vh] relative ">
        <div
          id="horizontal-slider"
          className="slides w-full h-[100vh] flex sticky top-0 left-0 overflow-hidden"
        >
          <Slide>
            <div className="text-8xl font-light-ff">
              <h1>Real Talk</h1>
              <h1>Real Impact </h1>
            </div>
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 size-96 rounded-full  overflow-hidden">
              <img
                src={assets.person4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </Slide>

          {/* slider 2 */}
          <Slide className={"font-satoshi-ff font-semibold"}>
            {/* top img */}
            <div className="absolute -top-20 right-1/3 size-80 rounded-full overflow-hidden">
              <img
                src={assets.person1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* bottom left img*/}
            <div className="absolute bottom-40 left-[20%] size-48 rounded-full overflow-hidden">
              <img
                src={assets.person2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* bottom right */}
            <div className="absolute -bottom-20 left-1/2 size-80 rounded-full overflow-hidden -translate-x-1/2">
              <img
                src={assets.person3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* text */}
            <div className="relative">
              {/* side text */}
              <div className="absolute w-80 -top-[55%] -left-10 text-xl -">
                Real people — real lives — we have built products and solutions
                for. We’re on a mission to impact as many lives as possible and
                build a better company while we do it. Here’s our progress.
              </div>
              <h1 className="font-light-ff text-white text-[8vw] leading-[8vw] text-center">
                20.4M
              </h1>
              <p className="text-5xl text-center text-light-ff">
                Real people — real lives — we have <br /> built products and
                solutions for.
              </p>
            </div>
          </Slide>

          <Slide className={" font-satoshi-ff font-semibold"}>
            {/* top img */}
            <div className="absolute -top-20 right-1/4 size-96 rounded-full overflow-hidden">
              <img
                src={
                  "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.png "
                }
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* bottom right */}
            <div className="absolute -bottom-20 left-1/2 size-[500px]  rounded-full overflow-hidden -translate-x-1/2">
              <img
                src={
                  "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.png"
                }
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* bottom left img*/}
            <div className="absolute top-1/2 -translate-y-1/2 -left-20 size-96 rounded-full overflow-hidden">
              <img
                src={assets.person5}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* text */}
            <div className="relative">
              {/* side text */}
              <div className="absolute w-80 -top-[55%] -left-10 text-xl -">
                Our team is global and diverse, because our individual
                experiences make us stronger.
              </div>
              <h1 className="font-light-ff text-white text-[8vw] leading-[8vw] text-center">
                49%
              </h1>
              <p className="text-5xl text-center font-light-ff">
                Expert Women in Tech.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
