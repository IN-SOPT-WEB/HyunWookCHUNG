import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Header />} />
        <Route path="/search/:username" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
