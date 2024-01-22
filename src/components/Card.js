import React from "react";
import girl from "../assets/gir.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

function cart() {
  return (
    <div class="max-w-[300px] rounded overflow-hidden shadow-lg bg-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
      <img
        className="h-52"
        src={girl}
        alt="image"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit ame
        </p>
      </div>
      <div class="px-6  pb-2">
      <FontAwesomeIcon icon={faIndianRupeeSign} className="h-2 w-2 pb-2"/>
        5000
        <button className="bg-red-700 px-2 py-1 text-white rounded-lg mx-2">Deal of the day</button>
      </div>
      <div class="px-6  pb-2">
      <FontAwesomeIcon icon={faStar} style={{color: "yellow",}}/>      
      <FontAwesomeIcon icon={faStar} style={{color: "yellow",}}/>      
      <FontAwesomeIcon icon={faStar} style={{color: "yellow",}}/>
      <FontAwesomeIcon icon={faStar} style={{color: "yellow",}}/>      
      <FontAwesomeIcon icon={faStarHalfStroke} style={{color: "yellow",}}/>
      </div>
    </div>
  );
}

export default cart;
