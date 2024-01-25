import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changebg, setChangebg] = useState(false);

  const cart = useSelector((state: any) => state.cart)


  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setChangebg(true);
    } else {
      setChangebg(false);
    }
  };
  window.addEventListener("scroll", changeBackground);


  return (
    <nav className={`${changebg ? "bg-[#f1f1f1] dark:bg-[#1f2937] fixed w-full z-50": "bg-transparent"}`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-5 md:w-auto w-full flex justify-between">
            <Link to="/">
              <h1>Logo</h1>  
            </Link>
          
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li className="font-[600]">
            <Link to="/about" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li className="font-[600]">
            <Link to="/service" className="py-7 px-3 inline-block">
                Service
            </Link>
          </li>
          <li className="font-[600]">
            <Link to="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <li className="font-[600]">
            <Link to="/shop" className="py-7 px-3 inline-block">
              Shop
            </Link>
          </li>
          <li className="font-[600]">
            <Link to="/cart" className="py-7 px-3 inline-block">
              Cart
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
            <Link to="/cart">
             <div className="flex flex-row gap-2 items-center">
                
                  <p className="m-auto text-md font-[700]">{cart.cartTotalQuantity}</p>
          
                <FaShoppingCart />
             </div>
            </Link>
          
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-1 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="py-1 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="py-1 px-3 inline-block">
               Planning Service
            </Link>
          </li>
          <li>
            <Link to="/stocks" className="py-1 px-3 inline-block">
               Stocks
            </Link>
          </li>
          <li>
            <Link to="/forex" className="py-1 px-3 inline-block">
               Forex
            </Link>
          </li>
          <li>
            <Link to="/forex" className="py-1 px-3 inline-block">
              Blockchain
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-1 px-3 inline-block">
               Contact
            </Link>
          </li>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-1 flex justify-between items-center md:pr-0 pr-5 group">
              Financial
              <span className="text-xl md:hidden inline"></span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <FaAngleDown />
              </span>
            </h1>
            <div>
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="py-3">
                  <div
                    className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                  ></div>
                </div>
                <div className="bg-white p-2 flex flex-col gap-10">
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary">
                      Stock
                    </Link>
                  </li>
                  <li className="text-sm text-gray-600 my-2.5">
                    <Link to="/" className="hover:text-primary">
                      Stock
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <Link to="/cart">
             Cart 
            </Link>
            
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
