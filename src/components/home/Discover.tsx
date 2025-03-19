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
    title: "Hai Hàng Phi Lao",
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
    <div className=" bg-primary_bg">
      <div className="mx-auto max-w-screen-2xl  flex flex-col py-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#134f46] mb-2 mx-2 lg:mb-4">
          Khám phá trọn vẹn
          <br /> vẻ đẹp Quan Lạn
        </h1>
        <p className=" py-4 mx-2">
          Quan Lạn Ecotrip - Chúng tôi tự hào là công ty du lịch chuyên cung cấp
          những chuyến du lịch độc đáo, những hành trình đặc sắc. Đội ngũ tư vấn
          viên chuyên nghiệp, hướng dẫn viên nhiều năm kinh nghiệm, chia sẻ kiến
          thức và chăm sóc khách hàng tận tâm.
        </p>
        <button className="mx-2 flex justify-start bg-[#138140] w-52 py-2 text-white rounded-3xl pl-2">
          <MdOutlineNavigateNext className="border-2 rounded-full text-black size-6 bg-white border-white mr-6" />
          VỀ CHÚNG TÔI
        </button>
        <div className="relative overflow-hidden max-w-screen-2xl h-full py-20">
          <Carousel slides={slideData} />
        </div>
      </div>
    </div>
  );
}
