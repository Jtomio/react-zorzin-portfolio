import React from "react";

import Service1 from "../assets/service1.jpeg";
import Service2 from "../assets/service2.jpeg";
import Service3 from "../assets/service3.jpeg";
import Service4 from "../assets/service4.jpeg";
import Service5 from "../assets/service5.jpeg";
import Service6 from "../assets/service6.jpeg";

export default function Services() {
  const Service = [
    {
      id: 1,
      src: Service1,
      text: "Vehicle plotting and stickers",
    },
    {
      id: 2,
      src: Service2,
      text: "Stickers of your business brand. styles and colors",
    },
    {
      id: 3,
      src: Service3,
      text: "We apply stickers on glass and apply stickers to make the glass frosted",
    },
    {
      id: 4,
      src: Service4,
      text: "Customize your desktop with high-quality plotting",
    },
    {
      id: 5,
      src: Service5,
      text: "Let your ideas flow through all environments.",
    },
    {
      id: 6,
      src: Service6,
      text: "Show your brand to the world",
    },
  ];

  return (
    <div
      id="services"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen justify-center text-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Services
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Service.map(({ id, src, text }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <h4 className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  {text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
