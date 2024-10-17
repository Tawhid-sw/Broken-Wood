import React, { useEffect, useState } from "react";
import logo from "../assets/images/wood.png";
import userIcon from "../assets/images/user.png";
import ExplorePage from "../pages/ExplorePage";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const navigate = useNavigate();

  const Navigation = [
    {
      lable: "Tv Shows",
      href: "/tv",
    },
    {
      lable: "Movies",
      href: "/movies",
    },
  ];

  useEffect(() => {
    navigate(`/search?q=${searchInput}`);
  }, [searchInput]);

  const handleSubmit = (submit) => {
    submit.preventDefault();
  };

  return (
    <header className="fixed top-0 left-0 justify-between w-full h-16 px-20 pt-4 bg-opacity-75 fx-row ">
      <div className="justify-between w-full fx-row">
        <div className="justify-start w-1/2 gap-4 fx-row">
          <Link
            to={"/"}
            className="grid grid-cols-[40px,1fr] grid-rows-[40px] items-center gap-2 text-xl font-Alegreya"
          >
            <img src={logo} width={40} alt="Logo" />
            BrokenWoood
          </Link>
          <nav className="justify-start w-full gap-3 fx-row">
            {Navigation.map((nav, index) => {
              return (
                <div>
                  <NavLink
                    key={nav.lable}
                    to={nav.href}
                    className={({ isActive }) =>
                      `px-2 py-2 font-medium transition-opacity duration-200 ease-in opacity-65 font-lg hover:opacity-100 ${
                        isActive && `opacity-100`
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
            className="px-4 py-[6px] bg-secondary rounded-3xl fx-row w-[25vw]"
          >
            <input
              type="text"
              placeholder="Search here..."
              className="w-full text-lg font-medium text-white bg-transparent outline-none placeholder:font-medium focus-within:outline-none focus-visible:outline-none"
              onChange={(s) => setSearchInput(s.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white ">
              <CiSearch strokeWidth={1} />
            </button>
          </form>
          <div className="flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-400 rounded-full cursor-pointer">
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
