import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import CartWidget from "../CartWidget/CartWidget";
import Logo from '@/assets/images/cortado.png';
import './navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static  md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );
   
  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-28 left-0 sm:mt-16 flex h-full flex-col gap-y-8  md:bg-transparent z-10 p-12 pt-12 font-bold md:flex md:flex-row md:gap-8 md:static"
    );
  };
  
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static  md:flex  md:h-auto  md:gap-4 md:p-0 "
    );
  };


  return (
    <>
      <nav>
        <div className="flex items-center bg-black px-4 text-blue-500  md:justify-between">
          <NavLink to="/" className="mr-auto md:mr-0">
            <img src={Logo} alt="Logo ifons-up" className="mt-3 mb-3 w-28  " />
          </NavLink>
          <button className="pr-8 md:hidden" onClick={handleOpenMenu}>
            <AiOutlineMenu className="open" />
          </button>

          <ul className={navClass}>
            <li>
              <button className="close md:hidden" onClick={handleCloseMenu}>
                <AiOutlineClose className="close" />
              </button>
            </li>
            <li>
              <NavLink
                to="/categoria/iphone"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                iPhone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categoria/Samsung"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Samsung
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categoria/Huawei"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Huawei
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categoria/Motorola"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Motorola
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categoria/Otros"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Otros
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "text-blue-500"
            }
          >
            <CartWidget/>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
