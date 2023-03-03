import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCartContext } from "@/context/CartContext";
import Logo from "@/assets/images/cortado.png";
import "./navbar.css";

const Navbar = () => {
  const { totalQuantity } = useCartContext();

  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static  md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-28 left-0 sm:mt-16 flex h-full flex-col gap-y-8 z-10 bg-white  md:bg-transparent z-10 p-12 pt-12 font-bold md:flex md:flex-row md:gap-8 md:static"
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
                <AiOutlineClose className="close font-bold text-purple-700 " />
              </button>
            </li>
            <li>
              <NavLink
                to="/category/iphone"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                iPhone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Samsung"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Samsung
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Huawei"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Huawei
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Motorola"
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : "text-blue-500"
                }
              >
                Motorola
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/category/Otros"
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
            <AiOutlineShoppingCart className=" relative text-2xl " />
            <span className="absolute top-8 right-4 rounded-full bg-purple-700 px-1 text-sm font-bold text-blue-400">
              {totalQuantity()}
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
