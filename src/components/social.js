import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Social = ({ theme, className }) => {
  return (
    <div className={className}>
      {theme === "dark" ? (
        <>
          <div className=" md:translate-y-32 lg:translate-y-40 md:translate-x-5 flex w-full flex-row items-center justify-between  md:flex-col">
            <Link
              href="https://www.linkedin.com/in/mariam-titilope-alli-281560177/"
              className="cursor-pointer"
            >
              <StaticImage
                src="../images/linkedin-svgrepo-com.svg"
                alt="linkedin"
                className="w-7 h-7 md:w-10 md:h-10 mb-8  md:mr-0"
              />
            </Link>

            <a href="https://github.com/oma16" className="cursor-pointer">
              <StaticImage
                src="../images/github-svgrepo-com.svg"
                alt="github"
                className="w-7 h-7 md:w-10 md:h-10 mb-8  md:mr-0"
              />
            </a>

            <a
              href="https://twitter.com/allimariam3"
              className="cursor-pointer"
            >
              <StaticImage
                src="../images/x-symbol.svg"
                alt="twitter-X"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>
            <a
              href="mailto:titioba95@gmail.com"
              className="cursor-pointer"
              // onmouseover="this.href=this.href.replace('@@','.')"
            >
              <StaticImage
                src="../images/email-9-svgrepo-com.svg"
                alt="mail"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="hidden absolute  md:translate-y-32 lg:translate-y-40 translate-x-5 md:flex flex-col">
            <a href="https://www.linkedin.com/in/mariam-titilope-alli-281560177/">
              <StaticImage
                src="../images/linkedin.svg"
                alt="linkedin"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>

            <a href="https://github.com/oma16">
              <StaticImage
                src="../images/github.svg"
                alt="github"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>
            <a href="https://twitter.com/allimariam3">
              <StaticImage
                src="../images/x.svg"
                alt="twitter-X"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>
            <a
              href="mailto:titioba95@gmail.com"
              // onmouseover="this.href=this.href.replace('@@','.')"
            >
              <StaticImage
                src="../images/email.svg"
                alt="mail"
                className="w-7 h-7 md:w-10 md:h-10 mb-8  md:mr-0"
              />
            </a>
          </div>
          <div className="md:hidden md:translate-y-32 lg:translate-y-44 md:translate-x-5 flex w-full flex-row items-center justify-between  md:flex-col">
            <a href="https://www.linkedin.com/in/mariam-titilope-alli-281560177/">
              <StaticImage
                src="../images/linkedin-svgrepo-com.svg"
                alt="linkedin"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>
            <a href="https://github.com/oma16">
              <StaticImage
                src="../images/github-svgrepo-com.svg"
                alt="github"
                className="w-7 h-7 md:w-10 md:h-10 mb-8 md:mr-0"
              />
            </a>
            <a href="https://twitter.com/allimariam3">
              <StaticImage
                src="../images/x-symbol.svg"
                alt="twitter-X"
                className="w-7 h-7 md:w-10 md:h-10 mb-8  md:mr-0"
              />
            </a>
            <a
              href="mailto:titioba95@gmail.com"
              // onmouseover="this.href=this.href.replace('@@','.')"
            >
              <StaticImage
                src="../images/email-9-svgrepo-com.svg"
                alt="mail"
                className="w-7 h-7 md:w-10 md:h-10 mb-8  md:mr-0"
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Social;
