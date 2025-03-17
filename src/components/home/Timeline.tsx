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
      icon: <Phone className="w-10 h-10 text-green-500" />,
    },
    {
      number: "02",
      status: "Chia sẻ yêu cầu đặt tours của bạn",
      icon: <ArrowRight className="w-10 h-10 text-green-500" />,
    },
    {
      number: "03",
      status: "Đề xuất tours phù hợp cho bạn",
      icon: <LightbulbIcon className="w-10 h-10 text-green-500" />,
    },
    {
      number: "04",
      status: "Xác nhận tours, ký hợp đồng và thanh toán",
      icon: <DollarSign className="w-10 h-10 text-green-500" />,
    },
    {
      number: "05",
      status: "Tận hưởng chuyến đi của bạn",
      icon: <Users className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto py-20">
      <h1 className="text-6xl mb-10 text-[#138140]">Quy trình đặt tour tại Quan Lạn Ecotrip</h1>
      <div className="w-[95%] mx-auto overflow-hidden">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          freeMode={true}
          className="flex"
        >
          {steps.map((step, index) => (
            <SwiperSlide
              key={index}
              className="w-auto flex-shrink-0 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="text-6xl font-semibold text-[#138140]">
                  {step.number}
                </div>
                <div className="relative w-full mt-2 border-t-2 border-[#ffe49e] flex justify-center">
                  <span className="absolute -top-2 w-3 h-3 bg-[#138140] border-2 border-[#138140] rounded-full"></span>
                </div>
                <div className="p-4 mt-6 bg-gray-200 rounded-full">
                  {step.icon}
                </div>
                <div className="text-2xl  text-[#138140] mt-2">
                  {step.status}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
