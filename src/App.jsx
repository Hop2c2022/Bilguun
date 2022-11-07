import "./App.css";
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={Contact}></Route>
        <Route path="/login" element={Login}></Route>
        <Route path="/products" element={Products}></Route>
        <Route path="/services" element={Services}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
