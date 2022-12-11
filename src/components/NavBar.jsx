import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import LogoZm from "../assets/logo-zm.svg";

export default function NavBar() {
  return (
    <div className="lg:justify-around md:justify-around md:flex md:items-center flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
      <div>
        <img
          src={LogoZm}
          alt="Zm Singns"
          className=" rounded-2xl  w-10/12 md:flex-row"
        />
      </div>

      <ul className="flex ">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-red-400 hover:scale-105 duration-200">
          <a href="https://www.instagram.com/signszm" target="_blank">
            <FaInstagram size={30} />
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-green-600 hover:scale-105 duration-200">
          <a
            href="https://wa.me/+447935923701?text=Hello!%20I%20would%20like%20a%20quote%20please.%20"
            target="_blank"
          >
            <BsWhatsapp size={30} />
          </a>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-blue-400 hover:scale-105 duration-200">
          <a href="mailto:zmsignsinfo@gmail.com" target="_blank">
            <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
