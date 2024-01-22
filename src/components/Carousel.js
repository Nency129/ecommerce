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
      url: "https://i.pinimg.com/originals/e8/01/cf/e801cff3c232eafc15749f7c8c67fe6f.jpg",
    },
    {
      url: "https://tse4.mm.bing.net/th?id=OIP.QBOn3RO-zdaOlwlgLwKJmwHaFE&pid=Api&P=0&h=180",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.NBSsm18jp95qSJG2ZBFd5wHaEm&pid=Api&P=0&h=180",
    },
    {
      url: "https://wallpapercave.com/wp/wp6326114.jpg",
    },
  ];
  return (
    <div className="max-w-[1000px] h-[385px] m-w-full m-auto p-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-contain bg-center bg-no-repeat duration-500"
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
