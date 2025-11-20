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
    src: "/coha.jpg",
  },
  {
    quote:
      "Mình book tour theo nhóm bạn thân, và thật sự bất ngờ vì Ecotrip rất linh hoạt, chiều khách, lại gợi ý nhiều hoạt động cực chill. Team mình đã có những bức ảnh siêu đẹp và cả tá kỷ niệm vui nhộn.",
    name: "Nhóm Bạn Thân Gen Z",
    designation: "CTO at InnovateSphere",
    src: "/genz.jpg",
  },
  {
    quote:
      "Đi Quan Lạn cùng Ecotrip khiến tôi thật sự được nghỉ ngơi đúng nghĩa. Không xô bồ, không chạy tour vội vã. Mọi thứ được sắp xếp linh hoạt, vừa đủ để trải nghiệm, vừa có thời gian chill bên bãi biển. Cảm ơn Ecotrip vì một kỳ nghỉ tuyệt vời.",
    name: "Công ty TNHH Thiên Nhiên Xanh",
    designation: "Operations Director at CloudScale",
    src: "/cty.jpg",
  },
  {
    quote:
      "Không ngờ Quan Lạn lại giữ được vẻ hoang sơ đến vậy. Nhờ Ecotrip mà mình không chỉ được chiêm ngưỡng vẻ đẹp đó, mà còn hiểu thêm về đời sống người dân đảo. Một chuyến đi vừa đẹp, vừa sâu sắc.",
    name: "Team Nhà Gỗ",
    designation: "Engineering Lead at DataPro",
    src: "/teamnhago.jpg",
  },
  {
    quote:
      "Chuyến đi này khiến mình yêu thiên nhiên hơn bao giờ hết. Ecotrip không chỉ tổ chức tour, mà còn truyền cảm hứng về lối sống xanh, bảo vệ môi trường. Rác được phân loại, không dùng nhựa một lần – mình thật sự thấy nể sự tử tế của họ.",
    name: "Hội Cô Giáo Mầm Non Du Ký",
    designation: "VP of Technology at FutureNet",
    src: "/cogiao.jpg",
  },
  {
    quote:
      "Điểm cộng cực lớn của Ecotrip là chọn điểm lưu trú siêu đẹp, view biển mộng mơ, decor giản dị mà tinh tế. Mình có cảm giác như đang sống giữa thiên nhiên chứ không phải đi du lịch đơn thuần.",
    name: "Gia đình Chị Linh – Đi Đâu Cũng Vui",
    designation: "VP of Technology at FutureNet",
    src: "/285.jpg",
  },
  {
    quote:
      "Ecotrip làm tour Quan Lạn theo phong cách rất riêng: mộc mạc, nhẹ nhàng và chân thật. Mình được tham gia bắt sá sùng cùng ngư dân, tìm hiểu văn hóa địa phương và thưởng thức những bữa cơm gia đình đúng chuẩn miền biển.",
    name: "Nhóm Thở Chậm - Hít Sâu",
    designation: "VP of Technology at FutureNet",
    src: "/44.jpg",
  },
  {
    quote:
      "Nếu ai muốn ‘trốn’ khỏi thành phố để tìm một nơi yên bình, thì nên đi Quan Lạn với Ecotrip. Mình đã recharge lại hoàn toàn sau 3 ngày sống giữa biển, cát và những người bạn mới dễ thương trong đoàn.",
    name: "Team Văn Phòng Rủ Nhau Đi Trốn",
    designation: "VP of Technology at FutureNet",
    src: "/169.jpg",
  },
  {
    quote:
      "Đây là chuyến đi đầu tiên mình cho con nhỏ theo cùng, và thực sự hài lòng với dịch vụ của Ecotrip. Lịch trình an toàn, phù hợp cho cả gia đình, có nhiều hoạt động tương tác giúp bé khám phá thiên nhiên một cách gần gũi.",
    name: "Gia đình Anh Tuấn",
    designation: "VP of Technology at FutureNet",
    src: "/20.jpg",
  },
  {
    quote:
      "Tour được tổ chức rất chuyên nghiệp nhưng vẫn giữ được sự thân thiện, gần gũi. Mình thấy yên tâm hoàn toàn, từ khâu đón khách, ăn uống đến hoạt động trải nghiệm. Ecotrip đúng là thương hiệu đáng tin cậy.",
    name: "Hội Bạn Cấp 3 – 10 Năm Gặp Lại",
    designation: "VP of Technology at FutureNet",
    src: "/45.jpg",
  },
  {
    quote:
      "Tôi ấn tượng nhất là cách Ecotrip chăm chút từng chi tiết nhỏ – từ khăn lạnh trên xe, nước uống refill, đến việc chọn những điểm check-in hoang sơ nhưng tuyệt đẹp. Quan Lạn hiện ra đầy thơ mộng và gần gũi, khác hẳn với hình dung ban đầu.",
    name: "Chị Ngọc",
    designation: "VP of Technology at FutureNet",
    src: "/19037.jpg",
  },
  {
    quote:
      "Quan Lạn qua ống kính Ecotrip hiện ra vừa lạ vừa thân quen. Chuyến đi như một thước phim quay chậm giữa nhịp sống vội vã. Cảm ơn đội ngũ Ecotrip đã tạo nên một không gian du lịch tử tế và đầy cảm xúc.",
    name: "Anh Hùng",
    designation: "VP of Technology at FutureNet",
    src: "/614.jpg",
  },
  {
    quote:
      "Ecotrip mang lại trải nghiệm đúng chất ‘eco’: tôn trọng thiên nhiên, không xả rác bừa bãi, không chen chúc xô bồ. Nhóm mình đi mà không ai bị mệt hay nhàm chán – trái lại, ai cũng nhẹ nhàng và vui vẻ.",
    name: "Công ty TNHH MC Việt Nam",
    designation: "VP of Technology at FutureNet",
    src: "/10.jpg",
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
