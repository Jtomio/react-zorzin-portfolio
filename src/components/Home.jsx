import React from "react";
import imgHome from "../assets/img-home.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div id="home" className="h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Wellcome
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            dolorum saepe eveniet aperiam reprehenderit nulla!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Services
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={imgHome}
            alt="image home"
            className=" rounded-2xl mx-auto w-2/3 md:flex-row"
          />
        </div>
      </div>
    </div>
  );
}
