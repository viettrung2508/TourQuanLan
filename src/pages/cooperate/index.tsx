import { ImagesSliderDemo } from "@/components/cooperate/ImagesSliderDemo";
import Partner from "@/components/cooperate/Partner";
import Image from "next/image";

export default function Cooperate() {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-8 border-b-2 h-full">
          <div className="col-span-6 flex flex-col items-center">
            <h1 className="text-4xl italic">
              Hợp tác để <span className="text-[#FF6E00]">thành công</span> cùng{" "}
              và <span className="text-[#FF6E00]">phát triển</span>
            </h1>
          </div>
          <div className="col-span-2">
            <div className="overflow-hidden w-52 h-52">
              <Image
                src="/logo1.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 border-b-2 mt-10 ">
          <div className="col-span-4 flex flex-col items-center text-2xl ">
            <p>
              Với phương châm: “Giúp được khách hàng là niềm hạnh phúc” chúng
              tôi luôn cố gắng hỗ trợ quý khách hàng, quý đối tác để đạt được
              mức độ hài lòng cao nhất khi sử dụng dịch vụ{" "}
            </p>
            <p className="mt-16">
              Sự tận tâm, hiếu khách và đam mê với quê hương của đội ngũ bản địa
              không chỉ mang đến những trải nghiệm đáng nhớ mà còn góp phần thúc
              đẩy du lịch bền vững, giữ gìn vẻ đẹp tự nhiên và bảo vệ tài nguyên
              văn hóa quý giá của Quan Lạn.
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <div className="">
              <div className="grid grid-cols-2 ">
                <div className="col-span-1">
                  <div className="mb-10">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-64 h-80 rounded-xl"
                    />
                  </div>
                  <div className="">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-64 h-80 rounded-xl"
                    />
                  </div>
                </div>
                <div className="col-span-1 ">
                  <div className="mb-10">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-64 h-80 rounded-xl"
                    />
                  </div>
                  <div className="">
                    <Image
                      alt=""
                      src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-64 h-80 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
        <Image
          src="/quality.png"
          width={2400}
          height={250}
          alt="Picture of the author"
        />{" "}
      </div> */}
      </div>
      <ImagesSliderDemo />
      <Partner />
    </div>
  );
}
