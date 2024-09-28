import React, { useEffect } from "react";
import { Link } from "gatsby";

const navmenu = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#project",
    name: "Project",
  },
  {
    link: "#contact",
    name: "Contact",
  },
];
const Nav = () => {
  const [isActive, setIsActive] = React.useState(0);
  const [isActives, setIsActives] = React.useState("/");

  


  const handleLinkClick = (index, id) => {
    const isActive = index;
    const isActives = id;
    setIsActive(isActive);

    setIsActives(isActives);
    console.log(isActives, isActive);
  };


  return (
    <div className="flex flex-col md:flex-row  md:w-3/4 justify-between text-xl font-bold">
      {navmenu.map((nav, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row  md:w-3/4 justify-between text-xl font-bold"
        >
          <Link
            to={nav.link}
            className={`mb-8  md:mb-0 md:mt-0 cursor-pointer hover:text-purple-100 ${
              isActive === index || isActives === nav.link
                ? "visited:text-green-600 focus:text-green-600 active:text-green-600 underline underline-offset-[25px]"
                : "active:none"
            }`}
            tabIndex={index}
            onClick={() => handleLinkClick(index, nav.link)}
            onLoad={() => setIsActive(index)}
          >
            {nav.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nav;
