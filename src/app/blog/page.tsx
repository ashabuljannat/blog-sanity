import Cards from "../components/Card";
import { fetchTutorials } from "../sanity/api";

const Tutorials = async () => {
  const res = await fetchTutorials(`*[_type == "blog"]`);

  return (
    <>
      <section className="text-gray-600 px-3 flex flex-col items-center">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            All Blogs
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1.5">
          {res.map((val: any, index: number) => {
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
              id={_id}
                url={url}
                image={image}
                content={content}
                author={author}
                description={description}
                category={category}
                title={title}
                launchAt={launchAt}
                dataset="blog"
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tutorials;
