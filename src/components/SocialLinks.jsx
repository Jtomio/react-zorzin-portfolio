import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/signszm/",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:zmsignsinfo@gmail.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: (
        <>
          Fone <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/+447935923701?text=Hello!%20I%20would%20like%20a%20quote%20please.%20",
      style: "rounded-tr-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 hover:bg-blue-800 ml-[-100px]  hover:ml-[-10px] duration-200 hover:rounded-md bg-gray-900" +
              " " +
              style
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
    </div>
  );
}
