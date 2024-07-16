import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { navbarElements } from "../dummy-data/navbarElemenets";

function Navigation() {
  const [active, setActive] = useState();
  const [navbarElement, setNavbarElement] = useState(navbarElements);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-row justify-center border-b-2 bg-slate-50 fixed top-0 z-10 py-2 w-full ">
      <div className="flex flex-col justify-center  sm:w-full">
        <div className="flex flex-row justify-around gap-5 sm:hidden">
          {navbarElement.map((element, index) => {
            return (
              <NavLink to={`${element.path}`} key={index}>
                <div
                  key={index}
                  className={`${responsiveClass} ${hover} m-2 p-2 text-lg  ${
                    element.path === "/propose"
                      ? "border-2 border-black border-dotted  /40"
                      : "border-2 border-transparent"
                  } ${active === index ? "  /80 rounded-lg p-2" : ""}`}
                  onClick={() => setActive(index)}
                >
                  {element.name}
                </div>
              </NavLink>
            );
          })}
        </div>
        <span
          className="hover:shadow-md hover:shadow-white self-center sm:self-start sm:px-5 sm:py-3 hidden sm:flex sm:gap-2  sm:font-bold"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu color="#59cae8" size="30px" /> Menü
        </span>
        <div className="hidden sm:block   z-10 w-full h-auto">
          {isSidebarOpen &&
            navbarElement.map((menu, index) => (
              <NavLink
                key={index}
                to={`${menu.path}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <div
                  key={index}
                  className="flex m-2 p-2 cursor-pointer text-white"
                >
                  {menu.name}
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
}

const responsiveClass = "md:text-xs sm:text-sm lg:text-md gap-2 ";
const hover = " /60 rounded-lg";

export default Navigation;
