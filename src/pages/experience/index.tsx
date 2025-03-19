import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChipTag from "../../common/experience/components/ChipTag";
import Pagination from "@/components/pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { EXPERIENCE_BLOG, EXPERIENCE_TAGS } from "@/common/experience/constants";
import { TExperienceBlog } from "@/common/experience/interface";

export default function Experience() {
  const countBlogInPage = 6;
  const [page, setPage] = useState<number>(1);
  const [listBlog, setListBlog] = useState<TExperienceBlog>(EXPERIENCE_BLOG.slice(0, 6))
  const listBlogRef = useRef<HTMLDivElement>(null)
  const firstBlog = listBlog?.[0];
  const secondBlog = listBlog?.[1];
  const thirdBlog = listBlog?.[2];

  const onChangePage = (newPage: number) => {
    if (listBlogRef?.current) {
      listBlogRef.current.scrollIntoView()
    }
    const newListBlog = EXPERIENCE_BLOG.slice(((newPage - 1) * countBlogInPage + 1) - 1, newPage * countBlogInPage)
    setListBlog(newListBlog)
    setPage(newPage);
  }
  
  return (
    <div className="w-full">
      <div className="bg-[url('/bg.jpg')] h-[700px] w-full object-cover bg-cover flex items-center justify-center flex-col gap-4">
        <p className="text-7xl text-white font-extrabold">QUAN LẠN ECOTRIP</p>
        <p className="text-4xl text-white font-semibold">KINH NGHIỆM DU LỊCH</p>
      </div>
      <div ref={listBlogRef} className="bg-primary_bg pt-5 pb-10 -mt-32 rounded-t-[40px] flex justify-center">
        <div className="max-w-screen-2xl w-full px-8">
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
            {EXPERIENCE_TAGS.map(item => (
              <div key={item.id} className="text-primary_green border-2 rounded-3xl border-solid border-primary_green py-2 px-6 cursor-pointer">
                {item.name}
              </div>
            ))}
          </div>
          <div className="mt-8 pl-3">
            <div className="flex justify-between gap-4 h-[540px]">
              <div
                className="flex items-end p-5 flex-1 h-full rounded-2xl bg-cover "
                style={{ backgroundImage: `url('${firstBlog?.overview?.image}')` }}
              >
                <div className="bg-white bg-opacity-85 p-6 w-3/5 rounded-2xl">
                  <ChipTag Icon={FaLocationArrow} label={firstBlog?.overview?.tagIds?.[0]?.name} />
                  <p className="mt-2 font-bold text-xl">
                    {firstBlog?.overview?.title}
                  </p>
                  <Link href={"/experience/blog/" + firstBlog.id}>
                    <div className="flex items-center gap-2 border-solid border-[1px] rounded-3xl border-primary_green py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                      <span className="text-primary_green">Xem chi tiết</span>
                      <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                        <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {!!secondBlog && <div className="w-[33%] flex flex-col pt-4">
                <div className="flex-1 max-h-[50%] rounded-2xl p-4 flex flex-col gap-6 pb-6 bg-white -mt-4">
                  <div className="flex gap-4">
                    <img
                      className="w-40 h-40 rounded-2xl object-cover"
                      src={secondBlog?.overview?.image}
                      alt=""
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex-1">
                        <p className="line-clamp-3 font-bold">
                          {secondBlog?.overview?.title}
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="line-clamp-3 text-label text-sm">
                          {secondBlog?.overview?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <ChipTag Icon={FaLocationArrow} label={secondBlog?.overview?.tagIds?.[0]?.name} />
                    <Link href={"/experience/blog/" + secondBlog.id}>
                      <div className="flex items-center gap-2 border-solid border-[1px] rounded-3xl border-primary_green py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                        <span className="text-primary_green">Xem chi tiết</span>
                        <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                          <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {!!thirdBlog && <div className="flex-1 max-h-[50%] rounded-2xl p-4 flex flex-col gap-6 pb-6 bg-white mt-4">
                  <div className="flex gap-4">
                    <img
                      className="w-40 h-40 rounded-2xl object-cover"
                      src={thirdBlog?.overview?.image}
                      alt=""
                    />
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex-1">
                        <p className="line-clamp-3 font-bold">
                          {thirdBlog?.overview?.title}
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="line-clamp-3 text-label text-sm">
                          {thirdBlog?.overview?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <ChipTag Icon={FaLocationArrow} label={thirdBlog?.overview?.tagIds?.[0]?.name} />
                    <Link href={"/experience/blog/" + thirdBlog.id}>
                      <div className="flex items-center gap-2 border-solid border-[1px] rounded-3xl border-primary_green py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                        <span className="text-primary_green">Xem chi tiết</span>
                        <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                          <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>}
              </div>}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {listBlog.slice(3, 6).map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl h-[480px] flex flex-col"
                >
                  <img
                    className="w-full h-[60%] rounded-t-2xl object-cover"
                    src={item.overview.image}
                  />
                  <div className="px-4 py-6 flex flex-col justify-between flex-1">
                    <ChipTag Icon={FaLocationArrow} label={item?.overview?.tagIds?.[0]?.name} />
                    <p className="line-clamp-2 font-bold text-lg h-14">
                      {item.overview.title}
                    </p>
                    <div className="flex gap-1 self-end items-center cursor-pointer">
                      <Link href={"/experience/blog/" + item.id} className="text-label">CHI TIẾT</Link>
                      <MdKeyboardArrowRight className="text-label" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination page={page} onSetPage={onChangePage} total={Math.ceil(EXPERIENCE_BLOG.length/countBlogInPage)} />
          </div>
        </div>
      </div>
    </div>
  );
}
