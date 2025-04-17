import BlockImageRight from "@/components/about/BlockImageRight";
import Commit from "@/components/about/Commit";
import { Founders } from "@/components/about/Founders";
import Hero from "@/components/about/Hero";

export default function About() {
  return (
    <div>
      <Hero />
      {/* <Content /> */}
      {/* <Founders /> */}
      <Commit />
      <BlockImageRight />
    </div>
  );
}
