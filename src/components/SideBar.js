import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../data/sidebarData";

const SideBar = (props) => {
  const activelinks =
    "flex items-center gap-5 px-4 pt-3 pb-2.5 rounded-lg text-white bg-blue-600 text-md m-2";
  const normalLinks =
    "flex items-center gap-5 p-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 bg-indigo-100  hover:bg-indigo-50 m-2";

  return (
    <div className="flex flex-row ">

    <div className="mr-3  w-[400px]   h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  shadow-xl bg-neutral-50 ">
        <div className="w-full flex items-center justify-center mt-10 mb-9">
            <h1>داشبورد</h1>
        </div>
      {sidebarData.map((data) => (
        <NavLink
          to={`/${data.link}`}
          key={data.link}
          className={({ isActive }) =>
          isActive ? activelinks : normalLinks
        }
        >
          <span>{data.name}</span>
        </NavLink>
      ))}
    </div>
    {props.children}
    </div>
  );
};

export default SideBar;
