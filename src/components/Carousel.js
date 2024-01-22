import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevslide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextslide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slides = [
    {
      url: "https://wallpapertag.com/wallpaper/full/b/1/3/631837-beautiful-scenery-wallpapers-2880x1800-htc.jpg",
    },
    {
      url: "https://wallpapercave.com/wp/WIKDCoh.jpg",
    },
    {
      url: "http://getwallpapers.com/wallpaper/full/b/c/d/257781.jpg",
    },
    {
      url: "http://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Fall-Scenery-Image.jpg",
    },
  ];
  return (
    <div className="max-w-[1000px] h-[300px] m-w-full m-auto p-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-cover bg-center duration-500"
      ></div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevslide}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextslide}      
      />
    </div>
  );
}

export default Carousel;
