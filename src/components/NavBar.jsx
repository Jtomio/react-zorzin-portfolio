import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/signszm/",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:zmsignsinfo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Fone <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/+447935923701?text=Hello!%20I%20would%20like%20a%20quote%20please.%20",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-blue-600">
          ZM <span className=" text-white">signs</span>{" "}
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-blue-800 hover:scale-105 duration-200"
          ></li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, child, href }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 hover:bg-blue-800 ml-[-100px]  hover:ml-[-10px] duration-200 hover:rounded-md bg-gray-900"
              }
            >
              <a
                href={href}
                target="_blank"
                className="flex justify-between items-center w-full text-white"
              >
                <>{child}</>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
