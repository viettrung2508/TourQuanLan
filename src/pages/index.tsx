import OurServices from "@/components/home/OurServices";
import View from "@/components/home/View";
import Discover from "@/components/home/Discover";
import { Experiences } from "@/components/home/Experiences";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import Timeline from "@/components/home/Timeline";
import SliderTour from "@/components/slider-tour";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        {/* <Services /> */}
        <OurServices />
        <div className=" flex justify-center w-full h-full ">
          {" "}
          <video
            autoPlay
            controls
            muted
            loop
            className=" w-full h-full object-cover"
          >
            {" "}
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <SliderTour />
        {/* <View /> */}

        <Discover />
        <Experiences />
        <Timeline />
      </div>
    </div>
  );
}
