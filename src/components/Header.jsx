import React, { useEffect, useState } from "react";
import logo from "../assets/images/wood.png";
import userIcon from "../assets/images/user.png";
import ExplorePage from "../pages/ExplorePage";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { Navigation } from "../contents/Navigation";

const Header = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (submit) => {
    submit.preventDefault();
  };

  return (
    <header className="fixed top-0 left-0 justify-between w-full h-16 px-4 pt-4 bg-opacity-75 lg:px-20 fx-row ">
      <div className="justify-between w-full fx-row">
        <div className="justify-start w-1/2 gap-4 fx-row">
          <Link
            to={"/"}
            className="grid grid-cols-[40px,1fr] grid-rows-[40px] items-center gap-2 text-xl font-Alegreya"
          >
            <img src={logo} width={40} alt="Logo" />
            BrokenWoood
          </Link>
          <nav className="justify-start w-full gap-3 max-md:hidden fx-row">
            {Navigation.map((nav, index) => {
              return (
                <div key={nav.lable + index}>
                  <NavLink
                    key={nav.lable}
                    to={nav.href}
                    className={({ isActive }) =>
                      `px-2 py-2 font-medium transition-opacity duration-200 ease-in  font-lg hover:opacity-100 ${
                        isActive ? `opacity-100` : `opacity-65`
                      }`
                    }
                  >
                    {nav.lable}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>
        <div className="justify-end w-1/2 gap-3 ml-auto fx-row">
          <form
            onSubmit={handleSubmit}
            className="md:px-4 md:py-[6px] md:bg-secondary md:rounded-3xl fx-row md:w-[25vw]"
          >
            <input
              type="text"
              placeholder="Search here..."
              className="w-full text-lg font-medium text-white bg-transparent outline-none max-md:hidden placeholder:font-medium focus-within:outline-none focus-visible:outline-none"
              onChange={(text) => setSearchInput(text.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white max-md:p-2 max-md:bg-secondary max-md:rounded-full">
              <CiSearch strokeWidth={1} />
            </button>
          </form>
          <div
            className="flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-400 rounded-full cursor-pointer"
            title="Account"
          >
            <img
              src={userIcon}
              alt="user"
              className="object-cover transition-all duration-100 scale-50 active:scale-100"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
