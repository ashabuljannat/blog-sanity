import { fetchTutorials } from "@/app/sanity/api";
import { urlFor } from "@/app/sanity/client";
import moment from "moment";
import PortableText from "react-portable-text";

const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  const res = await fetchTutorials(`*[_type == "blog" && _id =="${id}"]`);
  // console.log(11, res[0].content);

  return (
    <>
      <section className="bg-[#d4d5d6] py-5 px-10 rounded-lg">
        {res.map((res: any, i: number) => {
          return (
            <div
              className="py-10 flex-wrap md:flex-nowrap bg-[white] px-7 rounded shadow-sm"
              key={i}
            >
              <img
                className="w-auto object-cover object-center max-h-[500px]"
                src={urlFor(res?.image).url()}
                alt="blog"
              />

              <h2 className="text-2xl font-medium text-gray-900 my-2">
                {res.title}
              </h2>

              <div className="date">
                <h6> {moment(res.launchAt).format("MMM Do YYYY")}</h6>
                <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1 flex">
                  {res.category.map((tag: any, i: any) => {
                    return (
                      <div className="ml-2" key={i}>
                        #{tag.Category}
                      </div>
                    );
                  })}
                </h2>
              </div>

              <div className="author flex items-center pr-2 ml-2 my-2">
                <img src={urlFor(res.author.authImage).url()} alt="blog image"/>
                <p>
                  Posted by<span> {res.author.authName}</span>
                </p>
              </div>

              <p className="leading-relaxed  w-[80%] mx-auto mt-5">
                {res?.description}
              </p>

              <div className="py-3">
                <PortableText
                  content={res.content}
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    normal: (props: any) => <h1 className=" ml-4" {...props} />,
                    h1: (props: any) => (
                      <h1 className="text-2xl font-bold my-3" {...props} />
                    ),
                    h2: (props: any) => (
                      <h1 className="text-xl font-bold my-2 ml-1" {...props} />
                    ),
                    h3: (props: any) => (
                      <h1 className="text-lg font-bold my-2 ml-2" {...props} />
                    ),
                    h4: (props: any) => (
                      <h1
                        className="text-[16px] font-bold my-1 ml-3"
                        {...props}
                      />
                    ),
                    blockquote: (props: any) => (
                      <h1
                        className="text-[16px] font-bold my-1 border-l-4 border-indigo-500 ml-2 pl-2"
                        {...props}
                      />
                    ),
                    // em: (props: any) => (
                    //   <h1 className="text-[16px] italic my-1 " {...props} />
                    // ),
                    code: (props: any) => (
                      <h1
                        className="text-[16px] my-1 bg-gray-400 p-2 ml-2 w-fit rounded selection:bg-fuchsia-300 selection:text-fuchsia-900"
                        {...props}
                      />
                    ),
                    ul: ({ children }: any) => (
                      <li className="ml-6 list-disc list-outside">
                        {children}
                      </li>
                    ),
                    ol: ({ children }: any) => (
                      <li className="ml-6 list-decimal list-outside">
                        {children}
                      </li>
                    ),
                    link: ({ href, children }: any) => (
                      <a href={href} className="text-blue-500 hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                />
              </div>

              {res.url && (
                <a href={`${res.url}`} target="_blank">
                  Source: {res.url}
                </a>
              )}
              {/* <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-indigo-400 first-letter:mr-3 first-letter:float-left mt-3">
                Well, let me tell you something, funny boy. Y'know that little
                stamp, the one that says "New York Public Library"? Well that
                may not mean anything to you, but that means a lot to me. One
                whole hell of a lot.
              </p> */}
            </div>
          );
        })}
      </section>
    </>
  );
};
export default BlogContent;
