import React from "react";
import Banner from "../components/Banner";
import { useSelector } from "react-redux";

const Home = () => {
  const bannerData = useSelector((state) => state.sliceData.bannerData);
  console.log("Banner Data : ", bannerData);
  return;
  <div>
    <Banner />
  </div>;
};

export default Home;
