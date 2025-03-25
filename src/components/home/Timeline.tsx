"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import {
  Phone,
  ArrowRight,
  LightbulbIcon,
  DollarSign,
  Users,
} from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      number: "01",
      status: "Liên hệ và cung cấp chi tiết chuyến đi",
      icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    },
    {
      number: "02",
      status: "Chia sẻ yêu cầu đặt tours của bạn",
      icon: <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    },
    {
      number: "03",
      status: "Đề xuất tours phù hợp cho bạn",
      icon: (
        <LightbulbIcon className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
      ),
    },
    {
      number: "04",
      status: "Xác nhận tours, ký hợp đồng và thanh toán",
      icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    },
    {
      number: "05",
      status: "Tận hưởng chuyến đi của bạn",
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    },
  ];

  return (
    <div className="bg-primary_bg">
      <section className="max-w-screen-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#134f46] text-center">
          Quy trình đặt tour tại Quan Lạn Ecotrip
        </h1>
        <div className="w-full">
          <Swiper
            spaceBetween={16}
            freeMode={true}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex flex-col items-center p-4">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#138140]">
                    {step.number}
                  </div>
                  <div className="relative w-full mt-2 border-t-2 border-[#ffe49e] flex justify-center">
                    <span className="absolute -top-2 w-3 h-3 bg-[#138140] border-2 border-[#138140] rounded-full"></span>
                  </div>
                  <div className="p-4 mt-6 bg-gray-200 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="text-base sm:text-lg md:text-xl text-[#138140] mt-3 text-center max-w-xs">
                    {step.status}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
