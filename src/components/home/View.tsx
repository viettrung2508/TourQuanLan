import { MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";

export default function View() {
  return (
    <div className="bg-[#134f46] pb-6">
      <div className="max-w-screen-2xl mx-auto px-4 pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col text-center md:text-left">
          <h1 className="text-[#ffe49e] text-5xl md:text-6xl lg:text-7xl font-bold pb-8">
            Danh sách tour <br /> khám phá <br /> đảo Quan Lạn
          </h1>
        </div>

        {/* Right Section - Tour List */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative w-full">
              <img
                alt=""
                src="/about1.jpg"
                className="rounded-xl w-full  h-auto"
              />
              <div className="absolute bottom-0 left-0  text-white p-4 ">
                <h1 className="text-sm">
                  Phương tiện: ô tô + tàu cao tốc + xe điện
                </h1>
                <h1 className="text-md w-60 lg:w-full ">
                  Tour 2 ngày 1 đêm: Hà Nội - Ao Tiên - Quan Lạn - tham quan các
                  địa điểm nổi bật...
                </h1>
                <button className="flex items-center justify-between border border-white lg:w-full py-2 mt-2 text-white rounded-3xl px-4">
                  Khám phá
                  <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
