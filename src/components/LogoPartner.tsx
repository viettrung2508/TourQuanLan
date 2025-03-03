import { InfiniteSlider } from "../../components/core/infinite-slider";
import Image from "next/image";

export default function LogoPartner() {
  return (
    <div className="">
      <InfiniteSlider gap={30} duration={60} reverse>
        <Image
          src="/adidas.png"
          alt="Chrome logo"
          className="h-[120px] w-auto"
        />
        <Image src="/nike.png" alt="Strava logo" className="h-[120px] w-auto" />
        <Image
          src="/zara.png"
          alt="Nintendo logo"
          className="h-[120px] w-auto"
        />
        <Image
          src="/premier.png"
          alt="Jquery logo"
          className="h-[120px] w-auto"
        />
        <Image
          src="/tiktok.png"
          alt="Prada logo"
          className="h-[120px] w-auto"
        />
      </InfiniteSlider>
    </div>
  );
}
