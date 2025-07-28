import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { genarateRoutes } from "./Router/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>        
          {genarateRoutes()}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
