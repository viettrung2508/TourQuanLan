import { useState, useEffect } from "react";
import { AnimatedNumber } from "../../../components/core/animated-number";
import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";

export default function OurServices() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(1000);
  }, []);
  return (
    <div className="relative">
      <div className="w-full h-[700px]">
        <Image alt="" src="/bg_discover.png" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute  max-w-screen-2xl mx-auto grid grid-cols-10 gap-10 top-20 left-32">
        <div className="col-span-5 flex flex-col">
          <div>
            <h1 className="text-4xl font-bold text-[#134f46]">Khám phá</h1>
            <h1 className="text-7xl font-bold text-[#134f46]">Quan Lạn</h1>
            <h1 className="text-4xl font-bold text-[#134f46]">cùng ECOTRIP</h1>
          </div>
          <div className="my-10">
            <p>
              Tự hào là đơn vị bản địa uy tín tại Quan Lạn giúp khách hàng nâng
              tầm trải nghiệm. Với sự am hiểu về phong tục tập quán, cũng như
              kiến thức phong phú về địa lý, chúng tôi luôn sẵn sàng giúp du
              khách khám phá Quan Lạn một cách trọn vẹn nhất, từ những bãi biển
              hoang sơ, cồn cát tuyệt đẹp đến các di tích lịch sử có giá trị văn
              hóa cao.
            </p>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="col-span-1">
              <h1 className="text-xl uppercase">Hành trình</h1>
              <h1 className="text-4xl font-bold text-[#134f46]">5 năm</h1>
              <h1 className="text-lg">Xây dựng và phát triển</h1>
            </div>
            <div className="col-span-1">
              <h1 className="text-xl uppercase ">Khách hàng</h1>
              <div className="flex w-full items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="mr-3 h-3 w-3 fill-transparent stroke-zinc-800 stroke-[1.3] dark:stroke-zinc-50"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                </svg>
                <AnimatedNumber
                  className="inline-flex items-center text-4xl font-bold text-[#134f46]"
                  springOptions={{
                    bounce: 0,
                    duration: 3000,
                  }}
                  value={value}
                />
              </div>
              <h1 className="text-lg">Với tất cả các tour</h1>
            </div>
          </div>
          <button className="flex justify-start bg-[#134f46] w-60 py-2 text-white rounded-3xl pl-2 mt-10">
            <MdOutlineNavigateNext className="border-2 rounded-full text-black size-7 bg-white border-white mr-6" />
            VỀ CHÚNG TÔI
          </button>
        </div>
        <div className="col-span-5 ">
          <div className="">
            <Image
            className="rounded-3xl"
              alt="Picture of the author"
              src="/about3.jpg"
              height={800}
              width={700}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
