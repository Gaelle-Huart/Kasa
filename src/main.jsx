import React from "react";
import DOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

import Layout from "./Layout";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Rental from "./pages/Rental.jsx";
import Error from "./pages/Error.jsx";


DOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:id" element={<Rental />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)