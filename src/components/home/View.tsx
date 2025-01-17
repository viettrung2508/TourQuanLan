import Image from "next/image";
import { InfiniteSlider } from "../../../components/core/infinite-slider";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function View() {
  return (
    <div className="bg-[#134f46]">
      <div className="grid grid-cols-4 max-w-screen-2xl mx-auto pt-40">
        <div className="col-span-2 flex flex-col">
          <h1 className="text-[#ffe49e] text-4xl font-bold pb-10">
            Danh sách tour
            <br /> khám phá
            <br /> đảo Quan Lạn
          </h1>
          <button className="flex justify-start bg-[#138140] w-60 py-2 text-white rounded-3xl pl-2">
            <MdOutlineNavigateNext className="border-2 rounded-full text-black size-7 bg-white border-white mr-6" />
            VỀ CHÚNG TÔI
          </button>
        </div>
        <div className="col-span-2">
          {/* <div className="flex h-[1000px]  space-x-4 mb-20">
            <InfiniteSlider direction="vertical">
              <img
                src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677"
                alt="Dean blunt - Black Metal 2"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141"
                alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf"
                alt="Yung Lean - Stardust"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f"
                alt="Lana Del Rey - Ultraviolence"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288"
                alt="A$AP Rocky - Tailor Swif"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520"
                alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
                className="aspect-square w-full rounded-[4px]"
              />
            </InfiniteSlider>
            <InfiniteSlider direction="vertical" reverse>
              <img
                src="https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645"
                alt="DAYS BEFORE RODEO - Travis Scott"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3"
                alt="You're in My System - TORYONTHEBEAT"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655"
                alt="You can't tell me - People Make the World Go Round"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2"
                alt="ye - Kanye West"
                className="aspect-square w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350"
                alt="Slime Season 3 - Young Thug"
                className="aspect-square  w-full rounded-[4px]"
              />
              <img
                src="https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401"
                alt="SWAG - 8ruki"
                className="aspect-square  w-full rounded-[4px]"
              />
            </InfiniteSlider>
          </div> */}
          <div className="grid grid-cols-2">
            <div className="col-span-1 ">
              <div className="">
                <div className="relative">
                  {" "}
                  <img
                    src="about3.jpg"
                    className="w-72 h-80 object-cover mb-5 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 w-72">
                    {" "}
                    <h1 className="text-sm">
                      Phương tiện: ô tô + tàu cao tốc + xe điện
                    </h1>
                    <h1>
                      tour 2 ngày 1 đêm: hà nội - ao tiên - quan lạn - tham quan
                      các địa điểm nổi bật...
                    </h1>
                    <button className="flex justify-between border-white border w-60 py-2 text-white rounded-3xl pl-2">
                      Khám phá
                      <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white mr-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  {" "}
                  <img
                    src="about3.jpg"
                    className="w-72 h-80 object-cover mb-5 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 w-72">
                    {" "}
                    <h1 className="text-sm">
                      Phương tiện: ô tô + tàu cao tốc + xe điện
                    </h1>
                    <h1>
                      tour 2 ngày 1 đêm: hà nội - ao tiên - quan lạn - tham quan
                      các địa điểm nổi bật...
                    </h1>
                    <button className="flex justify-between border-white border w-60 py-2 text-white rounded-3xl pl-2">
                      Khám phá
                      <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white mr-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  {" "}
                  <img
                    src="about3.jpg"
                    className="w-72 h-80 object-cover mb-5 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 w-72">
                    {" "}
                    <h1 className="text-sm">
                      Phương tiện: ô tô + tàu cao tốc + xe điện
                    </h1>
                    <h1>
                      tour 2 ngày 1 đêm: hà nội - ao tiên - quan lạn - tham quan
                      các địa điểm nổi bật...
                    </h1>
                    <button className="flex justify-between border-white border w-60 py-2 text-white rounded-3xl pl-2">
                      Khám phá
                      <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white mr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="">
                <div className="relative">
                  {" "}
                  <img
                    src="about3.jpg"
                    className="w-72 h-80 object-cover mb-5 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 w-72">
                    {" "}
                    <h1 className="text-sm">
                      Phương tiện: ô tô + tàu cao tốc + xe điện
                    </h1>
                    <h1>
                      tour 2 ngày 1 đêm: hà nội - ao tiên - quan lạn - tham quan
                      các địa điểm nổi bật...
                    </h1>
                    <button className="flex justify-between border-white border w-60 py-2 text-white rounded-3xl pl-2">
                      Khám phá
                      <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white mr-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  {" "}
                  <img
                    src="about3.jpg"
                    className="w-72 h-80 object-cover mb-5 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 w-72">
                    {" "}
                    <h1 className="text-sm">
                      Phương tiện: ô tô + tàu cao tốc + xe điện
                    </h1>
                    <h1>
                      tour 2 ngày 1 đêm: hà nội - ao tiên - quan lạn - tham quan
                      các địa điểm nổi bật...
                    </h1>
                    <button className="flex justify-between border-white border w-60 py-2 text-white rounded-3xl pl-2">
                      Khám phá
                      <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white mr-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  {" "}
                  <img
                    src="about3.jpg"
                    className="w-72 h-80 object-cover mb-5 rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 w-72">
                    {" "}
                    <h1 className="text-sm">
                      Phương tiện: ô tô + tàu cao tốc + xe điện
                    </h1>
                    <h1>
                      tour 2 ngày 1 đêm: hà nội - ao tiên - quan lạn - tham quan
                      các địa điểm nổi bật...
                    </h1>
                    <button className="flex justify-between border-white border w-60 py-2 text-white rounded-3xl pl-2">
                      Khám phá
                      <MdOutlineNavigateNext className="rounded-full text-black size-6 bg-white border-white mr-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
