import { useRouter } from "next/router"
import { EXPERIENCE_BLOG } from "../common/constants";
import { EKeyExperienceBlog, IDetailExperienceBlog } from "../common/interfaces";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ChipTag from "../common/components/ChipTag";
import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function BlogExperience({blog}: {blog?: IDetailExperienceBlog}) {
  return (
    <div className="w-full bg-primary_bg py-36 flex justify-center">
      <div className="w-full max-w-screen-xl">
        <div>
          {blog?.heading.map((item, index) => (
            <p key={index} className="text-center text-primary_green text-3xl font-bold">{item}</p>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4">
          {blog?.body.map((item, index) => (
            <div key={index}>
              <p className="font-bold">{item?.title}</p>
              {item?.content?.map((content, iContent) => (
                <div key={iContent}>
                  <p className="whitespace-pre-line">{content?.text}</p>
                  {!!content?.image && <img className="w-full h-auto object-cover mb-4" src={content.image} alt="ảnh Quan Lạn"/>}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-14">
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 bg-label rounded-full" />
            <p className="text-label">KIẾN THỨC HỮU ÍCH CHO BẠN</p>
          </div>
          <div className="text-3xl text-primary_green font-bold">Kinh nghiệm du lịch</div>
          <div className="flex justify-center mt-5">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation={true}
              loop={true}
            >
              {Array(7).fill(0).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-t-2xl w-[100%]">
                    <img
                      src="/test.jpg"
                      alt="Picture of the author"
                      className="object-cover h-80 w-full rounded-t-2xl" // Đảm bảo ảnh giữ tỷ lệ
                    />
                    <div className="p-3 flex flex-col w-full">
                      <ChipTag label="Kinh nghiệm du lịch" Icon={FaLocationArrow} />
                      <p className="line-clamp-1 mt-2 font-bold pr-10">
                        Khám phá đảo Quan Lạn với các địa điểm tham quan nổi tiếng
                      </p>
                      <div className="mt-8 flex gap-1 self-end items-center cursor-pointer">
                        <span className="text-label">CHI TIẾT</span>
                        <MdKeyboardArrowRight className="text-label"/>
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = EXPERIENCE_BLOG.map((item) => ({
    params: { id: item.id },
  }))
 
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: {params: {id: string}}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const blog = EXPERIENCE_BLOG.find(item => item.id === params.id)
  
  // Pass post data to the page via props
  return { props: { blog: !!blog ? blog.detail : null} }
}