export default function BlockImageRight() {
  return (
    <div className="w-full">
      <div className="bg-[url('/bg.jpg')] h-[700px] w-full object-cover bg-cover flex justify-center items-center">
        <div className="">
          <div className="">CAM KẾT CHẤT LƯỢNG</div>
          <p>
            Trải nghiệm, sự hài lòng của khách hàng là điều quan trọng tiên
            quyết
          </p>
        </div>
        <div className="">
          <img src="/team1.jpg " className="w-96 h-[500px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
