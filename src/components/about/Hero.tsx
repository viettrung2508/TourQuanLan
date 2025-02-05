export default function Hero() {
  return (
    <div className=" relative">
      <img src="/bg.jpg" className="h-[700px] w-full object-cover" />
      <div className="absolute top-10 text-right text-white font-bold right-10 w-1/2 ">
        <h1 className="text-6xl">Chúng tôi là</h1>
        <img
          src="5.png"
          className="absolute   w-[1200px] left-[260px] top-14 h-full object-contain"
        />
      </div>
    </div>
  );
}
