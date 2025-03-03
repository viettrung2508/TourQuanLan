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
    <div>
      <div className="flex gap-2 items-center">
        <div className="w-1 h-1 bg-label rounded-full" />
        <p className="text-label">KIẾN THỨC HỮU ÍCH CHO BẠN</p>
      </div>
      <div className="text-3xl text-primary_green font-bold">Kinh nghiệm du lịch</div>
      <div className="flex justify-center mt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          loop={true}
        >
          {Array(7).fill(0).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-t-2xl w-[100%]">
                <img
                  src="/test.jpg"
                  alt="Picture of the author"
                  className="object-cover h-80 w-full rounded-t-2xl" // Đảm bảo ảnh giữ tỷ lệ
                />
                <div className="p-3 flex flex-col w-full">
                  <ChipTag label="Kinh nghiệm du lịch" Icon={FaLocationArrow} />
                  <p className="line-clamp-1 mt-2 font-bold pr-10">
                    Khám phá đảo Quan Lạn với các địa điểm tham quan nổi tiếng
                  </p>
                  <div className="mt-8 flex gap-1 self-end items-center cursor-pointer">
                    <span className="text-label">CHI TIẾT</span>
                    <MdKeyboardArrowRight className="text-label"/>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}