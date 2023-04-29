import "./App.css";
import Navbar from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
