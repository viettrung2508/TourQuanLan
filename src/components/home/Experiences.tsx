import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Experiences() {
  return (
    <div className="bg-[#D6DFDD] ">
      <div className="mx-auto max-w-screen-2xl">
        <div>Kinh nghiệm du lịch Quan Lạn</div>
        <div className="flex justify-center  py-10">
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
                  <Image
                    src="/test.jpg"
                    width={600} // Đặt kích thước mong muốn
                    height={300}
                    alt="Picture of the author"
                    className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
                  />
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
                  <Image
                    src="/test.jpg"
                    width={400} // Đặt kích thước mong muốn
                    height={300}
                    alt="Picture of the author"
                    className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
                  />
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
                  <Image
                    src="/test.jpg"
                    width={400} // Đặt kích thước mong muốn
                    height={300}
                    alt="Picture of the author"
                    className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
                  />
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
                  <Image
                    src="/test.jpg"
                    width={400} // Đặt kích thước mong muốn
                    height={300}
                    alt="Picture of the author"
                    className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
                  />
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
                  <Image
                    src="/test.jpg"
                    width={400} // Đặt kích thước mong muốn
                    height={300}
                    alt="Picture of the author"
                    className="object-cover" // Đảm bảo ảnh giữ tỷ lệ
                  />
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
