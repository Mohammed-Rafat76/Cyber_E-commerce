import logo2 from "../assets/Logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" w-full h-[814.8720092773438px] md:h-[504px] px-8  md:px-40 py-12 md:py-[104px] bg-[#121212] flex flex-col items-center md:items-start gap-6">
      <div className="container w-[309px] md:w-[1119px] h-[662.8720092773438px] md:h-[256px] flex flex-col md:flex-row justify-between">
        <div className="w-[100%] md:w-[384px] h-[86.87200164794922px] md:h-[94.87200164794922px] flex flex-col gap-4 items-center md:items-start">
          <img
            className="w-[65.39956665039062px] h-[22.87200164794922px] gap-2.5"
            src={logo2}
            alt="logo"
          />
          <p className="w-[100%] text-[14px] text-[#CFCFCF]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="w-[100%] md:w-[623px] h-[544px] md:h-[100%] flex flex-col md:flex-row justify-between">
          <div className="flex flex-col justify-between w-[100%] md:w-[295.5px] h-[256px] items-center md:items-start">
            <h1 className="w-[62px] h-[16px] font-bold text-[16px] text-[#CFCFCF]">
              Services
            </h1>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Bonus program</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Gift cards</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Credit and payment</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Service contracts</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Non-cash account</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Payment</p>
          </div>
          <div className="flex flex-col justify-between items-center md:items-start w-[100%] md:w-[295.5px] h-[256px]">
            <h1 className="w-[175px] h-[16px] font-bold text-[16px] text-[#CFCFCF]">
              Assistance to the buyer
            </h1>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Find an order</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Terms of delivery</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">
              Exchange and return of goods
            </p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">Guarantee</p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">
              Frequently asked questions
            </p>
            <p className="m-0 text-[14px] text-[#CFCFCF]">
              Terms of use of the site
            </p>
          </div>
        </div>
      </div>
      <div className="w-[173px] flex justify-between">
        <FaTwitter className="text-white" />
        <FaFacebookF className="text-white" />
        <FaTiktok className="text-white" />
        <FaInstagram className="text-white" />
      </div>
    </div>
  );
}
