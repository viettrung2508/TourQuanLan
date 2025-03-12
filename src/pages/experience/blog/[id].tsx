import { IDetailExperienceBlog } from "@/common/experience/interface";
import { EXPERIENCE_BLOG } from "../../../common/experience/constants";
import SliderView from "@/components/slider-view";

export default function BlogExperience({
  blog,
}: {
  blog?: IDetailExperienceBlog;
}) {
  return (
    <div className="w-full bg-primary_bg py-36 flex justify-center">
      <div className="w-full max-w-screen-xl">
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
        <div className="mt-12 flex flex-col gap-4">
          {blog?.body.map((item, index) => (
            <div key={index}>
              <p className="font-bold">{item?.title}</p>
              {item?.content?.map((content, iContent) => (
                <div key={iContent}>
                  <p className="whitespace-pre-line">{content?.text}</p>
                  {!!content?.image && (
                    <img
                      className="w-full px-12 py-4 h-auto object-cover mb-4"
                      src={content.image}
                      alt="ảnh Quan Lạn"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-14">
          <SliderView />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = EXPERIENCE_BLOG.map((item) => ({
    params: { id: item.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const blog = EXPERIENCE_BLOG.find((item) => item.id === params.id);

  // Pass post data to the page via props
  return { props: { blog: !!blog ? blog.detail : null } };
}
