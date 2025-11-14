import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { domain, userCart } from "../store";
import toast from "react-hot-toast";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";
import noImg from "../assets/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg";

export default function ProductDetailes() {
  const { addToCart } = userCart();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const endPoint = "/api/products" + params.documentId + "?populate=*";
    const url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        let final = res.data.data;
        setProduct(final);
      })
      .catch((err) => {
        navigate("*");
        console.log(err);
      });
  }, []);
  let newPrice = product.price;
  let sale = newPrice * (7 / 100);
  let lastPrice = product.price + sale;
  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="md:px-40 px-4 py-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-[50%] h-full">
            <img src={product.img ? domain + product.img.url : noImg} alt="" />
          </div>
          <div className="flex flex-col gap-9">
            <h1 className="text-[40px] font-bold">{product.name}</h1>
            <div className="flex gap-4 items-center">
              <p className="font-medium text-[32px] tracking-wider">
                {newPrice}$
              </p>
              <p className="font-normal text-[24px] text-[#A0A0A0] line-through ">
                {lastPrice}$
              </p>
            </div>
            <p>{product.Colores}</p>
            <button
              onClick={() => (
                addToCart({ ...product, qty: 1 }),
                toast.success("Added to cart!")
              )}
              className="btn btn-neutral w-full mb-8"
            >
              Add to cart
            </button>
            <div className="flex justify-center items-center gap-8 h-[56px] w-full">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[#F6F6F6]  h-[56px] w-[56px] flex justify-center items-center rounded-[7px]">
                  <CiDeliveryTruck className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <h1 className="font-medium text-[14px] text-[#717171]">
                    Free Delivery <br />{" "}
                    <span className="text-black">1-2 day</span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[#F6F6F6]  h-[56px] w-[56px] flex justify-center items-center rounded-[7px]">
                  <MdOutlineHome className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <h1 className="font-medium text-[14px] text-[#717171]">
                    In Stock <br /> <span className="text-black">Today</span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-[#F6F6F6]  h-[56px] w-[56px] flex justify-center items-center rounded-[7px]">
                  <MdOutlineGppGood className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <h1 className="font-medium text-[14px] text-[#717171]">
                    Guaranteed <br /> <span className="text-black">1 year</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
