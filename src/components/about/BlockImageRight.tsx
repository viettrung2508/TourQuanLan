export default function BlockImageRight() {
  return (
    <div className="w-full">
      <div className="bg-[url('/hero13.jpg')] h-[1000px]  object-cover bg-cover">
        <div className="max-w-screen-2xl mx-auto ">
          <div className=" grid grid-cols-2 gap-10 py-20">
            <div className="col-span-1 w-[470px]">
              <div className="text-4xl text-[#138140] mb-10  font-bold border  py-4 text-center rounded-full bg-[#ffe49e]">
                CAM KẾT CHẤT LƯỢNG
              </div>
              <p className="text-white text-5xl">
                Trải nghiệm, sự hài lòng của khách hàng là điều quan trọng tiên
                quyết
              </p>
            </div>
            <div className="col-span-1">
              <img src="/team1.jpg " className="w-full h-[550px] rounded-xl" />
            </div>
          </div>
          <p className="text-2xl text-white">
            Trải nghiệm và sự hài lòng của khách hàng là ưu tiên hàng đầu mà
            chúng tôi luôn hướng tới. Từng chi tiết trong dịch vụ đều được thiết
            kế để mang đến cảm giác thoải mái, thú vị và đáng nhớ. Chúng tôi tin
            rằng, khi khách hàng thực sự hài lòng, không chỉ họ sẽ quay lại, mà
            còn là sợi dây kết nối văn hóa, trải nghiệm và giá trị của chúng tôi
            đến gần hơn với cộng đồng. Sự quan tâm tận tâm và chất lượng dịch vụ
            đồng đều là cam kết của chúng tôi để mang lại sự hài lòng tối đa cho
            mỗi khách hàng.
          </p>
        </div>
      </div>
    </div>
  );
}
