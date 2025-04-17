"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Mình chưa từng nghĩ Quan Lạn lại đẹp và yên bình đến vậy. Nhờ Ecotrip mà chuyến đi lần này trọn vẹn từ A-Z: lịch trình hợp lý, hướng dẫn viên nhiệt tình, đồ ăn địa phương ngon và không gian lưu trú thì cực chill. Nhất định sẽ quay lại cùng Ecotrip trong hành trình tới.",
    name: "Gia đình Cô Hà",
    designation: "Gia đình Cô Hà",
    src: "/comment1.jpg",
  },
  {
    quote:
      "Mình book tour theo nhóm bạn thân, và thật sự bất ngờ vì Ecotrip rất linh hoạt, chiều khách, lại gợi ý nhiều hoạt động cực chill. Team mình đã có những bức ảnh siêu đẹp và cả tá kỷ niệm vui nhộn.",
    name: "Nhóm Bạn Thân Gen Z",
    designation: "CTO at InnovateSphere",
    src: "/comment1.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/comment2.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/comment3.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/comment4.jpg",
  },
];
export function Experiences() {
  return (
    <div className="h-screen  w-full flex justify-center relative overflow-hidden bg-black">
      <motion.img
        src="/hero12.jpg"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <div className="w-full h-full py-20 flex items-center justify-center flex-col">
        <h2 className="max-w-7xl lg:mb-24 mt-16 pl-4 mx-auto text-4xl md:text-6xl text-center font-bold text-white dark:text-neutral-200 font-sans">
          Trải nghiệm tuyệt vời
        </h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
