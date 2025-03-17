import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChipTag from "../../common/experience/components/ChipTag";
import Pagination from "@/components/pagination/Pagination";
import { useState } from "react";
import Link from "next/link";

export default function Experience() {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="w-full">
      <div className="bg-[url('/bg.jpg')] h-[700px] w-full object-cover bg-cover flex items-center justify-center flex-col gap-4">
        <p className="text-7xl text-white font-extrabold">QUAN LẠN ECOTRIP</p>
        <p className="text-4xl text-white font-semibold">KINH NGHIỆM DU LỊCH</p>
      </div>
      <div className="bg-primary_bg pt-5 pb-10 -mt-32 rounded-t-[40px] flex justify-center">
        <div className="max-w-screen-2xl px-8">
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 bg-label rounded-full" />
            <p className="text-label">KINH NGHIỆM DU LỊCH</p>
          </div>
          <p className="text-primary_green font-bold text-2xl mt-1">
            DANH SÁCH BÀI VIẾT
          </p>
          <div className="flex gap-5 mt-4">
            <div className="text-primary_green border-2 rounded-3xl border-solid border-primary_green py-2 px-6 cursor-pointer">
              Tất cả
            </div>
            <div className="text-primary_green border-2 rounded-3xl border-solid border-primary_green py-2 px-6 cursor-pointer">
              Kinh nghiệm du lịch
            </div>
            <div className="text-primary_green border-2 rounded-3xl border-solid border-primary_green py-2 px-6 cursor-pointer">
              Tin tức
            </div>
          </div>
          <div className="mt-8 pl-3">
            <div className="flex justify-between gap-4 h-[540px]">
              <div
                className="flex items-end p-5 flex-1 h-full rounded-2xl bg-cover "
                style={{ backgroundImage: `url('/top7_quanlan.jpg')` }}
              >
                <div className="bg-white bg-opacity-85 p-6 w-3/5 rounded-2xl">
                  <ChipTag Icon={FaLocationArrow} label="Kinh nghiệm du lịch" />
                  <p className="mt-2 font-bold text-xl">
                    TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi biển Quan Lạn
                  </p>
                  <Link href={"/experience/blog/1"}>
                    <div className="flex items-center gap-2 border-solid border-[1px] rounded-3xl border-primary_green py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                      <span className="text-primary_green">Xem chi tiết</span>
                      <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                        <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-[33%] flex flex-col gap-4">
                <div className="flex-1 max-h-[50%] rounded-2xl p-4 flex flex-col gap-6 pb-6 bg-white">
                  <div className="flex gap-4">
                    <img
                      className="w-40 h-40 rounded-2xl object-cover"
                      src="/dji.jpg"
                      alt=""
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex-1">
                        <p className="line-clamp-3 font-bold">
                          TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi biển Minh Châu
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="line-clamp-3 text-label text-sm">
                          Bãi Biển Minh Châu – Viên Ngọc Sáng Giữa Lòng Đảo Quan
                          Lạn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <ChipTag Icon={FaLocationArrow} label="Địa danh" />
                    <Link href={"/experience/blog/2"}>
                      <div className="flex items-center gap-2 border-solid border-[1px] rounded-3xl border-primary_green py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                        <span className="text-primary_green">Xem chi tiết</span>
                        <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                          <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex-1 max-h-[50%] rounded-2xl p-4 flex flex-col gap-6 pb-6 bg-white">
                  <div className="flex gap-4">
                    <img
                      className="w-40 h-40 rounded-2xl object-cover"
                      src="/dji1.jpg"
                      alt=""
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex-1">
                        <p className="line-clamp-3 font-bold">
                          TOP 7 BÃI BIỂN Ở QUAN LẠN - Bãi tắm tiên{" "}
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="line-clamp-3 text-label text-sm">
                          Bãi Tắm Tiên – Nét Hoang Sơ Bí Ẩn Giữa Đảo Quan Lạn
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <ChipTag Icon={FaLocationArrow} label="Địa danh" />
                    <Link href={"/experience/blog/3"}>
                      <div className="flex items-center gap-2 border-solid border-[1px] rounded-3xl border-primary_green py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                        <span className="text-primary_green">Xem chi tiết</span>
                        <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                          <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl h-[480px] flex flex-col"
                >
                  <img
                    className="w-full h-[60%] rounded-t-2xl object-cover"
                    src="https://vcdn1-dulich.vnecdn.net/2022/06/22/du-lich-quan-lan-7-7818-1655893784.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=W_ckwMcMFM8W88-cc6Ek3w"
                  />
                  <div className="px-4 py-6 flex flex-col justify-between flex-1">
                    <ChipTag Icon={FaLocationArrow} label="Địa danh" />
                    <p className="line-clamp-2 font-bold text-lg">
                      Xu hướng du lịch 2/9: Doanh nghiệp lữ hành đón nhận ra
                      sao?
                    </p>
                    <div className="flex gap-1 self-end items-center cursor-pointer">
                      <span className="text-label">CHI TIẾT</span>
                      <MdKeyboardArrowRight className="text-label" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination page={page} onSetPage={setPage} total={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
