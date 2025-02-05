export default function Hero() {
  return (
    <div className=" relative">
      <img src="/bg.jpg" className="h-[700px] w-full object-cover" />
      <div className="absolute top-24 text-right text-white font-bold right-10 w-1/2 ">
        <h1>Chúng tôi là</h1>
        <p>
          {" "}
          Mục tiêu của chúng tôi là giúp du khách có những trải nghiệm chân thật
          và sâu sắc hơn về cuộc sống trên đảo, đồng thời góp phần bảo vệ và
          phát triển bền vững cho cộng đồng địa phương. Chúng tôi có thể tổ chức
          các tour tham quan, hoạt động trải nghiệm văn hóa, và hướng dẫn về các
          điểm đến tự nhiên đẹp như bãi biển Minh Châu, Eo Gió, hay các làng
          chài truyền thống.
        </p>
        <h2>
          Tự hào là đơn vị bản địa uy tín tại Quan Lạn giúp khách hàng nâng tầm
          trải nghiệm
        </h2>
      </div>
    </div>
  );
}
