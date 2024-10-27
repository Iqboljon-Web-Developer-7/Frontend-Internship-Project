import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = () => {
  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
