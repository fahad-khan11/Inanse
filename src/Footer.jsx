import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0a0f43] flex flex-col justify-center items-center p-0 md:10  lg:p-20 gap-10 md:gap-20">
      <h1 className="text-white text-xl md:text-4xl font-semibold pt-10 md:pt-10 lg:pt-20">GET IN TOUCH</h1>

      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[90px] lg:h-[90px] rounded-full flex flex-col justify-center items-center bg-blue-700 transition-colors duration-500 hover:bg-orange-500">
          <FaLocationDot className="text-lg md:text-2xl lg:text-3xl text-white " />
        </div>
        <div className="flex flex-col md:flex-row items-center">
        <hr className="bg-white border-none w-[2px] h-[100px] md:w-[150px] lg:w-[250px] md:h-[2px]" />
       </div>

        <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[90px] lg:h-[90px] rounded-full flex justify-center items-center bg-blue-700 transition-colors duration-500 hover:bg-orange-500">
          <FaPhoneAlt className="text-lg md:text-2xl lg:text-3xl text-white" />
        </div>
        <div className="flex flex-col md:flex-row items-center">
        <hr className="bg-white border-none w-[2px] h-[100px] md:w-[150px] lg:w-[250px] md:h-[2px]" />
      </div>

        <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] lg:w-[90px] lg:h-[90px] rounded-full flex justify-center items-center bg-blue-700  transition-colors duration-500 hover:bg-orange-500">
          <FaMessage className="text-lg md:text-2xl lg-text-3xl text-white hover:text-white" />
        </div>
      </div>
    
    <div className="hidden md:flex flex-row gap-20">
    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <p className="text-white">+01234567898</p>
    <p className="text-white">demo@gmial.com</p>
    </div>

      <div className="">
        <h1 className=" text-xl md:text-4xl text-white font-semibold mb-6">FOLLOW US</h1>
        <div className="flex justify-center items-center flex-row w-[130px] h-[40px] md:w-[200px] md:h-[50px] bg-white gap-2 md:gap-4 ">
        <FaFacebook className=" text-xs md:text-2xl text-blue-600 hover:text-orange-500" />
        <FaTwitter className=" text-xs md:text-2xl text-blue-600 hover:text-orange-500" />
        <FaYoutube className=" text-xs md:text-2xl text-blue-600 hover:text-orange-500" />
        <FaInstagramSquare className="text-xs md:text-2xl text-blue-600 hover:text-orange-500" />
        </div>
      </div>

     <div className="flex flex-col justify-center items-center md:pb-8 gap-6">
     <hr className="w-[300px] md:w-[700px] lg:w-[1300px] border-t-2 text-white" />
     <p className="text-lg font-light md:text-xl md:font-medium text-white">© 2024 All Rights Reserved By Free Html Templates</p>
     </div>
    </div>
  );
};

export default Footer; 
