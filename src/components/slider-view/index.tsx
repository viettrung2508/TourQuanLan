import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChipTag from "@/common/experience/components/ChipTag";

export default function SliderView() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Tiêu đề */}
      <div className="flex gap-2 items-center">
        <div className="w-1 h-1 bg-label rounded-full" />
        <p className="text-label">KIẾN THỨC HỮU ÍCH CHO BẠN</p>
      </div>
      <div className="text-3xl text-primary_green font-bold">
        Kinh nghiệm du lịch
      </div>

      {/* Slider */}
      <div className="flex justify-center mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20} // Giảm khoảng cách khi màn hình nhỏ
          slidesPerView={1} // Mặc định là 1 slide cho mobile
          navigation={true}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 }, // Mobile nhỏ
            768: { slidesPerView: 2, spaceBetween: 30 }, // Tablet
            1024: { slidesPerView: 3, spaceBetween: 40 }, // Desktop trung bình
            1280: { slidesPerView: 4, spaceBetween: 50 }, // Desktop lớn
          }}
        >
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-t-2xl w-full shadow-lg transition-transform hover:scale-105">
                  <img
                    src="/test.jpg"
                    alt="Picture of the author"
                    className="object-cover h-60 sm:h-72 md:h-60 w-full rounded-t-2xl transition-all duration-300"
                  />
                  <div className="p-3 flex flex-col w-full">
                    <ChipTag
                      label="Kinh nghiệm du lịch"
                      Icon={FaLocationArrow}
                    />
                    <p className="line-clamp-1 mt-2 font-bold pr-10">
                      Khám phá đảo Quan Lạn với các địa điểm tham quan nổi tiếng
                    </p>
                    <div className="mt-8 flex gap-1 self-end items-center cursor-pointer">
                      <span className="text-label">CHI TIẾT</span>
                      <MdKeyboardArrowRight className="text-label" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
