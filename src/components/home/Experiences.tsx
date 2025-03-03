// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// export default function Experiences() {
//   return (
//     <div className="bg-[#D6DFDD] ">
//       <div className="mx-auto max-w-screen-2xl">
//         {/* <div className="absolute">
//           <Image
//             src="/timeline.png"
//             layout="fill"
//             alt="Picture of the author"
//             className="object-cover"
//           />
//         </div> */}
//         <div>Kinh nghiệm du lịch Quan Lạn</div>
//         <div className="flex justify-center  py-10">
//           <Swiper
//             modules={[Navigation, Pagination, Scrollbar, A11y]}
//             spaceBetween={50}
//             slidesPerView={3}
//             navigation={true}
//             loop={true}
//           >
//             <SwiperSlide>
//               <div>
//                 <div className="rounded-2xl overflow-hidden w-96 h-72">
//                   {" "}
//                   <Image
//                     src="/test.jpg"
//                     width={600} // Đặt kích thước mong muốn
//                     height={300}
//                     alt="Picture of the author"
//                     className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
//                   />
//                 </div>
//                 <div>
//                   <h1>Du lịch quan lạn</h1>
//                   <p>
//                     Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
//                     Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
//                     lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
//                     sao đến 5 sao tại Quan Lạn.{" "}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div>
//                 <div className="rounded-2xl overflow-hidden w-96 h-72">
//                   {" "}
//                   {/* Giới hạn kích thước của container */}
//                   <Image
//                     src="/test.jpg"
//                     width={400} // Đặt kích thước mong muốn
//                     height={300}
//                     alt="Picture of the author"
//                     className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
//                   />
//                 </div>
//                 <div>
//                   <h1>Du lịch quan lạn</h1>
//                   <p>
//                     Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
//                     Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
//                     lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
//                     sao đến 5 sao tại Quan Lạn.{" "}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div>
//                 <div className="rounded-2xl overflow-hidden w-96 h-72">
//                   {" "}
//                   {/* Giới hạn kích thước của container */}
//                   <Image
//                     src="/test.jpg"
//                     width={400} // Đặt kích thước mong muốn
//                     height={300}
//                     alt="Picture of the author"
//                     className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
//                   />
//                 </div>
//                 <div>
//                   <h1>Du lịch quan lạn</h1>
//                   <p>
//                     Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
//                     Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
//                     lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
//                     sao đến 5 sao tại Quan Lạn.{" "}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div>
//                 <div className="rounded-2xl overflow-hidden w-96 h-72">
//                   {" "}
//                   {/* Giới hạn kích thước của container */}
//                   <Image
//                     src="/test.jpg"
//                     width={400} // Đặt kích thước mong muốn
//                     height={300}
//                     alt="Picture of the author"
//                     className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
//                   />
//                 </div>
//                 <div>
//                   <h1>Du lịch quan lạn</h1>
//                   <p>
//                     Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
//                     Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
//                     lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
//                     sao đến 5 sao tại Quan Lạn.{" "}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div>
//                 <div className="rounded-2xl overflow-hidden w-96 h-72">
//                   {" "}
//                   {/* Giới hạn kích thước của container */}
//                   <Image
//                     src="/test.jpg"
//                     width={400} // Đặt kích thước mong muốn
//                     height={300}
//                     alt="Picture of the author"
//                     className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
//                   />
//                 </div>
//                 <div>
//                   <h1>Du lịch quan lạn</h1>
//                   <p>
//                     Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
//                     Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
//                     lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
//                     sao đến 5 sao tại Quan Lạn.{" "}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React from "react";
import Image from "next/image";

import { motion } from "motion/react";
import { ColourfulText } from "../ui/colourful-text";
import { Card, Carousel } from "../ui/apple-cards-carousel";

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
export function Experiences() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="h-screen w-full flex justify-center relative overflow-hidden bg-black">
      <motion.img
        src="https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <ColourfulText text="Trải nghiệm " /> tuyệt vời
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}
