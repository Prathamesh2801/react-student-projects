import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Communication from "../pages/Communication";
import Header from "../pages/Header";
import Newsletter from "../components/Newsletter";

export default function RootLayout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Communication />} />
      </Routes>
      <Newsletter/>
    </BrowserRouter>
  );
}
