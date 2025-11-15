import { domain, increase, userCart } from "../store";
import noImg from "../assets/360_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg";
import { TiDeleteOutline } from "react-icons/ti";
import { useMemo } from "react";

export default function CartPage() {
  const { value: cartProduct, removeFromCart } = userCart();
  const { inc, dec, count } = increase();

  const cartTotal = useMemo(() => {
    return cartProduct.reduce((sum, el) => {
      const qty = Number(count[el.id] ?? 1);
      const price = Number(String(el.price).replace(/[^\d.-]/g, "")) || 0;
      return sum + price * qty;
    }, 0);
  }, [cartProduct, count]);
  return (
    <div className="px-4 py-10 md:px-40 ">
      <h1 className="font-normal text-2xl mb-10">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 ">
        <div className="flex flex-col w-full gap-4 ">
          {cartProduct.map((el) => (
            <div key={el.id} className="flex flex-col justify-center items-center">
              <div
                key={el.id}
                className=" w-full flex justify-center items-center"
              >
                <figure>
                  <img
                    src={el.img ? el.img.url : noImg}
                    className="w-[150px] h-[100px] mr-4"
                  />
                </figure>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-col w-[236px] md:w-[321px] gap-2">
                    <h2 className="card-title ">{el.name}</h2>
                    <p>{el.Colores}</p>
                    <p>#{el.id}</p>
                  </div>
                  <div className="flex md:flex-col">
                    <div className="flex items-center justify-center md:px-2 md:mb-6 order-2 md:order-1">
                      <p className="mr-6 font-normal text-2xl">${el.price}</p>
                      <TiDeleteOutline
                        onClick={() => removeFromCart(el.id)}
                        className="w-6 h-6 cursor-pointer"
                      />
                    </div>
                    <div className="flex gap-2.5 justify-center items-center order-1 md:order-2 mr-6 md:mr-0">
                      <button
                        onClick={() => dec(el.id)}
                        className="flex justify-center items-center w-8 h-8 text-2xl btn btn-neutral"
                      >
                        -
                      </button>
                      <span className="font-normal text-2xl">
                        {count[el.id] ?? 1}
                      </span>
                      <button
                        onClick={() => inc(el.id)}
                        className="flex justify-center items-center w-8 h-8 text-2xl btn btn-neutral"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-[0.3px] border-[#cacaca] w-full my-10"></div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col rounded-xl border py-14 md:py-14 px-4 md:px-16 border-[#EBEBEB]">
          <h1 className="font-bold text-[20px] text-[#111111] mb-10">
            Order Summary
          </h1>
          <div className="flex flex-col gap-8">
            <label htmlFor="code">
              <h1 className="font-normal mb-1.5 text-[14px] text-[#545454]">
                Discount code / Promo code
              </h1>
              <input
                type="text"
                name="code"
                placeholder="Code"
                className="w-full rounded-[7px] border-[0.5px] p-4 bg-[#FFFFFF] border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
              />
            </label>
            <label htmlFor="text">
              <h1 className="font-normal mb-1.5 text-[14px] text-[#545454]">
                Your bonus card number
              </h1>
              <div className="flex w-full">
                <input
                  className="w-full rounded-[7px] border-[0.5px] p-4 bg-[#FFFFFF] border-[#9F9F9F] focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                  name="text"
                  type="text"
                  placeholder="Enter Card Number"
                />
                <button className=" p-4 h-full btn rounded-md border border-[#000000] font-normal hover:bg-zinc-800/40 transition-all duration-150 easy-in-out">
                  Apply
                </button>
              </div>
            </label>

            <div className="flex flex-col">
              <h1 className="font-bold mb-5 text-[16px] text-[#000000]">
                Subtotal
              </h1>
              {cartProduct.map((el) => {
                const qty = Number(count[el.id] ?? 1);
                const price =
                  Number(String(el.price).replace(/[^\d.-]/g, "")) || 0;
                const subtotal = price * qty;
                return (
                  <div className="mb-5 flex justify-between">
                    <h1 className="font-medium text-[16px] text-[#545454]">
                      {el.name} * {qty}
                    </h1>
                    <span>${subtotal}</span>
                  </div>
                );
              })}

              <div className="flex justify-between">
                <h1 className="font-normal text-[16px] text-[#000000]">
                  Total
                </h1>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
