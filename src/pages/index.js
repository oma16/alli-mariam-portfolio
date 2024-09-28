import * as React from "react";
import AboutPage from "../components/about.js";
import ProjectPage from "../components/Project.jsx";
import ContactPage from "../components/Contact.jsx";
import Social from "../components/social";
import { StaticImage } from "gatsby-plugin-image";
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import TypingEffect from "../components/typing.js";


const IndexPage = () => {
  const [theme, setTheme] = React.useState("dark");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // console.log(newTheme);
    if (typeof window !== 'undefined') {
      // Access localStorage here
      localStorage.setItem('theme-ui-color-mode', newTheme);
    }
    
    
  };

  React.useEffect(() => {
    
    setTheme(localStorage.getItem("theme-ui-color-mode"));
    
  }, []);
  if (typeof document !== "undefined") {
    if (theme === "dark") {
      document.body.className = "bg-gray-400 text-gray-100";
    } else {
      document.body.className = "bg-gray-300 text-gray-200";
    }
  }
  
  return (
    <main className="w-full ">
      <div
        className={`fixed shadow-2xl z-20 border-b py-5 flex w-full px-5 md:px-28 lg:px-28 justify-between  ${
          theme === "dark"
            ? "border-gray-100 bg-gray-400"
            : "border-gray-200 bg-gray-300"
        }`}
      >
        <div className={`md:hidden`}>
          <div
            onClick={handleMenuClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleMenuClick}
            className={theme === "dark" ? "flex" : "hidden"}
          >
            <StaticImage src="../images/menu.svg" alt="menu" />
          </div>

          <div
            onClick={handleMenuClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleMenuClick}
            className={theme === "dark" ? "hidden" : "flex"}
          >
            <StaticImage src="../images/menu-l.svg" alt="menu" />
          </div>
        </div>

        <div
          className={`flex fixed top-0 left-0 rounded-tr-lg rounded-br-lg flex-col md:flex-row md:static px-10 md:px-0 z-20 w-10/12 md:w-full md:justify-between md:items-center  ${
            theme === "dark"
              ? " md:bg-gray-400 bg-white text-gray-100"
              : " md:bg-gray-300 bg-white text-gray-100 md:text-gray-200"
          } ${isOpen ? "flex " : "hidden md:flex"}`}
        >
          <div
            onClick={handleMenuClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleMenuClick}
            className={`md:hidden self-end mt-8`}
          >
            <StaticImage src="../images/close.svg" alt="close" />
          </div>
          <Nav />
          <hr className="md:hidden flex mt-5 text-gray-300" />
          <Social
            theme={theme}
            className="relative my-16 inline-flex w-full items-center  justify-between  md:hidden"
          />
        </div>
        <div>
          <div
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleClick}
            className={theme === "dark" ? "flex" : "hidden"}
          >
            <StaticImage src="../images/icon-moon-m.svg" alt="moon" />
          </div>

          <div
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleClick}
            className={theme === "dark" ? "hidden" : "flex"}
          >
            <StaticImage src="../images/icon-sun.svg" alt="sun" />
          </div>
        </div>
      </div>

      <Social theme={theme} className="fixed hidden md:flex" />
      <section
        className="w-full px-5 md:px-28  pt-36 pb-10 active "
        id="home"
      >
        <div className="w-full flex mx-auto flex-col-reverse md:justify-between md:items-center md:flex-row  ">
          <div className=" md:w-1/2 xl:w-3/4 flex text-center md:text-justify flex-col justify-center md:justify-start">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-green-600">
              Hello,I'm
            </h1>

            <TypingEffect theme={theme}/>
            <p>
              Software Engineer creating innovative and efficient solutions.
              Proven expertise in full-stack development, with a keen eye for
              detail and a commitment to delivering high-quality code.
              Collaborative and staying up-to-date with emerging technologies.
            </p>
            <div className="w-full mt-5">
              <button
                className={`bg-green-600 hover:bg-purple-100 w-3/4 md:w-3/4 lg:w-3/5 xl:w-1/2 py-2 rounded-lg border-0 text-xl font-bold  ${
                  theme !== "dark" ? "text-gray-200" : "text-gray-300"
                }`}
              >
                <a href="static/Alli_Mariam_resume.pdf" download={`Alli_Mariam_resume.pdf`}>
                
                <span className="w-full flex justify-center">
                  {theme === "dark" ? (
                    <StaticImage
                      src="./../images/downloadlite.svg"
                      alt="download"
                      className="animate-bounce w-10 h-10 mr-1"
                    />
                  ) : (
                    <StaticImage
                      src="./../images/download.svg"
                      alt="download"
                      className="animate-bounce w-10 h-10 mr-1"
                    />
                  )}
                  <span className="self-center">Download CV</span>
                </span>
                </a>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <StaticImage
              src="../images/Alli Mariam.jpg"
              alt="profile-picture"
              className="rounded-full w-36 h-36 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
            />
          </div>
        </div>
      </section>

      <section id="about">
        <AboutPage id="about" theme={theme} />
      </section>
      <section id="project">
        <ProjectPage id="project" theme={theme} />
      </section>
      <section id="contact">
        <ContactPage id="contact" theme={theme} />
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <head>
    <title>Alli Mariam Portfolio</title>
  </head>
);
