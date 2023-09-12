import HeroSection from "./components/HeroSection";
import Cards from "./components/Card";
import { fetchTutorials } from "./sanity/api";


export default async function Home() {
  const blogRes = await fetchTutorials(`*[_type == "blog"]`);
  blogRes.length = 6; //latest 3 blogs
  const tutorialRes = await fetchTutorials(`*[_type == "tutorial"]`);
  tutorialRes.length = 6; //latest 3 blogs
  // console.log(res)

  return (
    <>
      <HeroSection />
      <div className="popular-courses text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <div className="w-16 h-[6px] bg-indigo-500" />
          </div>
          <h3 className="text-4xl font-semibold title-font text-gray-900 mt-4 text-center">
            Popular Blogs
          </h3>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-2 w-[80%]  mx-auto bg-[#353b3f]">
          {blogRes.map((val: any,index: number) => {
            const {
              _id,
              title,
              image,
              content,
              url,
              author,
              description,
              category,
              launchAt,
            } = val;

            return (
              <Cards
              key={index}
                dataset="blog"
                id={index}
                url={url}
                image={image}
                content={content}
                author={author}
                description={description}
                category={category}
                title={title}
                launchAt={launchAt}
              />
            );
          })}
        </div>
      </div>

      <div className="popular-courses text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <div className="w-16 h-[6px] bg-indigo-500" />
          </div>
          <h3 className="text-4xl font-semibold title-font text-gray-900 mt-4 text-center">
            Popular Tutorials
          </h3>
        </div>

        <div className="flex h-[400px] w-[90%] pt-7 m-auto overflow-auto bg-[#353b3f]">
          {tutorialRes.map((val: any,index: number) => {
            const {
              _id,
              title,
              image,
              content,
              url,
              author,
              description,
              category,
              launchAt,
            } = val;

            return (
              <Cards
              key={index}
                id={index}
                dataset="tutorials"
                url={url}
                image={image}
                content={content}
                author={author}
                description={description}
                category={category}
                title={title}
                launchAt={launchAt}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
