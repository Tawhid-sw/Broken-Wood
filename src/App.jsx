// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header></Header>
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
