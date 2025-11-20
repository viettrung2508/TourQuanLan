import RCheckbox from "@/components/form/RCheckbox";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SiStartrek } from "react-icons/si";
import { FaRegClock } from "react-icons/fa";
import Pagination from "@/components/pagination/Pagination";
import { useRef, useState } from "react";
import SliderView from "@/components/slider-view";
import { LIST_RANGE_DAY, Tour_BLOG } from "@/common/tour/constants";
import { TTourBlog } from "@/common/tour/interface";
import Link from "next/link";

export default function ListTour() {
  const countBlogInPage = 6;
  const [page, setPage] = useState<number>(1);
  const [listBlog, setListBlog] = useState<TTourBlog>(Tour_BLOG.slice(0, 6));
  const listBlogRef = useRef<HTMLDivElement>(null);
  // const firstBlog = listBlog?.[0];
  // const secondBlog = listBlog?.[1];
  // const thirdBlog = listBlog?.[2];

  const onChangePage = (newPage: number) => {
    if (listBlogRef?.current) {
      listBlogRef.current.scrollIntoView();
    }
    const newListBlog = Tour_BLOG.slice(
      (newPage - 1) * countBlogInPage,
      newPage * countBlogInPage
    );
    setListBlog(newListBlog);
    setPage(newPage);
  };
  return (
    <div className="w-full">
      {/* Background Header */}
      <div className="bg-[url('/bg.jpg')] h-[500px] md:h-[600px] lg:h-[700px] w-full bg-cover flex items-center justify-center flex-col gap-6 md:gap-8 lg:gap-10 text-center">
        <p className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold">
          QUAN LẠN ECOTRIP
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
          TOUR QUAN LẠN
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full bg-primary_bg flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8 lg:px-16 py-8">
          {/* Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4 w-full">
              <div className="px-4 pb-8 pt-2 bg-white rounded-xl">
                <div className="border-y-4 border-slate-50 border-solid py-4">
                  <p className="text-xl text-primary_green">SỐ NGÀY</p>
                  <div className="flex flex-wrap">
                    {LIST_RANGE_DAY.map((item) => (
                      <div key={item.value} className="w-1/2 mt-2">
                        <RCheckbox checked={false} label={item.label} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-3xl bg-primary_green py-2 px-2 w-full mt-4 cursor-pointer">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <MdKeyboardArrowRight className="text-primary_green w-[24px] h-[26px]" />
                  </div>
                  <span className="text-white text-center flex-1">
                    XEM TẤT CẢ TOUR
                  </span>
                </div>
              </div>
            </div>

            {/* Tour List */}
            <div className="md:w-3/4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                {listBlog.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl w-full flex flex-col bg-white shadow-lg hover:scale-105 transition-transform"
                  >
                    <img
                      src={item.overview.image}
                      className="w-full h-52 md:h-56 rounded-3xl object-cover"
                    />
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <SiStartrek className="text-primary_green-bold" />
                            <span className="text-primary_green">
                              Xuất phát: Hà Nội
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegClock className="text-primary_green-bold" />
                            <span className="text-primary_green">
                              {item.overview.day}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-lg font-bold line-clamp-2">
                            {item.overview.title}
                          </p>
                          <div className="flex justify-between mt-2">
                            <div className="flex flex-col">
                              <span className="text-lg text-primary_green font-bold">
                                {item.overview.priceOld}
                              </span>
                              <span className="text-md line-through text-label font-bold">
                                {item.overview.priceNew}
                              </span>
                            </div>
                            <Link href={"/tour/list-tour/" + item.id}>
                              <div className="flex items-center border border-primary_green rounded-3xl py-1 px-4 cursor-pointer">
                                <span className="text-primary_green ">
                                  Khám phá
                                </span>
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
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <Pagination page={page} onSetPage={setPage} total={6} />
              </div>
            </div>
          </div>

          {/* Slider */}
          <SliderView />
        </div>
      </div>
    </div>
  );
}
