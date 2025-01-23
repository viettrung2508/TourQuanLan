import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    link: "/experience",
  },
];

export default function Navbar() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpacity, setIsOpacity] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if(window.scrollY === 0) {
        setIsOpacity(true);
        return;
      } 
      setIsOpacity(false);
    }
  }, []);

  return (
    <div className={`flex justify-center shadow-md bg-gray-100 p-4 fixed top-0 left-0 right-0 ${isOpacity ? 'bg-opacity-90' : 'bg-opacity-100'} z-10`} ref={ref}>
      <div className="flex max-w-screen-2xl items-center">
        <div className="flex items-center w-[168px] gap-2">
          <img src="/logov.png" className="w-12 h-12" />
          <div>
            <p className="text-primary_green-bold font-semibold text-nowrap">QUAN LẠN</p>
            <p className="text-primary_green-bold font-thin text-nowrap">ECOTRIP</p>
          </div>
        </div>
        <div className="flex justify-between flex-1">
          {header.map((item) => (
            <Link key={item.title} href={item.link}>
              <div
                className={`text-base text-gray-700 hover:text-blue-500 px-4 py-2 ${
                  router.pathname === item.link
                    ? "font-semibold text-blue-500 border-b-2 border-blue-500"
                    : "font-normal"
                }`}
              >
                {item.title}
              </div>
            </Link>
          ))}
          <button className="border border-1 rounded-2xl border-black px-8 py-1">Liên hệ</button>
        </div>
      </div>
    </div>
  );
}
