import { MdOutlineNavigateNext } from "react-icons/md";
import { AnimatedNumber } from "../../../components/core/animated-number";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OurServices() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(3000);
  }, []);

  return (
    <div className="relative mt-20">
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:top-20 lg:left-32">
            {/* Left Section */}
            <div className="lg:w-1/2 flex flex-col text-center lg:text-left">
              <div>
                <h1 className="text-4xl font-bold text-[#134f46]">Khám phá</h1>
                <h1 className="text-7xl font-bold text-[#134f46]">Quan Lạn</h1>
                <h1 className="text-4xl font-bold text-[#134f46]">
                  cùng ECOTRIP
                </h1>
              </div>
              <div className="my-6 lg:my-10">
                <p className="text-gray-700 text-xl">
                  Tự hào là đơn vị bản địa uy tín tại Quan Lạn giúp khách hàng
                  nâng tầm trải nghiệm. Với sự am hiểu về phong tục tập quán,
                  cũng như kiến thức phong phú về địa lý, chúng tôi luôn sẵn
                  sàng giúp du khách khám phá Quan Lạn một cách trọn vẹn nhất,
                  từ những bãi biển hoang sơ, cồn cát tuyệt đẹp đến các di tích
                  lịch sử có giá trị văn hóa cao.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h1 className="text-xl uppercase">Hành trình</h1>
                  <h1 className="text-4xl font-bold text-[#134f46]">5 năm</h1>
                  <h1 className="text-lg">Xây dựng và phát triển</h1>
                </div>
                <div>
                  <h1 className="text-xl uppercase">Khách hàng</h1>
                  <div className="flex justify-center lg:justify-start items-center">
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
                      className="text-4xl font-bold text-[#134f46]"
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
              <Link href="/about">
                {" "}
                <button className="mt-10 flex justify-start bg-[#138140] w-52 py-2 text-white rounded-3xl pl-2">
                  <MdOutlineNavigateNext className="border-2 rounded-full text-black size-6 bg-white border-white mr-6" />
                  VỀ CHÚNG TÔI
                </button>
              </Link>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                className="rounded-3xl max-w-full h-auto"
                alt="Picture of the author"
                src="/about3.jpg"
                height={800}
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 h-[1000] object-cover"
        style={{ backgroundImage: `url('/bg_discover.png')` }}
      ></div>
    </div>
  );
}
