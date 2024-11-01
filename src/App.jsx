import React, { useState } from "react";
import Calculadora from "./components/Calculadora";
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  

  return (
    <div>
      <Header/>
      <Calculadora/>
      <Footer/>
    </div>
  );
}
