import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "../src/components/MobileNavigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/Slice";

function App() {
  const dispatch = useDispatch();

  const FetchTrendingData = async () => {
    try {
      const response = await axios.get(`/trending/all/week?language=en-US`);
      dispatch(setBannerData(response.data.results));
      // console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchTrendingData();
  }, []);

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
