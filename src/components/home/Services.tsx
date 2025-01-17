import Image from "next/image";
import localFont from "next/font/local";
import DemoSlider from "../DemoSlider";

export default function Services() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-6">
        <div className="col-span-2">
          <img />
          <h1>Hoàn hủy linh hoạt</h1>
        </div>
        <div className="col-span-2 gap-5 flex items-center">
          <img src="2.png" className="w-32" />
          <h1 className="text-3xl">
            Dịch vụ <br /> xuất sắc
          </h1>
        </div>
        <div className="col-span-2 gap-5 flex items-center">
          <img src="3.png" className="w-32" />
          <h1 className="text-3xl">
            Trải nghiệm <br />
            tuyệt vời{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
