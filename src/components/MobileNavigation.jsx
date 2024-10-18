import React from "react";
import { NavLink } from "react-router-dom";
import { MobileNavigations } from "../contents/Navigation";

const MobileNavigation = () => {
  const classes = `text-3xl bottom-8 bg-yellow-400 border-4 border-[#1c1c1e] rounded-full`;
  return (
    <section className="fixed bottom-0 w-full h-16 px-4 py-2 bg-secondary md:hidden">
      <div className="justify-between fx-row">
        {MobileNavigations.map((nav, index) => {
          return (
            <NavLink key={nav.lable + "MobileNavigations"} to={nav.href}>
              {({ isActive }) => (
                <div className="gap-1 px-6 fx-col">
                  <p
                    className={`text-2xl fixed bottom-6 transition-all duration-300 p-2 ${
                      isActive ? classes : ""
                    }`}
                  >
                    {nav.icon}
                  </p>
                  <p
                    className={`text-sm font-semibold fixed bottom-1 ${
                      isActive ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {nav.lable}
                  </p>
                </div>
              )}
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
