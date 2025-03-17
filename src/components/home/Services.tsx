export function Services() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="my-4 flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-6 lg:gap-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-18 h-16 lg:w-28 lg:h-28">
            <img alt="" src="/1.png" className="object-contain w-full h-full" />
          </div>
          <h1 className="text-lg lg:text-3xl">Hoàn hủy linh hoạt</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-24 h-16 lg:w-28 lg:h-28">
            <img alt="" src="/2.png" className="object-contain w-full h-full" />
          </div>
          <h1 className="text-lg lg:text-3xl">Dịch vụ xuất sắc</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-24 h-16 lg:w-32 lg:h-28">
            <img alt="" src="/3.png" className="object-contain w-full h-full" />
          </div>
          <h1 className="text-lg lg:text-3xl">Trải nghiệm tuyệt vời</h1>
        </div>
      </div>
    </div>
  );
}
