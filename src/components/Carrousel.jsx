import React, { useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://zorzin-img.vercel.app/assets/project1.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project2.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project3.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project4.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project5.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project6.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project7.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project8.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project9.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project10.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project11.png",
  },
  {
    url: "https://zorzin-img.vercel.app/assets/project12.png",
  },
];

export default function Carousel() {
  const [slide, setSlidde] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlidde(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlidde(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-t from-gray-800 to-black px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
}
