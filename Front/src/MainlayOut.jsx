import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function MainlayOut() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
