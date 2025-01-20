import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">Akash's Portfolio</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          {["Home", "About", "Works", "Blog"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleScroll(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <BsTwitterX size={20} fill="black" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-sharma-7007181b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-700"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
