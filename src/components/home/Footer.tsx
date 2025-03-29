import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoGlobeOutline, IoLocationSharp, IoMail } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-black font-thin py-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-44 mx-auto max-w-screen-2xl ">
        {/* Logo + Social */}
        <div className="text-center md:text-left">
          <Link href="/">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <Image alt="logo" src="/logov.png" width={50} height={50} />
              <div>
                <p className="text-primary_green-bold font-semibold">
                  QUAN LẠN
                </p>
                <p className="text-primary_green-bold font-thin">ECOTRIP</p>
              </div>
            </div>
          </Link>
          <p className="text-sm my-4">
            Chúng tôi luôn sẵn sàng giúp du khách khám phá Quan Lạn một cách
            trọn vẹn nhất
          </p>
          <h1 className="text-xl font-bold">Theo dõi chúng tôi</h1>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <Link href="https://www.facebook.com/supquanlan.travel">
              <Image alt="Facebook" src="/fb2.png" width={35} height={35} />
            </Link>
            <Link href="https://www.tiktok.com/@quanlanecotrip">
              <Image alt="Tiktok" src="/tiktok1.png" width={35} height={35} />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h1 className="text-xl font-bold mb-4">Liên hệ với chúng tôi</h1>
          <div className="flex items-start gap-2">
            <IoLocationSharp
              size={36}
              className="text-primary_green-bold mt-1"
            />
            <p className="text-sm">
              Địa chỉ: Thôn Thái Hòa, xã Quan Lạn, Vân Đồn, Quảng Ninh
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <FaPhoneSquareAlt size={18} className="text-primary_green-bold" />
              <h1 className="text-sm font-semibold">Liên hệ hotline:</h1>
            </div>
            <div className="ml-6 text-sm">
              <p>0399.171.866</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <IoMail size={18} className="text-primary_green-bold" />
            <h2 className="text-sm">quanlanecotrip@gmail.com</h2>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <IoGlobeOutline size={18} className="text-primary_green-bold" />
            <h2 className="text-sm">www.quanlanecotrip.vn</h2>
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h1 className="text-xl font-bold mb-4">Danh mục sản phẩm</h1>
          <div className="space-y-2 text-sm">
            <p>Combo du lịch Quan Lạn</p>
            <p>Tour trải nghiệm ngư dân</p>
            <p>Tổ chức sự kiện</p>
            <p>Dịch vụ chụp ảnh</p>
            <p>Khách sạn - Homestay</p>
          </div>
        </div>

        {/* Register Section */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-4">Đăng kí tour</h1>
          <div className="flex justify-center md:justify-start space-x-2">
            <Image alt="Zalo" src="/zalo.png" width={35} height={35} />
            <Image alt="WhatsApp" src="/whatapp.png" width={35} height={35} />
            <Image alt="Messenger" src="/mess.png" width={35} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
