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
      <div className="bg-[url('/bg.jpg')] h-[700px] w-full object-cover bg-cover flex items-center justify-center flex-col gap-10">
        <p className="text-7xl text-white font-extrabold">QUAN LẠN ECOTRIP</p>
        <p className="text-4xl text-white font-semibold">TRẢI NGHIỆM THỰC TẾ</p>
      </div>
      <div className="bg-white pt-5 pb-10 -mt-32 rounded-[40px] flex justify-center z-10 relative">
        <div className="max-w-screen-2xl px-8 w-full">
          <p className="mt-10 font-bold text-primary_green-bold text-4xl">
            Đại lý vé
          </p>
          <p className="mt-6">
            Địa điểm tham quan, vui chơi phải trải nghiệm khi đến Phú Quốc
          </p>
          <div className="flex gap-6 mt-8">
            <div className="w-[20%]">
              <div className="flex flex-col border-b-2 border-solid border-gray-300 pb-6 mt-6">
                <p>Khu vực</p>
                <div className="mt-2">
                  <RCheckbox checked={false} label="Quan Lạn" />
                  <RCheckbox checked={false} label="Minh Châu" />
                </div>
              </div>
              <button className="bg-primary_green text-white flex gap-2 items-center justify-center hover:bg-primary_green-bold py-2 px-4 mt-6 rounded-sm">
                Tìm kiếm
                <FaAngleDoubleRight />
              </button>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-end gap-6">
                <RCheckbox
                  checked={false}
                  label="Hiển thị tất cả các lựa chọn"
                />
                <RCheckbox
                  checked={false}
                  label="Chỉ các tour đang khuyến mãi"
                />
              </div>
              <div className="grid grid-cols-3 gap-5 mt-4">
                {Array(6)
                  .fill(0)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="rounded-t-md w-full aspect-[9/17] flex flex-col"
                    >
                      <Image alt="" src="/test.jpg" width={500} height={500} />
                      <div className="py-4 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-primary_green text-lg font-bold line-clamp-2">
                            Vé Tour giao lộ thế giới Grand Word Phú Quốc
                          </p>
                          <div className="flex justify-between gap-4 mt-3">
                            <p className="text-primary_green text-lg font-bold">
                              Liên hệ
                            </p>
                            <div className="flex gap-2 items-center">
                              <PiClockCountdownLight className="text-primary_green text-3xl" />
                              <p>1/2 ngày</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex gap-1">
                            <TiTick className="text-primary_green text-2xl" />
                            <p>
                              Địa điểm hẹn hò lãng mạn với tiệc trà chiều tình
                              yêu
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <TiTick className="text-primary_green text-2xl" />
                            <p>
                              Địa điểm hẹn hò lãng mạn với tiệc trà chiều tình
                              yêu
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <TiTick className="text-primary_green text-2xl" />
                            <p>
                              Địa điểm hẹn hò lãng mạn với tiệc trà chiều tình
                              yêu
                            </p>
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
      <div className="bg-[#DBEADD] pb-20 pt-48 -mt-32 flex justify-center">
        <div className="max-w-screen-2xl px-8 w-full">
          <SliderView />
        </div>
      </div>
    </div>
  );
}
