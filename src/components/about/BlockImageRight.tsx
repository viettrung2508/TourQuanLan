export default function BlockImageRight() {
  return (
    <div className="w-full">
      {/* Background Image Section */}
      <div className="bg-[url('/hero13.jpg')] bg-cover bg-center py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div className="w-full max-w-xl">
              <div className="text-2xl sm:text-3xl md:text-4xl text-[#138140] mb-6 font-bold border py-4 text-center rounded-full bg-[#ffe49e]">
                CAM KẾT CHẤT LƯỢNG
              </div>
              <p className="text-white text-2xl sm:text-3xl md:text-4xl leading-snug">
                Trải nghiệm, sự hài lòng của khách hàng là điều quan trọng tiên
                quyết
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src="/team1.jpg"
                className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover rounded-xl"
                alt="Cam kết chất lượng"
              />
            </div>
          </div>

          {/* Bottom Paragraph */}
          <div className="mt-10">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              Trải nghiệm và sự hài lòng của khách hàng là ưu tiên hàng đầu mà
              chúng tôi luôn hướng tới. Từng chi tiết trong dịch vụ đều được
              thiết kế để mang đến cảm giác thoải mái, thú vị và đáng nhớ. Chúng
              tôi tin rằng, khi khách hàng thực sự hài lòng, không chỉ họ sẽ
              quay lại, mà còn là sợi dây kết nối văn hóa, trải nghiệm và giá
              trị của chúng tôi đến gần hơn với cộng đồng. Sự quan tâm tận tâm
              và chất lượng dịch vụ đồng đều là cam kết của chúng tôi để mang
              lại sự hài lòng tối đa cho mỗi khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
