import OurServices from "@/components/home/OurServices";
import Services from "@/components/home/Services";
import View from "@/components/home/View";
import Discover from "@/components/home/Discover";
import { Experiences } from "@/components/home/Experiences";
import { Hero } from "@/components/home/Hero";
import { TimelineDemo } from "@/components/home/Timeline";
import { Partners } from "@/components/partner";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <OurServices />
        <Services />
        <View />
        <Discover />
        <Experiences />
        <TimelineDemo />
        <Partners />
      </div>
    </div>
  );
}
