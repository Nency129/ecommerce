import React from "react";
import menu from "../assets/menu.png";
import ms from "../assets/logo-ms.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex justify-between ">
      <div className="flex space-x-4">
        <div>
          <img src={menu} alt="logo" width={"28px"} />
        </div>
        <div className="lg:flex space-x-2 py-1 sm:hidden">
          <img src={ms} alt="logo" width={"20px"} style={{ height: "20px" }} />
          <p className="text-white font-semibold">Microsoft Start</p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-full flex my-auto space-x-2 px-4 lg:w-[45vw] py-2">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="py-1"
          style={{ color: "white" }}
        />
        <div className="text-gray-400 font-medium sm:hidden lg:block">
          Search the web
        </div>
      </div>

      <div className="flex space-x-3">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="h-6 w-6 "
          style={{ color: "white" }}
        />
        <FontAwesomeIcon
          icon={faBell}
          className="h-6 w-6"
          style={{ color: "white" }}
        />
        <FontAwesomeIcon
          icon={faUser}
          className="h-6 w-6"
          style={{ color: "white" }}
        />
      </div>
    </div>
  );
}

export default Header;
