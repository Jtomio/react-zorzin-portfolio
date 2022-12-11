import React from "react";
import imgHome from "../assets/img-home.png";

export default function Home() {
  return (
    <div id="home" className="h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-6 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Welcome</h2>
          <p className="lg:text-3xl text-white py-4 max-w-md">
            Hertfordshire based signwriter specialising in vehicle graphics and
            shop signs, providing anything from small graphics and decals to
            larger shop window.
            <br />
          </p>
        </div>
        <div>
          <img
            src={imgHome}
            alt="image home"
            className="lg:mx-10 rounded-2xl mx-auto w-2/3 md:flex-row"
          />
        </div>
      </div>
    </div>
  );
}
