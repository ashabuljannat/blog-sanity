import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex px-5 pl-8  md:flex-row flex-col items-center my-6 text-gray-300">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to My Tech Blog
        </h1>
        <p className="mb-8 leading-relaxed">
          In this blog, you can expect to find a diverse range of topics,
          including programming languages, web development, software
          engineering, data science, artificial intelligence, and much more. We
          believe that technology is constantly evolving, and staying up-to-date
          with the latest trends and advancements is essential for any aspiring
          coder.
        </p>
        <div className="flex justify-center heroSec">
          <Link href="/blog">
            <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
              Blogs
            </button>
          </Link>
          <Link href="/tutorials">
            <button className="ml-4  inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Tutorials
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded custom-clip-path"
          alt="hero"
          src="/hero1.jpg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
