export default function Hero() {
  return (
    <div className="w-full">
      <div className="bg-[url('/bg.jpg')] h-[500px] md:h-[600px] lg:h-[700px] w-full bg-cover flex items-center justify-center flex-col gap-6 md:gap-8 lg:gap-10 text-center">
        <p className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold">
          QUAN LẠN ECOTRIP
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold uppercase">
          Về chúng tôi{" "}
        </p>
      </div>
    </div>
  );
}
