import Commit from "@/components/about/Commit";
import { Founders } from "@/components/about/Founders";
import Hero from "@/components/about/Hero";
import { Partners } from "@/components/partner";

export default function About() {
  return (
    <div>
      <Hero />
      {/* <Content /> */}
      <Founders />
      <Commit />
      <Partners />
    </div>
  );
}
