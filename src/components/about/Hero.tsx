import Image from "next/image";
import { WavyBackground } from "../ui/wavy-background";

export default function Hero() {
  return (
    <div className=" relative">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Quan Lạn Ecotrip
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Mục tiêu của chúng tôi là giúp du khách có những trải nghiệm chân thật
          và sâu sắc hơn về cuộc sống trên đảo, đồng thời góp phần bảo vệ và
          phát triển bền vững cho cộng đồng địa phương. Chúng tôi có thể tổ chức
          các tour tham quan, hoạt động trải nghiệm văn hóa, và hướng dẫn về các
          điểm đến tự nhiên đẹp như bãi biển Minh Châu, Eo Gió, hay các làng
          chài truyền thống.
        </p>
      </WavyBackground>
    </div>
  );
}
