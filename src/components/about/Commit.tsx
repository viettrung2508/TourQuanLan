import { Button } from "../ui/button";
import Image from "next/image";
export default function Commit() {
  return (
    <div className="max-w-screen-2xl mx-auto py-10">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-4xl font-bold">CAM KẾT CHẤT LƯỢNG</h1>
          <h1 className="text-3xl">
            Trải nghiệm, sự hài lòng của khách hàng là điều quan trọng tiên
            quyết
          </h1>
        </div>
        <div className="col-span-1">
          <Image src="/about3.jpg" alt="" width={500} height={600} />
        </div>
      </div>
    </div>
  );
}
