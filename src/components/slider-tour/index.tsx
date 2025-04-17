import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChipTag from "@/common/experience/components/ChipTag";

export default function SliderTour() {
  return (
    <div className=" py-10 max-w-7xl mx-auto">
      {/* Tiêu đề */}
      <div className="text-5xl text-primary_green font-bold text-center py-10">
        Danh sách tour khám phá đảo Quan Lạn
      </div>

      {/* Slider */}
      <div className="relative mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15} // Khoảng cách nhỏ hơn trên mobile
          slidesPerView={1} // Mặc định trên mobile
          navigation={true}
          loop={true}
          className="overflow-visible"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 }, // Mobile nhỏ
            768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
            1024: { slidesPerView: 3, spaceBetween: 30 }, // Laptop
            1280: { slidesPerView: 4, spaceBetween: 40 }, // Desktop
          }}
        >
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} className="pb-5">
                <div className="bg-white rounded-t-2xl w-full shadow-lg transition-transform hover:scale-105">
                  <img
                    src="/test.jpg"
                    alt="Tour Image"
                    className="object-cover h-44 md:h-52 lg:h-60 xl:h-72 w-full rounded-t-2xl transition-all duration-300"
                  />
                  <div className="p-3 flex flex-col w-full">
                    <ChipTag
                      label="Phương tiện: ô tô + tàu cao tốc + xe điện"
                      Icon={FaLocationArrow}
                    />
                    <p className="line-clamp-1 mt-2 font-bold pr-10">
                      Tour 2 ngày 1 đêm: Hà Nội - Ao Tiên - Quan Lạn - Tham quan
                      các địa điểm nổi bật...
                    </p>
                    <div className="mt-2 flex gap-1 self-end items-center cursor-pointer">
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
