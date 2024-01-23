import React, { useState } from "react";
import "./Filter.css";
export default function Filter({ isOpen, onClose }) {
  return (
    <div className={`side-drawer ${isOpen ? "open" : ""}`}>
        <div className=" p-4 text-white cursor-pointer ">
          <p className="font-semibold my-3">Apply filters</p>
          <div className="hover:text-blue-400">T-Shirts & Polos</div>
          <div className="hover:text-blue-400">Shirts</div>
          <div className="hover:text-blue-400">Jeans</div>
          <div className="hover:text-blue-400">Suits & Blazers</div>
          <div className="hover:text-blue-400">Sunglasses & Spectacle Frames</div>
          <div className="hover:text-blue-400">Shorts</div>
          <div className="hover:text-blue-400">Sportswear</div>
          <div className="hover:text-blue-400">Innerwear</div>
          <div className="hover:text-blue-400">Rainwear</div>
          <div className="hover:text-blue-400">Accessories</div>
          <div className="hover:text-blue-400">Ethnic Wear</div>
          <div className="hover:text-blue-400">Trousers</div>
        </div>
        <button className="absolute bottom-0 right-0 bg-red-600 rounded-lg px-2 py-1 text-white m-4" onClick={onClose}>
        Close
      </button>
      </div>
  );
}
