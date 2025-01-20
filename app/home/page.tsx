import Hero from "@/components/hero";
import HeroHeader from "./components/hero_header";
import WhatWeDo from "./components/what_we_do";

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
    </div>
  );
}
