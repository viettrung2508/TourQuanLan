import { FaFacebookF, FaPhoneSquareAlt } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoGlobeOutline, IoLocationSharp, IoMail } from "react-icons/io5";
import { MdMusicNote } from "react-icons/md";

export default function Footer() {
  return (
    <div className=" text-black font-thin pb-16 pt-9">
      <div className="grid grid-cols-12 gap-14 mx-auto max-w-screen-2xl">
        <div className="col-span-3">
          <div className="flex items-center gap-4">
            <img src="/logov.png" className="w-24 h-24" />
            <div>
              <p className="text-4xl text-primary_green-bold font-semibold text-nowrap">QUAN LẠN</p>
              <p className="text-3xl text-primary_green-bold font-thin text-nowrap">ECOTRIP</p>
            </div>
          </div>
          <p className=" text-sm mb-4 mt-3">
            Chúng tôi luôn sẵn sàng giúp du khách khám phá Quan Lạn một cách
            trọn vẹn nhất
          </p>
          <h1 className="text-xl font-bold">Theo dõi chúng tôi</h1>
          <div className="flex mt-2">
          <div className="w-10 h-10 flex justify-center items-center border-[1.5px] border-solid border-primary_green-bold rounded-full"><FaFacebookF className="text-primary_green-bold text-xl"/></div>
          <div className="w-10 h-10 flex justify-center items-center border-[1.5px] border-solid border-primary_green-bold rounded-full ml-3"><MdMusicNote className="text-primary_green-bold text-2xl"/></div>
          </div>
        </div>
        <div className="col-span-4 mt-2">
          <div>
            <h1 className=" text-2xl font-bold mb-4 ml-2">Liên hệ với chúng tôi</h1>
            <div className="flex mt-2 mb-4 items-center">
              <IoLocationSharp size={20} className="text-primary_green-bold self-start mt-1"/>
              <h2 className=" ml-2 text-lg">
                Địa chỉ: Thôn Thái Hòa, xã Quan Lạn, Vân Đồn, Quảng Ninh
              </h2>
            </div>
          </div>
          <div>
            <div className="flex mt-4 items-center">
              <FaPhoneSquareAlt size={18} className="text-primary_green-bold"/>
              <h1 className="text-lg ml-2">Liên hệ hotline:</h1>
            </div>
            <div className="ml-7 text-lg">
              <p>097.112.0000</p>
              <p>039.321.5161</p>
              <p>097.940.2888</p>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <IoMail size={18} className="text-primary_green-bold"/>
            <h2 className="ml-2 text-lg">Email</h2>
          </div>
          <div className="flex items-center mt-4">
            <IoGlobeOutline size={18} className="text-primary_green-bold" />
            <h2 className="ml-2 text-lg">www.quanlanecotrip.com.vn</h2>
          </div>
        </div>

       

        <div className="col-span-3 mt-2">
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
              <ImFacebook size={40} />
              <ImFacebook size={40} />
              <ImFacebook size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
