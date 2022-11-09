import "./App.css";
import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Post } from "./pages/Post";
import { BlogPost } from "./pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogposts" element={BlogPost} />
        <Route path="/posts" element={Post} />
        <Route path="/products" element={Products}></Route>
        <Route path="/services" element={Services}></Route>
        <Route path="/contacts" element={Contact} />
        <Route path="/login" element={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
