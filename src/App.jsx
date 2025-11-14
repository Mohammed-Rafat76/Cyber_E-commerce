import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainlayOut from "./MainlayOut";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailes from "./pages/ProductDetailes";

export default function Hello() {
  return (
    <div className="w-full bg-white text-black ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainlayOut />}>
            <Route index element={<ProductPage />} />
            <Route path="product/:documentId" element={<ProductDetailes/>} />
            <Route path="cart" element={<CartPage/>} />
            <Route path="About" element={<ProductPage />} />
            <Route path="Contact-Us" element={<ProductPage />} />
            <Route path="Blog" element={<ProductPage />} />
          </Route>
          <Route path="*" element={<h1>404 error</h1>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
