import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { userCart } from "../store";
import OpenMenuModal from "./OpenMenuModal";
export default function Header() {
  const { value: userProduct } = userCart();
  return (
    <header className="bg-white w-full h-[88px] px-4 py-6 md:px-40 md:py-4 border-[#B5B5B5] border-b flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <div className="bg-[#FFFFFF] flex justify-between items-center gap-2">
          <img src={logo} alt="Logo" />
          <input
            className="hidden md:block bg-[#F5F5F5] h-[56px] rounded-[8px] p-4 "
            type="text"
            placeholder="Search"
          />
        </div>
        <nav className="hidden lg:flex items-center lg:gap-[25px] xl:gap-[52px]">
          <Link className="hover:text-yellow-400" to="/">Home</Link>
          <Link className="hover:text-yellow-400" to="/About">About</Link>
          <Link className="hover:text-yellow-400" to="/Contact-Us">Contact Us</Link>
          <Link className="hover:text-yellow-400" to="/Blog">Blog</Link>
          <Link className="hover:text-yellow-400" to="/login">Login/Registar</Link>
        </nav>
        <div className="hidden md:flex items-center gap-6  ">
          <CiHeart className="text-[32px] " />
          <Link to={'/Cart'}>
          <div className="relative">
          <IoCartOutline className="text-[32px] " />
          {userProduct.length != 0 && (
            <span className="w-[25px] absolute top-[-15px] right-[-20px] h-[25px] flex justify-center items-center rounded-[50%] bg-red-600 text-white ">
              {userProduct.length}
            </span>
          )}

          </div>
          </Link>
          <CiUser className="text-[32px] " />
        </div>
        <OpenMenuModal/>
      </div>
    </header>
  );
}
