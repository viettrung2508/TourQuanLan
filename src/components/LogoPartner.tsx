import { InfiniteSlider } from "../../components/core/infinite-slider";

export default function LogoPartner() {
  return (
    <div className="">
      <InfiniteSlider gap={30} duration={60} reverse>
        <img src="/adidas.png" alt="Chrome logo" className="h-[120px] w-auto" />
        <img src="/nike.png" alt="Strava logo" className="h-[120px] w-auto" />
        <img src="/zara.png" alt="Nintendo logo" className="h-[120px] w-auto" />
        <img
          src="/premier.png"
          alt="Jquery logo"
          className="h-[120px] w-auto"
        />
        <img src="/tiktok.png" alt="Prada logo" className="h-[120px] w-auto" />
      </InfiniteSlider>
    </div>
  );
}
