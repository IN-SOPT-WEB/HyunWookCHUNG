import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/search"} />} replace />
        <Route path="/search" element={<Header />} />
        <Route path="/search/:username" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
