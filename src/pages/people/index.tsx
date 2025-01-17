import { LayoutGridDemo } from "@/components/people/LayoutGrid";
import Image from "next/image";

const images = [
  "/test.jpg",
  "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/test.jpg",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export default function People() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-8 border-b-2">
        <div className="col-span-6 flex flex-col items-center">
          <h1>Con người Quan Lạn Ecotrip</h1>
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
          Đội ngũ của chúng tôi là những con người trẻ trung, nhiệt huyết và
          tràn đầy năng lượng. Không chỉ giàu kinh nghiệm, họ còn luôn tạo ra
          bầu không khí vui vẻ và thoải mái trong suốt hành trình, mang đến
          những trải nghiệm gần gũi và ấm áp cho khách hàng. Tinh thần lạc quan
          và sự vui tính là những điểm nổi bật giúp đội ngũ của chúng tôi gắn
          kết với khách hàng một cách tự nhiên, khiến mỗi chuyến đi đều trở nên
          đáng nhớ và đầy ắp tiếng cười.
        </p>
      </div>
      <LayoutGridDemo />
      <div>
        <h1>Nét đẹp lao động</h1>
        <h2 className="border-b-4">
          Nét đẹp lao động toát lên từ sự tận tụy, niềm đam mê và trách nhiệm
          trong từng công việc
        </h2>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {images.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img src={src} className="w-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
