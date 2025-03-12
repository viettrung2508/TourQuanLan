"use client";
import React from "react";

export function Founders() {
  return (
    <div className="bg-[#134f46]">
      <div className=" py-20 max-w-screen-2xl mx-auto">
        <div className=" mr-72">
          <h1 className="text-4xl text-white mb-2">Sứ mệnh của chúng tôi</h1>
          <h4 className=" text-[#ffe49e] text-4xl">
            Tập trung vào việc nâng cao chất lượng dịch vụ, phát triển các tour
            du lịch sinh thái, văn hóa, hoặc thể thao để mang đến cho du khách
            những trải nghiệm khó quên khi đến Quan Lạn.
          </h4>
        </div>
        <div className="flex  mt-20 justify-between">
          <div>
            <img
              src="/team1.jpg"
              className="w-96 h-96 rounded-full mt-20 border border-white "
            />
          </div>
          <div className="">
            <img
              src="/team2.jpg"
              className="w-44 h-44 rounded-full object-cover mt-72 border border-white"
            />
          </div>
          <div className="">
            <img
              src="/team3.jpg"
              className="w-72 h-72 rounded-full object-cover border border-white"
            />
          </div>
          <div className="">
            <img
              src="/team4.jpg"
              className="w-52 h-52 rounded-full object-cover border border-white mt-72"
            />
          </div>
          <div className="">
            <img
              src="/team1.jpg"
              className="w-36 h-36 rounded-full object-cover border border-white mt-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
