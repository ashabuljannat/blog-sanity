import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2023 ashabul jannat | blogs
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://www.linkedin.com/in/2alif-ashabuljannat-13981b1ba/">
            <BiLogoLinkedin
              size="20px"
              className="mr-4 hover:text-indigo-600"
            />
          </Link>
          <Link href="https://github.com/ashabuljannat">
            <BiLogoGithub size="20px" className="mr-4 hover:text-black" />
          </Link>
          <Link href="https://www.facebook.com/ashabuljannat.alif.14">
            <BiLogoFacebook size="20px" className="mr-4 hover:text-sky-800" />
          </Link>
        </span>
      </footer>
    </>
  );
};

export default Footer;
