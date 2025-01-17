import { useRouter } from "next/router";
import Link from "next/link";

const header = [
  {
    title: "VỀ CHÚNG TÔI",
    link: "/about",
  },
  {
    title: "TOUR QUAN LẠN",
    link: "/",
  },
  {
    title: "DỊCH VỤ LƯU TRÚ",
    link: "/registration",
  },
  {
    title: "TRẢI NGHIỆM THỰC TẾ",
    link: "/get-involved",
  },
  {
    title: "DỊCH VỤ KHÁC",
    link: "/advisors",
  },
  {
    title: "KINH NGHIỆM DU LỊCH",
    link: "/winners-2023",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 p-4">
      <div className="flex max-w-screen-2xl mx-auto justify-between items-center">
        <div>
          <img src="logov.png" className="w-10 h-10" />
        </div>
        <div className="flex space-x-12">
          {header.map((item) => (
            <Link key={item.title} href={item.link}>
              <div
                className={`text-gray-700 hover:text-blue-500 px-3 py-2 ${
                  router.pathname === item.link
                    ? "font-semibold text-blue-500 border-b-2 border-blue-500"
                    : "font-normal"
                }`}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
        <button className="border border-1 rounded-2xl border-black px-8 py-1">Liên hệ</button>
      </div>
    </div>
  );
}
