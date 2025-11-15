import CategoryFillters from "../component/CategoryFillters";
import ProductView from "../component/ProductView";


export default function ProductPage() {
  return (
    <div className="w-full flex justify-center items-center p-5 md:py-10">
        <div className="container flex gap-8 flex-col md:flex-row items-start mx-auto max-w-screen-7xl">
            <CategoryFillters/>
            <ProductView/>
        </div>
    </div>
  )
}
