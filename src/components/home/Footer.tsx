import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoGlobeOutline, IoLocationSharp, IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div className=" text-black font-thin pb-16">
      <div className="grid grid-cols-10 mx-auto max-w-screen-2xl">
        <div className="col-span-2">
          <p className=" text-sm mb-4">
            Chúng tôi luôn sẵn sàng giúp du khách khám phá Quan Lạn một cách
            trọn vẹn nhất
          </p>
          <h1 className="text-xl font-bold">Theo dõi chúng tôi</h1>
        </div>
        <div className="col-span-4 ">
          <div>
            <h1 className=" text-xl font-bold mb-4">Liên hệ với chúng tôi</h1>
            <div className="flex mt-2 mb-4">
              <IoLocationSharp size={20} />
              <h2 className=" ml-2 text-sm">
                Địa chỉ: Thôn Thái Hòa, xã Quan Lạn, Vân Đồn, Quảng Ninh
              </h2>
            </div>
          </div>
          <div>
            <div className="flex my-4">
              <FaPhoneSquareAlt size={18} />
              <h1 className=" ml-2">Liên hệ hotline:</h1>
            </div>
            <div className="ml-7">
              <p>097.112.0000</p>
              <p>039.321.5161</p>
              <p>097.940.2888</p>
            </div>
          </div>
          <div className="flex">
            <IoMail size={18} />
            <h2 className="ml-2">Email</h2>
          </div>
          <div className="flex">
            <IoGlobeOutline size={18} />
            <h2 className="ml-2">www.quanlanecotrip.com.vn</h2>
          </div>
        </div>

       

        <div className="col-span-2">
          <div>
            <h1 className=" text-xl font-bold mb-4">Danh mục sản phẩm</h1>
            <div className="space-y-2">
              <h2>Combo du lịch Quan Lạn</h2>
              <h2>Tour trải nghiệm ngư dân</h2>
              <h2>Tổ chức sự kiện</h2>
              <h2>Dịch vụ chụp ảnh</h2>
              <h2>Khách sạn - Homestay</h2>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div>
            <h1 className="text-xl font-bold mb-4">Đăng kí tour</h1>
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <ImFacebook size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
