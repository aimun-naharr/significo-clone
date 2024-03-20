import Craft from "../components/home/Craft";
import HeroVideo from "../components/home/HeroVideo";
import HorizontalScrollSection from "../components/home/HorizontalScrollSection";
import MarqueeContainer from "../components/home/MarqueeContainer";
import Team from "../components/home/Team";

export default function Home() {
  return (
    <div className="home w-full h-screen relative" id="home">
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

      {/* craft */}
      <Craft />

      {/* horizontal scroll section */}
      <HorizontalScrollSection />

      {/* team section */}
      <Team />

      {/* <div className="h-screen"></div> */}
    </div>
  );
}
