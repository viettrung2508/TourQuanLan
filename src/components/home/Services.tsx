import Image from "next/image";

export default function Services() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" my-4 flex justify-between">
        <div className=" flex items-center gap-4">
          <div className="relative w-36 h-32">
            <Image alt="" src="/1.png" layout="fill" objectFit="cover" />
          </div>
          <h1 className="text-3xl">
            Hoàn hủy
            <br /> linh hoạt
          </h1>
        </div>
        <div className=" flex items-center gap-4">
          <div className="relative w-36 h-32">
            <Image alt="" src="/2.png" layout="fill" objectFit="cover" />
          </div>
          <h1 className="text-3xl">
            Dịch vụ <br /> xuất sắc
          </h1>
        </div>
        <div className=" flex items-center gap-4">
          <div className="relative w-44 h-32">
            <Image alt="" src="/3.png" layout="fill" objectFit="cover" />
          </div>
          <h1 className="text-3xl">
            Trải nghiệm <br />
            tuyệt vời{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
