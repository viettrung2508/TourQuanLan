import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoGlobeOutline, IoLocationSharp, IoMail } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" text-black font-thin py-8">
      <div className="grid grid-cols-10 mx-auto max-w-screen-2xl">
        <div className="col-span-2">
          <Link href="/">
            <div className="flex items-center w-[168px] gap-2">
              <Image alt="logo" src="/logov.png" width={50} height={50} />
              <div>
                <p className="text-primary_green-bold font-semibold text-nowrap">
                  QUAN LẠN
                </p>
                <p className="text-primary_green-bold font-thin text-nowrap">
                  ECOTRIP
                </p>
              </div>
            </div>
          </Link>
          <p className=" text-sm mb-4 mt-6">
            Chúng tôi luôn sẵn sàng giúp du khách khám phá Quan Lạn một cách
            trọn vẹn nhất
          </p>
          <h1 className="text-xl font-bold">Theo dõi chúng tôi</h1>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/supquanlan.travel">
              <Image alt="" src="/fb2.png" width={40} height={40} />
            </Link>
            <Link href="https://www.tiktok.com/@quanlanecotrip">
              <Image alt="" src="/tiktok1.png" width={40} height={40} />
            </Link>
          </div>
        </div>
        <div className="col-span-4 mt-2">
          <div>
            <h1 className=" text-2xl font-bold mb-4 ml-2">
              Liên hệ với chúng tôi
            </h1>
            <div className="flex mt-2 mb-4 items-center">
              <IoLocationSharp
                size={20}
                className="text-primary_green-bold self-start mt-1"
              />
              <h2 className=" ml-2 text-lg">
                Địa chỉ: Thôn Thái Hòa, xã Quan Lạn, Vân Đồn, Quảng Ninh
              </h2>
            </div>
          </div>
          <div>
            <div className="flex mt-4 items-center">
              <FaPhoneSquareAlt size={18} className="text-primary_green-bold" />
              <h1 className="text-lg ml-2">Liên hệ hotline:</h1>
            </div>
            <div className="ml-7 text-lg">
              <p>097.112.0000</p>
              <p>039.321.5161</p>
              <p>097.940.2888</p>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <IoMail size={18} className="text-primary_green-bold" />
            <h2 className="ml-2 text-lg">Email</h2>
          </div>
          <div className="flex items-center mt-4">
            <IoGlobeOutline size={18} className="text-primary_green-bold" />
            <h2 className="ml-2 text-lg">www.quanlanecotrip.com.vn</h2>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <h1 className=" text-2xl font-bold mb-4">Danh mục sản phẩm</h1>
            <div className="space-y-2">
              <h2>Combo du lịch Quan Lạn</h2>
              <h2>Tour trải nghiệm ngư dân</h2>
              <h2>Tổ chức sự kiện</h2>
              <h2>Dịch vụ chụp ảnh</h2>
              <h2>Khách sạn - Homestay</h2>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-2 justify-end">
          <div>
            <h1 className="text-2xl font-bold mb-4">Đăng kí tour</h1>
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <Image alt="" src="/zalo.png" width={40} height={40} />
              <Image alt="" src="/whatapp.png" width={40} height={40} />
              <Image alt="" src="/mess.png" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
