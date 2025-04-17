export default function Commit() {
  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="bg-[url('/hero9.jpg')] h-[600px] sm:h-[700px] lg:h-[800px] w-full bg-cover bg-center flex items-center justify-center flex-col gap-10"></div>

      {/* Content Section */}
      <div className="bg-primary_bg pt-10 pb-10 -mt-24 sm:-mt-28 md:-mt-32 rounded-t-[32px] sm:rounded-t-[40px] px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-primary_green font-bold text-3xl sm:text-4xl uppercase mb-6">
            Đội ngũ nhân sự
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Một đội ngũ nhân sự chuyên nghiệp không chỉ mang lại trải nghiệm tốt
            nhất cho du khách mà còn góp phần nâng cao uy tín và thương hiệu của
            đơn vị du lịch.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-4 place-items-center">
          {/* Member 1 */}
          <div className="bg-white rounded-xl text-center p-6 shadow-md w-full max-w-sm">
            <img
              src="/huy.jpg"
              className="w-full h-72 rounded-xl object-cover mb-4"
              alt="Hoàng Quốc Việt"
            />
            <h1 className="text-xl font-bold">Hoàng Quốc Việt</h1>
            <h2 className="text-gray-600">Founder & C.E.O</h2>
            <p className="text-sm text-gray-700 mt-1">Liên hệ: 0971120000</p>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-xl text-center p-6 shadow-md w-full max-w-sm">
            <img
              src="/viet.jpg"
              className="w-full h-72 rounded-xl object-cover mb-4"
              alt="Hoàng Quốc Việt"
            />
            <h1 className="text-xl font-bold">Hoàng Quốc Việt</h1>
            <h2 className="text-gray-600">Founder & C.E.O</h2>
            <p className="text-sm text-gray-700 mt-1">Liên hệ: 0393215161</p>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-xl text-center p-6 shadow-md w-full max-w-sm">
            <img
              src="/tri.jpg"
              className="w-full h-72 rounded-xl object-cover mb-4"
              alt="Hoàng Quốc Việt"
            />
            <h1 className="text-xl font-bold">Hoàng Quốc Việt</h1>
            <h2 className="text-gray-600">Founder & C.E.O</h2>
            <p className="text-sm text-gray-700 mt-1">Liên hệ: 0979402888</p>
          </div>
        </div>
      </div>
    </div>
  );
}
