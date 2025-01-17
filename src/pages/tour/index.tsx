import { LayoutGridDemo } from "@/components/people/LayoutGrid";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/test.jpg",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export default function Tour() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-8 border-b-2">
        <div className="col-span-6 flex flex-col items-center">
          <h1>Một số reivew khách hàng nổi bật</h1>
        </div>
        <div className="col-span-2">
          <div className="overflow-hidden w-52 h-52">
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl font-normal">
          {" "}
          Chúng tôi tự hào khi nhận được những phản hồi tích cực này và cam kết
          không ngừng cải thiện để tiếp tục mang đến trải nghiệm hoàn hảo cho
          khách hàng.
        </p>
      </div>

      <div>
        <h1>Nét đẹp lao động</h1>
        <h2 className="">
          Nét đẹp lao động toát lên từ sự tận tụy, niềm đam mê và trách nhiệm
          trong từng công việc
        </h2>
      </div>
      <div className="columns-2 py-10 md:py-20 gap-4">
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} className="w-full h-96 pb-4 object-cover" />
          </div>
        ))}
      </div>
      <div className="text-center">
        <h2>Theo dõi chúng tôi</h2>
        <h1>QUAN LẠN ECOTRIP</h1>
        <div className="columns-2 w-2/3 mx-auto">
          <img src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <h2>Đi tour cùng Quan Lạn Ecotrip</h2>
        <button>ĐẶt tour ngay</button>
      </div>
    </div>
  );
}
