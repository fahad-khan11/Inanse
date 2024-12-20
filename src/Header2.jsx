import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full bg-[#d1e3ff] p-1 lg:p-4">
      <div className="flex flex-row justify-between items-center w-full h-[60px]">
        <p className="text-xl md:text-3xl font-bold text-[#0355cc]">INANCE</p>
        <IoMdMenu
          className="text-4xl font-bold lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex flex-col items-center gap-4 mt-4 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          ContactUs
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex md:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-[#0355cc]" : "text-gray-700"}`
          }
        >
          ContactUs
        </NavLink>

<div className="flex justify-center items-center space-x-4 mt-4 lg:mt-0">
  {isAuthenticated ? (
    <button
      className="text-lg text-white bg-[#0355cc] hover:bg-[#023b8c] px-6 py-2 rounded-md transition duration-300"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  ) : (
    <button
      className="text-lg text-[#0355cc] bg-transparent border border-[#0355cc] hover:bg-[#0355cc] hover:text-white px-6 py-2 rounded-md transition duration-300"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )}
</div>

      </div>
    </div>
  );
};

export default Header2;
