import HeroHeader from "./components/hero_header";
import WhatWeDo from "./components/what_we_do";
import RepeatedSineWave from "@/components/ui/wave-divider";
import OurBackground from "./components/our_background";
import ToolBelt from "./components/toolbelt";
import LetsTalk from "./components/letsTalk";
import Footer from "./components/footer";
import "./page.css";

export default async function Home() {
  return (
    <div>
      <HeroHeader
        videoSrc={"/videos/space.mp4"}
        title={"Create Something Rad"}
        subtitle={
          "From concept to launch. We turn ideas into seamless digital experiences."
        }
      />
      <WhatWeDo />
      <div className="sineWaveContainer">
        <RepeatedSineWave
          width={1440}
          height={320}
          amplitude={10}
          frequency={6}
          waveStrokeColor="#6A0ADF66"
          waveStrokeWidth={2}
          lineStrokeColor="#6A0ADF66"
          lineStrokeWidth={2}
        />
      </div>

      <OurBackground
        title={"Your product gets the focus it deserves from a talented team"}
        subtitle={
          "We are a passionate group of creators with an empathy first approach towards product creation. Our team of designers and developers came to the tech world after fulfilling chapters in many different sectors. We’re down to earth and well-rounded people who started our own shop as a rejection to the tech-bro culture. "
        }
        subtitle2={"OUR BACKGROUNDS:"}
      />
      <RepeatedSineWave
        width={1440}
        height={320}
        amplitude={10}
        frequency={6}
        waveStrokeColor="#6A0ADF66"
        waveStrokeWidth={2}
        lineStrokeColor="#6A0ADF66"
        lineStrokeWidth={2}
      />
      <ToolBelt
        title="Here’s a look at our tool belt."
        subtitle="These are just some of our favorites. We’ll make it work on whatever is best for you. "
      />
      <RepeatedSineWave
        width={1440}
        height={320}
        amplitude={10}
        frequency={6}
        waveStrokeColor="#6A0ADF66"
        waveStrokeWidth={2}
        lineStrokeColor="#6A0ADF66"
        lineStrokeWidth={2}
      />
      <LetsTalk
        title="Ready to talk? Let’s chat!"
        subtitle="Our calendar is flexible. Schedule a video or phone chat to see if we’re the right fit for you."
      />
      <Footer />
    </div>
  );
}
