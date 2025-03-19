import RCheckbox from "@/components/form/RCheckbox";
import Pagination from "@/components/pagination/Pagination";
import SliderView from "@/components/slider-view";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { PiClockCountdownLight } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

export default function TicketPage() {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="w-full">
      <div className="bg-[url('/bg.jpg')] h-[700px] md:h-[500px] sm:h-[350px] w-full bg-cover flex flex-col items-center justify-center gap-6 text-center px-4">
        <p className="text-4xl md:text-6xl sm:text-2xl text-white font-extrabold">
          QUAN LẠN ECOTRIP
        </p>
        <p className="text-xl md:text-3xl sm:text-lg text-white font-semibold">
          TRẢI NGHIỆM THỰC TẾ
        </p>
      </div>
      <div className="bg-white pt-5 pb-10 -mt-32 rounded-[40px] flex justify-center z-10 relative px-4">
        <div className="max-w-screen-xl w-full">
          <p className="mt-10 font-bold text-primary_green-bold text-3xl md:text-2xl">
            Đại lý vé
          </p>
          <p className="mt-4 text-sm md:text-base">
            Địa điểm tham quan, vui chơi phải trải nghiệm khi đến Phú Quốc
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="w-full md:w-1/4">
              <div className="flex flex-col border-b border-gray-300 pb-6">
                <p className="text-lg font-semibold">Khu vực</p>
                <div className="mt-2 space-y-2">
                  <RCheckbox checked={false} label="Quan Lạn" />
                  <RCheckbox checked={false} label="Minh Châu" />
                </div>
              </div>
              <button className="w-full bg-primary_green text-white flex gap-2 items-center justify-center hover:bg-primary_green-bold py-2 px-4 mt-6 rounded">
                Tìm kiếm
                <FaAngleDoubleRight />
              </button>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap justify-end gap-4">
                <RCheckbox
                  checked={false}
                  label="Hiển thị tất cả các lựa chọn"
                />
                <RCheckbox
                  checked={false}
                  label="Chỉ các tour đang khuyến mãi"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col"
                    >
                      <img src="test.jpg" className="w-full h-96 rounded-t-lg object-cover"/>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-primary_green text-lg font-bold line-clamp-2">
                            Vé Tour giao lộ thế giới Grand Word Phú Quốc
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <p className="text-primary_green text-lg font-bold">
                              Liên hệ
                            </p>
                            <div className="flex gap-2 items-center">
                              <PiClockCountdownLight className="text-primary_green text-xl" />
                              <p className="text-sm">1/2 ngày</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1 text-sm">
                          <div className="flex gap-1">
                            <TiTick className="text-primary_green text-lg" />
                            <p>
                              Địa điểm hẹn hò lãng mạn với tiệc trà chiều tình
                              yêu
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <TiTick className="text-primary_green text-lg" />
                            <p>Khám phá vẻ đẹp thiên nhiên hoang sơ</p>
                          </div>
                          <div className="flex gap-1">
                            <TiTick className="text-primary_green text-lg" />
                            <p>Trải nghiệm hoạt động văn hóa bản địa</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <Pagination
                total={6}
                page={page}
                onSetPage={setPage}
                className="self-center mt-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#DBEADD] pb-20 pt-36 -mt-32 flex justify-center">
        <div className="max-w-screen-xl w-full px-4">
          <SliderView />
        </div>
      </div>
    </div>
  );
}
