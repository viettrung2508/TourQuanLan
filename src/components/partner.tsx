import { InfiniteSlider } from "../../components/core/infinite-slider";

export function Partners() {
  return (
    <InfiniteSlider gap={24} reverse>
      <img
        src="/zara.png"
        alt="Apple Music logo"
        className="h-[120px] w-auto"
      />
      <img
        src="/premier.png"
        alt="Chrome logo"
        className="h-[120px] w-auto"
      />
      <img
        src="/nike.png"
        alt="Strava logo"
        className="h-[120px] w-auto"
      />
    
      <img
        src="/adidas.png"
        alt="Jquery logo"
        className="h-[120px] w-auto"
      />
     
    </InfiniteSlider>
  );
}
