import CartWidget from "../CartWidget/CartWidget";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from '@/assets/images/cortado.png';
import { useState } from "react";
import './navbar.css';

const Navbar = () => {

  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static  md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );
   
  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full flex-col gap-y-8  md:bg-transparent p-8 font-bold md:flex md:flex-row md:gap-8 md:static bg-purple-300"
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
        <div className="container flex items-center bg-black px-4 text-blue-500  md:justify-between">
          <a href="#" className="mr-auto md:mr-0">
            <img src={Logo} alt="Logo ifons-up" className="mt-3 mb-3 w-28" />
          </a>
          <button className="pr-8 md:hidden" onClick={handleOpenMenu}>
            <AiOutlineMenu className="open" />
          </button>

          <ul className={navClass}>
            <li>
              <button
                className="close  mb-12 md:hidden"
                onClick={handleCloseMenu}
              >
                <AiOutlineClose className="close" />
              </button>
            </li>
            <li>
              <a href="#">iPhone</a>
            </li>
            <li>
              <a href="#">Samsung</a>
            </li>
            <li>
              <a href="#">Huawei</a>
            </li>
            <li>
              <a href="#">Motorola</a>
            </li>
            <li>
              <a href="#">Otros</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
