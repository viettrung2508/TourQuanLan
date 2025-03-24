"use client";
import React from "react";

export function Founders() {
  return (
    <div className="bg-[#134f46]">
      <div className="py-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="mb-16 lg:mb-24 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl text-white mb-4">
            Sứ mệnh của chúng tôi
          </h1>
          <h4 className="text-xl sm:text-2xl lg:text-3xl text-[#ffe49e] leading-relaxed">
            Tập trung vào việc nâng cao chất lượng dịch vụ, phát triển các tour
            du lịch sinh thái, văn hóa, hoặc thể thao để mang đến cho du khách
            những trải nghiệm khó quên khi đến Quan Lạn.
          </h4>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          <img
            src="/team1.jpg"
            className="w-40 sm:w-52 md:w-72 lg:w-80 rounded-full border border-white mt-8 sm:mt-16"
            alt="Founder 1"
          />
          <img
            src="/team2.jpg"
            className="w-24 sm:w-32 md:w-40 rounded-full object-cover border border-white mt-16 sm:mt-24"
            alt="Founder 2"
          />
          <img
            src="/team3.jpg"
            className="w-32 sm:w-44 md:w-56 rounded-full object-cover border border-white"
            alt="Founder 3"
          />
          <img
            src="/team4.jpg"
            className="w-28 sm:w-36 md:w-44 rounded-full object-cover border border-white mt-12 sm:mt-20"
            alt="Founder 4"
          />
          <img
            src="/team1.jpg"
            className="w-20 sm:w-28 md:w-36 rounded-full object-cover border border-white mt-10 sm:mt-16"
            alt="Founder 5"
          />
        </div>
      </div>
    </div>
  );
}
