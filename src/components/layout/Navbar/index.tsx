import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const header = [
  {
    title: "VỀ CHÚNG TÔI",
    link: "/about",
  },
  {
    title: "TOUR QUAN LẠN",
    link: "tour/list-tour",
  },
  {
    title: "DỊCH VỤ LƯU TRÚ",
    link: "/",
  },
  {
    title: "TRẢI NGHIỆM THỰC TẾ",
    link: "/ticket",
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
      if (window.scrollY === 0) {
        setIsOpacity(true);
        return;
      }
      setIsOpacity(false);
    };
  }, []);

  return (
    <div
      className={`flex justify-center shadow-md bg-white p-4 fixed top-0 left-0 right-0 ${
        isOpacity ? "bg-opacity-90" : "bg-opacity-100"
      } z-50`}
      ref={ref}
    >
      <div className="flex max-w-screen-2xl items-center">
        <Link href="/">
          <div className="flex items-center w-[168px] gap-2">
            <Image alt="logo" src="/logov.png" width={50} height={50} />
            <div>
              <p className="text-primary_green-bold font-semibold text-nowrap">
                QUAN LẠN
              </p>
              <p className="text-primary_green-bold font-thin text-nowrap">
                ECOTRIP
              </p>
            </div>
          </div>
        </Link>
        <div className="flex justify-between flex-1">
          {header.map((item) => (
            <Link key={item.title} href={item.link}>
              <div
                className={`text-sm text-gray-700 hover:text-blue-500 px-4 py-2 ${
                  router.pathname === item.link
                    ? "font-semibold text-blue-500 border-b-2 border-blue-500"
                    : "font-normal"
                }`}
              >
                {item.title}
              </div>
            </Link>
          ))}
          <button className="border border-1 rounded-2xl border-black px-8 py-1">
            Liên hệ
          </button>
        </div>
      </div>
    </div>
  );
}
