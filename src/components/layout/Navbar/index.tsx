import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const header = [
  { title: "VỀ CHÚNG TÔI", link: "/about" },
  { title: "TOUR QUAN LẠN", link: "/tour/list-tour" },
  // { title: "DỊCH VỤ LƯU TRÚ", link: "/" },
  { title: "TRẢI NGHIỆM THỰC TẾ", link: "/ticket" },
  { title: "KINH NGHIỆM DU LỊCH", link: "/experience" },
];

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpacity, setIsOpacity] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpacity(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` top-0 left-0 right-0 z-50 bg-white shadow-md p-4 transition-all duration-300 ${
        isOpacity ? "bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center w-[168px] gap-2">
            <Image alt="logo" src="/logov.png" width={50} height={50} />
            <div>
              <p className="text-primary_green-bold font-semibold text-sm">
                QUAN LẠN
              </p>
              <p className="text-primary_green-bold font-thin text-sm">
                ECOTRIP
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-20">
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
        </div>

        {/* Mobile Menu Button */}
        <div className="relative md:hidden">
          <button
            className="flex items-center p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              {header.map((item) => (
                <Link key={item.title} href={item.link}>
                  <div
                    className={`text-sm text-gray-700 hover:text-blue-500 px-6 py-3 border-b ${
                      router.pathname === item.link
                        ? "font-semibold text-blue-500"
                        : "font-normal"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
