import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faFilterCircleXmark,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const handleFilter = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };
  const navigate=useNavigate();

  const navigatetocart=()=>{
    navigate("/cart")
  }
  const navigatetohome=()=>{
    navigate("/")
  }

  return (
    <div className="flex justify-between mb-5">
      <div className="flex space-x-4">
        <div className="lg:flex space-x-2 py-1 sm:hidden">
          <p className="text-white font-semibold cursor-pointer" onClick={navigatetohome}>Ecommerce</p>
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
        <div className="group">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="h-6 w-6 "
            style={{ color: "white" }}
            onClick={navigatetocart}
          />
          <span className="hidden group-hover:block absolute top-[8%] right-32">
            view cart
          </span>
        </div>
        <div className="group">
          <FontAwesomeIcon
            icon={faBell}
            className="h-6 w-6"
            style={{ color: "white" }}
          />
          <span className="hidden group-hover:block absolute top-[8%] right-20">
            notification
          </span>
        </div>
        <div className="group">
          <FontAwesomeIcon
            icon={faUser}
            className="h-6 w-6"
            style={{ color: "white" }}
          />
          <span className="hidden group-hover:block absolute top-[8%] right-15">
            profile
          </span>
        </div>
        <div className="group">
          <FontAwesomeIcon
            icon={faFilterCircleXmark}
            className="h-6 w-6"
            style={{ color: "white" }}
            onClick={handleFilter}
          />
          <Filter isOpen={isSideDrawerOpen} onClose={handleFilter} />
          <span className="hidden group-hover:block absolute top-[8%] right-8">
            filter
          </span>
        </div>
      </div>
    </div>

  );
}

export default Header;
