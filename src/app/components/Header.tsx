import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-100 border-b-2 border-solid border-b-[#6866d5] mb-3">
      <div className="container mx-auto flex p-5 flex-col md:flex-row items-center justify-between">
        <Link className="flex items-center " href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-[24px] font-semibold ">Alif | Blogs</span>
        </Link>
        <nav className="flex flex-wrap items-center text-base justify-center mt-1">
          <Link
            className="mr-5 hover:text-indigo-400 cursor-pointer  transition-all duration-[5ms]"
            href="https://ashabuljannat.netlify.app/"
          >
            Portfolio
          </Link>
          <Link
            className="mr-5 hover:text-indigo-400 cursor-pointer  transition-all duration-[5ms]"
            href="/blog"
          >
            Blogs
          </Link>
          <Link
            className="mr-5 hover:text-indigo-400  cursor-pointer  transition-all duration-[5ms]"
            href="/tutorials"
          >
            Tutorials
          </Link>
          <Link
            className="mr-5 hover:text-indigo-400  cursor-pointer transition-all duration-[5ms]"
            href="/contact"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
