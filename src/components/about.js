// Step 1: Import React
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { aboutData } from "./data";

// Step 2: Define your component
const AboutPage = ({ id, theme }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [openId, setOpenId] = React.useState(0);

  const handleOpen = (index) => {
    const isActive = index;
    const active = openId === index;
    setIsOpen(!isOpen);
    setOpenId(isActive);
    // console.log(isOpen, openId);
    if (active) {
      return setIsOpen(0);
    }
    setIsOpen(index);
  };

  return (
    <section id={id} className="w-full px-5 md:px-28  py-5">
      <h1 className="mb-16 mt-20 text-4xl font-extrabold flex justify-center">
        About Me
      </h1>

      <div className="">
        {aboutData.map((data, index) => (
          <div className=" border-b rounded h-auto  py-5 mb-5" key={index}>
            <div className=" py-5 flex justify-between">
              <p className={`font-extrabold text-lg ${openId=== index && "text-purple-100"}`}>{data.title}</p>
              <div>
                {theme === "dark" ? (
                  <>
                    {openId === index  ? (
                      <div
                        onClick={() => handleOpen(index)}
                        role="button"
                        tabIndex={index}
                        onKeyDown={() => handleOpen(index)}
                      >
                        <StaticImage
                          src="./../images/minusgreen.svg"
                          alt="minus"
                          className="h-5 w-5"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => handleOpen(index)}
                        role="button"
                        tabIndex={index}
                        onKeyDown={() => handleOpen(index)}
                      >
                        <StaticImage
                          src="./../images/pluslite.svg"
                          alt="plus"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {openId === index ? (
                      <div
                        onClick={() => handleOpen(index)}
                        role="button"
                        tabIndex={index}
                        onKeyDown={() => handleOpen(index)}
                      >
                        <StaticImage
                          src="./../images/minusgreen.svg"
                          alt="minus"
                          className="h-5 w-5"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => handleOpen(index)}
                        role="button"
                        tabIndex={index}
                        onKeyDown={() => handleOpen(index)}
                      >
                        <StaticImage
                          src="./../images/plusdark.svg"
                          alt="plus"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            {openId === index && (
              <div>
                <div className="h-auto">
                  <p className="text-center md:text-justify font-medium">{data.details}</p>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7  min-h-fit gap-2 pb-8">
                    {data.image.map((dataimg, index) => (
                      <div
                        key={index}
                        className={`border py-4 text-sm shadow-green-600 shadow-inner rounded-md flex flex-col justify-center items-center 
                    ${
                      theme === "dark"
                        ? "  border-gray-400 shadow-gray-200"
                        : " border-gray-300 shadow-gray-100 "
                    }`}
                      >
                        <div>
                          <img
                            src={dataimg.skillimg}
                            alt={dataimg.name}
                            className="w-10 h-10 "
                          />
                        </div>
                        <p className="text-center font-medium">{dataimg.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-8 justify-items-center">
                    {data.service.map((data, index) => (
                      <div
                        key={index}
                        className={`changeBg border changeBg px-4 py-8 text-sm shadow-green-600 shadow-inner rounded-md flex flex-col justify-center items-center  
                    ${
                      theme === "dark"
                        ? "  border-gray-400 shadow-gray-200"
                        : " border-gray-300 shadow-gray-100 "
                    }`}
                      >
                        <div className="bg_change bg-green-600 border-green-600 rounded-md w-20 h-20 flex justify-center items-center mb-8">
                          <img
                            src={data.image}
                            alt={data.title}
                            className="w-10 h-10 "
                          />
                        </div>
                        <p className="text-center mb-8 font-bold">{data.title}</p>
                        <p className="text-center font-medium">{data.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export const Head = () => {
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>;
};
// Step 3: Export your component
export default AboutPage;
