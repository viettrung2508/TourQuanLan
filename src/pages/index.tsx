import Hero from "@/components/home/Hero";
import Experiences from "@/components/home/Experiences";
import Hdv from "@/components/home/Discover";
import OurServices from "@/components/home/OurServices";
import Services from "@/components/home/Services";
import View from "@/components/home/View";
import LogoPartner from "@/components/LogoPartner";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <Services />
        <OurServices />
        <View />
        <Hdv />
        <Experiences />
      </div>
    </div>
  );
}
