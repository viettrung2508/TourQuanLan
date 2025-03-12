import { MdOutlineNavigateNext } from "react-icons/md";
import { Carousel } from "../ui/carousel";
const slideData = [
  {
    title: "Bãi Robinson",
    button: "Explore Component",
    src: "/robinson.jpg",
  },
  {
    title: "Bãi Rùa",
    button: "Explore Component",
    src: "/bairua.jpg",
  },
  {
    title: "Biển Ngọc",
    button: "Explore Component",
    src: "/bienngoc.jpg",
  },
  {
    title: "Bãi Robinson",
    button: "Explore Component",
    src: "/abc.jpg",
  },
  {
    title: "2 Hàng Phi Lao",
    button: "Explore Component",
    src: "/abc1.jpg",
  },
  {
    title: "Bãi Biển Minh Châu",
    button: "Explore Component",
    src: "/dji.jpg",
  },
  {
    title: "Bãi Biển Minh Châu",
    button: "Explore Component",
    src: "/dji1.jpg",
  },
];

export default function Discover() {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-2xl  flex flex-col py-10">
        <h1 className="text-5xl font-bold text-[#134f46] mb-4">
          Khám phá trọn vẹn
          <br /> vẻ đẹp Quan Lạn
        </h1>
        <p className=" py-4">
          Quan Lạn Ecotrip - Chúng tôi tự hào là công ty du lịch chuyên cung cấp
          những chuyến du lịch độc đáo, những hành trình đặc sắc. Đội ngũ tư vấn
          viên chuyên nghiệp, hướng dẫn viên nhiều năm kinh nghiệm, chia sẻ kiến
          thức và chăm sóc khách hàng tận tâm.
        </p>
        <button className="flex justify-start bg-[#138140] w-60 py-2 text-white rounded-3xl pl-2">
          <MdOutlineNavigateNext className="border-2 rounded-full text-black size-7 bg-white border-white mr-6" />
          VỀ CHÚNG TÔI
        </button>
        <div className="relative overflow-hidden max-w-screen-2xl h-full py-20">
          <Carousel slides={slideData} />
        </div>
        {/* <div className="flex justify-center max-w-screen-2xl">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            loop={true}
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="rounded-2xl overflow-hidden w-96 h-72">
                    <Image
                      key={`slide-${index}`} // Thêm key duy nhất cho Image
                      alt={`Hình ảnh du lịch Quan Lạn ${index}`} // Alt text
                      src="/test.jpg"
                      width={500}
                      height={500}
                      objectFit="cover" // Thêm objectFit
                      onError={() =>
                        console.error(`Error loading slide image ${index}`)
                      }
                    />
                  </div>
                  <div>
                    <h1>Du lịch Quan Lạn</h1>
                    <p>
                      Không chỉ là đơn vị tổ chức tour uy tín và lớn nhất Quan
                      Lạn. Chúng tôi còn là top những công ty bán phòng khách sạn
                      lớn nhất tại Quan Lạn. Là đối tác của hơn 20 khách sạn từ 3
                      sao đến 5 sao tại Quan Lạn.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
}
