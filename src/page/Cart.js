import React from "react";
import cart from "../assets/cart.jpeg";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
function Cart() {
  const navigate=useNavigate()
  const navigatetohome=()=>{
    navigate("/");
  }
  return (
    <div className="flex items-center justify-center h-[75vh] text-center">
      
    <div className="flex rounded-xl space-x-3 ">
      <img src={cart} alt="photo" />
      <div >
        <p className="font-bold text-2xl">Your cart is empty</p>
        <button className="bg-yellow-400 rounded-2xl px-3 py-2 font-medium" onClick={navigatetohome}>
          Keep Shopping
        </button>
      </div>
    </div>
    <div className="absolute top-0 right-0 m-5 space-y-3">
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
  );
}

export default Cart;
