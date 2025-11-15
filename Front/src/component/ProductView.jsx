import { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";
import { domain, selectCats } from "../store/index";


export default function ProductView() {
  const [product, setProduct] = useState([]);
  const { value } = selectCats();
  const [view, setView] = useState([]);
  const [activePage , setActivePage] =useState([1])
  const [totalProduct , setTotalProduct]=useState([0])
  const [pageSize , setPageSize] = useState([3])
   const [loaderIndex, setLoaderIndex] = useState(true);
  useEffect(() => {
    let endPoint = "/api/products?populate=*";
    let url = domain + endPoint;
    axios
      .get(url , {
        params:{
           pagination:{
              page : activePage,
              pageSize:pageSize,
            },
        }
      })
      .then((res) => {
        setProduct(res.data.data);
        setView(res.data.data);
        setTotalProduct(res.data.meta.pagination.total)
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activePage]);
  useEffect(() => {
    if (value) {
      let endPoint = `/api/categories/${value.documentId}`;
      let url = domain + endPoint;
      axios
        .get(url, {
          params: {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
        })
        .then((res) => {
          // setProduct(res.data.data)
          setView(res.data.data.products);
          console.log(res.data.data.product)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setView(product);
    }
  }, [value]);
  return (
    <div className="w-full ">
      <h1 className="text-[#6C6C6C] mb-6">
        Available Products: {totalProduct}
      </h1>
      <div className=" grow grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        {view.length ? (
          view.map((el) => <ProductCard key={el.documentId} product={el} />)
        ) : (
          <h1>There is no product here yet</h1>
        )}
      </div>
      <div className="w-full flex justify-center items-center p-3 content-center gap-3 border-t">
        <div className="join flex justify-center gap-2.5">
          <button disabled={activePage==1 && true} onClick={()=>(setActivePage(+activePage-1))} className="join-item btn" >«</button>
          <button className="join-item btn">Page {activePage}</button>
          <button disabled={activePage == Math.ceil(totalProduct / pageSize)? true : false} onClick={()=>{setActivePage(+activePage+1)}} className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
}
