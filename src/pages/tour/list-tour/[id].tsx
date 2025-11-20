import { IDetailTourBlog } from "@/common/tour/interface";
import { Tour_BLOG } from "@/common/tour/constants";
import SliderView from "@/components/slider-view";
import { FaBusAlt, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

export default function BlogTour({ blog }: { blog?: IDetailTourBlog }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full bg-primary_bg pb-36 pt-10 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        {/* Heading */}
        <div>
          {blog?.heading.map((item, index) => (
            <p
              key={index}
              className="text-center text-primary_green text-3xl font-bold"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* Section 01 - Thông tin tour */}
          <div>
            <div className="flex items-center gap-2 text-green-700 font-semibold text-xl">
              <FaBusAlt />
              <p>01 - Thông tin tour</p>
            </div>
          </div>

          {/* Section 02 - Thời gian */}
          <div>
            <div className="flex items-center gap-2 text-green-700 font-semibold text-xl">
              <FaCalendarAlt />
              <p>02 - Thời gian</p>
            </div>
            <p className="mt-2 ml-8 text-green-700 font-medium">Khởi hành: Hàng ngày</p>
          </div>

          {/* Section 03 - Lịch trình tour */}
          <div>
            <div className="flex items-center gap-2 text-green-700 font-semibold text-xl">
              <FaClipboardList />
              <p>03 - Lịch trình tour</p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-green-700"
              >
                {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>
            {isExpanded && (
              <div>
                {blog?.body.map((item, index) => (
                  <div key={index} className="ml-8 mt-4">
                    <p className="text-green-800 font-bold text-lg">{item?.title}</p>
                    {item?.content?.map((content, iContent) => (
                      <div key={iContent}>
                        <p className="whitespace-pre-line mt-2 text-sm text-gray-800 leading-relaxed">{content?.text}</p>
                        {!!content?.image && (
                          <img
                            className="w-full rounded-lg my-4"
                            src={content.image}
                            alt="tour"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 04 - Giá tour */}
          <div>
            <div className="flex items-center gap-2 text-green-700 font-semibold text-xl">
              <FaBusAlt />
              <p>04 - Giá tour đã bao gồm & chưa bao gồm</p>
            </div>

            <div className="mt-4 border border-green-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 text-white text-sm font-semibold">
                <div className="bg-green-800 px-4 py-2 flex items-center gap-2">
                  <span className="text-white text-lg">✔️</span>
                  Giá tour đã bao gồm
                </div>
                <div className="bg-green-800 px-4 py-2 flex items-center gap-2">
                  <span className="text-white text-lg">❌</span>
                  Giá tour chưa bao gồm
                </div>
              </div>
              <div className="grid grid-cols-2 bg-yellow-50 text-sm text-gray-800">
                <ul className="list-disc p-4 space-y-1">
                  <li>Xe đưa đón có máy lạnh theo chương trình</li>
                  <li>Hướng dẫn viên tiếng anh và tiếng việt theo chương trình</li>
                  <li>Ăn trưa tại nhà hàng</li>
                  <li>Vé thắng cảnh các điểm trong chương trình</li>
                </ul>
                <ul className="list-disc p-4 space-y-1">
                  <li>Đồ uống</li>
                  <li>Bảo hiểm</li>
                  <li>Chi phí cá nhân và các chi phí nằm ngoài chương trình</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-20">
          <SliderView />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Tour_BLOG.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const blog = Tour_BLOG.find((item) => item.id === params.id);
  return { props: { blog: !!blog ? blog.detail : null } };
}
