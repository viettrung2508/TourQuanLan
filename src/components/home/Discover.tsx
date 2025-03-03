import { MdOutlineNavigateNext } from "react-icons/md";
import { Carousel } from "../ui/carousel";
const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
