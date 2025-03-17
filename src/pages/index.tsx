import OurServices from "@/components/home/OurServices";
import View from "@/components/home/View";
import Discover from "@/components/home/Discover";
import { Experiences } from "@/components/home/Experiences";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import Timeline from "@/components/home/Timeline";

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
        <Timeline/>
      </div>
    </div>
  );
}
