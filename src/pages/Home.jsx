import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import Craft from "../components/home/Craft";
import HeroVideo from "../components/home/HeroVideo";
import HorizontalScrollSection from "../components/home/HorizontalScrollSection";
import MarqueeContainer from "../components/home/MarqueeContainer";
import Team from "../components/home/Team";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "2% top",
        // end: "50% bottom",
        scrub: true,
      },
    });
    tl.to(
      "#hero-video",
      {
        "--clip": "0%",
      },
      "a"
    )
      .to(
        "#marquee-container",
        {
          scale: 1,
        },
        "a"
      )
      .to(
        ".marquee-right",
        {
          xPercent: "-30",
        },
        "b"
      )
      .to(
        ".marquee-left",
        {
          xPercent: "30",
        },
        "b"
      );
  }, []);
  return (
    <div className="home w-full h-screen relative" id="home">
      <div className="relative h-[150vh] section ">
        <div className="sticky top-0 left-0 w-full h-screen">
          {/* bottom text */}

          <div className="bottom-text section w-52 absolute z-[5] font-satoshi-ff bottom-[7%] left-10">
            <h2>
              {" "}
              We build big ideas. Software. Apps. Tools. For real people. Real
              lives.
            </h2>
          </div>
          {/* video div */}
          <HeroVideo />

          {/* marquee div */}
          <MarqueeContainer />
        </div>
      </div>

      {/* craft */}
      <Craft />

      {/* horizontal scroll section */}
      <HorizontalScrollSection />

      {/* team section */}
      <Team />
    </div>
  );
}
