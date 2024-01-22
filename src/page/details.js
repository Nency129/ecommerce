import React from "react";
import Carousel from "../components/Carousel";

function details() {
  return (
    <div>
      <Carousel />
      <p className="m-4 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex space-x-4">
        <button className="bg-yellow-500 px-2 py-1 rounded-3xl">
          add to cart
        </button>
        <button className="bg-yellow-500 px-2 py-1 rounded-3xl">
          add to wishlist
        </button>
      </div>
    </div>
  );
}

export default details;
