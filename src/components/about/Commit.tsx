export default function Commit() {
  return (
    <div className="w-full">
      <div className="bg-[url('/hero9.jpg')] h-[800px] w-full object-cover bg-cover flex items-center justify-center flex-col gap-10"></div>
      <div className="bg-primary_bg pt-5 pb-10 -mt-32 rounded-t-[40px] ">
        <div className="text-center pt-10">
          <h1 className="text-primary_green font-bold text-4xl  uppercase mt-1 mb-10">
            Đội ngũ nhân sự{" "}
          </h1>
          <p className="mb-6">
            Một đội ngũ nhân sự chuyên nghiệp không chỉ mang lại trải nghiệm tốt
            nhất cho du <br /> khách mà còn góp phần nâng cao uy tín và thương
            hiệu của đơn vị du lịch.
          </p>
        </div>
        <div className="flex gap-10 justify-center pb-10">
          <div className="bg-white rounded-lg text-center pb-6">
            <img src="/huy.jpg" className="w-72 h-72 rounded-xl object-cover" />
            <h1 className="text-xl font-bold">Hoàng Quốc Việt</h1>
            <h1>Founder & C.E.O</h1>
            <p>Liên hệ: 0971120000</p>
          </div>
          <div className="bg-white rounded-lg text-center pb-6">
            <img
              src="/viet.jpg"
              className="w-72 h-72 rounded-xl object-cover"
            />
            <h1 className="text-xl font-bold">Hoàng Quốc Việt</h1>
            <h1>Founder & C.E.O</h1>
            <p>Liên hệ: 0393215161</p>
          </div>
          <div className="bg-white rounded-lg text-center pb-6">
            <img src="/tri.jpg" className="w-72 h-72 rounded-xl object-cover" />
            <h1 className="text-xl font-bold">Hoàng Quốc Việt</h1>
            <h1>Founder & C.E.O</h1>
            <p>Liên hệ: 0979402888</p>
          </div>
        </div>
      </div>
    </div>
  );
}
