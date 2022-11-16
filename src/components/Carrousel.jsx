import React, { useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://www.instagram.com/p/CfjkbIlI1NO/",
  },
  {
    url: "https://www.instagram.com/p/CdTuqbfoKNe/",
  },
  {
    url: "https://www.instagram.com/p/CaKbVDsI03Z/",
  },
  {
    url: "https://www.instagram.com/p/CaKa5A7InA_/",
  },
  {
    url: "https://www.instagram.com/p/CZW8BmRIfDp/",
  },
  {
    url: "https://www.instagram.com/p/CZUKCB9IH_k/",
  },
  {
    url: "https://www.instagram.com/p/CYeLcH5Ibhk/",
  },
  {
    url: "https://www.instagram.com/p/CT9kWo5oej5/",
  },
  {
    url: "https://www.instagram.com/p/CTsPSIHok1r/",
  },
  {
    url: "https://www.instagram.com/p/CPi3AqrBFZk/",
  },
  {
    url: "https://www.instagram.com/p/CPNkIDIBOhC/",
  },
  {
    url: "https://www.instagram.com/p/CO7-MD2hMl3/",
  },
  {
    url: "https://www.instagram.com/p/COYbSJgJ_8G/",
  },
  {
    url: "https://www.instagram.com/p/COYaheXJ70Z/",
  },
  {
    url: "https://www.instagram.com/p/COYZXr8JQxc/",
  },
  {
    url: "https://www.instagram.com/p/COYZJavJcoU/",
  },
  {
    url: "https://www.instagram.com/p/COYY3gupR4S/",
  },
  {
    url: "https://www.instagram.com/p/COYYgZEpVvF/",
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
