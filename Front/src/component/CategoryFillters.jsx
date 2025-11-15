import axios from "axios";
import { useEffect, useState } from "react";
import { domain, selectCats } from "../store";

export default function CategoryFillters() {
  const [filters, setFelters] = useState([]);
  const {selectedCategory} = selectCats()
  useEffect(() => {
    axios
      .get(domain + '/api/categories')
      .then((res) => {
        setFelters(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);
  return (
    <div className="w-full md:w-[500px] lg:w-[254px] p-5">
      <div className="join w-full join-vertical">
        <div className="collapse collapse-arrow join-item w-full bg-white ">
          <input type="checkbox" name="my-accordion-4" />
          <div className="collapse-title font-medium text-[18px] border-b-[0.5px] border-[#B5B5B5]">
            Categories
          </div>
          <div className="w-full collapse-content text-sm flex flex-col gap-2.5 mt-2 p-0">
            <input
              type="search"
              placeholder="Search items"
              className="input w-full bg-[#F5F5F5]"
            />

            {filters.map((el, index) => (
              <div className="w-full flex gap-3" key={index}>
                <label className="flex gap-3">
                  <input
                    type="radio"
                    name="cats"
                    onClick={()=>selectedCategory(el)}
                    className="checkbox checkbox-neutral"
                    id={"ch" + index}
                  />
                  {el.name}
                </label>
              </div>
            ))}
            <button onClick={()=>selectedCategory(null)} className="btn btn-neutral w-full">Reset Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}
