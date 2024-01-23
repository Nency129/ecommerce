import React from "react";
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Heels from "../components/Heel";
import Header from "../components/Header";

function details() {
  return (
    <div className="mx-auto my-auto p-10 bg-black">
      <Header />
      <div className="bg-gray-100 rounded-lg h-full">
        <Heels />
        <div className="m-3">
          <p className="font-bold ">Black high heels</p>
          <div className="flex items-center">
            <span className="font-semibold ">5</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
          </div>
          <div className="text-blue-300">400 ratings</div>
        </div>

        <div className="font-bold m-3 border-b-2 border-gray-500">
          item Details
        </div>
        <p className="m-4 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex space-x-4 m-4">
          <button className="bg-yellow-500 px-5 py-2 rounded-3xl">
            Add to cart
          </button>
          <button className="bg-yellow-500 px-5 py-2 rounded-3xl">
            Add to wishlist
          </button>
        </div>

        <div className="font-bold mt-3 mx-3 ">Reviews</div>
        <div className="flex justify-around">
          <div className="max-w-md  bg-white rounded-xl overflow-hidden shadow-md my-4">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* You can replace the image with the reviewer's avatar */}
                  <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                </div>
                <div className="ml-2">
                  <p className="text-lg font-semibold">author</p>
                  <p className="text-gray-500 text-sm">date</p>
                </div>
              </div>
              <div className="mt-2">
                {/* You can replace the rating with your own rating component */}
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident,
              </p>
            </div>
          </div>
          <div className="max-w-md  bg-white rounded-xl overflow-hidden shadow-md my-4">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* You can replace the image with the reviewer's avatar */}
                  <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                </div>
                <div className="ml-2">
                  <p className="text-lg font-semibold">author</p>
                  <p className="text-gray-500 text-sm">date</p>
                </div>
              </div>
              <div className="mt-2">
                {/* You can replace the rating with your own rating component */}
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident,
              </p>
            </div>
          </div>
          <div className="max-w-md  bg-white rounded-xl overflow-hidden shadow-md my-4">
            <div className="p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* You can replace the image with the reviewer's avatar */}
                  <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                </div>
                <div className="ml-2">
                  <p className="text-lg font-semibold">author</p>
                  <p className="text-gray-500 text-sm">date</p>
                </div>
              </div>
              <div className="mt-2">
                {/* You can replace the rating with your own rating component */}
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default details;
