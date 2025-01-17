import Image from "next/image";
import localFont from "next/font/local";
import { HeroScrollDemo } from "../home/HeroScrollDemo";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { DirectionAwareHoverDemo } from "./DirectionAwareHoverDemo";
const items = [
  {
    imgSrc: "/test.jpg",
    title: "Sản phẩm",
    description:
      "Các tour gắn kết con người với vẻ đẹp của Quan Lạn, đem lại những trải nghiệm tuyệt vời cho khách hàng.",
    buttonText: "Xem thêm tour",
  },
  {
    imgSrc: "/test.jpg",
    title: "Con người",
    description:
      "Đội ngũ hướng dẫn viên và media nhiệt tình, tận tâm sẽ cho khách những kỷ niệm khó quên ",
    buttonText: "Con người Ecotrip",
  },
  {
    imgSrc: "/test.jpg",
    title: "Review của khách hàng",
    description:
      "Các di tích lịch sử và văn hóa nổi bật mà bạn không thể bỏ qua.",
    buttonText: "Xem thêm tour",
  },
  {
    imgSrc: "/test.jpg",
    title: "Đối tác",
    description:
      "Với kinh nghiệm đã có, hợp tác cùng chúng tôi để đem đến sự hài lòng cho khách hàng",
    buttonText: "Hợp tác",
  },
];
export default function Content() {
  return (
    <div className="max-w-screen-2xl	 mx-auto">
      <div className="grid grid-cols-8 border-b-2 border-black">
        <div className="col-span-6 flex flex-col items-center">
          <h1 className="text-4xl italic">
            Hành trình <span className="text-[#FF6E00]">khám phá Quan Lạn</span>{" "}
            cùng <span className="text-[#FF6E00]">team bản địa</span> thân thiện
          </h1>
        </div>
        <div className="col-span-2">
          <div className="overflow-hidden w-52 h-52">
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 pt-10">
        <div className="col-span-3">
          <h1 className="text-[#FF6E00] text-3xl font-bold mb-4">
            Tự hào là đơn vị bản địa uy tín tại Quan Lạn giúp khách hàng nâng
            tầm trải nghiệm
          </h1>
          <p className="text-2xl font-normal">
            {" "}
            Đội ngũ bản địa ở Quan Lạn là những người dân địa phương có kiến
            thức sâu sắc về văn hóa, lịch sử và phong cảnh thiên nhiên nơi đây.
            Chúng tôi không chỉ là người bảo tồn và lan truyền những giá trị văn
            hóa đặc trưng của Quan Lạn mà còn là những hướng dẫn viên đầy tâm
            huyết, sẵn sàng chia sẻ các câu chuyện độc đáo về vùng đất này với
            khách du lịch. Với sự am hiểu về phong tục tập quán, cũng như kiến
            thức phong phú về địa lý, chúng tôi luôn sẵn sàng giúp du khách khám
            phá Quan Lạn một cách trọn vẹn nhất, từ những bãi biển hoang sơ, cồn
            cát tuyệt đẹp đến các di tích lịch sử có giá trị văn hóa cao.
          </p>
        </div>
        <div className="col-span-2">
          <div className="w-full h-96 overflow-hidden rounded-xl">
            <Image
              src="/test.jpg"
              width={530}
              height={300}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl">
          <span className="text-[#FF6E00]">3 year</span> and more...
        </h1>
        <p className="text-2xl">
          {" "}
          Qua hơn 3 năm hoạt động, là đơn vị có trụ sở chính tại Quan Lạn cùng
          đội ngũ nhân viên là những người am hiểu du lịch địa phương, cũng như
          đội ngũ HDV giàu trải nghiệm, nhiệt tình, tận tâm với khách hàng. Quan
          Lạn Ecotrip tự tin có đủ kinh nghiệm và năng lực để phục vụ khách hàng
          một cách tốt nhất.
        </p>
      </div>
      <HeroScrollDemo />
      <div>
        <h1 className="text-4xl">
          Niềm <span className="text-[#FF6E00]">tự hào</span> của chúng tôi
        </h1>
        <div className="grid grid-cols-8">
          {items.map((item, index) => (
            <div className="col-span-2 p-4" key={index}>
              <div className="overflow-hidden rounded-xl w-full">
                <DirectionAwareHoverDemo />
              </div>
              <h1 className="mt-4 text-xl text-left font-semibold border-b-2 border-black">
                {item.title}
              </h1>
              <p className="text-gray-600">{item.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
