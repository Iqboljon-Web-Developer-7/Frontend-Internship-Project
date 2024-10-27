import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Pages;
