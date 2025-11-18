import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./pages/Header";
import Carousel from "./components/UI/Carousel";
import SingleCards from "./components/UI/SingleCards";
import CardsLayout from "./components/UI/CardsLayout";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { BrowserRouter as BR, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Header/>
   <Carousel />
   <CardsLayout/> */}
      <BR>
        <Header h1="HOME" h2="ABOUT" h3="GALLERY" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BR>
    </>
  );
}
