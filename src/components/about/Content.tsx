import Image from "next/image";
import localFont from "next/font/local";
import { HeroScrollDemo } from "../home/HeroScrollDemo";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { DirectionAwareHoverDemo } from "./DirectionAwareHoverDemo";

export default function Content() {
  return (
    <div className="bg-[#134f46]">
      <div className="">
        <div className="ml-24 mr-72">
          <h1 className="text-4xl text-white mb-2">Sứ mệnh của chúng tôi</h1>
          <h4 className=" text-[#ffe49e] text-4xl">
            Tập trung vào việc nâng cao chất lượng dịch vụ, phát triển các tour
            du lịch sinh thái, văn hóa, hoặc thể thao để mang đến cho du khách
            những trải nghiệm khó quên khi đến Quan Lạn.
          </h4>
        </div>
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
