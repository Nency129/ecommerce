import React from "react";
import Carousel from "./Carousel";
import vk from "../assets/vk.jpg";
import Card from "./Card";
function Main() {
  return (
    <div className="bg-black text-white rounded-lg lg:p-3 sm:p-0 min-w-full">
      <div className="grid lg:grid-cols-2 sm:grid-rows-1 gap-4">
        <div>
          <Carousel />
        </div>
        <div className="grid sm:grid-cols-2 md:flex lg:grid-cols-2 gap-8">
          <div><Card/></div>
          <div><Card/></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-rows-1 lg:grid-cols-2">
          <div><Card/></div>
          <div><Card/></div>
        </div>
        <div>
          <img src={vk} alt="photos" className="max-h-[300px] mx-auto my-auto"/>
        </div>
      </div>
    </div>
  );
}

export default Main;
