import React from "react";
import Carousel from "./Carousel";
import vk from "../assets/vk.jpg";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate=useNavigate()
  const navigatetodetails=()=>{
    navigate("/details")
  }
  return (
    <>
    <div className="bg-black text-white rounded-lg lg:p-3 sm:p-0 min-w-full">
      <div className="grid lg:grid-cols-2 sm:grid-rows-1 gap-4">
        <div>
          <Carousel />
        </div>
        <div className="grid sm:grid-cols-2 md:flex lg:grid-cols-2 gap-8">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-rows-1 lg:grid-cols-2">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <div className="group">
          <img
            src={vk}
            alt="photos"
            className="max-h-[300px] mx-auto my-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={navigatetodetails}
            className="hidden group-hover:block absolute top-[90%] -translate-y-[-50%] right-40 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;
