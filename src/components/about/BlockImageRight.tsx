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
              <p className="text-white text-xl sm:text-2xl md:text-3xl leading-snug">
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
        </div>
      </div>
    </div>
  );
}
