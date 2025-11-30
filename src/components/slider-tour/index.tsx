import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChipTag from "@/common/experience/components/ChipTag";

import { Tour_BLOG } from "@/common/tour/constants"; // 👈 import data
import Link from "next/link";

export default function SliderTour() {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      {/* Tiêu đề */}
      <div className="text-5xl text-primary_green font-bold text-center py-10">
        Danh sách tour khám phá đảo Quan Lạn
      </div>

      {/* Slider */}
      <div className="relative mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={true}
          loop={true}
          className="overflow-visible"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {Tour_BLOG.map((item) => (
            <SwiperSlide key={item.id} className="pb-5">
              <div className="bg-white rounded-t-2xl w-full shadow-lg transition-transform hover:scale-105">
                <img
                  src={item.overview.image}
                  alt={item.overview.title}
                  className="object-cover h-44 md:h-52 lg:h-60 xl:h-72 w-full rounded-t-2xl transition-all duration-300"
                />
                <div className="p-3 flex flex-col w-full">
                  {/* Tag phương tiện – tạm để static nếu chưa có field riêng */}
                  <ChipTag
                    label="Phương tiện: ô tô + tàu cao tốc + xe điện"
                    Icon={FaLocationArrow}
                  />

                  {/* Tiêu đề tour */}
                  <p className="line-clamp-2 mt-2 font-bold pr-10">
                    {item.overview.title}
                  </p>

                  {/* Button chi tiết */}
                  <Link
                    href={`/tour/list-tour/${item.id}`}
                    className="mt-2 flex gap-1 self-end items-center cursor-pointer"
                  >
                    <span className="text-label">CHI TIẾT</span>
                    <MdKeyboardArrowRight className="text-label" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
