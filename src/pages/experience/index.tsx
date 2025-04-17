"use client";

import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChipTag from "../../common/experience/components/ChipTag";
import Pagination from "@/components/pagination/Pagination";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  EXPERIENCE_BLOG,
  EXPERIENCE_TAGS,
} from "@/common/experience/constants";
import { TExperienceBlog } from "@/common/experience/interface";

export default function Experience() {
  const countBlogInPage = 6;
  const [page, setPage] = useState<number>(1);
  const [listBlog, setListBlog] = useState<TExperienceBlog>(
    EXPERIENCE_BLOG.slice(0, 6)
  );
  const listBlogRef = useRef<HTMLDivElement>(null);
  const firstBlog = listBlog?.[0];
  const secondBlog = listBlog?.[1];
  const thirdBlog = listBlog?.[2];

  const onChangePage = (newPage: number) => {
    if (listBlogRef?.current) {
      listBlogRef.current.scrollIntoView();
    }
    const newListBlog = EXPERIENCE_BLOG.slice(
      (newPage - 1) * countBlogInPage,
      newPage * countBlogInPage
    );
    setListBlog(newListBlog);
    setPage(newPage);
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-[url('/bg.jpg')] h-[500px] md:h-[700px] w-full bg-cover flex items-center justify-center flex-col gap-4 px-4">
        <p className="text-4xl md:text-7xl text-white font-extrabold text-center">
          QUAN LẠN ECOTRIP
        </p>
        <p className="text-2xl md:text-4xl text-white font-semibold text-center">
          KINH NGHIỆM DU LỊCH
        </p>
      </div>

      {/* Blog Section */}
      <div
        ref={listBlogRef}
        className="bg-primary_bg pt-5 pb-10 -mt-24 md:-mt-32 rounded-t-[40px] flex justify-center"
      >
        <div className="max-w-7xl w-full px-4 md:px-8">
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 bg-label rounded-full" />
            <p className="text-label">KINH NGHIỆM DU LỊCH</p>
          </div>
          <p className="text-primary_green font-bold text-2xl mt-1">
            DANH SÁCH BÀI VIẾT
          </p>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="text-primary_green border-2 rounded-3xl border-solid border-primary_green py-2 px-6 cursor-pointer">
              Tất cả
            </div>
            {EXPERIENCE_TAGS.map((item) => (
              <div
                key={item.id}
                className="text-primary_green border-2 rounded-3xl border-solid border-primary_green py-2 px-6 cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* Featured Blogs */}
          <div className="mt-8 pl-3">
            <div className="flex flex-col md:flex-row gap-4">
              {/* First Blog (Large) */}
              {firstBlog && (
                <div
                  className="relative w-full md:w-2/3 h-[300px] md:h-[540px] rounded-2xl bg-cover flex items-end p-5"
                  style={{
                    backgroundImage: `url('${firstBlog?.overview?.image}')`,
                  }}
                >
                  <div className="bg-white bg-opacity-85 p-6 w-full md:w-3/5 rounded-2xl">
                    <ChipTag
                      Icon={FaLocationArrow}
                      label={firstBlog?.overview?.tagIds?.[0]?.name}
                    />
                    <p className="mt-2 font-bold text-xl">
                      {firstBlog?.overview?.title}
                    </p>
                    <Link href={"/experience/blog/" + firstBlog.id}>
                      <div className="flex items-center gap-2 border border-primary_green rounded-3xl py-1 pl-5 pr-1 w-fit mt-4 cursor-pointer">
                        <span className="text-primary_green">Xem chi tiết</span>
                        <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                          <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}

              {/* Second and Third Blogs (Stacked) */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                {[secondBlog, thirdBlog].map(
                  (blog, index) =>
                    blog && (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-md"
                      >
                        <div className="flex gap-4">
                          <img
                            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover"
                            src={blog?.overview?.image}
                            alt=""
                          />
                          <div className="flex flex-col flex-1">
                            <p className="line-clamp-2 font-bold text-lg">
                              {blog?.overview?.title}
                            </p>
                            <p className="line-clamp-3 text-label text-sm">
                              {blog?.overview?.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <ChipTag
                            Icon={FaLocationArrow}
                            label={blog?.overview?.tagIds?.[0]?.name}
                          />
                          <Link href={"/experience/blog/" + blog.id}>
                            <div className="flex items-center gap-2 border border-primary_green rounded-3xl py-1 pl-5 pr-1 w-fit cursor-pointer">
                              <span className="text-primary_green">
                                Xem chi tiết
                              </span>
                              <div className="bg-primary_green rounded-full w-8 h-8 flex items-center justify-center">
                                <MdKeyboardArrowRight className="text-white w-[24px] h-[26px]" />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {listBlog.slice(3, 6).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-md">
                <img
                  className="w-full h-52 md:h-60 rounded-t-2xl object-cover"
                  src={item.overview.image}
                  alt=""
                />
                <div className="p-4">
                  <ChipTag
                    Icon={FaLocationArrow}
                    label={item?.overview?.tagIds?.[0]?.name}
                  />
                  <p className="line-clamp-2 font-bold text-lg mt-2">
                    {item.overview.title}
                  </p>
                  <Link
                    href={"/experience/blog/" + item.id}
                    className="text-primary_green flex items-center gap-1 mt-3"
                  >
                    CHI TIẾT <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination
              page={page}
              onSetPage={onChangePage}
              total={Math.ceil(EXPERIENCE_BLOG.length / countBlogInPage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
