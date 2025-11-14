import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { userCart } from "../store";
import { IoCartOutline } from "react-icons/io5";

export default function OpenMenuModal() {
  const { value: userProduct } = userCart();
  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_1").showModal()}>
        <IoMdMenu className="block md:hidden text-[40px] " />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <div className="flex flex-col gap-3.5 ">
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/"
            >
              {" "}
              Home{" "}
              <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5 " />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/About"
            >
              {" "}
              About{" "}
              <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/Contact-Us"
            >
              {" "}
              Contact Us{" "}
              <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/Blog"
            >
              {" "}
              Blog{" "}
              <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
            <Link
              className="group flex gap-1.5 items-center p-2 rounded-[6px] cursor-pointer hover:text-gray-500 "
              to="/login"
            >
              {" "}
              Login/Registar{" "}
              <GoArrowRight className="transition-transform duration-200 group-hover:translate-x-3.5" />
            </Link>
            <Link to={"/Cart"}>
              <div className="relative">
                <IoCartOutline className="text-[32px] " />
                {userProduct.length != 0 && (
                  <span className="w-[25px] absolute top-[-5px] right-[290px] h-[25px] flex justify-center items-center rounded-[50%] bg-red-600 text-white ">
                    {userProduct.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
