import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Discover() {
  return (
    <div className=" relative -translate-y-10">
      <img src="/bg.jpg" className="w-full h-[800px] rounded-[50px] opacity-50 " />
      <div className="absolute top-20 left-10 w-full  flex flex-col">
        <h1 className="text-5xl font-bold text-[#134f46]">
          Khám phá trọn vẹn
          <br /> vẻ đẹp Quan Lạn{" "}
        </h1>
        <p className="w-1/2 ">
          Quan Lạn Ecotrip - Chúng tôi tự hào là công ty du lịch chuyên cung cấp
          những chuyến du lịch độc đáo, những hành trình đặc sắc. Đội ngũ tư vấn
          viên chuyên nghiệp, hướng dẫn viên nhiều năm kinh nghiệm, chia sẻ kiến
          thức và chăm sóc khách hàng tận tâm.
        </p>
        <button className="flex justify-start bg-[#138140] w-60 py-2 text-white rounded-3xl pl-2">
          <MdOutlineNavigateNext className="border-2 rounded-full text-black size-7 bg-white border-white mr-6" />
          VỀ CHÚNG TÔI
        </button>
        <div className="flex justify-center  max-w-screen-2xl">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            loop={true}
          >
            <SwiperSlide>
              <div>
                <div className="rounded-2xl overflow-hidden w-96 h-72">
                  {" "}
                  <img src="/test.jpg" className="object-cover" />
                </div>
                <div>
                  <h1>Du lịch quan lạn</h1>
                  <p>
                    Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
                    Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
                    lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
                    sao đến 5 sao tại Quan Lạn.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="rounded-2xl overflow-hidden w-96 h-72">
                  {" "}
                  {/* Giới hạn kích thước của container */}
                  <img src="/test.jpg" className="object-cover" />
                </div>
                <div>
                  <h1>Du lịch quan lạn</h1>
                  <p>
                    Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
                    Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
                    lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
                    sao đến 5 sao tại Quan Lạn.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="rounded-2xl overflow-hidden w-96 h-72">
                  {" "}
                  {/* Giới hạn kích thước của container */}
                  <img src="/test.jpg" className="object-cover" />
                </div>
                <div>
                  <h1>Du lịch quan lạn</h1>
                  <p>
                    Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
                    Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
                    lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
                    sao đến 5 sao tại Quan Lạn.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="rounded-2xl overflow-hidden w-96 h-72">
                  {" "}
                  {/* Giới hạn kích thước của container */}
                  <img src="/test.jpg" className="object-cover" />
                </div>
                <div>
                  <h1>Du lịch quan lạn</h1>
                  <p>
                    Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
                    Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
                    lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
                    sao đến 5 sao tại Quan Lạn.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="rounded-2xl overflow-hidden w-96 h-72">
                  {" "}
                  {/* Giới hạn kích thước của container */}
                  <img src="/test.jpg" className="object-cover" />
                </div>
                <div>
                  <h1>Du lịch quan lạn</h1>
                  <p>
                    Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
                    Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
                    lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
                    sao đến 5 sao tại Quan Lạn.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
