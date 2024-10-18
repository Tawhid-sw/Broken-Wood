import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "../src/components/MobileNavigation";

function App() {
  return (
    <main className="pb-14 lg:pb-0 ">
      <Header></Header>
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer></Footer>
      <MobileNavigation />
    </main>
  );
}

export default App;
