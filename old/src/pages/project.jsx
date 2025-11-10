// Step 1: Import React
import * as React from "react";
import { projectData, projectData1 } from "../components/data";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Layout from "./layout";

// Step 2: Define your component
const ProjectPage = ({ id, theme }) => {
  const [viewMore, setViewMore] = React.useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  // console.log(projectData);
  return (
    <Layout id={id} className="w-full flex flex-col px-5 md:px-28 py-10 ">
      <h1 className="mb-16 mt-20 text-4xl font-extrabold flex justify-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 mx-auto j align-middle items-center">
        {viewMore ? (
          <>
            {(theme === "dark" ? projectData : projectData1).map(
              (project, index) => (
                <div className=" project relative   h-64 ">
                  <div
                    key={index}
                    className={` rounded-xl border w-full h-full shadow-inner shadow-gray-100 ${
                      theme === "dark"
                        ? "  border-gray-400"
                        : "border-gray-300 "
                    }`}
                  >
                    <div className="">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-t-xl object-fill h-44 w-full"
                      />
                    </div>

                    <h2 className="font-bold px-5 py-6">{project.name}</h2>
                  </div>
                  <div className="info hidden px-5 py-5 bg-green-600 absolute h-full w-full z-10 top-0 rounded-lg">
                    <div className="flex justify-between mb-5">
                      <h2 className="font-bold">{project.name}</h2>
                      <div className="flex">
                        <Link
                          to={project.github}
                          target="-blank"
                          className="mr-4"
                        >
                          {theme === "dark" ? (
                            <StaticImage src="./../images/codelite.svg" />
                          ) : (
                            <StaticImage src="./../images/codedark.svg" />
                          )}
                        </Link>
                        <Link to={project.site} target="-blank">
                          {theme === "dark" ? (
                            <StaticImage src="./../images/linklite.svg" />
                          ) : (
                            <StaticImage src="./../images/linkdark.svg" />
                          )}
                        </Link>
                      </div>
                    </div>
                    <div>{project.about}</div>
                    <h1 className="font-bold mt-5">Stack used</h1>
                    <div>
                      {project.stack.map((stack, index) => (
                        <span className="first-letter:capitalize ">
                          {stack.toLocaleUpperCase()}
                          {index !== project.stack.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </>
        ) : (
          <>
            {(theme === "dark" ? projectData : projectData1)
              .slice(0, 6)
              .map((project, index) => (
                <div className=" project relative   h-64 ">
                  <div
                    key={index}
                    className={` rounded-xl border w-full h-full shadow-inner shadow-gray-100 ${
                      theme === "dark"
                        ? "  border-gray-400"
                        : "border-gray-300 "
                    }`}
                  >
                    <div className="">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-t-xl object-fill h-44 w-full"
                      />
                    </div>

                    <h2 className="font-bold px-5 py-6">{project.name}</h2>
                  </div>
                  <div className="info hidden px-5 py-5 bg-green-600 absolute h-full w-full z-10 top-0 rounded-lg">
                    <div className="flex justify-between mb-5">
                      <h2 className="font-bold">{project.name}</h2>
                      <div className="flex">
                        <Link
                          to={project.github}
                          target="-blank"
                          className="mr-4"
                        >
                          {theme === "dark" ? (
                            <StaticImage src="./../images/codelite.svg" />
                          ) : (
                            <StaticImage src="./../images/codedark.svg" />
                          )}
                        </Link>
                        <Link to={project.site} target="-blank">
                          {theme === "dark" ? (
                            <StaticImage src="./../images/linklite.svg" />
                          ) : (
                            <StaticImage src="./../images/linkdark.svg" />
                          )}
                        </Link>
                      </div>
                    </div>
                    <div>{project.about}</div>
                    <h1 className="font-bold mt-5">Stack used</h1>
                    <div>
                      {project.stack.map((stack, index) => (
                        <span className="first-letter:capitalize ">
                          {stack.toLocaleUpperCase()}
                          {index !== project.stack.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
      <div className="my-10 font-extrabold text-3xl text-green-600 hover:text-purple-100">
        {viewMore ? (
          <div
            className="flex justify-center w-full cursor-pointer"
            onClick={handleViewMore}
            onKeyDown={handleViewMore}
            role="button"
            tabIndex={0}
          >
            <span className="flex arrow hover:text-purple-100">
              <span className="self-center"> View Less</span>{" "}
              <StaticImage
                src="./../images/angledoubleup.svg"
                alt="arrow"
                className="up_less w-8 h-8 self-center"
              />{" "}
              <StaticImage
                src="./../images/angledoublepurple.svg"
                alt="arrow"
                className="up_more w-8 h-8 self-center"
              />{" "}
            </span>
          </div>
        ) : (
          <div
            className="flex justify-center w-full cursor-pointer"
            onClick={handleViewMore}
            onKeyDown={handleViewMore}
            role="button"
            tabIndex={0}
          >
            <span className="flex arrow">
              <span className="self-center mr-2"> View More</span>{" "}
              <StaticImage
                src="./../images/arrowdoubledown.svg"
                alt="arrow"
                className="up_less w-5 h-5 self-center"
              />
              <StaticImage
                src="./../images/arrowdownpurple.svg"
                alt="arrow"
                className="up_more w-5 h-5 self-center"
              />
            </span>
          </div>
        )}
      </div>
    </Layout>
  );
};

// Step 3: Export your component
export default ProjectPage;
